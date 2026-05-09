'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { SpotlightCard } from '@/components/effects/SpotlightCard';
import { fadeUp, viewport } from '@/lib/motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Ferreira',
    role: 'CEO na TechSolutions',
    content:
      'A automação implementada pelo Studio reduziu nosso tempo de resposta em 70%. O ROI foi quase imediato.',
  },
  {
    name: 'Juliana Santos',
    role: 'Diretora de Marketing',
    content:
      'O design da nossa landing page superou todas as expectativas. A estética retro-futurista nos deu uma autoridade absurda.',
  },
  {
    name: 'Ricardo Mendes',
    role: 'Fundador da Alpha Agency',
    content:
      'O agente de IA é impecável. Parece que temos uma equipe inteira cuidando do triagem de leads 24 horas por dia.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-6">
      <SectionTitle
        eyebrow="Depoimentos"
        title="Quem confia no meu trabalho"
        center
        className="mb-16"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: i * 0.1 }}
          >
            <SpotlightCard className="h-full p-8">
              <Quote className="text-clay/20 mb-6" size={32} />
              <p className="mb-8 text-lg leading-relaxed text-white italic">
                {t.content}
              </p>
              <div>
                <p className="text-cream font-bold">{t.name}</p>
                <p className="font-mono text-xs font-bold tracking-widest text-white uppercase">
                  {t.role}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
