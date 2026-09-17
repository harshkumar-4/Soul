import React from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export interface ClosingCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export function ClosingCTA({
  eyebrow = 'The Blooming Continues',
  title = 'What might change first?',
  description = 'Personal transformation does not happen by accumulating information. It begins when you pause, listen to your inner world, and choose to live intentionally.',
  primaryCtaText = 'Take the EQ Audit',
  primaryCtaHref = '/eq-audit',
  secondaryCtaText = 'Explore Our Story',
  secondaryCtaHref = '/our-story',
  className,
}: ClosingCTAProps) {
  return (
    <section className={cn('w-full py-20 lg:py-28 bg-surface-container border-t border-outline-variant/60', className)}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="font-sans text-label-sm uppercase tracking-widest text-secondary font-semibold block">
            {eyebrow}
          </span>
          <h2 className="font-serif text-headline-lg lg:text-display-lg text-primary tracking-tight font-normal leading-[1.15]">
            {title}
          </h2>
          <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
            {description}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryCtaHref} variant="primary" size="lg" className="rounded-full">
              {primaryCtaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="secondary" size="lg" className="rounded-full">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClosingCTA;
