'use client';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TerminalCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  hover?: boolean;
  glow?: boolean;
}

export function TerminalCard({
  children,
  className,
  title,
  hover = true,
  glow = true,
}: TerminalCardProps) {
  return (
    <div
      className={cn(
        'border-border-light bg-surface-300 rounded-xs border backdrop-blur-md',
        glow && 'hover:shadow-lg hover:shadow-cyan-500/10',
        hover &&
          'hover:bg-surface-200 transition-all duration-300 hover:border-cyan-500/30',
        className,
      )}
    >
      {title && (
        <div className="border-border-light flex items-center gap-2 border-b px-4 py-3">
          <div className="flex gap-1">
            <div className="bg-accent-critical h-3 w-3 rounded-full opacity-80" />
            <div className="bg-accent-warning h-3 w-3 rounded-full opacity-80" />
            <div className="bg-accent-success h-3 w-3 rounded-full opacity-80" />
          </div>
          <span className="text-secondary ml-2 flex-1 truncate font-mono text-xs">
            {title}
          </span>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
}
