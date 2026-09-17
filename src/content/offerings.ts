export interface OfferingItem {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  href: string;
  badgeText: string;
  badgeVariant: 'sage' | 'sand' | 'terracotta' | 'forest';
  imageSrc: string;
  audience: string;
  outcomes: string[];
}

export const offeringsData: OfferingItem[] = [
  {
    id: 'eq-audit',
    title: 'The EQ Audit',
    tagline: 'A mirror, not a verdict.',
    shortDescription:
      'A 48-question reflective self-discovery experience mapping six core dimensions of emotional awareness, regulation, and intentional communication.',
    fullDescription:
      'The EQ Audit is a quiet diagnostic mirror designed to help you perceive your habitual emotional dynamics with clarity and compassion. In twenty unhurried minutes, you map your inner landscape and uncover where intentional growth begins.',
    href: '/eq-audit',
    badgeText: 'Self-Discovery Mirror',
    badgeVariant: 'sage',
    imageSrc:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=75',
    audience: 'Individuals & Emerging Leaders',
    outcomes: [
      'Visual 6-dimension Inner Map profile',
      'Identification of core emotional strengths',
      'Insight into unconscious reactive patterns',
      'Personalized reflective growth recommendations',
    ],
  },
  {
    id: 'inner-compass',
    title: 'Inner Compass',
    tagline: 'The guided journey into intentional living.',
    shortDescription:
      'A transformative 5-pillar developmental program moving from self-knowledge to clear, non-reactive communication and purposeful presence.',
    fullDescription:
      'Inner Compass guides you through five essential human capacities: Know Yourself, Choose Yourself, See Others, Read the Room, and Speak with Intention. Built as a contemplative, cohort-based practice rather than a corporate checklist.',
    href: '/inner-compass',
    badgeText: 'Developmental Program',
    badgeVariant: 'forest',
    imageSrc:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=75',
    audience: 'Professionals & Seekers',
    outcomes: [
      '5 guided modular inquiry frameworks',
      'Micro-inquiry practices for daily friction',
      'Relational and empathetic attunement',
      'Clarity of personal purpose and alignment',
    ],
  },
  {
    id: 'quiet-bloom',
    title: 'Quiet Bloom Retreat',
    tagline: 'Slow down without falling behind.',
    shortDescription:
      'An intimate, premium contemplative gathering in the Himalayan valley of Dharamshala, rooted in mountain silence and village immersion.',
    fullDescription:
      'Quiet Bloom is a sanctuary for conscious stillness. Set in Dharamshala, Himachal Pradesh, this unhurried experience brings together mindful movement, guided reflection, and mountain solitude to reset your nervous system.',
    href: '/quiet-bloom',
    badgeText: 'Himalayan Retreat',
    badgeVariant: 'terracotta',
    imageSrc:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=75',
    audience: 'Leaders & Seekers of Deep Rest',
    outcomes: [
      'Deep nervous system restoration in nature',
      'Guided meditation and walking contemplation',
      'Intimate dialogue circles with fellow seekers',
      'Unstructured time for journaling and mountain air',
    ],
  },
  {
    id: 'schools-colleges',
    title: 'Schools & Colleges',
    tagline: 'Educating the heart alongside the intellect.',
    shortDescription:
      'Human-development curriculum and contemplative workshops designed for students and educators navigating modern pressure and emotional overwhelm.',
    fullDescription:
      'Modern education trains analytical aptitude while leaving emotional resilience and self-awareness untended. SoulfulI partners with academic institutions to offer foundational emotional intelligence and dialogue practices.',
    href: '/schools-colleges',
    badgeText: 'Institutional Offering',
    badgeVariant: 'sand',
    imageSrc:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=75',
    audience: 'Students, Faculty & Educational Leaders',
    outcomes: [
      'Emotional literacy and regulation tools',
      'Non-defensive dialogue and conflict care',
      'Stress and performance anxiety mitigation',
      'Cultivation of intrinsic purpose and agency',
    ],
  },
  {
    id: 'organisations',
    title: 'Organisations & Culture',
    tagline: 'Non-reactive leadership in complex times.',
    shortDescription:
      'Transforming enterprise workplace culture through grounded emotional intelligence, empathetic dialogue, and human-centered leadership.',
    fullDescription:
      'We work with progressive companies to replace reactive panic and burnout with steady presence, psychological safety, and clear, compassionate decision-making.',
    href: '/organisations',
    badgeText: 'B2B Leadership',
    badgeVariant: 'forest',
    imageSrc:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=75',
    audience: 'Executive Teams & Organizations',
    outcomes: [
      'Steady leadership presence under pressure',
      'High-trust cross-functional collaboration',
      'Direct, respectful feedback without cruelty',
      'Sustainable organizational energy and retention',
    ],
  },
];
