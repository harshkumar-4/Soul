export interface CommunityExperience {
  id: string;
  number: string;
  title: string;
  format: string;
  rhythm: string;
  description: string;
  imageSrc?: string;
}

export const communityContent = {
  hero: {
    badge: 'Sanctuary & Community',
    title: 'Where we meet and practice.',
    subtitle:
      'SoulfulI is not a noisy social feed. It is a quiet collective sanctuary for individuals who value contemplative depth, honest dialogue, and intentional living.',
  },
  values: [
    {
      number: '01',
      title: 'Spaciousness',
      description: 'Leaving room for silence, hesitation, and unhurried reflection in all dialogue.',
    },
    {
      number: '02',
      title: 'Mutual Dignity',
      description: 'Treating every person as a sovereign human being rather than an audience to perform for.',
    },
    {
      number: '03',
      title: 'Vulnerability without Drama',
      description: 'Sharing real human struggles with quiet honesty, free from manufactured spectacle.',
    },
    {
      number: '04',
      title: 'Grounding in Daily Practice',
      description: 'Weaving small, deliberate micro-inquiries into the reality of everyday demands.',
    },
  ],
  experiences: [
    {
      id: 'seasonal-salons',
      number: '01',
      title: 'Seasonal Evening Salons',
      format: 'Intimate Virtual Gathering',
      rhythm: 'Solstice & Equinox Rhythms',
      description:
        'Small, guided 90-minute evening dialogues exploring one essential inquiry—such as navigating grief, befriending fear, or speaking truth in friction.',
    },
    {
      id: 'quiet-circles',
      number: '02',
      title: 'The Contemplative Circle',
      format: 'Weekly Silent & Reflective Space',
      rhythm: 'Every Sunday Morning',
      description:
        'A dedicated communal space to sit in stillness, receive a weekly inquiry text, and reflect before entering the velocity of the working week.',
    },
    {
      id: 'dispatch-archive',
      number: '03',
      title: 'The Quiet Dispatch',
      format: 'Long-form Written Journal',
      rhythm: 'Bi-weekly Dispatch',
      description:
        'Thoughtfully crafted essays, audio contemplations, and practical reflections on emotional intelligence and intentional living, delivered straight to your inbox.',
    },
  ] as CommunityExperience[],
};
