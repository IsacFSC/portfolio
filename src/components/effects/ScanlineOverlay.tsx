'use client';
import { cn } from '@/lib/utils';

interface ScanlineOverlayProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function ScanlineOverlay({
  className,
  intensity = 'low',
}: ScanlineOverlayProps) {
  const opacityMap = {
    low: 0.01,
    medium: 0.03,
    high: 0.05,
  };

  return (
    <div
      className={cn('pointer-events-none fixed inset-0', className)}
      style={{
        backgroundImage: `
          linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, ${opacityMap[intensity]}) 50%,
            transparent 100%
          )
        `,
        backgroundSize: '100% 4px',
        animation: 'scanline 8s linear infinite',
      }}
    />
  );
}
