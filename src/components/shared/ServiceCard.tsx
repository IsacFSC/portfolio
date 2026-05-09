// components/shared/ServiceCard.tsx
'use client';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/effects/SpotlightCard';
import { fadeUp, viewport } from '@/lib/motion';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ delay: index * 0.08 }}
    >
      <SpotlightCard className="group hover:border-clay/30 flex h-full cursor-default flex-col gap-5 p-7 transition-all duration-300">
        {/* Ícone com glow */}
        <div className="bg-clay/10 border-clay/20 relative flex h-12 w-12 items-center justify-center rounded-xl border">
          <Icon size={22} className="text-clay" />
          <div className="bg-clay/5 absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-cream text-lg font-bold">
            {service.title}
          </h3>
          <p className="font-body text-sm leading-relaxed text-white">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="border-clay/30 bg-clay/10 rounded-full border px-3 py-1 font-mono text-[11px] font-medium text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
