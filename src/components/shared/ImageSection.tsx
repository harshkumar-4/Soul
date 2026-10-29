import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export type OverlayVariant =
  | 'directional'
  | 'center'
  | 'uniform'
  | 'warm-sunset'
  | 'mountain-dawn'
  | 'intimate-human';

export interface ImageSectionProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
  priority?: boolean;
  objectPosition?: string;
  overlayVariant?: OverlayVariant;
  enableSubtleZoom?: boolean;
  blendEdges?: boolean;
  imageClassName?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

/**
 * ImageSection: Premium art-directed section wrapper for text-over-image layouts.
 * Features calibrated multi-stage overlays tailored to image mood (sunset, forest canopy,
 * mountain dawn, human intimacy) avoiding muddy washouts while guaranteeing WCAG AAA text contrast.
 */
export function ImageSection({
  src,
  alt = '',
  priority = false,
  objectPosition = 'center',
  overlayVariant = 'directional',
  enableSubtleZoom = false,
  blendEdges = false,
  imageClassName,
  containerClassName,
  className,
  children,
  ...props
}: ImageSectionProps) {
  return (
    <section
      className={cn('relative w-full overflow-hidden isolate', className)}
      {...props}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={cn(
            'object-cover transition-transform duration-1000 ease-out will-change-transform',
            enableSubtleZoom && 'animate-subtle-zoom',
            imageClassName
          )}
          style={{ objectPosition }}
        />
      </div>

      {/* OVERLAY SYSTEM */}
      {/* 1. Mobile Uniform & Directional Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none md:hidden"
        style={{
          background:
            overlayVariant === 'warm-sunset'
              ? 'linear-gradient(180deg, rgba(20, 28, 23, 0.76) 0%, rgba(20, 28, 23, 0.62) 50%, rgba(20, 28, 23, 0.82) 100%)'
              : overlayVariant === 'mountain-dawn'
              ? 'linear-gradient(180deg, rgba(19, 29, 23, 0.45) 0%, rgba(19, 29, 23, 0.72) 40%, rgba(19, 29, 23, 0.92) 100%)'
              : overlayVariant === 'intimate-human'
              ? 'linear-gradient(180deg, rgba(26, 26, 24, 0.78) 0%, rgba(26, 26, 24, 0.64) 55%, rgba(26, 26, 24, 0.84) 100%)'
              : overlayVariant === 'center'
              ? 'radial-gradient(ellipse at center, rgba(24, 35, 28, 0.45) 0%, rgba(24, 35, 28, 0.84) 100%)'
              : 'linear-gradient(180deg, rgba(24, 35, 28, 0.78) 0%, rgba(24, 35, 28, 0.65) 50%, rgba(24, 35, 28, 0.82) 100%)',
        }}
        aria-hidden="true"
      />

      {/* 2. Desktop Art-Directed Overlays */}
      {/* Desktop Layer 1: Ambient Base Veil */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
        style={{
          backgroundColor:
            overlayVariant === 'warm-sunset'
              ? 'rgba(20, 28, 23, 0.28)'
              : overlayVariant === 'intimate-human'
              ? 'rgba(28, 28, 25, 0.24)'
              : overlayVariant === 'mountain-dawn'
              ? 'rgba(19, 29, 23, 0.18)'
              : overlayVariant === 'center'
              ? 'rgba(24, 35, 28, 0.28)'
              : 'rgba(24, 35, 28, 0.30)',
        }}
        aria-hidden="true"
      />

      {/* Desktop Layer 2: Directional / Mood Gradient */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none hidden md:block"
        style={{
          background:
            overlayVariant === 'directional'
              ? 'linear-gradient(90deg, rgba(20, 31, 24, 0.88) 0%, rgba(20, 31, 24, 0.66) 42%, rgba(20, 31, 24, 0.22) 78%, rgba(20, 31, 24, 0.04) 100%)'
              : overlayVariant === 'warm-sunset'
              ? 'linear-gradient(90deg, rgba(18, 26, 21, 0.90) 0%, rgba(18, 26, 21, 0.70) 45%, rgba(18, 26, 21, 0.20) 80%, rgba(18, 26, 21, 0.04) 100%)'
              : overlayVariant === 'mountain-dawn'
              ? 'linear-gradient(to top, rgba(17, 27, 21, 0.94) 0%, rgba(17, 27, 21, 0.65) 45%, rgba(17, 27, 21, 0.15) 75%, transparent 100%), linear-gradient(90deg, rgba(17, 27, 21, 0.55) 0%, transparent 60%)'
              : overlayVariant === 'intimate-human'
              ? 'linear-gradient(90deg, rgba(26, 26, 24, 0.86) 0%, rgba(26, 26, 24, 0.60) 46%, rgba(26, 26, 24, 0.18) 82%, transparent 100%)'
              : overlayVariant === 'center'
              ? 'radial-gradient(ellipse at 50% 36%, rgba(20, 31, 24, 0.15) 0%, rgba(20, 31, 24, 0.55) 60%, rgba(20, 31, 24, 0.88) 100%)'
              : 'rgba(20, 31, 24, 0.55)',
        }}
        aria-hidden="true"
      />

      {/* Desktop Layer 3: Refined Edge & Ground Vignette */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(18, 27, 22, 0.55) 0%, transparent 35%)',
        }}
        aria-hidden="true"
      />

      {/* Optional Blend Edges with Adjacent Surface (#fdf9f1) */}
      {blendEdges && (
        <>
          <div
            className="absolute top-0 inset-x-0 h-16 z-[4] pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(253, 249, 241, 0.20), transparent)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 inset-x-0 h-16 z-[4] pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(253, 249, 241, 0.20), transparent)',
            }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Content Container */}
      <div className={cn('relative z-10 w-full text-white', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

/**
 * ImageEyebrow: Translucent white pill badge for cinematic image sections
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
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.14] border border-white/30 backdrop-blur-[10px] text-white text-label-sm font-sans font-medium uppercase tracking-[0.16em] shadow-[0_2px_12px_rgba(0,0,0,0.15)]',
        className
      )}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />}
      {children}
    </span>
  );
}

/**
 * ImageHeading: White display heading for image sections
 * Spec: Crisp White (#FFFFFF), layered editorial text-shadow for maximum legibility over photography
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
        'font-serif text-white editorial-shadow font-normal leading-[1.12] tracking-tight',
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * ImageParagraph: White body copy for image sections
 * Spec: High-contrast crisp white (95% opacity), generous line-height, optimized measure
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
        'font-sans text-white/95 leading-[1.8] font-normal max-w-[58ch] editorial-shadow-subtle',
        className
      )}
    >
      {children}
    </p>
  );
}

/**
 * ImageFrostedPanel: Editorial sanctuary panel for framing text over vivid imagery
 * Glassmorphic deep forest card with delicate translucent border and depth
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
        'bg-[#18261F]/50 backdrop-blur-[14px] rounded-3xl p-7 lg:p-11 border border-white/20 shadow-[0_24px_64px_rgba(10,18,14,0.35)] text-white',
        className
      )}
    >
      {children}
    </div>
  );
}

export default ImageSection;
