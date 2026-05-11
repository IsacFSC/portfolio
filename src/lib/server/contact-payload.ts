import { ContactLead, LeadService } from '@prisma/client';

type ServiceSlug =
  | 'landing-page'
  | 'institutional-site'
  | 'automation'
  | 'ai-agent'
  | 'other';

export type ContactLeadCreatedPayload = {
  event: 'contact.lead.created';
  version: 'v1';
  timestamp: string;
  data: {
    leadId: string;
    contact: {
      name: string;
      email: string;
      company?: string;
      message: string;
    };
    service: {
      code: LeadService;
      slug: ServiceSlug;
    };
    origin: {
      sourcePage?: string;
      referrer?: string;
      userAgent?: string;
      ipAddress?: string;
    };
    utm: {
      source?: string;
      medium?: string;
      campaign?: string;
      term?: string;
      content?: string;
    };
    submittedAt: string;
  };
};

function mapServiceToSlug(service: LeadService): ServiceSlug {
  const map: Record<LeadService, ServiceSlug> = {
    LANDING_PAGE: 'landing-page',
    INSTITUTIONAL_SITE: 'institutional-site',
    AUTOMATION: 'automation',
    AI_AGENT: 'ai-agent',
    OTHER: 'other',
  };

  return map[service];
}

export function buildContactLeadCreatedPayload(
  lead: ContactLead,
): ContactLeadCreatedPayload {
  return {
    event: 'contact.lead.created',
    version: 'v1',
    timestamp: new Date().toISOString(),
    data: {
      leadId: lead.id,
      contact: {
        name: lead.name,
        email: lead.email,
        company: lead.company ?? undefined,
        message: lead.message,
      },
      service: {
        code: lead.service,
        slug: mapServiceToSlug(lead.service),
      },
      origin: {
        sourcePage: lead.sourcePage ?? undefined,
        referrer: lead.referrer ?? undefined,
        userAgent: lead.userAgent ?? undefined,
        ipAddress: lead.ipAddress ?? undefined,
      },
      utm: {
        source: lead.utmSource ?? undefined,
        medium: lead.utmMedium ?? undefined,
        campaign: lead.utmCampaign ?? undefined,
        term: lead.utmTerm ?? undefined,
        content: lead.utmContent ?? undefined,
      },
      submittedAt: lead.createdAt.toISOString(),
    },
  };
}
