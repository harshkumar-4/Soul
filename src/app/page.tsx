'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { offeringsData } from '@/content/offerings';
import { Compass, Feather, ArrowRight } from 'lucide-react';
import Link from 'next/link';
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
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-outline-variant/60 bg-surface-container">

                <div className="relative h-full min-h-[520px] w-full overflow-hidden">

                  <video
                    src="/video/tree.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/images/hero-fallback.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-surface-bright">

                  <span className="font-sans text-xs uppercase tracking-widest block text-surface-container-high/80">
                    Quiet Contemplation
                  </span>

                  <p className="font-serif text-lg italic mt-1">
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
      <section className="w-full bg-surface-container-low border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4 space-y-5">
              <Badge variant="sage" dot>
                Our Philosophy
              </Badge>

              <h2 className="font-serif text-headline-lg lg:text-display-md text-primary font-normal leading-tight">
                An Old Idea, Made Practical Again
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 font-sans text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                None of this is new. Traditions far older than the modern wellness
                industry already understood that the mind, the heart, and the spirit
                were never separate departments. What has changed is how disconnected
                our daily lives have become from that understanding.
              </p>

              <p>
                We are not introducing a new philosophy. We are translating an old one
                into a language that fits a Monday morning, a difficult conversation,
                a leadership decision, a classroom, a quiet evening alone with your
                own thoughts.
              </p>

              <p>
                This is what we mean when we say SoulfulI sits at the intersection of
                Emotional Intelligence, spirituality, and mindfulness. Not three
                separate offerings stacked side by side, but one continuous practice
                of paying attention, first to yourself, then to the people around you,
                then to whatever it is you are here to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* SECTION 3: WHAT WE OFFER                            */}
      {/* =================================================== */}
      <OfferingsSection />

      {/* =================================================== */}
      {/* SECTION 4: WHY WE ARE DIFFERENT                     */}
      {/* =================================================== */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant/60">
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
      <section
        className="relative w-full overflow-hidden border-b border-outline-variant/20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/13248795/pexels-photo-13248795.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-black/10" />
        {/* Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-16 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">

            <Badge variant="sage" dot >
              <div className='text-white' >
                Join Our Community

              </div>
            </Badge>

            <h2 className="font-serif text-headline-lg lg:text-display-md text-white font-normal leading-tight">
              Be Part of What Comes Next
            </h2>

            <div className="space-y-6 font-sans text-body-lg text-white/90 leading-relaxed">
              <p>
                SoulfulI is growing into a community, not just a company. As our tools,
                courses, workshops, and retreats go live, we want the people who
                believe in this work to be the first to know, the first to join, and
                eventually, the first to help shape it.
              </p>

              <p>
                The gap between where you are and where you can be is not a flaw.
                It is an invitation.
              </p>

              <p>
                So we will leave you with the question we keep asking ourselves. If
                your mind, your heart, and your spirit were finally allowed to grow in
                the same direction at the same time, what might change first?
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                href="/eq-audit"
                variant="primary"
                size="lg"
                className="rounded-full"
              >
                Take the EQ Audit
              </Button>

              <Button
                href="/join-our-community"
                variant="secondary"
                size="lg"
                className="rounded-full"
              >
                Join the Community
              </Button>
            </div>

            <p className="font-sans text-sm text-white/75">
              Follow along on Instagram and LinkedIn. Join the community when the doors open.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}
function OfferingsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const homepageOfferingIds = [
    'eq-audit',
    'inner-compass',
    'schools-colleges',
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
        bg-primary/65
        group-hover:bg-primary/75
        transition-all duration-500
      " />

              {/* Card Content */}
              <div className="
        relative z-10 flex flex-col justify-between
        min-h-[245px] p-5 text-white
      ">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="
            text-xs border border-white/40
            rounded-full px-3 py-1
          ">
                    Explore
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="font-serif text-2xl leading-tight">
                    {item.title}
                  </h3>

                  <p className="
            mt-3 text-sm text-white/80
            leading-relaxed
          ">
                    {item.tagline}
                  </p>

                  {/* Direct Page Navigation */}
                  <div className="
            mt-6 text-xs tracking-wide
            transition-transform duration-300
            group-hover:translate-x-1
          ">
                    View pathway →
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