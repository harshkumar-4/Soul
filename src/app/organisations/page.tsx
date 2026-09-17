import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/shared/SectionHeading';
import OrganisationEnquiryForm from '@/components/forms/OrganisationEnquiryForm';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Organisations & Leadership — SoulfulI Enterprise Programs',
  description:
    'Non-reactive leadership in complex times. Transforming enterprise workplace culture through grounded emotional intelligence, empathetic dialogue, and human-centered leadership.',
};

const leadershipCompetencies = [
  {
    number: '01',
    title: 'Self-Awareness Under Pressure',
    description: 'Recognizing immediate internal defense patterns before they drive executive reactivity.',
  },
  {
    number: '02',
    title: 'Emotional Regulation',
    description: 'The grounded ability to steady the nervous system rather than discharge panic outward into teams.',
  },
  {
    number: '03',
    title: 'Non-Reactive Leadership',
    description: 'Guiding others with clear discernment, patience, and stillness rather than defensive assertion.',
  },
  {
    number: '04',
    title: 'Honest, Clean Feedback',
    description: 'Articulating friction, doubt, and intention directly without cruelty, sarcasm, or ambiguity.',
  },
  {
    number: '05',
    title: 'Empathy & Resonance',
    description: 'Listening beyond spoken positions to hear the emotional truth under another’s perspective.',
  },
  {
    number: '06',
    title: 'Intentional Choices',
    description: 'Aligning high-stakes organizational decisions with enduring human values over short-term panic.',
  },
];

export default function OrganisationsPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* SECTION 1: HERO */}
      <section className="w-full px-6 lg:px-16 pt-12 lg:pt-20 pb-16 lg:pb-24 bg-surface border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="forest" dot>
              B2B Leadership & Culture
            </Badge>
            <h1 className="font-serif text-display-lg-mobile lg:text-display-lg text-primary tracking-tight font-normal">
              Non-reactive leadership in complex times.
            </h1>
            <p className="font-sans text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              When organizational pressure accelerates, unexamined emotional reactivity becomes toxic culture. SoulfulI partners with leadership teams to cultivate deep presence, psychological safety, and clear communication.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="#consultation" variant="primary" size="lg" className="rounded-full">
                Request a Consultation
              </Button>
              <Button href="#competencies" variant="secondary" size="lg" className="rounded-full">
                View Competencies
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-outline-variant/60 bg-surface-container">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Executive leadership team engaged in calm, focused strategic reflection"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 6 LEADERSHIP COMPETENCIES */}
      <section id="competencies" className="w-full py-20 lg:py-32 bg-surface-container-low border-b border-outline-variant/60 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 space-y-16">
          <SectionHeading
            eyebrow="The Capabilities"
            title="Six Pillars of Organizational Steadiness"
            subtitle="The core relational competencies required to lead high-performing teams without burnout."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipCompetencies.map((item) => (
              <div
                key={item.number}
                className="bg-surface p-7 rounded-xl border border-outline-variant/60 space-y-3 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2">
                  <span className="font-serif text-2xl text-secondary select-none font-light">
                    {item.number}
                  </span>
                  <h4 className="font-serif text-headline-sm text-primary font-normal">
                    {item.title}
                  </h4>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/30 text-[11px] font-sans text-outline uppercase tracking-wider">
                  Executive Competency
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROPOSAL REQUEST FORM */}
      <section id="consultation" className="w-full py-20 lg:py-32 bg-surface scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Badge variant="forest" dot>
                Enterprise Partnership
              </Badge>
              <h2 className="font-serif text-headline-lg lg:text-display-lg text-primary tracking-tight font-normal">
                Start an Executive Engagement
              </h2>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                Connect with our leadership practice lead to design a tailored executive intensive, department cohort, or cultural reset.
              </p>
            </div>

            <div className="bg-surface-container-low p-6 lg:p-10 rounded-2xl border border-outline-variant/60 shadow-sm">
              <OrganisationEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
