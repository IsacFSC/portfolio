// components/sections/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BeamEffect } from '@/components/effects/BeamEffect';
import { fadeUp, stagger } from '@/lib/motion';

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16">
      {/* Beam effects decorativos */}
      <BeamEffect className="top-1/3 left-1/4 w-48" delay={0} />
      <BeamEffect className="top-2/3 right-1/4 w-32" delay={2} />

      {/* Linha decorativa vintage */}
      <div className="via-clay/40 absolute top-24 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mx-auto max-w-5xl text-center"
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          className="border-clay/20 bg-clay/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
        >
          <Sparkles size={12} className="text-clay" />
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-white uppercase">
            Automação · IA · Web Profissional
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-cream text-5xl leading-[0.92] font-black md:text-7xl lg:text-8xl"
        >
          Sua presença
          <br />
          <em className="decoration-clay/30 text-white italic underline">
            digital premium
          </em>
          <br />
          começa aqui.
        </motion.h1>

        {/* Lead */}
        <motion.p
          variants={fadeUp}
          className="font-accent mx-auto mt-8 max-w-xl text-xl leading-relaxed font-light text-white italic"
        >
          Sites, landing pages e automações com IA que transformam visitantes em
          clientes — com identidade visual que se destaca.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight size={16} />}
            onClick={() => router.push('/projects')}
          >
            Ver meus projetos
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.push('/services')}
          >
            Conhecer serviços
          </Button>
        </motion.div>

        {/* Social proof rápida */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { value: '40+', label: 'projetos entregues' },
            { value: '98%', label: 'clientes satisfeitos' },
            { value: '3×', label: 'mais conversões' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-3xl font-bold text-white">
                {value}
              </p>
              <p className="font-body mt-0.5 text-xs font-medium text-white">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5 text-white/40"
        >
          <div className="to-sand/30 h-10 w-px bg-gradient-to-b from-transparent" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
            scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
