import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ImageSectionProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
  priority?: boolean;
  objectPosition?: string;
  overlayVariant?: 'directional' | 'center' | 'uniform';
  imageClassName?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

/**
 * ImageSection: Reusable section wrapper for text-over-image layouts.
 * Implements a 3-layer overlay using Deep Forest (#24382D) as base:
 * - Layer 1 (overall tint): rgba(36,56,45,0.45)
 * - Layer 2 (directional gradient): linear-gradient(90deg, rgba(36,56,45,0.80) 0%, rgba(36,56,45,0.55) 55%, rgba(36,56,45,0.25) 100%)
 * - Layer 3 (bottom vignette): linear-gradient(to top, rgba(36,56,45,0.55), transparent 40%)
 * Mobile overlay uses uniform tint (~0.68) + vignette.
 */
export function ImageSection({
  src,
  alt = '',
  priority = false,
  objectPosition = 'center',
  overlayVariant = 'directional',
  imageClassName,
  containerClassName,
  className,
  children,
  ...props
}: ImageSectionProps) {
  return (
    <section
      className={cn('relative w-full overflow-hidden', className)}
      {...props}
    >
      {/* Background Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={cn('object-cover', imageClassName)}
          style={{ objectPosition }}
        />
      </div>

      {/* OVERLAY LAYERS (Base: Deep Forest #24382D) */}

      {/* 1. Mobile Uniform Overlay: 0.68 tint + vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none md:hidden"
        style={{ backgroundColor: 'rgba(36, 56, 45, 0.68)' }}
        aria-hidden="true"
      />

      {/* 2. Desktop Layer 1: Overall Tint 0.45 */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
        style={{ backgroundColor: 'rgba(36, 56, 45, 0.45)' }}
        aria-hidden="true"
      />

      {/* 3. Desktop Layer 2: Directional Gradient (or Center Radial) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none hidden md:block"
        style={{
          backgroundImage:
            overlayVariant === 'directional'
              ? 'linear-gradient(90deg, rgba(36,56,45,0.80) 0%, rgba(36,56,45,0.55) 55%, rgba(36,56,45,0.25) 100%)'
              : overlayVariant === 'center'
              ? 'radial-gradient(ellipse at center, rgba(36,56,45,0.55) 0%, rgba(36,56,45,0.75) 100%)'
              : 'none',
        }}
        aria-hidden="true"
      />

      {/* 4. Layer 3: Bottom Vignette (Desktop + Mobile) */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(36,56,45,0.55) 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className={cn('relative z-10 w-full', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

/**
 * ImageEyebrow: Translucent white pill badge for image sections
 * Spec: translucent white fill rgba(255,255,255,0.14), white 1px border at 35% opacity, white text, light backdrop-blur (8px)
 */
export function ImageEyebrow({
  children,
  className,
  dot = true,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.14] border border-white/35 backdrop-blur-[8px] text-white text-label-sm font-sans font-medium uppercase tracking-[0.14em]',
        className
      )}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-white/90" />}
      {children}
    </span>
  );
}

/**
 * ImageHeading: Heading for image sections
 * Spec: #FFFFFF, with text-shadow 0 2px 16px rgba(0,0,0,0.28)
 */
export function ImageHeading({
  as: Component = 'h2',
  children,
  className,
}: {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Component
      className={cn(
        'font-serif text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.28)] font-normal leading-tight',
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * ImageParagraph: Body paragraph for image sections
 * Spec: rgba(255,255,255,0.94), line-height 1.75, font-weight 400 or heavier, comfortable max-width of about 62ch
 */
export function ImageParagraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'font-sans text-white/[0.94] leading-[1.75] font-normal max-w-[62ch]',
        className
      )}
    >
      {children}
    </p>
  );
}

/**
 * ImageFrostedPanel: Soft frosted container (used when subject clearance needs extra padding or paneling)
 * Spec: rgba(36,56,45,0.35), backdrop-blur 10px, 20px radius
 */
export function ImageFrostedPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-[#24382D]/35 backdrop-blur-[10px] rounded-[20px] p-6 lg:p-8 border border-white/10',
        className
      )}
    >
      {children}
    </div>
  );
}

export default ImageSection;
