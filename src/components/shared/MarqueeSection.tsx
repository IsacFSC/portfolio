// components/shared/MarqueeSection.tsx
import { techStack } from '@/lib/constants';

export function MarqueeSection() {
  const doubled = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden border-y border-[rgba(183,116,102,0.1)] py-5">
      {/* Fades nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0E0C0A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0E0C0A] to-transparent" />

      <div className="animate-marquee flex gap-8 whitespace-nowrap">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="text-mocha/60 font-mono text-xs tracking-[0.2em] uppercase"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
