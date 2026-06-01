// components/sections/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Terminal, Zap } from 'lucide-react';
import { TerminalGridBackground } from '@/components/effects/TerminalGridBackground';
import { ScanlineOverlay } from '@/components/effects/ScanlineOverlay';
import { fadeUp, stagger } from '@/lib/motion';
import { useEffect, useState } from 'react';

const roles = [
  'Full Stack Developer',
  'SaaS Engineer',
  'React Specialist',
  'AI Enthusiast',
];

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'NestJS',
  'PostgreSQL',
  'Prisma',
  'Stripe',
  'Jest',
  'Better Auth',
  'AWS',
  'Docker',
  'Tailwind',
];

export function HeroSection() {
  const router = useRouter();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Rotate roles
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setDisplayedText('');
      setIsTyping(true);
    }, 4000);

    return () => clearInterval(roleTimer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isTyping) return;

    const currentRole = roles[roleIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayedText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50); // 50ms per character = ~20 chars per second

    return () => clearInterval(typeInterval);
  }, [roleIndex, isTyping]);

  return (
    <section className="relative flex min-h-svh items-center justify-center px-4 py-16 sm:px-6 sm:py-24">
      <TerminalGridBackground />
      <ScanlineOverlay intensity="low" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mx-auto w-full max-w-4xl space-y-8"
      >
        {/* System Info Bar */}
        <motion.div
          variants={fadeUp}
          className="border-border-light bg-surface-300 flex items-center gap-2 rounded-xs border px-4 py-2"
        >
          <Terminal size={14} className="text-cyan-DEFAULT" />
          <span className="text-secondary font-mono text-xs">
            isac@portfolio ~ $
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="font-mono">
            <p className="text-secondary text-xs">
              <span className="text-accent-success">init</span>(
              <span className="text-cyan-DEFAULT">&apos;portfolio&apos;</span>)
            </p>
          </div>

          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-cyan-DEFAULT">$</span> isac freitas
          </h1>

          {/* Typewriter Role */}
          <div className="text-primary font-mono text-lg sm:text-xl lg:text-2xl">
            <span className="text-accent-success">&gt;</span> {displayedText}
            {isTyping && (
              <span className="animate-blink text-cyan-DEFAULT">_</span>
            )}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeUp} className="space-y-2">
          <p className="text-secondary font-mono text-sm">
            Aberto a oportunidades (Remoto ou Presencial)
          </p>
          <p className="text-tertiary font-mono text-xs">
            Especializado em construir aplicações SaaS escaláveis e soluções
            full-stack
          </p>
        </motion.div>

        {/* Tech Stack - Terminal Style */}
        <motion.div variants={fadeUp} className="space-y-2">
          <p className="text-secondary font-mono text-xs">
            <span className="text-accent-warning">[INFO]</span> stack: (
            <span className="text-accent-success">
              {technologies.slice(0, 5).join(', ')}
            </span>
            , ...)
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-xs border border-cyan-500/20 bg-cyan-500/5 px-2 py-1 font-mono text-xs text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons - Command Style */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <button
            onClick={() => router.push('/projects')}
            className="group text-primary flex items-center justify-center gap-2 rounded-xs border border-cyan-500/30 bg-cyan-500/5 px-6 py-3 font-mono text-sm transition-all hover:border-cyan-500/60 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span className="text-accent-success">/</span> projetos
            <Zap
              size={14}
              className="transition-transform group-hover:scale-110"
            />
          </button>

          <button
            onClick={() => router.push('/about')}
            className="border-border-light bg-surface-200 text-primary hover:bg-surface-100 rounded-xs border px-6 py-3 font-mono text-sm transition-all hover:border-cyan-500/30"
          >
            <span className="text-accent-success">/</span> sobre
          </button>

          <button
            onClick={() => router.push('/contact')}
            className="border-border-light bg-surface-200 text-primary hover:bg-surface-100 rounded-xs border px-6 py-3 font-mono text-sm transition-all hover:border-cyan-500/30"
          >
            <span className="text-accent-success">/</span> contato
          </button>
        </motion.div>

        {/* Status */}
        <motion.div
          variants={fadeUp}
          className="border-border-light text-secondary border-t pt-6 font-mono text-xs"
        >
          <p>
            <span className="text-accent-success animate-pulse">●</span> Online
            • Última atualização: agora • Pronto para novos projetos
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
