'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { newsletterSchema } from '@/lib/validation/schemas';
import { OFFICIAL_EMAIL } from '@/lib/seo/metadata';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setError(null);
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message || 'Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: parsed.data.email }),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !payload?.ok) {
        setError(
          payload?.error ||
            `Unable to subscribe right now. You can reach us at ${OFFICIAL_EMAIL}.`
        );
        return;
      }

      setSubscribed(true);
      setEmail('');
    } catch {
      setError(
        `Network error while subscribing. Please try again or email ${OFFICIAL_EMAIL}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (subscribed) {
    return (
      <div
        role="status"
        className="inline-flex items-center gap-2 text-sm text-secondary-fixed-dim bg-surface-bright/10 px-4 py-2.5 rounded"
      >
        <Check className="w-4 h-4 text-secondary-fixed shrink-0" />
        <span>You are subscribed to our quiet dispatches.</span>
      </div>
    );
  }

  return (
    <div className="space-y-2 max-w-md">
      <form onSubmit={handleSubscribe} noValidate className="flex w-full">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address for The Quiet Dispatch newsletter
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          placeholder="Enter your email address"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'newsletter-error' : undefined}
          className="min-w-0 flex-1 bg-surface-bright/10 px-4 py-3 rounded-l text-surface-bright placeholder:text-surface-container-high/60 text-sm focus:outline-none focus:bg-surface-bright/15 focus-visible:ring-2 focus-visible:ring-secondary-fixed border-y border-l border-surface-bright/20"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-surface-bright text-primary px-5 py-3 rounded-r text-sm font-medium hover:bg-surface-container-high transition-colors flex items-center justify-center disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed"
          aria-label="Subscribe to newsletter"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </button>
      </form>
      {error && (
        <p id="newsletter-error" role="alert" className="text-xs text-tertiary-fixed leading-relaxed">
          {error}{' '}
          <a
            href={`mailto:${OFFICIAL_EMAIL}`}
            className="underline underline-offset-2 text-surface-bright hover:opacity-90"
          >
            {OFFICIAL_EMAIL}
          </a>
        </p>
      )}
    </div>
  );
}

export default NewsletterForm;
