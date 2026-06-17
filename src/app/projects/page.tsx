import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Projetos',
  description: 'Confira os cases de sucesso e projetos desenvolvidos por mim.',
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto grid min-h-screen w-full grid-cols-1 bg-linear-to-bl from-zinc-900/90 via-zinc-800/70 to-zinc-950/70 pt-12 lg:pt-24">
      <PageHeader
        title="Portfólio"
        subtitle="Design de elite e engenharia: veja meus projetos."
      />

      <div className="py-12">
        <ProjectsSection />
      </div>

      <section className="border-clay/10 container mx-auto border-t px-6 py-20 text-center">
        <h2 className="font-display text-cream mb-4 text-xl lg:text-3xl">
          O melhor design está aqui!
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-white/60 italic">
          Sempre em busca de projetos que desafiam e inovam.
        </p>
        {/* CTA Button viria aqui */}
      </section>
    </main>
  );
}
