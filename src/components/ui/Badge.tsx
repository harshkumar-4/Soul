import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'sage' | 'sand' | 'terracotta' | 'forest' | 'outline' | 'translucentWhite';
  dot?: boolean;
}

export function Badge({
  className,
  variant = 'sage',
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    sage: 'bg-sage/15 text-forest border border-sage/30',
    sand: 'bg-surface-alt text-on-surface-variant border border-border-alt',
    terracotta: 'bg-tertiary/15 text-tertiary border border-tertiary/30',
    forest: 'bg-primary text-surface-bright',
    outline: 'bg-transparent text-on-surface-variant border border-outline-variant',
    translucentWhite: 'bg-white/[0.14] text-white border border-white/35 backdrop-blur-[8px]',
  };

  const dotColors = {
    sage: 'bg-sage',
    sand: 'bg-on-surface-variant',
    terracotta: 'bg-tertiary',
    forest: 'bg-surface-bright',
    outline: 'bg-outline',
    translucentWhite: 'bg-white/80',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-label-sm font-sans font-medium uppercase tracking-[0.14em]',
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full', dotColors[variant])} />}
      {children}
    </span>
  );
}

export default Badge;
