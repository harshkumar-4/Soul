import React from 'react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-surface px-6 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
          404 · Uncharted Pathway
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-primary font-normal leading-tight">
          A quiet pause on an unmapped trail.
        </h1>
        <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
          The page you are looking for has been moved or does not exist. Take a breath and return to familiar ground.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" size="lg" className="rounded-full">
            Return Home
          </Button>
          <Button href="/what-we-offer" variant="secondary" size="lg" className="rounded-full">
            Explore Offerings
          </Button>
        </div>
      </div>
    </div>
  );
}

