import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options?: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, required, children, options, ...props }, ref) => {
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
        <div className="relative">
          <select
            id={id}
            ref={ref}
            required={required}
            className={cn(
              'w-full bg-surface-container px-4 py-3 rounded border border-outline-variant/60 text-on-surface font-sans text-body-md focus:outline-none focus:border-primary focus:bg-surface-container-high transition-colors appearance-none pr-10 cursor-pointer',
              error && 'border-error focus:border-error',
              className
            )}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
        </div>
        {error && <p className="text-xs text-error mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
