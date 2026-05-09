'use client';
import { cn } from '@/lib/utils';

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'fixed inset-0 -z-10 overflow-hidden bg-[#0E0C0A]',
        className,
      )}
    >
      {/* Camadas de gradiente simulando aurora com as cores da paleta */}
      <div className="bg-clay/15 absolute -top-[20%] -left-[10%] h-[70%] w-[70%] animate-pulse rounded-full blur-[120px]" />
      <div className="bg-steel/10 absolute top-[10%] -right-[10%] h-[60%] w-[60%] animate-bounce rounded-full blur-[100px] [animation-duration:12s]" />
      <div className="bg-forest/10 absolute -bottom-[20%] left-[20%] h-[50%] w-[80%] rounded-full blur-[120px]" />
      <div className="bg-sky/5 absolute top-[40%] left-[50%] h-[40%] w-[40%] animate-pulse rounded-full blur-[100px]" />
    </div>
  );
}
