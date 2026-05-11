import { LeadService } from '@prisma/client';
import { z } from 'zod';

const emptyToUndefined = (value: unknown) => {
  if (typeof value !== 'string') {
    return value;
  }

  const normalized = value.trim();
  return normalized.length === 0 ? undefined : normalized;
};

export const contactRequestSchema = z
  .object({
    name: z.string().trim().min(2).max(120),
    email: z.string().trim().toLowerCase().email().max(180),
    company: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(120).optional(),
    ),
    service: z.nativeEnum(LeadService),
    message: z.string().trim().min(10).max(5000),
    website: z.preprocess(emptyToUndefined, z.string().max(0).optional()),
    sourcePage: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(300).optional(),
    ),
    referrer: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(500).optional(),
    ),
    utmSource: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(120).optional(),
    ),
    utmMedium: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(120).optional(),
    ),
    utmCampaign: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(180).optional(),
    ),
    utmTerm: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(120).optional(),
    ),
    utmContent: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(180).optional(),
    ),
  })
  .strict();

export type ContactRequestInput = z.infer<typeof contactRequestSchema>;
