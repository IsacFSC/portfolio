// components/shared/SectionTitle.tsx
'use client';
import { motion } from 'framer-motion';
import { fadeUp, viewport } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className={cn('max-w-2xl', center && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <p className="mb-4 font-mono text-xs font-bold tracking-[0.3em] text-white uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-cream text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="font-accent mt-4 text-lg leading-relaxed font-light text-white italic md:text-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
