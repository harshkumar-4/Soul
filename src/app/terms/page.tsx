import React from 'react';
import type { Metadata } from 'next';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Terms of Service — SoulfulI',
  description: 'Terms of Service governing the use of the SoulfulI platform, programs, and retreats.',
};

export default function TermsPage() {
  return (
    <div className="w-full bg-surface px-6 lg:px-16 pt-12 lg:pt-20 pb-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <Badge variant="sand" dot>
          Terms & Agreements
        </Badge>
        <h1 className="font-serif text-display-lg-mobile lg:text-display-lg text-primary tracking-tight font-normal">
          Terms of Service
        </h1>
        <p className="font-sans text-xs text-secondary uppercase tracking-wider">
          Last Updated: March 2026
        </p>

        <div className="space-y-6 font-sans text-body-md text-on-surface-variant leading-relaxed pt-6 border-t border-outline-variant/60">
          <section className="space-y-3">
            <h2 className="font-serif text-headline-sm text-primary font-normal">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing SoulfulI websites, participating in the EQ Audit, or enrolling in programs and retreats, you agree to these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-headline-sm text-primary font-normal">
              2. Intellectual Property & Reflection Materials
            </h2>
            <p>
              All curriculum frameworks, reflection texts, Inner Map models, and design assets are the intellectual property of SoulfulI. They are provided for your personal reflection and may not be reproduced commercially without express written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-headline-sm text-primary font-normal">
              3. Retreat & Cohort Policies
            </h2>
            <p>
              Quiet Bloom retreats and Inner Compass cohorts maintain intimate group sizing. Detailed cancellation and transfer logistics are provided during enrollment confirmation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-headline-sm text-primary font-normal">
              4. Mutual Respect in Communal Spaces
            </h2>
            <p>
              Participants in SoulfulI virtual salons and retreat circles agree to uphold confidentiality, unhurried listening, and mutual human dignity.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
