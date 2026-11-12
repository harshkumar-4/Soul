import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import SectionHeading from '@/components/shared/SectionHeading';
import ClosingCTA from '@/components/shared/ClosingCTA';
import {
  ImageSection,
  ImageEyebrow,
  ImageHeading,
  ImageParagraph,
} from '@/components/shared/ImageSection';
import { createPageMetadata } from '@/lib/seo/metadata';
import { getBlurProps } from '@/lib/media/imagePlaceholders';

export const metadata: Metadata = createPageMetadata({
  title: 'What Makes Us Different — Soulfuli',
  description:
    'Discover how Soulfuli brings emotional intelligence, mindfulness, spirituality, lived experience, and Indian wisdom together.',
  path: '/what-makes-us-different',
});

const differentiators = [
  {
    number: '01',
    title: 'We Refuse to Separate the Mind, the Heart, and the Spirit',
    description:
      'Most Emotional Intelligence programmes stop at the workplace. Most spiritual offerings stop at the self. Most mindfulness content stops at an app notification. Soulfuli was built in the space between all three, because we do not believe those boundaries reflect how people actually experience their lives.',
    image: '/image/1.webp',
    imageAlt: 'Silhouette standing on a calm beach at sunset with arms open toward the horizon',
  },
  {
    number: '02',
    title: 'Practical Spirituality, Not Performance Spirituality',
    description:
      'We approach spirituality as a journey of self-discovery, meaning, and connection, not a set of rules to follow or a brand aesthetic to adopt. Our spaces for reflection, meditation, and conscious living are intentionally non-dogmatic, so that people from every belief system can engage with purpose and interconnectedness on their own terms.',
    image: '/image/phili.webp',
    imageAlt: 'Silent figure meditating over tranquil blue dusk water',
  },
  {
    number: '03',
    title: 'Mindfulness as Practice, Not Product',
    description:
      'We do not treat mindfulness as a feature to bolt onto a workshop. It is the discipline of noticing—breath, body, emotion, moment—that runs underneath everything else we teach. Every session, retreat, and course we design carries mindfulness as its foundation, not its garnish.',
    image: '/image/2.webp',
    imageAlt: 'Person seated cross-legged on dark coastal rocks overlooking the evening ocean',
  },
  {
    number: '04',
    title: 'Lived Experience Over Borrowed Theory',
    description:
      'Our facilitators do not teach emotional intelligence from a place of having mastered it. They teach it as people still practising it, using real chapters of real lives to illustrate each competency, so participants encounter self-awareness, empathy, and emotional agility as lived realities rather than definitions on a slide.',
    image: '/image/grp.jpeg',
    imageAlt: 'Three young adults seated outdoors in authentic, unhurried dialogue',
  },
  {
    number: '05',
    title: 'Indian Wisdom, Modern Application',
    description:
      "Through our collaboration with Window to Bharat, we bring India's long-standing traditions of inner balance, holistic healing, and mindful living into contemporary settings, corporate teams, college classrooms, and personal growth journeys, without diluting either the tradition or the science.",
    image: '/image/farm.jpeg',
    imageAlt: 'People working harmoniously in golden fields beneath forested Indian foothills',
  },
  {
    number: '06',
    title: 'Holistic by Design, Not by Add-On',
    description:
      'Yoga, meditation, emotional intelligence training, village immersion, nature connection, and reflective community—these are not separate modules bolted together. They are treated as one integrated way of being, because emotional health, spiritual grounding, and everyday living were never meant to be managed in separate compartments.',
    image: '/image/33.webp',
    imageAlt: 'Figure meditating on a wooden dock over a still lake at golden dawn',
  },
  {
    number: '07',
    title: 'Community Over Content',
    description:
      "We are not building a library of content to be consumed and forgotten. We are building a community that shows up for each other's growth, through the EQ Audit, through courses, through workshops, through retreats, and through the conversations that continue long after each of those ends.",
    image: '/image/group.jpeg',
    imageAlt: 'Friends gathered peacefully together on a mountain ridge at sunset',
  },
];

export default function WhatMakesUsDifferentPage() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* HERO SECTION */}
      <ImageSection
        src="/images/buddha-forest.webp"
        alt="Moss-covered meditating stone statue in a tranquil sunlit green forest sanctuary"
        objectPosition="center 45%"
        overlayVariant="directional"
        enableSubtleZoom={true}
        priority
        className="border-b border-outline-variant/60"
        containerClassName="w-full px-6 lg:px-16 pt-28 lg:pt-40 pb-28 lg:pb-40"
      >
        <div className="max-w-[1240px] mx-auto space-y-7 text-white">
          <ImageEyebrow className="text-white">
            Why We Are Different
          </ImageEyebrow>

          <ImageHeading as="h1" className="max-w-5xl text-display-lg-mobile lg:text-[56px] lg:leading-[64px] text-white">
            We Do Not Separate the Mind, the Heart, and the Spirit.
          </ImageHeading>

          <div className="w-16 h-0.5 bg-white/80 rounded-full" aria-hidden="true" />

          <ImageParagraph className="max-w-3xl text-body-lg text-white/95 leading-[1.8]">
            We do not treat spirituality as a mood board, mindfulness as a
            five-minute app notification, or emotional intelligence as a
            productivity hack for the workplace.
          </ImageParagraph>
        </div>
      </ImageSection>

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
      <section className="relative w-full overflow-hidden bg-surface-alt-gradient py-20 lg:py-32 border-b border-border-alt">

        <Image
          src="/images/m1.webp"
          alt=""
          fill
          loading="lazy"
          quality={55}
          sizes="100vw"
          className="object-cover object-center opacity-[0.06] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-16 space-y-16">

          <SectionHeading
            align="center"
            eyebrow="The Soulfuli Difference"
            title="Seven principles that shape our approach."
            subtitle="A different way of understanding emotional intelligence, mindfulness, spirituality, and human growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {differentiators.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden rounded-2xl bg-surface border border-border-alt shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden bg-surface-alt">

                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 92vw, 380px"
                    {...getBlurProps(item.image)}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <span className="absolute top-5 left-5 font-serif text-4xl font-light text-white/80">
                    {item.number}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-7 lg:p-8 space-y-5">

                  <h3 className="font-serif text-2xl lg:text-3xl text-primary font-normal leading-tight">
                    {item.title}
                  </h3>

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

    </div>
  );
}