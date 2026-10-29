'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-primary text-surface-bright pt-20 pb-12 border-t border-primary/40">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-surface-bright/15">
          {/* Brand & Dispatch Prompt */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" prefetch={true} className="inline-block">
              <span className="font-serif text-3xl tracking-tight text-surface-bright">
                SoulfulI
              </span>
            </Link>
            <p className="font-serif text-xl text-surface-container-high leading-relaxed italic max-w-md">
              &ldquo;The retreat ends. The workshop ends. The audit gives you a score and closes the tab. But the blooming continues.&rdquo;
            </p>
            <div className="pt-2">
              <span className="font-sans text-xs tracking-widest uppercase text-surface-container-high/70 block mb-3">
                The Quiet Dispatch
              </span>
              {subscribed ? (
                <div className="inline-flex items-center gap-2 text-sm text-secondary-fixed-dim bg-surface-bright/10 px-4 py-2.5 rounded">
                  <Check className="w-4 h-4 text-secondary-fixed" />
                  <span>You are subscribed to our quiet dispatches.</span>
                </div>
              ) : (
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
              )}
            </div>

            {/* Official Social Profiles */}
            <div className="pt-2">
              <span className="font-sans text-xs tracking-widest uppercase text-surface-container-high/70 block mb-3">
                Follow &amp; Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/soulfuli_official?obrf=NzlubWljcXcwbW9o&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-bright/10 hover:bg-surface-bright/20 border border-surface-bright/20 text-surface-bright text-xs font-sans transition-all duration-200 hover:text-white hover:border-surface-bright/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  aria-label="Follow SoulfullI on Instagram"
                >
                  <Instagram className="w-4 h-4 text-secondary-fixed transition-transform duration-200 group-hover:scale-110" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/soulfuli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-bright/10 hover:bg-surface-bright/20 border border-surface-bright/20 text-surface-bright text-xs font-sans transition-all duration-200 hover:text-white hover:border-surface-bright/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  aria-label="Connect with SoulfullI on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-secondary-fixed transition-transform duration-200 group-hover:scale-110" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sitemap Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-secondary-fixed">
                Pathways
              </span>
              <ul className="space-y-2.5 text-sm text-surface-container font-sans">
                <li>
                  <Link href="/eq-audit" prefetch={true} className="hover:text-surface-bright transition-colors">
                    EQ Audit
                  </Link>
                </li>
                <li>
                  <Link href="/schools-colleges" prefetch={true} className="hover:text-surface-bright transition-colors">
                    Schools & Colleges
                  </Link>
                </li>
                <li>
                  <Link href="/organisations" prefetch={true} className="hover:text-surface-bright transition-colors">
                    Organisations
                  </Link>
                </li>
                <li>
                  <Link href="/quiet-bloom" prefetch={true} className="hover:text-surface-bright transition-colors">
                    Quiet Bloom Retreat
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-secondary-fixed">
                Sanctuary
              </span>
              <ul className="space-y-2.5 text-sm text-surface-container font-sans">
                <li>
                  <Link href="/our-story" prefetch={true} className="hover:text-surface-bright transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-offer" prefetch={true} className="hover:text-surface-bright transition-colors">
                    What We Offer
                  </Link>
                </li>
                <li>
                  <Link href="/what-makes-us-different" prefetch={true} className="hover:text-surface-bright transition-colors">
                    What Makes Us Different
                  </Link>
                </li>
                <li>
                  <Link href="/community" prefetch={true} className="hover:text-surface-bright transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-secondary-fixed">
                Correspondence
              </span>
              <ul className="space-y-2.5 text-sm text-surface-container font-sans">
                <li>
                  <Link href="/contact" prefetch={true} className="hover:text-surface-bright transition-colors">
                    Direct Dispatch
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" prefetch={true} className="hover:text-surface-bright transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" prefetch={true} className="hover:text-surface-bright transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li className="pt-2 text-xs text-surface-container-high/60">
                  Dharamshala · New Delhi
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-container-high/60 font-sans">
          <p suppressHydrationWarning>© {new Date().getFullYear()} SoulfulI. All rights reserved.</p>
          <p className="tracking-wide">Mind + Heart + Spirit → One Journey</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
