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
      <div className="mx-auto w-full px-4">
        <SectionTitle
          eyebrow="Nossa História"
          title="Desenvolvedor Full Stack | Prisma, TypeScript, React, Next.js e NestJS"
          className="mb-12"
        />

        <div className="space-y-8 text-[14px] leading-relaxed font-light text-white/90 lg:text-lg">
          <p className="bg-gray-100 p-1 text-center text-xs text-black lg:text-sm">
            Olá, Sou Desenvolvedor Full Stack com foco no ecossistema JavaScript
            e TypeScript, desenvolvendo aplicações web utilizando React,
            Next.js, NestJS e PostgreSQL.
          </p>
          <p>
            Minha experiência profissional em suporte técnico me proporcionou
            uma visão prática sobre software, análise de problemas, investigação
            de bugs, documentação técnica e colaboração com equipes de Produto e
            Engenharia. Essa vivência fortaleceu minha capacidade de compreender
            regras de negócio, identificar oportunidades de melhoria e
            contribuir para a construção de soluções mais eficientes e centradas
            no usuário.
          </p>
          <p>
            Atualmente, dedico meu tempo ao desenvolvimento contínuo de projetos
            Full Stack, aprimorando conhecimentos em arquitetura de software,
            APIs REST, Clean Code e boas práticas de desenvolvimento.
          </p>
          <p>
            Busco minha primeira oportunidade como desenvolvedor, onde possa
            aplicar meus conhecimentos, continuar evoluindo tecnicamente e
            contribuir para a criação de produtos que gerem impacto real para
            usuários e negócios.
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
