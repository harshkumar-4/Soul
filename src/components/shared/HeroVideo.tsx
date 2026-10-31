'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface HeroVideoProps {
  videoSrc: string;
  posterSrc: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

/**
 * HeroVideo: Ultra-optimized cinematic media component.
 * 
 * 1. Prioritizes the lightweight LCP poster image via next/image (preloaded in <head>).
 * 2. Defers the heavy multi-megabyte video stream until after FCP/LCP paint and hydration,
 *    preventing network saturation during critical render path.
 * 3. Gracefully respects prefers-reduced-motion by keeping the still poster.
 * 4. Seamlessly cross-fades video when buffered.
 */
export function HeroVideo({
  videoSrc,
  posterSrc,
  alt = 'Atmospheric reflection scene',
  className,
  imageClassName,
  priority = true,
}: HeroVideoProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Respect reduced-motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Delay video stream attachment until after FCP and LCP have painted
    const initVideo = () => {
      setShouldLoadVideo(true);
    };

    if ('requestIdleCallback' in window) {
      const handle = (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number }).requestIdleCallback(initVideo, { timeout: 1500 });
      return () => {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
      };
    } else {
      const timer = setTimeout(initVideo, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Browser autoplay policy catch
      });
    }
  }, [shouldLoadVideo]);

  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      {/* 1. Critical LCP Poster Image (instant, zero delay, optimized webp) */}
      <Image
        src={posterSrc}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 45vw"
        className={cn(
          'object-cover transition-opacity duration-1000 ease-out',
          isVideoPlaying ? 'opacity-0' : 'opacity-100',
          imageClassName
        )}
      />

      {/* 2. Deferred Video Stream (only begins after page interactive) */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onPlaying={() => setIsVideoPlaying(true)}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out',
            isVideoPlaying ? 'opacity-100' : 'opacity-0',
            imageClassName
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default HeroVideo;

