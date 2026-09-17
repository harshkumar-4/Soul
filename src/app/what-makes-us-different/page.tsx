import React from 'react';
import type { Metadata } from 'next';

import SectionHeading from '@/components/shared/SectionHeading';
import ClosingCTA from '@/components/shared/ClosingCTA';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'What Makes Us Different — SoulfulI',
  description:
    'Discover how SoulfulI brings emotional intelligence, mindfulness, spirituality, lived experience, and Indian wisdom together.',
};

const differentiators = [
  {
    number: '01',
    title: 'We Refuse to Separate the Mind, the Heart, and the Spirit',
    description:
      'Most Emotional Intelligence programmes stop at the workplace. Most spiritual offerings stop at the self. Most mindfulness content stops at an app notification. SoulfulI was built in the space between all three, because we do not believe those boundaries reflect how people actually experience their lives.',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=75',
  },
  {
    number: '02',
    title: 'Practical Spirituality, Not Performance Spirituality',
    description:
      'We approach spirituality as a journey of self-discovery, meaning, and connection, not a set of rules to follow or a brand aesthetic to adopt. Our spaces for reflection, meditation, and conscious living are intentionally non-dogmatic, so that people from every belief system can engage with purpose and interconnectedness on their own terms.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=75',
  },
  {
    number: '03',
    title: 'Mindfulness as Practice, Not Product',
    description:
      'We do not treat mindfulness as a feature to bolt onto a workshop. It is the discipline of noticing—breath, body, emotion, moment—that runs underneath everything else we teach. Every session, retreat, and course we design carries mindfulness as its foundation, not its garnish.',
    image:
      'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800&q=75',
  },
  {
    number: '04',
    title: 'Lived Experience Over Borrowed Theory',
    description:
      'Our facilitators do not teach emotional intelligence from a place of having mastered it. They teach it as people still practising it, using real chapters of real lives to illustrate each competency, so participants encounter self-awareness, empathy, and emotional agility as lived realities rather than definitions on a slide.',
    image:
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=75',
  },
  {
    number: '05',
    title: 'Indian Wisdom, Modern Application',
    description:
      "Through our collaboration with Window to Bharat, we bring India's long-standing traditions of inner balance, holistic healing, and mindful living into contemporary settings, corporate teams, college classrooms, and personal growth journeys, without diluting either the tradition or the science.",
    image:
      'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=75',
  },
  {
    number: '06',
    title: 'Holistic by Design, Not by Add-On',
    description:
      'Yoga, meditation, emotional intelligence training, village immersion, nature connection, and reflective community—these are not separate modules bolted together. They are treated as one integrated way of being, because emotional health, spiritual grounding, and everyday living were never meant to be managed in separate compartments.',
    image:
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=75',
  },
  {
    number: '07',
    title: 'Community Over Content',
    description:
      "We are not building a library of content to be consumed and forgotten. We are building a community that shows up for each other's growth, through the EQ Audit, through courses, through workshops, through retreats, and through the conversations that continue long after each of those ends.",
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=75',
  },
];

export default function WhatMakesUsDifferentPage() {
  return (
    <main className="w-full flex flex-col items-center">

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden border-b border-outline-variant/60">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2400&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#17231d]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17231d]/95 via-[#17231d]/70 to-transparent" />

        <div className="relative z-10 w-full px-6 lg:px-16 pt-24 lg:pt-36 pb-24 lg:pb-36">
          <div className="max-w-[1240px] mx-auto space-y-7">

            <Badge variant="terracotta" dot>
              WHY WE ARE DIFFERENT
            </Badge>

            <h1 className="max-w-5xl font-serif text-display-lg-mobile lg:text-display-lg text-white tracking-tight font-normal leading-tight">
              We Do Not Separate the Mind, the Heart, and the Spirit.
            </h1>

            <p className="max-w-3xl font-sans text-body-lg text-white/80 leading-relaxed">
              We do not treat spirituality as a mood board, mindfulness as a
              five-minute app notification, or emotional intelligence as a
              productivity hack for the workplace.
            </p>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="w-full bg-surface py-20 lg:py-28 border-b border-outline-variant/60">
        <div className="max-w-[900px] mx-auto px-6 lg:px-16 text-center space-y-6">

          <p className="font-serif text-2xl lg:text-4xl leading-relaxed text-primary font-normal">
            We treat all three as disciplines—practical, learnable, and
            grounded in real life rather than performance.
          </p>

          <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
            Every framework we teach has been lived before it was taught.
            Every practice we offer is meant to be carried home, not left
            behind in the workshop room.
          </p>

        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-20 lg:py-32 border-b border-outline-variant/60">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=80')",
          }}
        />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-16 space-y-16">

          <SectionHeading
            align="center"
            eyebrow="The SoulfulI Difference"
            title="Seven principles that shape our approach."
            subtitle="A different way of understanding emotional intelligence, mindfulness, spirituality, and human growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {differentiators.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden rounded-2xl bg-surface border border-outline-variant/60 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <span className="absolute top-5 left-5 font-serif text-4xl font-light text-white/80">
                    {item.number}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-7 lg:p-8 space-y-5">

                  <h2 className="font-serif text-2xl lg:text-3xl text-primary font-normal leading-tight">
                    {item.title}
                  </h2>

                  <div className="h-px w-12 bg-terracotta transition-all duration-500 group-hover:w-24" />

                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* CLOSING MESSAGE */}
      <section className="w-full bg-surface py-20 lg:py-28 border-b border-outline-variant/60">
        <div className="max-w-[900px] mx-auto px-6 lg:px-16 text-center space-y-6">

          <span className="font-sans text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
            A Different Way Forward
          </span>

          <h2 className="font-serif text-3xl lg:text-5xl text-primary font-normal leading-tight">
            Growth is not a checklist.
          </h2>

          <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
            It is a practice that becomes part of how we live, relate,
            decide, and show up in the world.
          </p>

        </div>
      </section>

      {/* CTA */}
      <ClosingCTA
        eyebrow="Experience the Difference"
        title="Start by seeing where you are."
        description="The EQ Audit offers a clearer mirror into your emotional patterns. Not a verdict, but an invitation to grow."
        primaryCtaText="Take the EQ Audit"
        primaryCtaHref="/eq-audit"
        secondaryCtaText="Read Our Story"
        secondaryCtaHref="/our-story"
      />

    </main>
  );
}