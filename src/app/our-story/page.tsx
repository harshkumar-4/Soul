import type { Metadata } from 'next';
import { ourStoryContent } from '@/content/ourStory';
import SectionHeading from '@/components/shared/SectionHeading';
import ClosingCTA from '@/components/shared/ClosingCTA';
import Badge from '@/components/ui/Badge';
import {
  ImageSection,
  ImageEyebrow,
  ImageHeading,
  ImageParagraph,
} from '@/components/shared/ImageSection';

export const metadata: Metadata = {
  title: 'Our Story — SoulfulI',
  description:
    'Becoming more yourself. SoulfulI began with a simple question: what happens when we stop treating personal growth as something to complete, and start experiencing it as something to live?',
};

export default function OurStoryPage() {
  const { hero, manifesto, theThreeInquiries, coreTenets } =
    ourStoryContent;

  return (
    <main className="w-full flex flex-col items-center">

      {/* SECTION 1: HERO — ORIGIN */}
      <section className="w-full px-6 lg:px-16 pt-12 lg:pt-20 pb-16 lg:pb-24 bg-surface border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto flex flex-col space-y-12">

          <div className="max-w-3xl space-y-4">
            <Badge variant="sage" dot>
              {hero.badge}
            </Badge>

            <h1 className="font-serif text-display-lg-mobile lg:text-display-lg text-primary tracking-tight font-normal">
              {hero.title}
            </h1>

            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
              {hero.subtitle}
            </p>
          </div>

          {/* Hero Video */}
          <div className="w-full relative overflow-hidden rounded-2xl bg-surface-alt shadow-[0_24px_64px_-16px_rgba(31,42,36,0.22)] aspect-[16/9] max-h-[580px] border border-border-alt/80 group">
            <video
              src="/video/mount.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/m1.png"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              aria-label="Calm editorial video representing reflection and personal growth"
            />

            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent pointer-events-none" />

            {/* Editorial Glass Caption Badge */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto z-10 bg-[#1F2A24]/60 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/15 flex items-center gap-2.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#FDFBF7] font-medium">
                {hero.imageCaption}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MANIFESTO */}
      <section className="w-full py-20 lg:py-28 bg-surface-alt-gradient border-b border-border-alt">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">

            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold block">
              Our Stance
            </span>

            <blockquote className="font-serif text-2xl lg:text-3xl lg:leading-[48px] text-primary italic font-normal">
              &ldquo;{manifesto.quote}&rdquo;
            </blockquote>

            <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
              SoulfulI exists to build quiet spaces, diagnostics, and guided
              frameworks where understanding becomes lived reality.
            </p>

          </div>
        </div>
      </section>

      {/* SECTION 3: A DEEPER STORY */}
      <ImageSection
        src="/image/33.jpg"
        alt="Person meditating peacefully on wooden dock at sunset"
        objectPosition="center 48%"
        overlayVariant="warm-sunset"
        enableSubtleZoom={true}
        className="border-b border-outline-variant/60 text-white"
        containerClassName="py-24 lg:py-36"
      >
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start text-white">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 text-white">
              <ImageEyebrow className="text-white">
                A Deeper Story
              </ImageEyebrow>

              <ImageHeading as="h2" className="text-[34px] sm:text-[40px] lg:text-[46px] lg:leading-[1.12] text-white">
                Not a Grand Revelation.
                <br />
                <span className="italic font-normal">Just a Quiet Awakening.</span>
              </ImageHeading>

              <div className="w-16 h-0.5 bg-white/80 rounded-full" aria-hidden="true" />
            </div>

            <div className="lg:col-span-7 space-y-7 pt-2 lg:pt-3 text-white">
              <p className="font-serif text-lg sm:text-xl lg:text-[21px] leading-[1.65] text-white font-normal italic editorial-shadow max-w-[58ch]">
                SoulfulI began with a simple question: what happens when we
                stop treating personal growth as something to complete and
                start experiencing it as something to live?
              </p>

              <ImageParagraph className="text-base sm:text-lg text-white/95 leading-[1.8] max-w-[58ch]">
                Our journey is rooted in the understanding that difficult
                chapters can become teachers. Self-worth, vulnerability,
                wellbeing, and personal growth are not separate parts of life.
                They are connected experiences that shape how we understand
                ourselves and the world around us.
              </ImageParagraph>

              <ImageParagraph className="text-base sm:text-lg text-white/95 leading-[1.8] max-w-[58ch]">
                This understanding became the foundation for SoulfulI and the
                work we are developing through emotional intelligence,
                mindfulness, and practical spirituality.
              </ImageParagraph>

              <ImageParagraph className="text-base sm:text-lg text-white/95 leading-[1.8] max-w-[58ch]">
                We believe growth is not about becoming someone entirely
                different. It is about becoming more yourself, with greater
                awareness, empathy, resilience, and intention.
              </ImageParagraph>
            </div>
          </div>
        </div>
      </ImageSection>

      {/* SECTION 4: THE THREE INQUIRIES */}
      <section className="w-full py-20 lg:py-32 bg-surface-alt-gradient border-b border-border-alt">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 space-y-16">

          <SectionHeading
            eyebrow="The Triad"
            title="The Three Essential Human Inquiries"
            subtitle="How we bridge emotional intelligence, conscious mindfulness, and non-dogmatic spirituality."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {theThreeInquiries.map((inq, idx) => (
              <div
                key={idx}
                className="bg-surface p-8 rounded-xl border border-border-alt space-y-4 shadow-sm"
              >
                <span className="font-serif text-3xl text-secondary select-none font-light">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <h3 className="font-serif text-headline-md text-primary font-normal leading-snug">
                  {inq.title}
                </h3>

                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                  {inq.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: CORE TENETS */}
      <section className="w-full py-20 lg:py-32 bg-surface border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 space-y-16">

          <SectionHeading
            eyebrow="Principles"
            title="What We Believe About Transformation"
            subtitle="The fundamental commitments that guide every program, assessment, and retreat we design."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {coreTenets.map((tenet) => (
              <div
                key={tenet.number}
                className="bg-surface-alt p-8 rounded-xl border border-border-alt space-y-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-lg text-tertiary font-normal">
                    {tenet.number}
                  </span>

                  <h3 className="font-serif text-headline-sm text-primary font-normal">
                    {tenet.title}
                  </h3>
                </div>

                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed pl-8">
                  {tenet.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: CLOSING CTA */}
      <ClosingCTA
        eyebrow="The Journey Awaits"
        title="Begin with where you are right now."
        description="The first step is simply noticing your internal weather with honest clarity."
        primaryCtaText="Take the EQ Audit"
        primaryCtaHref="/eq-audit"
        secondaryCtaText="Explore Offerings"
        secondaryCtaHref="/what-we-offer"
      />

    </main>
  );
}