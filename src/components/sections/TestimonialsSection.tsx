'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { TerminalCard } from '@/components/ui/TerminalCard';
import { fadeUp, viewport } from '@/lib/motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Evellyn Lopes',
    role: 'Nutricionista',
    content:
      'O serviço foi excepcional, redirecionamento do whatsapp. Atrairam muitos clientes para minha clínica e o design é simplesmente incrível.',
  },
  {
    name: 'Juliana Santos',
    role: 'Diretora de Marketing',
    content:
      'O design da nossa landing page superou todas as expectativas. A estética retro-futurista nos deu uma autoridade absurda.',
  },
  {
    name: 'Renato Silva',
    role: 'Personal Trainer',
    content:
      'Incrível! Ter meu próprio site me deu uma presença online profissional e aumentou significativamente meus clientes.',
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
            <TerminalCard className="h-full p-8">
              <Quote className="text-clay/20 mb-6" size={32} />
              <p className="text-primary mb-8 text-lg leading-relaxed italic">
                {t.content}
              </p>
              <div>
                <p className="text-primary font-bold">{t.name}</p>
                <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                  {t.role}
                </p>
              </div>
            </TerminalCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
