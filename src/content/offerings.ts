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
    title: 'Organisations',
    tagline: 'Leading with the heart, not just the numbers.',
    shortDescription:
      'SoulfulI brings emotional intelligence, self-awareness, and human-centred communication into the way people work and lead.',
    fullDescription:
      'Organisations invest heavily in skills and strategy, yet leaders and teams often carry pressure, friction, and disconnection quietly. SoulfulI brings emotional intelligence, self-awareness, and human-centred communication into the way people work and lead.',
    href: '/organisations',
    badgeText: 'Corporate Offering',
    badgeVariant: 'forest',
    imageSrc:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=75',
    audience: 'Executive Teams & Organisations',
    outcomes: [
      'Emotional intelligence to recognize reactive states',
      'Reflective space for self-aware leadership',
      'Intentional, non-defensive communication',
      'Strengthened trust and empathetic team dynamics',
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
];
