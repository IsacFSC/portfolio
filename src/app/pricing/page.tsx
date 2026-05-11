// app/pricing/page.tsx
import type { Metadata } from 'next';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { PricingCard } from '@/components/shared/PricingCard';
import { pricingPlans } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Preços | Studio',
  description:
    'Planos transparentes para sites, landing pages, automações e agentes de IA.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen px-6 pt-24 pb-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Investimento"
          title="Preços claros, resultado concreto."
          subtitle="Sem surpresas. Valor justo pelo impacto gerado."
          center
          className="mb-16"
        />
        <div className="grid gap-6 text-white md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
