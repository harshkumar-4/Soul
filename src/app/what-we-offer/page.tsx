import React from 'react';
import type { Metadata } from 'next';
import { offeringsData } from '@/content/offerings';
import SectionHeading from '@/components/shared/SectionHeading';
import OfferingCard from '@/components/shared/OfferingCard';
import ClosingCTA from '@/components/shared/ClosingCTA';
import {
  ImageSection,
  ImageEyebrow,
  ImageHeading,
  ImageParagraph,
} from '@/components/shared/ImageSection';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'What We Offer — Soulfuli Ecosystem',
  description:
    'Explore the Soulfuli ecosystem: EQ Audit self-discovery mirror, Quiet Bloom Himalayan retreat, Schools & Colleges curriculum, and organisational culture transformation.',
  path: '/what-we-offer',
});

export default function WhatWeOfferPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* SECTION 1: HERO */}
      <ImageSection
        src="/image/sky.jpeg"
        alt="Solitary figure walking along a green hillside path toward misty hills"
        objectPosition="center 52%"
        overlayVariant="directional"
        enableSubtleZoom={true}
        priority
        className="border-b border-outline-variant/60"
        containerClassName="w-full px-6 lg:px-16 pt-24 lg:pt-36 pb-24 lg:pb-36"
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

      {/* SECTION 2: THE SOULFULI ECOSYSTEM */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden border-b border-border-alt bg-surface-alt-gradient">
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-16 space-y-14">
          <SectionHeading
            align="center"
            eyebrow="The Soulfuli Ecosystem"
            title="Ways to begin your journey"
            subtitle="One ecosystem. Four distinct pathways. Begin where you are and grow at your own pace."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offeringsData.map((offering) => (
              <OfferingCard
                key={offering.id}
                title={offering.title}
                tagline={offering.tagline}
                description={offering.fullDescription}
                href={offering.href}
                badgeText={offering.badgeText}
                badgeVariant={offering.badgeVariant}
                imageSrc={offering.imageSrc}
                imageAlt={offering.imageAlt}
                features={offering.outcomes}
                ctaText="Explore Pathway"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CLOSING CTA */}
      <ClosingCTA />
    </div>
  );
}
