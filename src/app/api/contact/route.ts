import { NextRequest, NextResponse } from 'next/server';
import { buildContactLeadCreatedPayload } from '@/lib/server/contact-payload';
import { prisma } from '@/lib/prisma';
import { contactRequestSchema } from '@/lib/validation/contact';
import { logSecurityEvent } from '@/lib/server/security';

export const runtime = 'nodejs';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;
const CLEANUP_INTERVAL_MS = 30 * 60 * 1000;

const ipRequestStore = new Map<string, number[]>();
let lastCleanup = Date.now();

function cleanupRateLimitStore() {
  const now = Date.now();

  if (now - lastCleanup < CLEANUP_INTERVAL_MS) {
    return;
  }

  const expiredIps: string[] = [];

  ipRequestStore.forEach((timestamps, ip) => {
    const validRequests = timestamps.filter(
      (t) => now - t < RATE_LIMIT_WINDOW_MS,
    );

    if (validRequests.length === 0) {
      expiredIps.push(ip);
    } else {
      ipRequestStore.set(ip, validRequests);
    }
  });

  expiredIps.forEach((ip) => ipRequestStore.delete(ip));
  lastCleanup = now;
}

function extractClientIp(request: NextRequest) {
  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0]?.trim();
  }

  const realIp = request.headers.get('x-real-ip');
  return realIp?.trim() || null;
}

function isRateLimited(ip: string, now: number) {
  cleanupRateLimitStore();

  const requests = ipRequestStore.get(ip) ?? [];
  const validRequests = requests.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (validRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestStore.set(ip, validRequests);
    return true;
  }

  validRequests.push(now);
  ipRequestStore.set(ip, validRequests);
  return false;
}

export async function POST(request: NextRequest) {
  const clientIp = extractClientIp(request) ?? 'unknown';
  const now = Date.now();

  if (isRateLimited(clientIp, now)) {
    logSecurityEvent('RATE_LIMIT_EXCEEDED', {
      clientIp,
      endpoint: '/api/contact',
    });

    return NextResponse.json(
      {
        success: false,
        error:
          'Muitas tentativas. Aguarde alguns minutos antes de tentar novamente.',
        code: 'RATE_LIMITED',
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)),
        },
      },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch (error) {
    logSecurityEvent('INVALID_JSON_PAYLOAD', {
      clientIp,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    return NextResponse.json(
      { success: false, error: 'Payload JSON inválido.', code: 'INVALID_JSON' },
      { status: 400 },
    );
  }

  const parsed = contactRequestSchema.safeParse(body);

  if (!parsed.success) {
    logSecurityEvent('VALIDATION_FAILED', {
      clientIp,
      errorCount: parsed.error.issues.length,
    });

    return NextResponse.json(
      {
        success: false,
        error: 'Dados inválidos. Verifique e tente novamente.',
        code: 'VALIDATION_ERROR',
        issues: parsed.error.issues.length,
      },
      { status: 422 },
    );
  }

  const input = parsed.data;

  if (input.website) {
    return NextResponse.json(
      { success: true, code: 'ACCEPTED' },
      { status: 202 },
    );
  }

  try {
    const lead = await prisma.contactLead.create({
      data: {
        name: input.name,
        email: input.email,
        company: input.company,
        service: input.service,
        message: input.message,
        sourcePage: input.sourcePage,
        referrer: input.referrer,
        userAgent: request.headers.get('user-agent'),
        ipAddress: clientIp,
        utmSource: input.utmSource,
        utmMedium: input.utmMedium,
        utmCampaign: input.utmCampaign,
        utmTerm: input.utmTerm,
        utmContent: input.utmContent,
      },
    });

    const payload = buildContactLeadCreatedPayload(lead);

    return NextResponse.json(
      {
        success: true,
        payload,
        code: 'CREATED',
      },
      { status: 201 },
    );
  } catch (error) {
    logSecurityEvent('DATABASE_ERROR', {
      clientIp,
      error: error instanceof Error ? error.message : 'Unknown error',
      email: input.email,
    });

    return NextResponse.json(
      {
        success: false,
        error:
          'Falha ao processar sua solicitação. Tente novamente em instantes.',
        code: 'SERVER_ERROR',
      },
      { status: 500 },
    );
  }
}
