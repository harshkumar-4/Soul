import React from 'react';
import { offeringsData } from '@/content/offerings';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function OfferingsSection() {
  const homepageOfferingIds = [
    'eq-audit',
    'schools-colleges',
    'organisations',
    'quiet-bloom',
  ];

  const homepageOfferings = homepageOfferingIds
    .map((id) => offeringsData.find((item) => item.id === id))
    .filter((item): item is (typeof offeringsData)[number] => Boolean(item));

  if (!homepageOfferings.length) return null;

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
              up the Soulfuli ecosystem.
            </p>
          </div>

          <span className="text-xs tracking-[0.2em] uppercase text-on-surface-variant">
            Explore • Reflect • Grow
          </span>
        </div>

        {/* OFFERING SELECTOR CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {homepageOfferings.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              prefetch={true}
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
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
    </section>
  );
}

