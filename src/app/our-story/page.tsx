import type { Metadata } from 'next';
import { ourStoryContent } from '@/content/ourStory';
import SectionHeading from '@/components/shared/SectionHeading';
import ClosingCTA from '@/components/shared/ClosingCTA';
import Badge from '@/components/ui/Badge';

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
          <div className="w-full relative overflow-hidden rounded-xl bg-surface-container shadow-sm aspect-[16/9] max-h-[580px] border border-outline-variant/60">

            <video
              src="/video/mount.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="https://images.pexels.com/photos/35274206/pexels-photo-35274206.jpeg?auto=compress&cs=tinysrgb&w=1200"
              className="absolute inset-0 h-full w-full object-cover"
              aria-label="Calm editorial video representing reflection and personal growth"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-sans text-xs uppercase tracking-wider text-white/90">
                {hero.imageCaption}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: THE MANIFESTO */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low border-b border-outline-variant/60">
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
      <section className="w-full py-20 lg:py-32 bg-surface border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-5">
              <Badge variant="sand" dot>
                A Deeper Story
              </Badge>

              <h2 className="mt-5 font-serif text-headline-lg lg:text-display-sm text-primary font-normal leading-tight">
                Not a Grand Revelation.
                <br />
                Just a Quiet Awakening.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 font-sans text-body-lg text-on-surface-variant leading-relaxed">

              <p>
                SoulfulI began with a simple question: what happens when we
                stop treating personal growth as something to complete and
                start experiencing it as something to live?
              </p>

              <p>
                Our journey is rooted in the understanding that difficult
                chapters can become teachers. Self-worth, vulnerability,
                wellbeing, and personal growth are not separate parts of life.
                They are connected experiences that shape how we understand
                ourselves and the world around us.
              </p>

              <p>
                This understanding became the foundation for SoulfulI and the
                work we are developing through emotional intelligence,
                mindfulness, and practical spirituality.
              </p>

              <p>
                We believe growth is not about becoming someone entirely
                different. It is about becoming more yourself, with greater
                awareness, empathy, resilience, and intention.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE THREE INQUIRIES */}
      <section className="w-full py-20 lg:py-32 bg-surface-container-low border-b border-outline-variant/60">
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
                className="bg-surface p-8 rounded-xl border border-outline-variant/60 space-y-4 shadow-sm"
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
                className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/60 space-y-3 shadow-sm"
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