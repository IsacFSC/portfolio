'use client';
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/6 bg-white/4 p-6 shadow-lg backdrop-blur-md',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default GlassCard;
