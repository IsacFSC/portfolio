import Image from 'next/image';
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
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#FFE1AF] px-6 py-2 text-sm font-medium text-[#0E0C0A] transition-transform hover:scale-105"
          >
            Ver Projeto <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-medium tracking-wider text-[#B77466] uppercase">
          {project.category}
        </span>
        <h3 className="mt-1 mb-2 text-xl font-bold text-[#FFE1AF]">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-[#957C62]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium text-[#E2B59A]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
}
