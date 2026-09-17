export interface EmotionalArcStage {
  stageNumber: string;
  name: string;
  theme: string;
  description: string;
  reflectionQuote: string;
  imageSrc?: string;
  bgColor?: string;
}

export const emotionalArcStages: EmotionalArcStage[] = [
  {
    stageNumber: '01',
    name: 'Noise',
    theme: 'The Exhaustion of Accumulation',
    description:
      'We live in relentless external velocity—notifications, productivity checklists, and constant self-optimization. Yet accumulating tasks does not equal living deeply.',
    reflectionQuote: 'When everything is demanding your attention, nothing receives your presence.',
    imageSrc: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    stageNumber: '02',
    name: 'Pause',
    theme: 'The Sacred Hesitation',
    description:
      'The courageous act of stopping without guilt. Creating deliberate room between stimulus and reaction, allowing the dust of daily agitation to settle.',
    reflectionQuote: 'Stillness is not lost time; it is the space where clarity is born.',
    imageSrc: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80',
  },
  {
    stageNumber: '03',
    name: 'Awareness',
    theme: 'Perceiving the Internal Weather',
    description:
      'Turning attention inward to perceive sensations, emotional currents, and subtle tensions without rushing to suppress or judge them.',
    reflectionQuote: 'You cannot navigate a landscape you refuse to look upon.',
    imageSrc: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    stageNumber: '04',
    name: 'Understanding',
    theme: 'Discerning the Roots of Habit',
    description:
      'Tracing emotional reactions back to their underlying roots. Recognizing protective scripts and historical habits with honest compassion.',
    reflectionQuote: 'Compassion turns self-examination from a courtroom into a mirror.',
    imageSrc: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    stageNumber: '05',
    name: 'Direction',
    theme: 'Choosing from Grounded Intention',
    description:
      'Moving from reactive survival to deliberate agency. Aligning daily choices, boundaries, and commitments with your core truth.',
    reflectionQuote: 'A clear internal compass makes every decision simpler.',
    imageSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    stageNumber: '06',
    name: 'Connection',
    theme: 'Meeting Others in Resonance',
    description:
      'Extending grounded self-awareness outward into dialogue, authentic listening, non-defensive leadership, and profound human trust.',
    reflectionQuote: 'When you are rooted within yourself, you can meet others without armor.',
    imageSrc: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80',
  },
  {
    stageNumber: '07',
    name: 'Bloom',
    theme: 'Living Wholeness into Daily Reality',
    description:
      'The retreat ends. The workshop concludes. But the integrated blossoming of mind, heart, and spirit continues in every ordinary moment.',
    reflectionQuote: 'Wholeness is not a destination. It is the quality of your presence right now.',
    imageSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
  },
];
