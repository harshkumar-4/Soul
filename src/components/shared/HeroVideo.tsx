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

interface NetworkInformationLike {
  saveData?: boolean;
  effectiveType?: string;
}

/**
 * HeroVideo: Progressive media component.
 *
 * 1. Prioritizes the lightweight LCP poster image via next/image.
 * 2. Defers the background video stream until after initial paint and hydration.
 * 3. Respects prefers-reduced-motion and Save-Data preferences by keeping the still poster.
 * 4. Cross-fades video smoothly when buffered and falls back silently on error.
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
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const navConnection = (
      navigator as Navigator & { connection?: NetworkInformationLike }
    ).connection;
    if (navConnection?.saveData || navConnection?.effectiveType === '2g') {
      return;
    }

    const initVideo = () => {
      setShouldLoadVideo(true);
    };

    if ('requestIdleCallback' in window) {
      const handle = (
        window as unknown as {
          requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number;
        }
      ).requestIdleCallback(initVideo, { timeout: 1500 });
      return () => {
        (
          window as unknown as { cancelIdleCallback: (id: number) => void }
        ).cancelIdleCallback(handle);
      };
    }

    const timer = setTimeout(initVideo, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldLoadVideo && !hasVideoError && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Browser autoplay policy blocked playback; poster remains visible.
      });
    }
  }, [shouldLoadVideo, hasVideoError]);

  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      <Image
        src={posterSrc}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 45vw"
        className={cn(
          'object-cover transition-opacity duration-1000 ease-out',
          isVideoPlaying && !hasVideoError ? 'opacity-0' : 'opacity-100',
          imageClassName
        )}
      />

      {shouldLoadVideo && !hasVideoError && (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onPlaying={() => setIsVideoPlaying(true)}
          onError={() => {
            setHasVideoError(true);
            setIsVideoPlaying(false);
          }}
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
