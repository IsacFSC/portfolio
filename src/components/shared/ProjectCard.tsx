import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { AnimatedCard } from './AnimatedCard';
import { ExternalLink } from 'lucide-react';

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <AnimatedCard delay={index * 0.1} className="group overflow-hidden p-0">
      <div
        className="relative aspect-video w-full overflow-hidden"
        style={{ position: 'relative' }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={index === 0}
          className="block object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#FFE1AF] px-6 py-3 text-sm font-semibold text-[#0E0C0A] shadow-lg shadow-[#00000060] transition-transform duration-200 hover:scale-105"
          >
            Ver Projeto <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <span className="text-xs font-medium tracking-[0.3em] text-[#B77466] uppercase">
            {project.category}
          </span>
          <h3 className="mt-3 text-2xl font-bold text-[#FFE1AF]">
            {project.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-[#E2B59A]">
          {project.description}
        </p>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <p className="mb-2 text-xs font-bold tracking-[0.3em] text-[#B77466] uppercase">
            Problema resolvido
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            {project.problem}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold tracking-[0.3em] text-[#B77466] uppercase">
            Decisões técnicas
          </p>
          <ul className="list-inside list-disc space-y-2 text-sm text-[#E2B59A]">
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-[#FFE1AF]"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="mx-auto inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#FFE1AF] underline decoration-orange-500 decoration-dotted underline-offset-2 transition-all duration-200 lg:hidden"
          >
            Acessar projeto
            <ExternalLink size={16} />
          </motion.a>
        </div>
      </div>
    </AnimatedCard>
  );
}
