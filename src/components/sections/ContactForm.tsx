// components/sections/ContactForm.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { SpotlightCard } from '@/components/effects/SpotlightCard';
import { Button } from '@/components/ui/Button';
import { fadeUp } from '@/lib/motion';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // substituir por fetch real
    setLoading(false);
    setSent(true);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <SpotlightCard className="p-7 md:p-9">
        {sent ? (
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
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="text-clay/60 font-mono text-[11px] tracking-[0.25em] uppercase"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  required={id !== 'company'}
                  className="font-body text-cream placeholder:text-sand/30 focus:border-clay/50 focus:ring-clay/20 h-11 w-full rounded-lg border border-[rgba(183,116,102,0.2)] bg-[rgba(183,116,102,0.04)] px-4 text-sm transition-colors focus:ring-1 focus:outline-none"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="service"
                className="text-clay/60 font-mono text-[11px] tracking-[0.25em] uppercase"
              >
                Serviço de interesse
              </label>
              <select
                id="service"
                className="font-body text-sand/80 focus:border-clay/50 focus:ring-clay/20 h-11 w-full rounded-lg border border-[rgba(183,116,102,0.2)] bg-[rgba(183,116,102,0.04)] px-4 text-sm transition-colors focus:ring-1 focus:outline-none"
              >
                <option value="">Selecione um serviço</option>
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
                className="text-clay/60 font-mono text-[11px] tracking-[0.25em] uppercase"
              >
                Conte sobre seu projeto
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Descreva o que você precisa, prazo e orçamento estimado..."
                required
                className="font-body text-cream placeholder:text-sand/30 focus:border-clay/50 focus:ring-clay/20 w-full resize-none rounded-lg border border-[rgba(183,116,102,0.2)] bg-[rgba(183,116,102,0.04)] p-4 text-sm transition-colors focus:ring-1 focus:outline-none"
              />
            </div>

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
