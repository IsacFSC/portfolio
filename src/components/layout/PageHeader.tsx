'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="relative px-6 py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl"
        >
          <h1 className="font-display text-cream text-5xl leading-[0.9] font-black tracking-tight md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {subtitle && (
            <p className="font-accent mt-8 text-xl leading-relaxed font-light text-white/90 italic md:text-2xl">
              {subtitle}
            </p>
          )}
          {/* Linha decorativa vintage usando a cor clay da paleta */}
          <div className="from-clay/60 mt-10 h-px w-24 bg-gradient-to-r to-transparent" />
        </motion.div>
      </div>
    </header>
  );
}
