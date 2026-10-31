import React from 'react';
import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Compass, Feather } from 'lucide-react';
import OfferingsSection from '@/components/home/OfferingsSection';
import HeroVideo from '@/components/shared/HeroVideo';
import {
  ImageSection,
  ImageEyebrow,
  ImageHeading,
  ImageParagraph,
} from '@/components/shared/ImageSection';

export const metadata: Metadata = {
  title: 'Soulfuli — Understand yourself deeply enough to live differently',
  description:
    'Soulfuli connects emotional intelligence, mindfulness, and spirituality into one grounded journey toward self-awareness and intentional living.',
};

export default function HomePage() {
  return (
    <main className="w-full flex flex-col items-center">

      {/* =================================================== */}
      {/* SECTION 1: HERO (THE INVITATION)                     */}
      {/* =================================================== */}
      <section className="relative w-full overflow-hidden bg-surface pt-12 lg:pt-20 pb-20 lg:pb-32 border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">
              <Badge variant="sand" dot>
                An Invitation to Return
              </Badge>

              <h1 className="font-serif text-display-lg-mobile lg:text-[62px] lg:leading-[70px] text-primary tracking-tight font-normal">
                Understand yourself deeply enough to <span className="italic font-normal">live differently</span>.
              </h1>

              <p className="font-sans text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                The space between knowing and becoming. Soulfuli integrates emotional intelligence, mindfulness, and intentional spirituality into one grounded, unhurried journey.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button href="/eq-audit" variant="primary" size="lg" className="rounded-full">
                  Take the EQ Audit
                </Button>
                <Button href="/our-story" variant="secondary" size="lg" className="rounded-full">
                  Explore Our Story
                </Button>
              </div>

              <div className="pt-6 flex items-center gap-6 text-xs text-on-surface-variant/80 border-t border-outline-variant/40 w-full">
                <div className="flex items-center gap-2">
                  <Feather className="w-4 h-4 text-secondary" />
                  <span>A mirror, not a verdict</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-secondary" />
                  <span>48 reflective dimensions</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_64px_-16px_rgba(31,42,36,0.22)] border border-border-alt/80 bg-surface-alt group">
                <div className="relative h-full min-h-[520px] w-full overflow-hidden">
                  <HeroVideo
                    videoSrc="/video/tree.mp4"
                    posterSrc="/images/t1.webp"
                    alt="Quiet Contemplation beside ancient tree"
                    imageClassName="transition-transform duration-1000 ease-out group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/15 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/25 to-transparent pointer-events-none" />
                </div>

                {/* Editorial Glass Caption Badge */}
                <div className="absolute bottom-5 left-5 right-5 z-10 bg-[#1F2A24]/50 backdrop-blur-md rounded-xl p-4 border border-white/15 text-white shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-white/80 font-medium">
                      Quiet Contemplation
                    </span>
                  </div>
                  <p className="font-serif text-[17px] text-[#FDFBF7] italic leading-snug">
                    &ldquo;When the external noise quiets, your real life begins.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* SECTION 2: AN OLD IDEA, MADE PRACTICAL AGAIN        */}
      {/* =================================================== */}
      <ImageSection
        src="/image/phili.webp"
        alt="Serene person meditating beside calm water at dusk"
        objectPosition="center 62%"
        overlayVariant="warm-sunset"
        enableSubtleZoom={true}
        className="border-b border-border-alt text-white"
        containerClassName="py-24 lg:py-36"
      >
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start text-white">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 text-white">
              <ImageEyebrow className="text-white">
                Our Philosophy
              </ImageEyebrow>

              <ImageHeading as="h2" className="text-[34px] sm:text-[40px] lg:text-[48px] lg:leading-[1.12] text-white">
                An Old Idea, Made Practical Again
              </ImageHeading>

              <div className="w-16 h-0.5 bg-white/80 rounded-full" aria-hidden="true" />
            </div>

            <div className="lg:col-span-7 space-y-7 pt-2 lg:pt-3 text-white">
              <p className="font-serif text-lg sm:text-xl lg:text-[21px] leading-[1.65] text-white font-normal italic editorial-shadow max-w-[58ch]">
                None of this is new. Traditions far older than the modern wellness
                industry already understood that the mind, the heart, and the spirit
                were never separate departments. What has changed is how disconnected
                our daily lives have become from that understanding.
              </p>

              <ImageParagraph className="text-base sm:text-lg text-white/95 leading-[1.8] max-w-[58ch]">
                We are not introducing a new philosophy. We are translating an old one
                into a language that fits a Monday morning, a difficult conversation,
                a leadership decision, a classroom, a quiet evening alone with your
                own thoughts.
              </ImageParagraph>

              <ImageParagraph className="text-base sm:text-lg text-white/95 leading-[1.8] max-w-[58ch]">
                This is what we mean when we say Soulfuli sits at the intersection of
                Emotional Intelligence, spirituality, and mindfulness. Not three
                separate offerings stacked side by side, but one continuous practice
                of paying attention, first to yourself, then to the people around you,
                then to whatever it is you are here to do.
              </ImageParagraph>
            </div>
          </div>
        </div>
      </ImageSection>

      {/* =================================================== */}
      {/* SECTION 3: WHAT WE OFFER                            */}
      {/* =================================================== */}
      <OfferingsSection />

      {/* =================================================== */}
      {/* SECTION 4: WHY WE ARE DIFFERENT                     */}
      {/* =================================================== */}
      <section className="w-full bg-surface-alt-gradient border-b border-border-alt">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="sand" dot>
                Our Difference
              </Badge>

              <h2 className="font-serif text-headline-lg lg:text-display-md text-primary font-normal leading-tight">
                Why We Are Different
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 font-sans text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                We do not treat spirituality as a mood board, mindfulness as a
                five-minute app notification, or emotional intelligence as a
                productivity hack for the workplace.
              </p>

              <p>
                We treat all three as disciplines, practical, learnable, and grounded
                in real life rather than performance.
              </p>

              <p>
                Every framework we teach has been lived before it was taught. Every
                practice we offer is meant to be carried home, not left behind in the
                workshop room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* SECTION 5: COMMUNITY / CLOSING INVITATION            */}
      {/* =================================================== */}
      <ImageSection
        src="/images/buddha-forest.webp"
        alt="Buddha statue nestled peacefully within lush forest canopy with sunbeams and misty waterfall"
        objectPosition="center 30%"
        overlayVariant="forest-sanctuary"
        enableSubtleZoom={true}
        blendEdges={true}
        className="border-b border-outline-variant/30 text-white"
        containerClassName="py-24 lg:py-36"
      >
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column: Heading, Eyebrow & Pull Quote */}
            <div className="lg:col-span-5 space-y-7 lg:sticky lg:top-28">
              <ImageEyebrow dot className="text-[#F6F0E5] border-white/25 bg-white/[0.12] backdrop-blur-md">
                Join Our Community
              </ImageEyebrow>

              <ImageHeading as="h2" className="text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.12] text-[#F6F0E5] font-normal tracking-tight">
                Be Part of
                <br />
                <span className="italic font-normal">What Comes Next</span>
              </ImageHeading>

              <div className="w-16 h-0.5 bg-[#B8C7B9]/70 rounded-full" aria-hidden="true" />

              {/* Italic Quotation Callout */}
              <div className="pt-2 pl-4 border-l-2 border-[#B8C7B9]/50">
                <p className="font-serif text-lg sm:text-xl lg:text-[21px] text-[#F6F0E5] italic leading-[1.45] editorial-shadow max-w-[34ch]">
                  &ldquo;The gap between where you are and where you can be is not a flaw.
                  It is an invitation.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column: Narrative Copy, Reflection & Actions */}
            <div className="lg:col-span-7 space-y-8 pt-1 lg:pt-3">
              <div className="space-y-6">
                <ImageParagraph className="text-base sm:text-lg text-[#F6F0E5]/95 leading-[1.8] max-w-[56ch]">
                  Soulfuli is growing into a community, not just a company. As our tools,
                  courses, workshops, and retreats go live, we want the people who
                  believe in this work to be the first to know, the first to join, and
                  eventually, the first to help shape it.
                </ImageParagraph>

                <ImageParagraph className="text-base sm:text-lg text-[#F6F0E5]/85 leading-[1.8] max-w-[56ch]">
                  So we will leave you with the question we keep asking ourselves. If
                  your mind, your heart, and your spirit were finally allowed to grow in
                  the same direction at the same time, what might change first?
                </ImageParagraph>
              </div>

              {/* Calls to Action */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/eq-audit"
                  variant="ivory"
                  size="lg"
                  className="rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-medium"
                >
                  Take the EQ Audit
                </Button>

                <Button
                  href="/community"
                  variant="whiteOutline"
                  size="lg"
                  className="rounded-full backdrop-blur-sm hover:bg-white/15 transition-all duration-300 font-medium"
                >
                  Join the Community
                </Button>
              </div>

              {/* Follow Along / Social Links */}
              <p className="font-sans text-xs sm:text-sm text-[#F6F0E5]/75 max-w-[54ch] pt-1">
                Follow along on{' '}
                <a
                  href="https://www.instagram.com/Soulfuli_official?obrf=NzlubWljcXcwbW9o&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[#F6F0E5] text-[#F6F0E5]/90 transition-colors"
                  aria-label="Follow SoulfullI on Instagram"
                >
                  Instagram
                </a>{' '}
                and{' '}
                <a
                  href="https://www.linkedin.com/company/Soulfuli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[#F6F0E5] text-[#F6F0E5]/90 transition-colors"
                  aria-label="Connect with SoulfullI on LinkedIn"
                >
                  LinkedIn
                </a>
                . Join the community when the doors open.
              </p>
            </div>
          </div>
        </div>
      </ImageSection>

    </main>
  );
}