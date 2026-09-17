import React from 'react';
import { cn } from '@/lib/utils';

export interface EditorialQuoteProps {
  quote: string;
  attribution?: string;
  context?: string;
  className?: string;
}

export function EditorialQuote({
  quote,
  attribution,
  context,
  className,
}: EditorialQuoteProps) {
  return (
    <div
      className={cn(
        'pl-6 lg:pl-8 border-l-2 border-tertiary my-8 max-w-3xl space-y-3',
        className
      )}
    >
      <blockquote className="font-serif text-quote-lg lg:text-[28px] lg:leading-[42px] text-primary italic font-normal">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {(attribution || context) && (
        <div className="font-sans text-body-sm text-on-surface-variant flex items-center gap-2">
          {attribution && <span className="font-medium text-primary">{attribution}</span>}
          {attribution && context && <span>—</span>}
          {context && <span className="text-outline">{context}</span>}
        </div>
      )}
    </div>
  );
}

export default EditorialQuote;
