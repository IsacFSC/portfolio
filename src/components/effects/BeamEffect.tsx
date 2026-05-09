// components/effects/BeamEffect.tsx
'use client';
import { motion } from 'framer-motion';

interface BeamEffectProps {
  className?: string;
  delay?: number;
}

export function BeamEffect({ className = '', delay = 0 }: BeamEffectProps) {
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`}
    >
      <motion.div
        className="via-clay absolute h-px w-32 bg-gradient-to-r from-transparent to-transparent"
        animate={{ x: ['-100%', '300%'], opacity: [0, 1, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay,
          ease: 'linear',
          repeatDelay: 4,
        }}
      />
    </div>
  );
}
