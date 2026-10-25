import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/shared/SectionHeading';
import OrganisationEnquiryForm from '@/components/forms/OrganisationEnquiryForm';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Organisations — SoulfulI Human-Centred Leadership',
  description:
    'Leading with the heart, not just the numbers. SoulfulI brings emotional intelligence, self-awareness, and human-centred communication into the way people work and lead.',
  alternates: {
    canonical: 'https://soulfuli.com/organisations',
  },
  openGraph: {
    title: 'Organisations — SoulfulI Human-Centred Leadership',
    description:
      'Leading with the heart, not just the numbers. SoulfulI brings emotional intelligence, self-awareness, and human-centred communication into the way people work and lead.',
    url: 'https://soulfuli.com/organisations',
    siteName: 'SoulfulI',
    type: 'website',
  },
};

const corporatePillars = [
  {
    number: '01',
    category: 'RECOGNITION',
    title: 'Emotional Intelligence',
    description:
      'Building the capacity to recognize and name emotional states in oneself and others before they turn into reactive decisions or strained relationships.',
  },
  {
    number: '02',
    category: 'OBSERVATION',
    title: 'Self-Aware Leadership',
    description:
      'Creating reflective space to examine leadership habits, blind spots, and unspoken pressures without fear of judgment.',
  },
  {
    number: '03',
    category: 'DISCOURSE',
    title: 'Intentional Communication',
    description:
      'Learning to speak clearly, listen without defensiveness, and handle difficult conversations with care and honesty.',
  },
  {
    number: '04',
    category: 'CONNECTION',
    title: 'Team Dynamics',
    description:
      'Strengthening trust, empathy, and shared understanding so teams collaborate with less friction and more ease.',
  },
];

export default function OrganisationsPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* SECTION 1: HERO */}
      <section className="w-full px-6 lg:px-16 pt-12 lg:pt-20 pb-16 lg:pb-24 bg-surface border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="sand" dot>
              Corporate Offering
            </Badge>
            <h1 className="font-serif text-display-lg-mobile lg:text-display-lg text-primary tracking-tight font-normal">
              Leading with the heart, not just the numbers.
            </h1>
            <p className="font-sans text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Organisations invest heavily in skills and strategy, yet leaders and teams often carry pressure, friction, and disconnection quietly. SoulfulI brings emotional intelligence, self-awareness, and human-centred communication into the way people work and lead.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="#consultation" variant="primary" size="lg" className="rounded-full">
                Discuss a Corporate Program
              </Button>
              <Button href="#threads" variant="secondary" size="lg" className="rounded-full">
                Explore Our Approach
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-border-alt bg-surface-alt">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Leaders and team members engaged in calm, thoughtful dialogue"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 CORE COMPETENCIES */}
      <section id="threads" className="w-full py-20 lg:py-32 bg-surface-alt-gradient border-b border-border-alt scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 space-y-16">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Four Pillars of Human-Centred Leadership"
            subtitle="Modular programs tailored for emerging leaders, managers, and whole teams."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporatePillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-surface p-8 rounded-xl border border-border-alt space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
                      {pillar.number} / {pillar.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-headline-md text-primary font-normal">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-border-alt/60 text-xs font-sans text-outline uppercase tracking-wider">
                  Program Module
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PARTNERSHIP FORM */}
      <section id="consultation" className="w-full py-20 lg:py-32 bg-surface scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Badge variant="sand" dot>
                Organisational Partnership
              </Badge>
              <h2 className="font-serif text-headline-lg lg:text-display-lg text-primary tracking-tight font-normal">
                Discuss a Program for Your Organisation
              </h2>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                Connect with our team to explore workshops, leadership programs, or team development engagements.
              </p>
            </div>

            <div className="bg-surface-alt p-6 lg:p-10 rounded-2xl border border-border-alt shadow-sm">
              <OrganisationEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
