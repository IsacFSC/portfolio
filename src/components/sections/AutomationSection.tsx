'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { SpotlightCard } from '@/components/effects/SpotlightCard';
import { Bot, Zap, Workflow, MessageSquare } from 'lucide-react';
import { fadeUp, viewport } from '@/lib/motion';

const features = [
  {
    icon: Bot,
    title: 'Agentes Autônomos',
    desc: 'Sistemas de IA que executam tarefas complexas e tomam decisões baseadas no seu contexto de negócio.',
  },
  {
    icon: Workflow,
    title: 'Workflows Inteligentes',
    desc: 'Conectamos suas ferramentas favoritas (CRM, Slack, Sheets) para criar um ecossistema que trabalha sozinho.',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots de Elite',
    desc: 'Atendimento humanoide 24/7 capaz de qualificar leads e agendar reuniões sem intervenção humana.',
  },
  {
    icon: Zap,
    title: 'Performance Extrema',
    desc: 'Otimização de processos manuais lentos em fluxos digitais que processam dados em milissegundos.',
  },
];

export function AutomationSection() {
  return (
    <section className="container mx-auto px-6">
      <SectionTitle
        eyebrow="Inteligência"
        title="Automação que escala seu negócio"
        subtitle="Deixe a tecnologia pesada por nossa conta. Criamos fluxos de trabalho inteligentes que economizam centenas de horas mensais da sua equipe."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 text-white md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: i * 0.1 }}
          >
            <SpotlightCard className="h-full p-8">
              <feature.icon className="text-clay mb-6" size={32} />
              <h3 className="text-cream mb-3 text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-white">
                {feature.desc}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
