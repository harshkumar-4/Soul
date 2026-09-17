import React from 'react';
import type { Metadata } from 'next';
import { offeringsData } from '@/content/offerings';
import SectionHeading from '@/components/shared/SectionHeading';
import OfferingCard from '@/components/shared/OfferingCard';
import ClosingCTA from '@/components/shared/ClosingCTA';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'What We Offer — SoulfulI Ecosystem',
  description:
    'Explore the SoulfulI ecosystem: EQ Audit self-discovery mirror, Inner Compass guided development, Quiet Bloom Himalayan retreat, Schools & Colleges curriculum, and organisational culture transformation.',
};

export default function WhatWeOfferPage() {
  return (
    <main className="w-full flex flex-col items-center">

      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden border-b border-outline-variant/60">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=75')",
          }}
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-[#18251f]/65" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18251f]/80 via-[#18251f]/50 to-transparent" />

        <div className="relative z-10 w-full px-6 lg:px-16 pt-24 lg:pt-36 pb-24 lg:pb-36">
          <div className="max-w-[1240px] mx-auto space-y-7">

            <Badge variant="sage" dot>
              Ecosystem Overview
            </Badge>

            <h1 className="font-serif text-display-lg-mobile lg:text-display-lg text-white tracking-tight font-normal max-w-4xl">
              Portals into self-knowledge and intentional living.
            </h1>

            <p className="font-sans text-body-lg text-white/80 max-w-2xl leading-relaxed">
              Whether you are beginning with personal self-discovery,
              stepping into a mountain retreat, or transforming how your
              organisation communicates, SoulfulI offers grounded human
              pathways.
            </p>

          </div>
        </div>
      </section>

      {/* SECTION 2: OFFERINGS */}
      {/* SECTION 2: THE SOULFULI ECOSYSTEM */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden border-b border-outline-variant/60">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=75')",
          }}
        />

        <div className="absolute inset-0 bg-surface-container-low/90" />

        <div className="relative z-10 space-y-12">

          {/* Heading */}
          <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
            <SectionHeading
              align="center"
              eyebrow="The SoulfulI Ecosystem"
              title="Ways to begin your journey"
              subtitle="One ecosystem. Different pathways. A more intentional way of living."
            />
          </div>

          {/* Moving Cards */}
          <div className="relative w-full overflow-hidden">

            <div className="flex w-max gap-6 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">

              {[...offeringsData, ...offeringsData].map((offering, index) => (
                <a
                  key={`${offering.id}-${index}`}
                  href={offering.href}
                  className="group relative flex h-[280px] w-[280px] shrink-0 flex-col justify-end overflow-hidden rounded-2xl border border-white/20 bg-surface-container-low shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >

                  {/* Card Image */}
                  <img
                    src={offering.imageSrc}
                    alt={offering.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                </a>
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

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=75')",
          }}
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-surface/90" />

        <div className="relative z-10 max-w-[1120px] mx-auto px-6 lg:px-12 space-y-12">

          <SectionHeading
            align="center"
            eyebrow="Where to Begin"
            title="Find your natural point of entry"
            subtitle="Choose the pathway that reflects where you are right now."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* EQ Audit */}
            <div className="group min-h-[230px] rounded-2xl border border-outline-variant/60 bg-surface-container-low/95 backdrop-blur-sm p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

            {/* Quiet Bloom */}
            <div className="group min-h-[230px] rounded-2xl border border-outline-variant/60 bg-surface-container-low/95 backdrop-blur-sm p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

            {/* Organisations */}
            <div className="group min-h-[230px] rounded-2xl border border-outline-variant/60 bg-surface-container-low/95 backdrop-blur-sm p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

            {/* Education */}
            <div className="group min-h-[230px] rounded-2xl border border-outline-variant/60 bg-surface-container-low/95 backdrop-blur-sm p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

          </div>
        </div>
      </section>

      {/* SECTION 4: CLOSING CTA */}
      <ClosingCTA />

    </main>
  );
}
