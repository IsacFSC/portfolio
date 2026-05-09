import { SectionTitle } from '@/components/shared/SectionTitle';
import { techStack } from '@/lib/constants';

export const metadata = {
  title: 'Sobre o Studio',
  description:
    'Conheça a história e a visão por trás da estética retro-futurista.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Nossa História"
          title="Onde a nostalgia encontra a inteligência artificial"
          className="mb-12"
        />

        <div className="space-y-8 text-lg leading-relaxed font-light text-white/90">
          <p>
            O Studio nasceu da percepção de que a web moderna tornou-se
            visualmente monótona. Nossa missão é resgatar a personalidade
            vibrante das décadas passadas, injetando a eficiência brutal da
            automação contemporânea.
          </p>
          <p>
            Não construímos apenas sites; criamos ecossistemas digitais que
            pensam, agem e convertem, permitindo que empreendedores foquem no
            que realmente importa enquanto a tecnologia trabalha silenciosamente
            no background.
          </p>
        </div>

        <div className="border-clay/20 mt-20 border-t pt-10">
          <h3 className="text-clay mb-8 font-mono text-xs tracking-widest uppercase">
            Technical Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-clay/5 border-clay/20 rounded-lg border px-4 py-2 font-mono text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
