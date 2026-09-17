import React from 'react';
import type { Metadata } from 'next';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Privacy Policy — SoulfulI',
  description: 'How SoulfulI collects, protects, and respects your personal and reflective information.',
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-surface px-6 lg:px-16 pt-12 lg:pt-20 pb-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <Badge variant="sand" dot>
          Legal & Privacy
        </Badge>
        <h1 className="font-serif text-display-lg-mobile lg:text-display-lg text-primary tracking-tight font-normal">
          Privacy Policy
        </h1>
        <p className="font-sans text-xs text-secondary uppercase tracking-wider">
          Last Updated: March 2026
        </p>

        <div className="space-y-6 font-sans text-body-md text-on-surface-variant leading-relaxed pt-6 border-t border-outline-variant/60">
          <section className="space-y-3">
            <h2 className="font-serif text-headline-sm text-primary font-normal">
              1. Our Stance on Privacy & Self-Discovery Data
            </h2>
            <p>
              SoulfulI operates as a contemplative sanctuary. Because our tools (such as the EQ Audit) involve introspective and personal self-reflection, we hold your responses with absolute respect. We collect only the minimum information necessary to calculate your results and facilitate direct correspondence.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-headline-sm text-primary font-normal">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Self-Discovery Responses:</strong> Numerical answers provided during the EQ Audit to compute dimension metrics. Answers are processed securely on the server.
              </li>
              <li>
                <strong>Inquiry Information:</strong> Name, email, phone number, and context provided willingly in lead and application forms.
              </li>
              <li>
                <strong>Technical Telemetry:</strong> Minimal, privacy-first analytics to understand aggregate page interaction without personal profiling.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-headline-sm text-primary font-normal">
              3. How We Use Information
            </h2>
            <p>
              Your information is used exclusively to deliver your assessment insights, process retreat or corporate applications, and provide dispatch newsletters when opted in. We never sell, rent, or monetize personal or assessment data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-headline-sm text-primary font-normal">
              4. Non-Clinical Disclaimer
            </h2>
            <p>
              SoulfulI assessments and programs are educational tools for personal growth and self-awareness. They do not constitute medical, psychiatric, or clinical psychological diagnoses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-headline-sm text-primary font-normal">
              5. Contact Regarding Privacy
            </h2>
            <p>
              For data access, deletion, or inquiries, please contact our team at{' '}
              <a href="mailto:privacy@soulfuli.com" className="text-tertiary underline">
                privacy@soulfuli.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
