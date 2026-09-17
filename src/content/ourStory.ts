export interface CoreTenet {
  number: string;
  title: string;
  description: string;
}

export const ourStoryContent = {
  hero: {
    badge: 'Origin Narrative',
    title: 'Becoming more yourself.',
    subtitle:
      'SoulfulI began with a simple question: what happens when we stop treating personal growth as something to complete, and start experiencing it as something to live?',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZMCyhgfxFext6Tyjy2JFAeatP6zbPFfHC3drPjYrcbU9SzOrBQQ8Eyk59qsLoLBicWB3N75y9ReNgFCBFrOl5RTBqVhvCoMs5MY7aju5eTbd1iqz2uXBUrUl7u4xbnVnCNY4XJuSiuyEZV699UKHOMJGrqT9Psv4Y_k9VE5evh9iP36UQiqAU5-NnYI-J4fcC3JmXdm9zVqzW6-VjNmIRiqh1EBJzhbPJEr06ZtPM',
    imageCaption: 'Path of Unhurried Attention — Chapter I',
  },
  manifesto: {
    quote:
      'We do not believe human beings are broken machines needing fixing. We believe human beings are living organisms needing understanding, ground, and room to breathe.',
    attribution: 'SoulfulI Philosophical Stance',
  },
  theThreeInquiries: [
    {
      title: 'The Inquiry of the Mind (Emotional Intelligence)',
      description:
        'Cognitive clarity alone is insufficient without emotional literacy. We cultivate the ability to recognize, name, and understand the internal currents that govern our thoughts and behaviors.',
    },
    {
      title: 'The Inquiry of the Heart (Human Connection & Mindfulness)',
      description:
        'Living without presence isolates us in our own heads. We develop grounded empathy, conscious listening, and the vulnerability required to connect authentically with others.',
    },
    {
      title: 'The Inquiry of the Spirit (Meaning & Intention)',
      description:
        'Spirituality without dogma is the pursuit of purpose, reverence, and alignment. We help you anchor your daily labor and choices in what is deeply enduring.',
    },
  ],
  coreTenets: [
    {
      number: '01',
      title: 'A Mirror, Not a Verdict',
      description:
        'Self-discovery should never feel like a clinical trial or performance review. We provide quiet reflective mirrors that illuminate without judging.',
    },
    {
      number: '02',
      title: 'Integration over Accumulation',
      description:
        'True personal growth is not about reading fifty more books or checking off habits. It is about deeply integrating one truth into how you speak and live.',
    },
    {
      number: '03',
      title: 'Unhurried Pacing',
      description:
        'The nervous system cannot transform under artificial urgency. Real change requires spaciousness, patience, and natural rhythm.',
    },
    {
      number: '04',
      title: 'Grounded in Reality',
      description:
        'Wisdom is meaningless if it cannot survive a difficult Monday morning meeting or a strained family dinner. Our practices are built for everyday human existence.',
    },
  ] as CoreTenet[],
};
