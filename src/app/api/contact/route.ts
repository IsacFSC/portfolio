import { NextRequest, NextResponse } from 'next/server';
import { buildContactLeadCreatedPayload } from '@/lib/server/contact-payload';
import { prisma } from '@/lib/prisma';
import { contactRequestSchema } from '@/lib/validation/contact';

export const runtime = 'nodejs';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;

const ipRequestStore = new Map<string, number[]>();

function extractClientIp(request: NextRequest) {
  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0]?.trim();
  }

  const realIp = request.headers.get('x-real-ip');
  return realIp?.trim() || null;
}

function isRateLimited(ip: string, now: number) {
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
    return NextResponse.json(
      {
        success: false,
        error: 'Muitas tentativas. Tente novamente em alguns minutos.',
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
  } catch {
    return NextResponse.json(
      { success: false, error: 'Payload JSON inválido.' },
      { status: 400 },
    );
  }

  const parsed = contactRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: 'Dados inválidos para envio de contato.',
      },
      { status: 422 },
    );
  }

  const input = parsed.data;

  if (input.website) {
    return NextResponse.json({ success: true }, { status: 202 });
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
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Erro ao persistir contato:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Falha ao salvar contato no servidor.',
      },
      { status: 500 },
    );
  }
}
