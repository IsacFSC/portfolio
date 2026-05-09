'use client';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  icon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden font-mono tracking-widest uppercase transition-all',
        size === 'md' ? 'px-6 py-3 text-xs' : 'px-10 py-4 text-[13px]',
        variant === 'primary'
          ? 'bg-clay text-cream hover:bg-clay/90 shadow-[0_0_20px_rgba(183,116,102,0.3)]'
          : 'border-clay/30 text-clay hover:bg-clay/5 border bg-transparent',
        'rounded-full',
        className,
      )}
      {...props}
    >
      {children}
      {icon && (
        <span className="transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.button>
  );
}
