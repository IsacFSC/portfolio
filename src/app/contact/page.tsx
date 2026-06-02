// app/contact/page.tsx
import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { SectionTitle } from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'Contato | Studio',
  description: 'Vamos conversar sobre o seu projeto digital.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 pt-24 pb-0">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
        {/* Lado esquerdo — info */}
        <div className="lg:block lg:pt-32 lg:pr-18">
          <SectionTitle
            eyebrow="Contato"
            title="Vamos construir algo incrível juntos."
            subtitle="Conte sobre o seu projeto e eu retorno em até 24 horas com uma proposta."
            className="text-center"
          />
          <div className="mt-10 space-y-5 text-center">
            {[{ label: 'Resposta', value: 'Até 24 horas úteis' }].map(
              ({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-clay/60 font-mono text-xs tracking-[0.25em] uppercase">
                    {label}
                  </span>
                  <span className="font-body text-sand/70 text-sm">
                    {value}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Formulário */}
        <ContactForm />
      </div>
    </main>
  );
}
