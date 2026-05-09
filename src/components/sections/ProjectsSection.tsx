'use client';
import { projects } from '@/lib/constants';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ProjectCard } from '@/components/shared/ProjectCard';

export function ProjectsSection() {
  return (
    <section className="container mx-auto px-6">
      <SectionTitle
        eyebrow="Portfólio"
        title="Projetos em destaque"
        className="mb-16"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
