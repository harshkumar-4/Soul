import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { offeringsData } from '@/content/offerings';
import SectionHeading from '@/components/shared/SectionHeading';
import OfferingCard from '@/components/shared/OfferingCard';
import ClosingCTA from '@/components/shared/ClosingCTA';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import {
  ImageSection,
  ImageEyebrow,
  ImageHeading,
  ImageParagraph,
} from '@/components/shared/ImageSection';

export const metadata: Metadata = {
  title: 'What We Offer — Soulfuli Ecosystem',
  description:
    'Explore the Soulfuli ecosystem: EQ Audit self-discovery mirror, Quiet Bloom Himalayan retreat, Schools & Colleges curriculum, and organisational culture transformation.',
};

export default function WhatWeOfferPage() {
  return (
    <main className="w-full flex flex-col items-center">

      {/* SECTION 1: HERO */}
      <ImageSection
        src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=80"
        alt="Tranquil landscape overlooking rolling hills at golden hour"
        objectPosition="center 45%"
        overlayVariant="directional"
        enableSubtleZoom={true}
        priority
        className="border-b border-outline-variant/60"
        containerClassName="w-full px-6 lg:px-16 pt-28 lg:pt-40 pb-28 lg:pb-40"
      >
        <div className="max-w-[1240px] mx-auto space-y-7 text-white">
          <ImageEyebrow className="text-white">
            Ecosystem Overview
          </ImageEyebrow>

          <ImageHeading as="h1" className="text-display-lg-mobile lg:text-[56px] lg:leading-[64px] max-w-4xl text-white">
            Portals into self-knowledge and intentional living.
          </ImageHeading>

          <div className="w-16 h-0.5 bg-white/80 rounded-full" aria-hidden="true" />

          <ImageParagraph className="text-body-lg max-w-2xl text-white/95 leading-[1.8]">
            Whether you are beginning with personal self-discovery,
            stepping into a mountain retreat, or transforming how your
            organisation communicates, Soulfuli offers grounded human
            pathways.
          </ImageParagraph>
        </div>
      </ImageSection>

      {/* SECTION 2: THE Soulfuli ECOSYSTEM */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden border-b border-border-alt">

        {/* Background Atmosphere */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=75')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-alt/95 to-surface pointer-events-none" />

        <div className="relative z-10 space-y-12">

          {/* Heading */}
          <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
            <SectionHeading
              align="center"
              eyebrow="The Soulfuli Ecosystem"
              title="Ways to begin your journey"
              subtitle="One ecosystem. Different pathways. A more intentional way of living."
            />
          </div>

          {/* Moving Cards */}
          <div className="relative w-full overflow-hidden">

            <div className="flex w-max gap-6 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">

              {[...offeringsData, ...offeringsData].map((offering, index) => (
                <Link
                  key={`${offering.id}-${index}`}
                  href={offering.href}
                  className="group relative flex h-[280px] w-[280px] shrink-0 flex-col justify-end overflow-hidden rounded-2xl border border-white/20 bg-surface-alt shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >

                  {/* Card Image */}
                  <Image
                    src={offering.imageSrc}
                    alt={offering.title}
                    fill
                    loading="lazy"
                    sizes="280px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Card Content */}
                  <div className="relative z-10 p-6 text-white">

                    {offering.badgeText && (
                      <span className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-white/70">
                        {offering.badgeText}
                      </span>
                    )}

                    <h3 className="font-serif text-2xl font-normal leading-tight">
                      {offering.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between text-xs text-white/80">
                      <span>Explore Pathway</span>
                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                  </div>
                </Link>
              ))}

            </div>
          </div>

          {/* Supporting Text */}
          <p className="mx-auto max-w-xl px-6 text-center font-sans text-sm leading-relaxed text-on-surface-variant">
            Begin where you are. Grow at your own pace.
          </p>

        </div>
      </section>

      {/* SECTION 3: WHERE TO BEGIN */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden border-b border-outline-variant/60">

        {/* Background Atmosphere */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=75')",
          }}
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/95 to-surface pointer-events-none" />

        <div className="relative z-10 max-w-[1120px] mx-auto px-6 lg:px-12 space-y-12">

          <SectionHeading
            align="center"
            eyebrow="Where to Begin"
            title="Find your natural point of entry"
            subtitle="Choose the pathway that reflects where you are right now."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* EQ Audit */}
            <div className="group min-h-[230px] rounded-2xl border border-border-alt bg-surface-alt/95 backdrop-blur-sm p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-secondary font-semibold">
                  For Individuals
                </span>

                <h4 className="font-serif text-xl text-primary font-normal">
                  The EQ Audit
                </h4>

                <p className="text-xs leading-relaxed text-on-surface-variant">
                  A quiet diagnostic mirror for understanding your emotional
                  habits.
                </p>
              </div>

              <Button
                href="/eq-audit"
                variant="ghost"
                size="sm"
                className="self-start px-0"
              >
                Start Audit →
              </Button>
            </div>
            {/* Education */}
            <div className="group min-h-[230px] rounded-2xl border border-border-alt bg-surface-alt/95 backdrop-blur-sm p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-outline font-semibold">
                  For Education
                </span>

                <h4 className="font-serif text-xl text-primary font-normal">
                  Schools & Colleges
                </h4>

                <p className="text-xs leading-relaxed text-on-surface-variant">
                  Develop emotional literacy, mindful communication, and
                  resilience.
                </p>
              </div>

              <Button
                href="/schools-colleges"
                variant="ghost"
                size="sm"
                className="self-start px-0"
              >
                View Offerings →
              </Button>
            </div>
            {/* Organisations */}
            <div className="group min-h-[230px] rounded-2xl border border-border-alt bg-surface-alt/95 backdrop-blur-sm p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-forest font-semibold">
                  For Organisations
                </span>

                <h4 className="font-serif text-xl text-primary font-normal">
                  Teams & Leadership
                </h4>

                <p className="text-xs leading-relaxed text-on-surface-variant">
                  Support healthier communication, leadership, and workplace
                  culture.
                </p>
              </div>

              <Button
                href="/organisations"
                variant="ghost"
                size="sm"
                className="self-start px-0"
              >
                Explore Programs →
              </Button>
            </div>



            {/* Quiet Bloom */}
            <div className="group min-h-[230px] rounded-2xl border border-border-alt bg-surface-alt/95 backdrop-blur-sm p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-tertiary font-semibold">
                  For Deep Rest
                </span>

                <h4 className="font-serif text-xl text-primary font-normal">
                  Quiet Bloom
                </h4>

                <p className="text-xs leading-relaxed text-on-surface-variant">
                  A reflective retreat experience rooted in stillness and
                  restoration.
                </p>
              </div>

              <Button
                href="/quiet-bloom"
                variant="ghost"
                size="sm"
                className="self-start px-0"
              >
                View Retreat →
              </Button>
            </div>


          </div>
        </div>
      </section>

      {/* SECTION 4: CLOSING CTA */}
      <ClosingCTA />

    </main>
  );
}
