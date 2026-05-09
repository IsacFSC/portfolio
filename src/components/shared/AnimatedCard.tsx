'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewport } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
      className={cn(
        'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
