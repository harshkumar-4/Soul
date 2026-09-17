import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/shared/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ClosingCTA from '@/components/shared/ClosingCTA';

export const metadata: Metadata = {
  title: 'Inner Compass — SoulfulI Guided Development Program',
  description:
    'A guided 5-pillar developmental program moving from self-knowledge to clear, non-reactive communication and purposeful presence.',
};

const modules = [
  {
    id: 'module-1',
    index: '01',
    title: 'Know Yourself (The Internal Climate)',
    subtitle: 'Observing habitual emotional reactions and defense mechanisms.',
    content: (
      <div className="space-y-3">
        <p>
          Before we can change how we respond to friction, we must develop the stillness to observe ourselves accurately. This module introduces body-centered attunement and the vocabulary of nuanced emotion.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-on-surface-variant">
          <li>Naming sensations before they turn into reactive thoughts</li>
          <li>Mapping your personal trigger topography</li>
          <li>The practice of the morning check-in</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'module-2',
    index: '02',
    title: 'Choose Yourself (Nervous System Stewardship)',
    subtitle: 'Creating deliberate pause between stimulus and response.',
    content: (
      <div className="space-y-3">
        <p>
          Reactivity is an automatic biological cascade. This module teaches micro-grounding practices to regulate the vagus nerve and restore cognitive choice in high-stakes moments.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-on-surface-variant">
          <li>Three-breath pause protocol during acute stress</li>
          <li>Slowing down decision velocity without losing momentum</li>
          <li>Disentangling healthy boundaries from defensive withdrawal</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'module-3',
    index: '03',
    title: 'See Others (Radical Empathy & Attunement)',
    subtitle: 'Listening beneath the spoken word to feel another’s reality.',
    content: (
      <div className="space-y-3">
        <p>
          Moving beyond polite listening into true relational resonance. Learning to hear what a colleague, partner, or friend is experiencing without immediately offering advice or defensiveness.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-on-surface-variant">
          <li>Listening for emotional subtext rather than debate points</li>
          <li>Validation without requiring total agreement</li>
          <li>Holding space for grief, anger, and ambiguity in others</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'module-4',
    index: '04',
    title: 'Read the Room (Social Field & Group Dynamics)',
    subtitle: 'Navigating unspoken team hierarchies and emotional climates.',
    content: (
      <div className="space-y-3">
        <p>
          Every meeting, family room, and boardroom has an emotional climate. Learn to sense group anxiety, defuse collective tension, and contribute steady presence.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-on-surface-variant">
          <li>Sensing unspoken alliances and collective friction</li>
          <li>De-escalating group reactivity through grounded calm</li>
          <li>Creating psychological safety for quiet participants</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'module-5',
    index: '05',
    title: 'Speak with Intention (Clear, Compassionate Truth)',
    subtitle: 'Mastering courageous, direct dialogue without cruelty or passive aggression.',
    content: (
      <div className="space-y-3">
        <p>
          The culmination of inner development is outer expression. Deliver clean feedback, express real vulnerability, and navigate conflict with unyielding relational care.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-on-surface-variant">
          <li>Direct feedback frameworks that preserve human dignity</li>
          <li>Clean apologies without justifying excuses</li>
          <li>Aligning public speech with private intention</li>
        </ul>
      </div>
    ),
  },
];

export default function InnerCompassPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* SECTION 1: HERO */}
      <section className="w-full px-6 lg:px-16 pt-12 lg:pt-20 pb-16 lg:pb-24 bg-surface border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="forest" dot>
              Guided Developmental Program
            </Badge>
            <h1 className="font-serif text-display-lg-mobile lg:text-display-lg text-primary tracking-tight font-normal">
              Inner Compass
            </h1>
            <p className="font-serif text-xl text-secondary italic font-normal">
              The space between knowing and becoming.
            </p>
            <p className="font-sans text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              A 5-pillar cohort experience designed to transform how you navigate friction, communicate with clarity, and inhabit your daily leadership and life.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/contact?program=inner-compass" variant="primary" size="lg" className="rounded-full">
                Join Next Cohort
              </Button>
              <Button href="#curriculum" variant="secondary" size="lg" className="rounded-full">
                Explore Curriculum
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-outline-variant/60 bg-surface-container">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
                alt="Quiet contemplative practice and journaling in morning sunlight"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 5 MODULE CURRICULUM */}
      <section id="curriculum" className="w-full py-20 lg:py-32 bg-surface-container-low border-b border-outline-variant/60 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 space-y-16">
          <SectionHeading
            eyebrow="The 5 Pillars"
            title="The Inner Compass Curriculum"
            subtitle="Five progressive modules moving from self-awareness to courageous external resonance."
          />

          <div className="bg-surface p-6 lg:p-10 rounded-2xl border border-outline-variant/60 shadow-sm max-w-4xl mx-auto">
            <Accordion items={modules} allowMultiple={false} />
          </div>
        </div>
      </section>

      {/* SECTION 3: COHORT DETAILS */}
      <section className="w-full py-20 lg:py-28 bg-surface border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/60 space-y-2">
              <span className="font-serif text-3xl text-primary font-normal">8 Weeks</span>
              <p className="font-sans text-xs uppercase tracking-wider text-secondary font-semibold">
                Cohort Duration
              </p>
              <p className="font-sans text-xs text-on-surface-variant">
                Weekly 90-minute live interactive circles + weekly micro-inquiries
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/60 space-y-2">
              <span className="font-serif text-3xl text-primary font-normal">16 Participants</span>
              <p className="font-sans text-xs uppercase tracking-wider text-secondary font-semibold">
                Intimate Sizing
              </p>
              <p className="font-sans text-xs text-on-surface-variant">
                Small cohort ensures deep personal attunement and mutual trust
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/60 space-y-2">
              <span className="font-serif text-3xl text-primary font-normal">1-on-1 Mentorship</span>
              <p className="font-sans text-xs uppercase tracking-wider text-secondary font-semibold">
                Individual Reflection
              </p>
              <p className="font-sans text-xs text-on-surface-variant">
                Dedicated mid-point diagnostic deep-dive on your EQ profile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CLOSING CTA */}
      <ClosingCTA
        eyebrow="Cohort Enrollment"
        title="Ready to begin your guided journey?"
        description="Cohorts run quarterly. Submit an inquiry to receive full curriculum logistics and upcoming schedule."
        primaryCtaText="Inquire About Inner Compass"
        primaryCtaHref="/contact?program=inner-compass"
        secondaryCtaText="Take EQ Audit First"
        secondaryCtaHref="/eq-audit"
      />
    </div>
  );
}
