import { Service } from '@/types';
import { AnimatedCard } from './AnimatedCard';
import { cn } from '@/lib/utils';

export function BentoCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <AnimatedCard
      delay={index * 0.1}
      className={cn(
        'flex h-full flex-col justify-between p-8',
        index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-1',
      )}
    >
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#B77466]/10 text-[#B77466]">
          <Icon size={24} />
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#FFE1AF]">
          {service.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-[#957C62]">
          {service.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-white/5 px-2 py-1 font-mono text-[10px] text-[#E2B59A]"
          >
            {tag}
          </span>
        ))}
      </div>
    </AnimatedCard>
  );
}
