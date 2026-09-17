import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'terracotta';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, isExternal, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-primary text-surface-bright hover:bg-primary/90 shadow-sm rounded-lg active:scale-[0.99]',
      secondary:
        'bg-surface-container text-on-surface border border-outline-variant/60 hover:bg-surface-container-high rounded-lg active:scale-[0.99]',
      outline:
        'bg-transparent text-primary border border-outline-variant hover:border-primary rounded-lg active:scale-[0.99]',
      ghost:
        'bg-transparent text-on-surface hover:text-tertiary underline underline-offset-4 decoration-outline-variant hover:decoration-tertiary p-0',
      terracotta:
        'bg-tertiary text-white hover:bg-tertiary/90 shadow-sm rounded-lg active:scale-[0.99]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-[13px]',
      md: 'px-6 py-3 text-[14px]',
      lg: 'px-8 py-3.5 text-[15px]',
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      variant !== 'ghost' && sizes[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
