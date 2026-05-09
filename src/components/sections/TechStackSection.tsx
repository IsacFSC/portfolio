'use client';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { MarqueeSection } from '@/components/shared/MarqueeSection';

export function TechStackSection() {
  return (
    <section className="overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Stack"
          title="Tecnologias de ponta"
          subtitle="Utilizo as ferramentas mais modernas do mercado para garantir performance, segurança e escalabilidade extrema."
          center
          className="mb-16"
        />
      </div>

      <MarqueeSection />
    </section>
  );
}
