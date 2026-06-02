'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Shield, Rocket, Palette, Code2 } from 'lucide-react';
import { fadeUp, viewport } from '@/lib/motion';

const differentials = [
  {
    icon: Palette,
    title: 'Design Exclusivo',
    desc: 'Cada projeto é uma obra de arte única, criada sob medida para refletir a identidade e os valores do seu negócio.',
  },
  {
    icon: Code2,
    title: 'Clean code e Arquitetura',
    desc: 'Desenvolvimento limpo, modular e escalável seguindo as melhores práticas de engenharia de software.',
  },
  {
    icon: Rocket,
    title: 'Foco em Conversão',
    desc: 'Landing pages e sites otimizados para que cada visitante tenha uma experiência única e relevante.',
  },
  {
    icon: Shield,
    title: 'Segurança e Estabilidade',
    desc: 'Seus dados seguros e seu negócio protegido.',
  },
];

export function DifferentialsSection() {
  return (
    <section className="container mx-auto px-1 lg:px-6">
      <div className="rounded-[40px] border border-[rgba(183,116,102,0.1)] bg-[rgba(183,116,102,0.03)] p-8 md:p-16">
        <SectionTitle
          eyebrow="Diferenciais"
          title="O padrão ouro do desenvolvimento"
          center
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {differentials.map((diff, i) => (
            <motion.div
              key={i}
              className="flex gap-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-clay/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                <diff.icon className="text-clay" size={24} />
              </div>
              <div>
                <h3 className="text-cream mb-2 text-xl font-bold">
                  {diff.title}
                </h3>
                <p className="text-base leading-relaxed text-white">
                  {diff.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
