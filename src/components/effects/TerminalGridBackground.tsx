'use client';
import { cn } from '@/lib/utils';

export function TerminalGridBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-dark-500 fixed inset-0 -z-10 overflow-hidden',
        className,
      )}
    >
      {/* Animated Grid Pattern */}
      <div
        className="animate-grid-fade absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Corner Glow - Top Left */}
      <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-cyan-500 opacity-5 blur-[120px]" />

      {/* Corner Glow - Bottom Right */}
      <div className="absolute -right-[15%] -bottom-[15%] h-[50%] w-[50%] rounded-full bg-cyan-500 opacity-3 blur-[120px]" />

      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 opacity-2 blur-[150px]" />
    </div>
  );
}
