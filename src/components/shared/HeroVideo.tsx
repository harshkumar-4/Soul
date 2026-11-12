'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { getBlurProps } from '@/lib/media/imagePlaceholders';

export interface HeroVideoProps {
  videoSrc: string;
  webmSrc?: string;
  posterSrc: string;
  alt?: string;
  sizes?: string;
  role?: 'hero' | 'below-fold';
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

interface NetworkInformationLike {
  saveData?: boolean;
  effectiveType?: string;
}

// Coordinate playback so multiple videos never decode/play concurrently.
let currentActiveVideo: HTMLVideoElement | null = null;

function registerActiveVideo(video: HTMLVideoElement) {
  if (currentActiveVideo && currentActiveVideo !== video && !currentActiveVideo.paused) {
    currentActiveVideo.pause();
  }
  currentActiveVideo = video;
}

function shouldAllowVideoStream(): boolean {
  if (typeof window === 'undefined') return false;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }

  const navConnection = (
    navigator as Navigator & { connection?: NetworkInformationLike }
  ).connection;

  if (navConnection?.saveData) {
    return false;
  }

  // Keep static optimized poster on slow cellular networks to protect mobile UX.
  if (
    navConnection?.effectiveType === 'slow-2g' ||
    navConnection?.effectiveType === '2g' ||
    navConnection?.effectiveType === '3g'
  ) {
    return false;
  }

  return true;
}

/**
 * HeroVideo: Progressive, viewport-aware media component.
 *
 * 1. Renders an optimized Next.js <Image> poster immediately with LQIP blurDataURL.
 * 2. Never sets HTML <video poster> so the browser never downloads the poster twice.
 * 3. Waits until critical page content has finished loading (window.load + idle yield).
 * 4. Uses IntersectionObserver to stream only when visible and pauses cleanly off-screen.
 * 5. Keeps poster solid beneath the video and fades video smoothly over it (no black frames).
 */
export function HeroVideo({
  videoSrc,
  webmSrc,
  posterSrc,
  alt = 'Atmospheric reflection scene',
  sizes = '(max-width: 1024px) 92vw, 45vw',
  role = 'hero',
  className,
  imageClassName,
  priority = true,
}: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isEligible, setIsEligible] = useState(false);
  const [isInView, setIsInView] = useState(role === 'hero');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  // Step 1: Observe container visibility so off-screen/below-the-fold videos pause or wait.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsInView(entry.isIntersecting);
        }
      },
      {
        rootMargin: role === 'below-fold' ? '200px 0px' : '0px',
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [role]);

  // Step 2: Defer video mounting until window load completes and browser is idle.
  useEffect(() => {
    if (!shouldAllowVideoStream()) return;

    let cancelled = false;
    let idleHandle: number | undefined;
    let timerHandle: ReturnType<typeof setTimeout> | undefined;

    const scheduleUpgrade = () => {
      if (cancelled) return;
      const activate = () => {
        if (!cancelled) setIsEligible(true);
      };

      const delayMs = role === 'hero' ? 2200 : 250;
      timerHandle = setTimeout(() => {
        if (cancelled) return;
        if ('requestIdleCallback' in window) {
          idleHandle = (
            window as unknown as {
              requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number;
            }
          ).requestIdleCallback(activate, { timeout: 2000 });
        } else {
          activate();
        }
      }, delayMs);
    };

    if (document.readyState === 'complete') {
      scheduleUpgrade();
    } else {
      window.addEventListener('load', scheduleUpgrade, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener('load', scheduleUpgrade);
      if (timerHandle) clearTimeout(timerHandle);
      if (idleHandle !== undefined && 'cancelIdleCallback' in window) {
        (
          window as unknown as { cancelIdleCallback: (id: number) => void }
        ).cancelIdleCallback(idleHandle);
      }
    };
  }, [role]);

  const shouldMountVideo = isEligible && !hasVideoError && (role === 'hero' || isInView);

  // Step 3: Pause when scrolled out of viewport; resume cleanly when returning to view.
  useEffect(() => {
    const video = videoRef.current;
    if (!shouldMountVideo || !video) return;

    if (isInView) {
      registerActiveVideo(video);
      video.play().catch(() => {
        // Autoplay policy blocked playback; poster remains crisp and visible.
      });
    } else if (!video.paused) {
      video.pause();
    }

    return () => {
      if (currentActiveVideo === video) {
        currentActiveVideo = null;
      }
    };
  }, [shouldMountVideo, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-full overflow-hidden bg-surface-alt', className)}
    >
      <Image
        src={posterSrc}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        quality={82}
        sizes={sizes}
        {...getBlurProps(posterSrc)}
        className={cn('object-cover', imageClassName)}
      />

      {shouldMountVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onPlaying={() => setIsVideoPlaying(true)}
          onError={() => {
            setHasVideoError(true);
            setIsVideoPlaying(false);
          }}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out',
            isVideoPlaying ? 'opacity-100' : 'opacity-0',
            imageClassName
          )}
          aria-hidden="true"
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default HeroVideo;
