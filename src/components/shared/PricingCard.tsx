'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PricingPlan } from '@/types';
import { SpotlightCard } from '@/components/effects/SpotlightCard';
import { Button } from '@/components/ui/Button';
import { fadeUp, viewport } from '@/lib/motion';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
    >
      <SpotlightCard
        className={`flex h-full flex-col p-8 ${
          plan.highlighted ? 'border-clay/50 ring-clay/30 ring-1' : ''
        }`}
      >
        {plan.highlighted && (
          <div className="bg-clay absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
            Popular
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-cream mb-2 text-xl font-bold">{plan.name}</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold text-white">{plan.price}</span>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            {plan.description}
          </p>
        </div>

        <ul className="mb-8 flex-1 space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="text-clay mt-0.5 shrink-0" size={16} />
              <span className="text-sm text-white/90">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={plan.highlighted ? 'primary' : 'secondary'}
          className="w-full"
        >
          {plan.cta}
        </Button>
      </SpotlightCard>
    </motion.div>
  );
}
