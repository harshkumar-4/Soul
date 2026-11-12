import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, required, ...props }, ref) => {
    const errorId = id && error ? `${id}-error` : undefined;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="block font-sans text-label-md uppercase tracking-wider text-on-surface-variant"
          >
            {label} {required && <span className="text-tertiary" aria-hidden="true">*</span>}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={cn(
            'w-full bg-surface-alt px-4 py-3 rounded border border-border-alt text-on-surface font-sans text-body-md placeholder:text-outline/70 focus:outline-none focus:border-primary focus:bg-surface transition-colors',
            error && 'border-error focus:border-error',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} role="alert" className="text-xs text-error mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
