import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Projetos',
  description: 'Confira os cases de sucesso e projetos desenvolvidos por mim.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <PageHeader
        title="Portfólio"
        subtitle="Uma seleção de trabalhos que unem design de elite e engenharia de ponta."
      />

      <div className="py-12">
        <ProjectsSection />
      </div>

      <section className="border-clay/10 container mx-auto border-t px-6 py-20 text-center">
        <h2 className="font-display text-cream mb-4 text-3xl">
          Tem um desafio para nós?
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-white/60 italic">
          Estamos sempre em busca de projetos que quebrem padrões e utilizem IA
          de forma inovadora.
        </p>
        {/* CTA Button viria aqui */}
      </section>
    </main>
  );
}
