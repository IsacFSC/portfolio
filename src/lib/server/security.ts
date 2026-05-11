import pino from 'pino';
import xss from 'xss';

export const logger = pino(
  {
    level: process.env.LOG_LEVEL ?? 'info',
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  process.env.NODE_ENV === 'production'
    ? pino.destination(1)
    : pino.transport({
        target: 'pino-pretty',
        options: {
          colorize: true,
          ignore: 'pid,hostname',
        },
      }),
);

const xssOptions = {
  whiteList: {},
  stripIgnoredTag: true,
  stripLeakage: true,
};

export function sanitizeInput(value: string): string {
  if (typeof value !== 'string') {
    return '';
  }

  const trimmed = value.trim();
  const cleaned = xss(trimmed, xssOptions);

  return cleaned;
}

export function logSecurityEvent(event: string, data: Record<string, unknown>) {
  logger.warn(
    {
      event,
      ...data,
      timestamp: new Date().toISOString(),
    },
    `[SECURITY] ${event}`,
  );
}
