'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { offeringsData } from '@/content/offerings';
import { Compass, Feather, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  ImageSection,
  ImageEyebrow,
  ImageHeading,
  ImageParagraph,
  ImageFrostedPanel,
} from '@/components/shared/ImageSection';
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
                The space between knowing and becoming. SoulfulI integrates emotional intelligence, mindfulness, and intentional spirituality into one grounded, unhurried journey.
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
                  <video
                    src="/video/tree.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/images/t1.png"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    onLoadedData={(e) => {
                      e.currentTarget.play().catch(() => { });
                    }}
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
        src="/image/phili.jpg"
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
                This is what we mean when we say SoulfulI sits at the intersection of
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
        src="/images/buddha-forest.png"
        alt="Buddha statue nestled peacefully within lush forest canopy with sunbeams and misty waterfall"
        objectPosition="center 28%"
        overlayVariant="center"
        enableSubtleZoom={true}
        blendEdges={true}
        className="border-b border-outline-variant/20"
        containerClassName="py-24 lg:py-36"
      >
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 flex flex-col items-center text-white">
          <ImageFrostedPanel className="max-w-3xl w-full text-center space-y-8 flex flex-col items-center text-white">
            <ImageEyebrow className="text-white">
              Join Our Community
            </ImageEyebrow>

            <ImageHeading as="h2" className="text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.15] text-white">
              Be Part of What Comes Next
            </ImageHeading>

            <div className="space-y-6 flex flex-col items-center text-white">
              <ImageParagraph className="text-center text-base sm:text-lg text-white/95">
                SoulfulI is growing into a community, not just a company. As our tools,
                courses, workshops, and retreats go live, we want the people who
                believe in this work to be the first to know, the first to join, and
                eventually, the first to help shape it.
              </ImageParagraph>

              <p className="font-serif text-lg sm:text-xl text-white italic text-center editorial-shadow-subtle max-w-[54ch]">
                The gap between where you are and where you can be is not a flaw.
                It is an invitation.
              </p>

              <ImageParagraph className="text-center text-sm sm:text-base text-white/90">
                So we will leave you with the question we keep asking ourselves. If
                your mind, your heart, and your spirit were finally allowed to grow in
                the same direction at the same time, what might change first?
              </ImageParagraph>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button
                href="/eq-audit"
                variant="ivory"
                size="lg"
                className="rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Take the EQ Audit
              </Button>

              <Button
                href="/community"
                variant="whiteOutline"
                size="lg"
                className="rounded-full backdrop-blur-sm"
              >
                Join the Community
              </Button>
            </div>

            <p className="font-sans text-xs sm:text-sm text-white/80 max-w-[58ch]">
              Follow along on Instagram and LinkedIn. Join the community when the doors open.
            </p>
          </ImageFrostedPanel>
        </div>
      </ImageSection>

    </main>
  );
}
function OfferingsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const homepageOfferingIds = [
    'eq-audit',
    'schools-colleges',
    'organisations',
    'quiet-bloom',
  ];

  const homepageOfferings = homepageOfferingIds
    .map((id) => offeringsData.find((item) => item.id === id))
    .filter((item): item is (typeof offeringsData)[number] => Boolean(item));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % homepageOfferings.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [homepageOfferings.length]);

  const offering = homepageOfferings[activeIndex];

  if (!offering) return null;

  return (
    <section className="w-full bg-surface border-b border-outline-variant/60">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16 py-16 lg:py-24">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-4">
            <Badge variant="sage" dot>
              What We Offer
            </Badge>

            <h2 className="font-serif text-headline-lg lg:text-display-md text-primary font-normal leading-tight">
              Four ways in, depending on where you are and who you are showing up for.
            </h2>

            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
              Explore the practices, workshops, courses, and retreats that make
              up the SoulfulI ecosystem.
            </p>
          </div>

          <span className="text-xs tracking-[0.2em] uppercase text-on-surface-variant">
            Explore • Reflect • Grow
          </span>
        </div>

        {/* OFFERING SELECTOR CARDS */}
        {/* OFFERING SELECTOR CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {homepageOfferings.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className="
        group relative overflow-hidden text-left
        min-h-[245px] rounded-3xl border
        border-outline-variant/60
        transition-all duration-500 ease-out
        hover:border-primary/60
        hover:shadow-xl
        hover:scale-[1.02]
      "
            >
              {/* Card Image */}
              <img
                src={item.imageSrc}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
              />

              {/* Overlay */}
              <div className="
        absolute inset-0
        bg-gradient-to-t from-[#1F2A24]/95 via-[#1F2A24]/65 to-[#1F2A24]/30
        group-hover:from-[#1F2A24]/95 group-hover:via-[#1F2A24]/50 group-hover:to-[#1F2A24]/20
        transition-all duration-500
      " />

              {/* Card Content */}
              <div className="
        relative z-10 flex flex-col justify-between
        min-h-[245px] p-5 text-white
      ">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest font-mono text-[#FDFBF7]/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="
            text-[11px] font-sans tracking-wider uppercase border border-white/20 bg-white/10 backdrop-blur-sm
            rounded-full px-3 py-1 text-[#FDFBF7]
          ">
                    Explore
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="font-serif text-2xl leading-tight text-[#FDFBF7] editorial-shadow-subtle">
                    {item.title}
                  </h3>

                  <p className="
            mt-3 text-sm text-[#FDFBF7]/85
            leading-relaxed
          ">
                    {item.tagline}
                  </p>

                  {/* Direct Page Navigation */}
                  <div className="
            mt-6 text-xs tracking-wide font-medium text-tertiary
            transition-transform duration-300
            group-hover:translate-x-1 flex items-center gap-1
          ">
                    <span>View pathway</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* ACTIVE OFFERING DETAIL */}

        {/* TRAINING & DEVELOPMENT */}
        <div className="mt-10 max-w-4xl space-y-5">
          <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
            Alongside these, we design Training &amp; Development programmes,
            corporate wellness journeys, and leadership labs for organisations
            that want emotional intelligence to become part of how their people
            actually work together.
          </p>

          <Button
            href="/what-we-offer"
            variant="secondary"
            size="lg"
            className="rounded-full"
          >
            Explore What We Offer
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

      </div>

      {/* Inline Animation CSS */}
      <style jsx>{`
        @keyframes offeringFade {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}