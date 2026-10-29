import React from 'react';
import type { Metadata } from 'next';

import SectionHeading from '@/components/shared/SectionHeading';
import ClosingCTA from '@/components/shared/ClosingCTA';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import {
  ImageSection,
  ImageEyebrow,
  ImageHeading,
  ImageParagraph,
} from '@/components/shared/ImageSection';

import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join Our Community — SoulfulI',
  description:
    'Be part of the SoulfulI community through emotional intelligence, mindfulness, workshops, retreats, and meaningful conversations.',
};

const communityWays = [
  {
    number: '01',
    title: 'Take the EQ Audit',
    description:
      'Get a clearer mirror into your own emotional patterns. The EQ Audit is an invitation to look inward, understand yourself, and discover where growth may begin.',
    image:
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=75',
    cta: 'Take the EQ Audit',
    href: '/eq-audit',
  },
  {
    number: '02',
    title: 'Follow Our Journey',
    description:
      'Follow SoulfulI on Instagram and LinkedIn for daily reflections, emotional intelligence insights, and behind-the-scenes moments from what we are building.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=75',
    cta: 'Connect With Us',
    href: '/contact',
  },
  {
    number: '03',
    title: 'Join Upcoming Experiences',
    description:
      'Join the waitlist for Quiet Bloom Retreat and upcoming community gatherings. Be among the first to know when registrations open.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=75',
    cta: 'Join the Waitlist',
    href: '/contact?program=community',
  },
  {
    number: '04',
    title: 'Bring SoulfulI to Your Community',
    description:
      'If you are part of a school, college, or organisation, reach out to explore our Emotional Intelligence Course or a wellness programme for your community.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=75',
    cta: 'Start a Conversation',
    href: '/contact',
  },
];
export default function CommunityPage() {
  return (
    <main className="w-full flex flex-col items-center">

      {/* HERO SECTION */}
      <ImageSection
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
        alt="Friends laughing and connecting warmly outdoors"
        objectPosition="center 35%"
        overlayVariant="intimate-human"
        enableSubtleZoom={true}
        priority
        className="border-b border-outline-variant/60"
        containerClassName="w-full px-6 lg:px-16 pt-28 lg:pt-40 pb-28 lg:pb-40"
      >
        <div className="max-w-[1240px] mx-auto space-y-7 text-white">
          <ImageEyebrow className="text-white">
            Join Our Community
          </ImageEyebrow>

          <ImageHeading as="h1" className="max-w-4xl text-display-lg-mobile lg:text-[56px] lg:leading-[64px] text-white">
            This Is Just the Beginning.
          </ImageHeading>

          <div className="w-16 h-0.5 bg-white/80 rounded-full" aria-hidden="true" />

          <ImageParagraph className="max-w-2xl text-body-lg text-white/95 leading-[1.8]">
            SoulfulI is growing into a community, not just a company.
            We are building this space one honest conversation, one
            workshop, and one retreat at a time.
          </ImageParagraph>
        </div>
      </ImageSection>

      {/* INTRODUCTION */}
      <section className="w-full bg-surface py-20 lg:py-28 border-b border-outline-variant/60">

        <div className="max-w-[900px] mx-auto px-6 lg:px-16 text-center space-y-7">

          <span className="font-sans text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
            Be Part of What Comes Next
          </span>

          <h2 className="font-serif text-3xl lg:text-5xl text-primary font-normal leading-tight">
            Grow slowly with the right people.
          </h2>

          <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
            We would rather grow slowly with the right people than grow
            fast with the wrong incentives. If any part of our work
            resonates with you, there are several ways to be part of
            what comes next.
          </p>

        </div>
      </section>

      {/* COMMUNITY WAYS */}
      <section className="relative w-full overflow-hidden bg-surface-alt-gradient py-20 lg:py-32 border-b border-border-alt">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=80')",
          }}
        />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-16 space-y-16">

          <SectionHeading
            align="center"
            eyebrow="Ways to Connect"
            title="Find Your Way Into the Community"
            subtitle="Start wherever you are. Take a step that feels meaningful to you."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {communityWays.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden rounded-2xl bg-surface border border-border-alt shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <span className="absolute left-6 top-5 font-serif text-4xl font-light text-white/80">
                    {item.number}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-5 p-7 lg:p-8">

                  <h3 className="font-serif text-2xl lg:text-3xl text-primary font-normal leading-tight">
                    {item.title}
                  </h3>

                  <div className="h-px w-12 bg-terracotta transition-all duration-500 group-hover:w-24" />

                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3">
                    <Button
                      href={item.href}
                      variant="ghost"
                      size="sm"
                    >
                      {item.cta}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* COMMUNITY STATEMENT */}
      <section className="w-full bg-surface py-20 lg:py-32 border-b border-outline-variant/60">

        <div className="max-w-[1000px] mx-auto px-6 lg:px-16 text-center space-y-8">

          <Users className="mx-auto h-8 w-8 text-secondary" />

          <blockquote className="font-serif text-3xl lg:text-5xl text-primary leading-tight font-normal">
            “The gap between where you are and where you can be is not a
            flaw. It is an invitation.”
          </blockquote>

          <div className="mx-auto h-px w-16 bg-terracotta" />

          <p className="max-w-2xl mx-auto font-sans text-body-lg text-on-surface-variant leading-relaxed">
            We are creating a space where emotional intelligence,
            mindfulness, and meaningful personal growth can continue
            beyond an audit, a workshop, or a retreat.
          </p>

        </div>
      </section>

      {/* SOCIAL CONNECTION */}
      <section className="w-full bg-surface-alt-gradient py-20 lg:py-28 border-b border-border-alt">

        <div className="max-w-[1000px] mx-auto px-6 lg:px-16 text-center space-y-10">

          <SectionHeading
            align="center"
            eyebrow="Stay Connected"
            title="Follow Along With What We Are Building"
            subtitle="Discover reflections, insights, and updates from the SoulfulI journey."
          />

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Button
              href="/contact?platform=instagram"
              variant="secondary"
              size="lg"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </Button>

            <Button
              href="/contact?platform=linkedin"
              variant="secondary"
              size="lg"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>

            <Button
              href="/contact"
              variant="primary"
              size="lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>

          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCTA
        eyebrow="The Blooming Continues"
        title="What might change first?"
        description="If your mind, your heart, and your spirit were finally allowed to grow in the same direction at the same time, what might change first?"
        primaryCtaText="Take the EQ Audit"
        primaryCtaHref="/eq-audit"
        secondaryCtaText="Explore Our Offerings"
        secondaryCtaHref="/what-we-offer"
      />

    </main>
  );
}