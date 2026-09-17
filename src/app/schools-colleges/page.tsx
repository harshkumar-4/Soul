import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/shared/SectionHeading';
import SchoolEnquiryForm from '@/components/forms/SchoolEnquiryForm';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { BookOpen, HeartHandshake, Eye, Sparkles, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Schools & Colleges — SoulfulI Human Development Curriculum',
  description:
    'Educating the heart alongside the intellect. Foundational emotional intelligence, self-awareness, and mindful communication programs for students and educators.',
};

const curricularThreads = [
  {
    number: '01',
    category: 'RECOGNITION',
    title: 'Emotional Intelligence',
    description:
      'Developing the quiet capacity to recognize and name internal emotional states before they harden into reactive behavior or persistent anxiety.',
  },
  {
    number: '02',
    category: 'OBSERVATION',
    title: 'Self-Awareness',
    description:
      'Creating non-evaluative space to observe personal habits, coping mechanisms, and unspoken internal pressures without fear of institutional judgment.',
  },
  {
    number: '03',
    category: 'DISCOURSE',
    title: 'Mindful Communication',
    description:
      'Learning to speak with clarity, listen without immediate defense, and navigate disagreements with relational care and intellectual humility.',
  },
  {
    number: '04',
    category: 'RESILIENCE',
    title: 'Nervous System Regulation',
    description:
      'Equipping youth and educators with daily somatic and reflective tools to mitigate performance pressure and chronic exam stress.',
  },
];

export default function SchoolsCollegesPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* SECTION 1: HERO */}
      <section className="w-full px-6 lg:px-16 pt-12 lg:pt-20 pb-16 lg:pb-24 bg-surface border-b border-outline-variant/60">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="sand" dot>
              Institutional Offering
            </Badge>
            <h1 className="font-serif text-display-lg-mobile lg:text-display-lg text-primary tracking-tight font-normal">
              Educating the heart alongside the intellect.
            </h1>
            <p className="font-sans text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Academic institutions train critical thinking and technical acumen, yet students and faculty frequently navigate acute emotional overwhelm in silence. SoulfulI brings grounded self-awareness and emotional literacy into the classroom.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="#consultation" variant="primary" size="lg" className="rounded-full">
                Discuss an Academic Program
              </Button>
              <Button href="#threads" variant="secondary" size="lg" className="rounded-full">
                Explore Curriculum
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-outline-variant/60 bg-surface-container">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="Students in collaborative, thoughtful dialogue in educational library"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 CURRICULAR THREADS */}
      <section id="threads" className="w-full py-20 lg:py-32 bg-surface-container-low border-b border-outline-variant/60 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16 space-y-16">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Four Pillars of Student Well-being"
            subtitle="Modular curriculum tailored for high school seniors, undergraduates, and educator development."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curricularThreads.map((thread) => (
              <div
                key={thread.number}
                className="bg-surface p-8 rounded-xl border border-outline-variant/60 space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
                      {thread.number} / {thread.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-headline-md text-primary font-normal">
                    {thread.title}
                  </h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                    {thread.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/30 text-xs font-sans text-outline uppercase tracking-wider">
                  Curricular Practice Module
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INSTITUTIONAL INQUIRY FORM */}
      <section id="consultation" className="w-full py-20 lg:py-32 bg-surface scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Badge variant="sand" dot>
                Institutional Partnership
              </Badge>
              <h2 className="font-serif text-headline-lg lg:text-display-lg text-primary tracking-tight font-normal">
                Discuss a Program for Your Institution
              </h2>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                Connect with our academic lead to explore guest workshops, semester curriculums, or educator retreats.
              </p>
            </div>

            <div className="bg-surface-container-low p-6 lg:p-10 rounded-2xl border border-outline-variant/60 shadow-sm">
              <SchoolEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
