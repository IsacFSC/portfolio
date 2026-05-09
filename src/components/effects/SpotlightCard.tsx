// components/effects/SpotlightCard.tsx
'use client';
import { useRef, useState, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setVisible(true);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setVisible(false)}
      className={cn(
        'relative overflow-hidden rounded-[20px] border border-[rgba(183,116,102,0.15)]',
        'bg-[rgba(30,25,20,0.7)] backdrop-blur-sm',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(183,116,102,0.12), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
