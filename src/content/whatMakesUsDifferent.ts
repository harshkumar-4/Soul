export interface ProvocationItem {
  number: string;
  category: string;
  whatOthersDo: string;
  whatSoulfulIDoes: string;
}

export const whatMakesUsDifferentContent = {
  hero: {
    badge: 'Differentiation Thesis',
    title: 'Mind, heart, and spirit belong together.',
    subtitle:
      'Most modern self-improvement fragments human life into separate silos: apps for meditation, consulting for leadership, therapy for crisis, and dogmas for spirituality. SoulfulI brings them back into one grounded continuum.',
  },
  provocations: [
    {
      number: '01',
      category: 'Spirituality',
      whatOthersDo: 'Treating spirituality as an aesthetic mood board or mystical dogma.',
      whatSoulfulIDoes:
        'Grounding spirit in reverence, ethics, conscious intention, and alignment with daily reality—free from dogmatic preaching or commercial clichés.',
    },
    {
      number: '02',
      category: 'Mindfulness',
      whatOthersDo: 'Treating mindfulness as a 5-minute notification between stressful meetings.',
      whatSoulfulIDoes:
        'Cultivating an enduring quality of unhurried attention that changes how you listen, decide, and inhabit your body throughout the day.',
    },
    {
      number: '03',
      category: 'Emotional Intelligence',
      whatOthersDo: 'Treating emotional intelligence as a transactional corporate productivity hack.',
      whatSoulfulIDoes:
        'Seeing emotional intelligence as the courageous foundation of human empathy, self-awareness, and non-reactive relational dignity.',
    },
    {
      number: '04',
      category: 'Human Development',
      whatOthersDo: 'Communicating "You are broken and our system will fix you."',
      whatSoulfulIDoes:
        'Communicating "You are worth understanding." Providing clear mirrors that empower you to author your own growth.',
    },
  ] as ProvocationItem[],
  progressionLine: [
    {
      number: '01',
      title: 'Know',
      description: 'Perceiving reality and internal emotional weather without reflexive denial.',
    },
    {
      number: '02',
      title: 'Understand',
      description: 'Discerning the roots of habit, protective scripts, and reactive triggers.',
    },
    {
      number: '03',
      title: 'Practice',
      description: 'Engaging deliberate micro-inquiries in daily relationships and high-stakes choices.',
    },
    {
      number: '04',
      title: 'Live',
      description: 'Embodying calm, non-reactive presence and authentic connection wherever you go.',
    },
  ],
};
