import React from 'react';
import { cn } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: 'sage' | 'sand' | 'terracotta' | 'forest' | 'outline';
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowVariant = 'sage',
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-4 max-w-3xl',
        align === 'center' && 'mx-auto text-center items-center flex flex-col',
        className
      )}
    >
      {eyebrow && (
        <Badge variant={eyebrowVariant} dot>
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-serif text-headline-lg lg:text-display-lg text-primary tracking-tight font-normal leading-[1.12]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
