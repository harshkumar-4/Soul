'use client';

import React, { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Soulfuli Runtime Catch:', error);
  }, [error]);

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-surface px-6 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-tertiary font-semibold">
          A Momentary Disruption
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-primary font-normal leading-tight">
          Even the calmest waters experience a ripple.
        </h1>
        <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
          An unexpected interruption occurred while loading this page. Please try refreshing or return to the sanctuary.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-surface-bright hover:bg-primary/90 shadow-sm rounded-full px-8 py-3.5 text-[15px]"
          >
            Try Again
          </button>
          <Button href="/" variant="secondary" size="lg" className="rounded-full">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}

