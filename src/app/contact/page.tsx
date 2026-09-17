import React from 'react';
import type { Metadata } from 'next';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';
import Badge from '@/components/ui/Badge';
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Direct Dispatch — SoulfulI',
  description:
    'Start a thoughtful conversation with SoulfulI. We treat every message with deliberate human attention.',
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-surface px-6 lg:px-16 pt-12 lg:pt-20 pb-24">
      <div className="max-w-[1240px] mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="sage" dot>
            Direct Dispatch
          </Badge>
          <h1 className="font-serif text-display-lg-mobile lg:text-display-lg text-primary tracking-tight font-normal">
            Start a deliberate conversation.
          </h1>
          <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
            We treat every dispatch with personal care. You will receive a thoughtful human reply within two business days. Zero automated marketing drip campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-low p-6 lg:p-10 rounded-2xl border border-outline-variant/60 shadow-sm">
            <ContactForm />
          </div>

          {/* Right: Context & Physical Presence */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/60 space-y-6 shadow-sm">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold block">
                Correspondence Commitments
              </span>

              <div className="space-y-4 text-sm font-sans text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary shrink-0 pt-0.5" />
                  <div>
                    <strong className="text-primary block font-medium">Response Cadence</strong>
                    <span>Personal replies within 48 business hours.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-secondary shrink-0 pt-0.5" />
                  <div>
                    <strong className="text-primary block font-medium">Complete Confidentiality</strong>
                    <span>Your inquiries and reflective context remain strictly private.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 pt-0.5" />
                  <div>
                    <strong className="text-primary block font-medium">Sanctuaries & Studios</strong>
                    <span>Dharamshala, Himachal Pradesh &amp; New Delhi, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-surface-container rounded-xl border border-outline-variant/40 space-y-2">
              <h4 className="font-serif text-lg text-primary font-normal">
                Direct Electronic Mail
              </h4>
              <p className="font-sans text-xs text-on-surface-variant">
                For direct press, publishing, or institutional correspondence:
              </p>
              <a
                href="mailto:inquiry@soulfuli.com"
                className="font-sans text-sm font-semibold text-tertiary hover:underline block pt-1"
              >
                inquiry@soulfuli.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
