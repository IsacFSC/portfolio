// components/sections/ContactForm.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { SpotlightCard } from '@/components/effects/SpotlightCard';
import { Button } from '@/components/ui/Button';
import { fadeUp } from '@/lib/motion';

type SubmissionState = {
  sent: boolean;
  error: string | null;
};

const serviceMap = {
  'landing-page': 'LANDING_PAGE',
  site: 'INSTITUTIONAL_SITE',
  automation: 'AUTOMATION',
  'ai-agent': 'AI_AGENT',
  other: 'OTHER',
} as const;

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({
    sent: false,
    error: null,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmission({ sent: false, error: null });
    setLoading(true);

    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);

    const params = new URLSearchParams(window.location.search);

    const serviceRaw = String(formData.get('service') || 'other');
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      company: String(formData.get('company') || ''),
      service: serviceMap[serviceRaw as keyof typeof serviceMap] ?? 'OTHER',
      message: String(formData.get('message') || ''),
      website: String(formData.get('website') || ''),
      sourcePage: window.location.pathname,
      referrer: document.referrer || '',
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
      utmTerm: params.get('utm_term') || '',
      utmContent: params.get('utm_content') || '',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Falha no envio da mensagem.');
      }

      setSubmission({ sent: true, error: null });
      formElement.reset();
    } catch {
      setSubmission({
        sent: false,
        error: 'Não foi possível enviar agora. Tente novamente em instantes.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <SpotlightCard className="p-7 md:p-9">
        {submission.sent ? (
          <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
            <CheckCircle size={40} className="text-clay" />
            <p className="font-display text-cream text-2xl">
              Mensagem enviada!
            </p>
            <p className="font-body text-sand/60 text-sm">
              Retorno em até 24 horas úteis.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {[
              {
                id: 'name',
                label: 'Nome',
                type: 'text',
                placeholder: 'Seu nome completo',
              },
              {
                id: 'email',
                label: 'E-mail',
                type: 'email',
                placeholder: 'seu@email.com',
              },
              {
                id: 'company',
                label: 'Empresa (opcional)',
                type: 'text',
                placeholder: 'Nome da empresa',
              },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} className="flex flex-col gap-1.5">
                <label
                  htmlFor={id}
                  className="text-amber-600 font-mono text-[11px] tracking-[0.25em] uppercase"
                >
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  className="font-body text-cream placeholder:text-disable focus:border-clay/50 focus:ring-clay/20 h-11 w-full rounded-lg border border-[rgba(183,116,102,0.2)] bg-[rgba(183,116,102,0.04)] px-4 text-sm transition-colors focus:ring-1 focus:outline-none"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="service"
                className="text-amber-600 font-mono text-[11px] tracking-[0.25em] uppercase"
              >
                Serviço de interesse
              </label>
              <select
                id="service"
                name="service"
                className="font-body text-cream focus:border-clay/50 focus:ring-clay/20 h-11 w-full rounded-lg border border-[rgba(183,116,102,0.2)] bg-stone-900 px-4 text-sm transition-colors focus:ring-1 focus:outline-none"
                defaultValue="other"
              >
                <option value="other">Selecione um serviço</option>
                <option value="landing-page">Landing Page</option>
                <option value="site">Site Institucional</option>
                <option value="automation">Automação</option>
                <option value="ai-agent">Agente de IA</option>
                <option value="other">Outro</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-amber-600 font-mono text-[11px] tracking-[0.25em] uppercase"
              >
                Conte sobre seu projeto
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Descreva o que você precisa, prazo e orçamento estimado..."
                className="font-body text-cream placeholder:text-disable focus:border-clay/50 focus:ring-clay/20 w-full resize-none rounded-lg border border-[rgba(183,116,102,0.2)] bg-stone-900 p-4 text-sm transition-colors focus:ring-1 focus:outline-none"
              />
            </div>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {submission.error && (
              <p className="font-body text-sm text-red-400">
                {submission.error}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={loading}
              icon={<Send size={15} />}
            >
              {loading ? 'Enviando...' : 'Enviar mensagem'}
            </Button>
          </form>
        )}
      </SpotlightCard>
    </motion.div>
  );
}
