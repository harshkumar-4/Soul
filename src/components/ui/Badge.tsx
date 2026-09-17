import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'sage' | 'sand' | 'terracotta' | 'forest' | 'outline';
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
    sand: 'bg-surface-container text-on-surface-variant border border-outline-variant/60',
    terracotta: 'bg-tertiary/15 text-tertiary border border-tertiary/30',
    forest: 'bg-primary text-surface-bright',
    outline: 'bg-transparent text-on-surface-variant border border-outline-variant',
  };

  const dotColors = {
    sage: 'bg-sage',
    sand: 'bg-on-surface-variant',
    terracotta: 'bg-tertiary',
    forest: 'bg-surface-bright',
    outline: 'bg-outline',
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
