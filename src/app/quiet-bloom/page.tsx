import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/shared/SectionHeading';
import EditorialQuote from '@/components/shared/EditorialQuote';
import RetreatEnquiryForm from '@/components/forms/RetreatEnquiryForm';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Mountain, Sunrise, Sparkles, Feather, Clock, MapPin, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quiet Bloom Retreat — Dharamshala, Himachal Pradesh | SoulfulI',
  description:
    'Slow down without falling behind. An intimate, premium contemplative retreat in the Himalayan valley of Dharamshala, Himachal Pradesh.',
};

export default function QuietBloomPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* SECTION 1: CINEMATIC PANORAMIC HERO */}
      <section className="relative w-full min-h-[85vh] flex items-end justify-start overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 w-full h-full bg-surface-container">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Sj-NNbIVIJMVkyAV3D5Jl-8MPSHwDFCUrq2AqhwkLZnDQIhPhdEuYpkCYtugEOhHKDsSwEZ8XHVVc5wYnCqBIZIZSmalcwvdMGymAPZB6aCXEqZy2rjfpYPiNZ96QPaSZlWIm5P1ZpQgWPQPu6nnhnIu7-y0HH86GeD-3upM21TgsHpBaOCk-w5QJJqgT0eU8u-Qh50JrNUc7yd4lLGwzUFb1oq0P8z2fVMyjCaJ1cMyBlmxlU-cAA"
            alt="Panoramic dawn vista of the Himalayan valley in Dharamshala with mist rolling across pine forests"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Editorial Scrim Layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 pt-32">
          <div className="max-w-3xl space-y-6 text-surface-bright">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-surface-bright/10 backdrop-blur-md border border-surface-bright/20">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse" />
              <span className="font-sans text-xs tracking-widest uppercase text-surface-bright font-medium">
                Dharamshala, Himachal Pradesh · Seasonal Gathering
              </span>
            </div>

            <h1 className="font-serif text-display-lg-mobile lg:text-[64px] lg:leading-[72px] font-normal text-surface-bright tracking-tight">
              Slow down without falling behind.
            </h1>

            <p className="font-serif text-quote-lg text-surface-container-high font-normal max-w-xl leading-relaxed italic">
              A retreat for returning to conscious movement, grounded contemplation, and mountain silence.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-5">
              <Button href="#apply" variant="terracotta" size="lg" className="rounded-full shadow-lg">
                Inquire for Gathering
              </Button>
              <Button href="#experience" variant="ghost" className="text-surface-bright hover:text-surface-container-high underline decoration-surface-bright/50">
                Explore Experience ↓
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE INVITATION & PROVOCATION */}
      <section id="experience" className="w-full py-20 lg:py-32 bg-surface border-b border-outline-variant/60 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="terracotta" dot>
                The Mountain Sanctuary
              </Badge>
              <h2 className="font-serif text-headline-lg lg:text-display-lg text-primary tracking-tight font-normal leading-tight">
                Stillness is not an indulgence. It is essential maintenance for the soul.
              </h2>
              <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
                Quiet Bloom gathers 12 thoughtful individuals in the cedar-covered hills above Dharamshala. We step away from the velocity of screens and endless production to reconnect with what is steady.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/60 space-y-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <h4 className="font-serif text-lg text-primary">Dharamshala, HP</h4>
                  <p className="font-sans text-xs text-on-surface-variant">
                    Nestled in peaceful Himalayan pine and deodar forests overlooking the Kangra Valley.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/60 space-y-2">
                  <Users className="w-5 h-5 text-secondary" />
                  <h4 className="font-serif text-lg text-primary">12 Participants Max</h4>
                  <p className="font-sans text-xs text-on-surface-variant">
                    Intentionally small cohort to ensure privacy, spaciousness, and intimate conversation.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/60 space-y-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <h4 className="font-serif text-lg text-primary">5 Days & 4 Nights</h4>
                  <p className="font-sans text-xs text-on-surface-variant">
                    Unhurried schedule designed to allow deep nervous system down-regulation.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/60 space-y-2">
                  <Feather className="w-5 h-5 text-secondary" />
                  <h4 className="font-serif text-lg text-primary">Contemplative Immersion</h4>
                  <p className="font-sans text-xs text-on-surface-variant">
                    Guided morning stillness, village walking meditation, and tea pavilion inquiry circles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DAILY RHYTHM */}
      <section className="w-full py-20 lg:py-32 bg-surface-container-low border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 space-y-16">
          <SectionHeading
            align="center"
            eyebrow="The Cadence of Presence"
            title="A Sample Day in the Valley"
            subtitle="No forced schedules. Everything is an invitation to listen to your natural rhythm."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-surface p-6 rounded-xl border border-outline-variant/60 space-y-3 shadow-sm">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary">
                06:30 — Morning
              </span>
              <h4 className="font-serif text-lg text-primary font-normal">Dawn Meditation & Tea</h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Quiet sitting overlooking the valley mist followed by warm herbal infusions.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-outline-variant/60 space-y-3 shadow-sm">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary">
                10:00 — Mid-Morning
              </span>
              <h4 className="font-serif text-lg text-primary font-normal">Forest Contemplation</h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Guided walking practice through ancient deodar trails and stream crossings.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-outline-variant/60 space-y-3 shadow-sm">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary">
                15:00 — Afternoon
              </span>
              <h4 className="font-serif text-lg text-primary font-normal">Spacious Solitude</h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Dedicated unstructured time for journaling, reading, resting, or quiet dialogue.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-outline-variant/60 space-y-3 shadow-sm">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary">
                18:30 — Evening
              </span>
              <h4 className="font-serif text-lg text-primary font-normal">Fireside Inquiry Circle</h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Intimate shared evening reflections and nourishing locally sourced mountain dinner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: APPLICATION & INQUIRY FORM */}
      <section id="apply" className="w-full py-20 lg:py-32 bg-surface scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Badge variant="terracotta" dot>
                Gathering Intake
              </Badge>
              <h2 className="font-serif text-headline-lg lg:text-display-lg text-primary tracking-tight font-normal">
                Apply for Quiet Bloom
              </h2>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                Please share your intention below. Our facilitators personally review every application to curate a deeply aligned, safe cohort container.
              </p>
            </div>

            <div className="bg-surface-container-low p-6 lg:p-10 rounded-2xl border border-outline-variant/60 shadow-sm">
              <RetreatEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
