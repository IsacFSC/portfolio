import { ContactLead, LeadService } from '@prisma/client';

type N8nLeadPayload = {
  event: 'contact.lead.created';
  lead_id: string;
  created_at: string;
  lead: {
    name: string;
    email: string;
    company?: string;
    service: string;
    message: string;
  };
  context: {
    source_page?: string;
    referrer?: string;
    user_agent?: string;
    ip_address?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  };
};

function mapService(service: LeadService) {
  const labels: Record<LeadService, string> = {
    LANDING_PAGE: 'landing-page',
    INSTITUTIONAL_SITE: 'institutional-site',
    AUTOMATION: 'automation',
    AI_AGENT: 'ai-agent',
    OTHER: 'other',
  };

  return labels[service];
}

export function buildN8nPayload(lead: ContactLead): N8nLeadPayload {
  return {
    event: 'contact.lead.created',
    lead_id: lead.id,
    created_at: lead.createdAt.toISOString(),
    lead: {
      name: lead.name,
      email: lead.email,
      company: lead.company ?? undefined,
      service: mapService(lead.service),
      message: lead.message,
    },
    context: {
      source_page: lead.sourcePage ?? undefined,
      referrer: lead.referrer ?? undefined,
      user_agent: lead.userAgent ?? undefined,
      ip_address: lead.ipAddress ?? undefined,
      utm_source: lead.utmSource ?? undefined,
      utm_medium: lead.utmMedium ?? undefined,
      utm_campaign: lead.utmCampaign ?? undefined,
      utm_term: lead.utmTerm ?? undefined,
      utm_content: lead.utmContent ?? undefined,
    },
  };
}

export async function sendLeadToN8n(payload: N8nLeadPayload) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    return {
      ok: false,
      status: 0,
      error: 'N8N_WEBHOOK_URL não configurada',
    };
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (process.env.N8N_WEBHOOK_SECRET) {
    headers['x-webhook-secret'] = process.env.N8N_WEBHOOK_SECRET;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        error: `Webhook n8n retornou status ${response.status}`,
      };
    }

    return {
      ok: true,
      status: response.status,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      error:
        error instanceof Error ? error.message : 'Falha ao enviar para n8n',
    };
  }
}
