'use client';

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  if (subscribed) {
    return (
      <div className="inline-flex items-center gap-2 text-sm text-secondary-fixed-dim bg-surface-bright/10 px-4 py-2.5 rounded">
        <Check className="w-4 h-4 text-secondary-fixed" />
        <span>You are subscribed to our quiet dispatches.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your.email@quietplace.org"
        className="flex-1 bg-surface-bright/10 px-4 py-3 rounded-l text-surface-bright placeholder:text-surface-container-high/50 text-sm focus:outline-none focus:bg-surface-bright/15 border-y border-l border-surface-bright/20"
      />
      <button
        type="submit"
        className="bg-surface-bright text-primary px-5 py-3 rounded-r text-sm font-medium hover:bg-surface-container-high transition-colors flex items-center justify-center"
        aria-label="Subscribe to newsletter"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export default NewsletterForm;

