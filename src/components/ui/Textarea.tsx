import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, required, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="block font-sans text-label-md uppercase tracking-wider text-on-surface-variant"
          >
            {label} {required && <span className="text-tertiary">*</span>}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          required={required}
          rows={rows}
          className={cn(
            'w-full bg-surface-container px-4 py-3 rounded border border-outline-variant/60 text-on-surface font-sans text-body-md placeholder:text-outline/70 focus:outline-none focus:border-primary focus:bg-surface-container-high transition-colors resize-y',
            error && 'border-error focus:border-error',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-error mt-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
