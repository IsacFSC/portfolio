import { LeadService } from '@prisma/client';
import { z } from 'zod';
import { sanitizeInput } from '@/lib/server/security';

const emptyToUndefined = (value: unknown) => {
  if (typeof value !== 'string') {
    return value;
  }

  const normalized = value.trim();
  return normalized.length === 0 ? undefined : normalized;
};

const sanitizeString = (value: unknown): string => {
  if (typeof value !== 'string') {
    return '';
  }

  return sanitizeInput(value);
};

export const contactRequestSchema = z
  .object({
    name: z.string().trim().min(2).max(120).transform(sanitizeString),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email()
      .max(180)
      .transform(sanitizeString),
    company: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(120).transform(sanitizeString).optional(),
    ),
    service: z.nativeEnum(LeadService),
    message: z.string().trim().min(10).max(5000).transform(sanitizeString),
    website: z.preprocess(emptyToUndefined, z.string().max(0).optional()),
    sourcePage: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(300).transform(sanitizeString).optional(),
    ),
    referrer: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(500).transform(sanitizeString).optional(),
    ),
    utmSource: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(120).transform(sanitizeString).optional(),
    ),
    utmMedium: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(120).transform(sanitizeString).optional(),
    ),
    utmCampaign: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(180).transform(sanitizeString).optional(),
    ),
    utmTerm: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(120).transform(sanitizeString).optional(),
    ),
    utmContent: z.preprocess(
      emptyToUndefined,
      z.string().trim().max(180).transform(sanitizeString).optional(),
    ),
  })
  .strict();

export type ContactRequestInput = z.infer<typeof contactRequestSchema>;
