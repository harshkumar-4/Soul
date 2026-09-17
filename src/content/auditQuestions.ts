export interface AuditQuestion {
  id: number;
  dimensionId: DimensionId;
  dimensionName: string;
  dimensionDescription: string;
  text: string;
  reflectionPrompt: string;
}

export type DimensionId =
  | 'emotional_awareness'
  | 'emotional_regulation'
  | 'pattern_recognition'
  | 'empathy'
  | 'social_intelligence'
  | 'intentional_communication';

export interface DimensionInfo {
  id: DimensionId;
  name: string;
  shortName: string;
  description: string;
  reflectionFocus: string;
  growthPrompt: string;
}

export const dimensionsMap: Record<DimensionId, DimensionInfo> = {
  emotional_awareness: {
    id: 'emotional_awareness',
    name: 'Emotional Awareness',
    shortName: 'Awareness',
    description: 'The quiet capacity to perceive and accurately name internal emotional states as they arise.',
    reflectionFocus: 'Noticing what you feel before it dictates what you do.',
    growthPrompt: 'Practice checking in with your physical body twice daily without trying to fix anything.',
  },
  emotional_regulation: {
    id: 'emotional_regulation',
    name: 'Emotional Regulation',
    shortName: 'Regulation',
    description: 'The ability to stay grounded and soothe your nervous system in the presence of friction or stress.',
    reflectionFocus: 'Creating a deliberate pause between emotional stimulus and reactive response.',
    growthPrompt: 'When friction arises, allow three breaths before responding in speech or action.',
  },
  pattern_recognition: {
    id: 'pattern_recognition',
    name: 'Pattern Recognition',
    shortName: 'Patterns',
    description: 'Discerning recurring emotional habits, triggers, and protective defensive behaviors across time.',
    reflectionFocus: 'Recognizing familiar loops rather than assuming every crisis is brand new.',
    growthPrompt: 'Notice when a current conflict feels disproportionate to the immediate trigger.',
  },
  empathy: {
    id: 'empathy',
    name: 'Empathy & Resonance',
    shortName: 'Empathy',
    description: 'Listening beneath spoken words to feel and honor the emotional reality of another person.',
    reflectionFocus: 'Meeting others with open curiosity rather than immediate critique or problem-solving.',
    growthPrompt: 'Listen in your next conversation purely to understand, with zero intent to advise.',
  },
  social_intelligence: {
    id: 'social_intelligence',
    name: 'Social Intelligence',
    shortName: 'Social EQ',
    description: 'Reading group dynamics, unspoken tensions, and shared currents within teams and rooms.',
    reflectionFocus: 'Attuning to the climate of a gathering without absorbing or amplifying its anxiety.',
    growthPrompt: 'Observe group rhythms in meetings before contributing your perspective.',
  },
  intentional_communication: {
    id: 'intentional_communication',
    name: 'Intentional Communication',
    shortName: 'Communication',
    description: 'Expressing truth, vulnerability, and boundaries with clarity, care, and respectful precision.',
    reflectionFocus: 'Speaking what is real without sarcasm, passive aggression, or cruelty.',
    growthPrompt: 'Frame feedback using direct personal experience rather than generalized criticism.',
  },
};

export const auditQuestions: AuditQuestion[] = [
  // 1. Emotional Awareness (Q1-Q8)
  {
    id: 1,
    dimensionId: 'emotional_awareness',
    dimensionName: 'Emotional Awareness',
    dimensionDescription: 'Perceiving and naming internal emotional states.',
    text: 'I can quickly and accurately identify what I am feeling in moments of sudden friction or uncertainty.',
    reflectionPrompt: 'Notice how clearly you distinguish between anger, fear, exhaustion, and hurt.',
  },
  {
    id: 2,
    dimensionId: 'emotional_awareness',
    dimensionName: 'Emotional Awareness',
    dimensionDescription: 'Perceiving and naming internal emotional states.',
    text: 'I notice physical sensations in my body (tension in the chest, throat, or shoulders) before my thoughts register an emotion.',
    reflectionPrompt: 'Your body frequently registers emotional shifts before your conscious mind puts words to them.',
  },
  {
    id: 3,
    dimensionId: 'emotional_awareness',
    dimensionName: 'Emotional Awareness',
    dimensionDescription: 'Perceiving and naming internal emotional states.',
    text: 'I can distinguish between what I genuinely feel and what I believe I ought to feel in a given situation.',
    reflectionPrompt: 'Honesty with oneself is the quiet foundation of all genuine clarity.',
  },
  {
    id: 4,
    dimensionId: 'emotional_awareness',
    dimensionName: 'Emotional Awareness',
    dimensionDescription: 'Perceiving and naming internal emotional states.',
    text: 'I regularly pause during busy days simply to notice my internal weather without immediate judgment.',
    reflectionPrompt: 'The pause transforms unconscious reactivity into deliberate living.',
  },
  {
    id: 5,
    dimensionId: 'emotional_awareness',
    dimensionName: 'Emotional Awareness',
    dimensionDescription: 'Perceiving and naming internal emotional states.',
    text: 'I recognize subtle shifts in my energy and mood before they build into overwhelming exhaustion or irritation.',
    reflectionPrompt: 'Early awareness prevents late-stage burnout.',
  },
  {
    id: 6,
    dimensionId: 'emotional_awareness',
    dimensionName: 'Emotional Awareness',
    dimensionDescription: 'Perceiving and naming internal emotional states.',
    text: 'When experiencing mixed or contradictory emotions, I can hold space for both without forcing a false resolution.',
    reflectionPrompt: 'Maturity allows complexity without anxiety.',
  },
  {
    id: 7,
    dimensionId: 'emotional_awareness',
    dimensionName: 'Emotional Awareness',
    dimensionDescription: 'Perceiving and naming internal emotional states.',
    text: 'I am aware of how my own mood and unspoken energy influence the people around me.',
    reflectionPrompt: 'Our presence is constantly communicating, even in silence.',
  },
  {
    id: 8,
    dimensionId: 'emotional_awareness',
    dimensionName: 'Emotional Awareness',
    dimensionDescription: 'Perceiving and naming internal emotional states.',
    text: 'I can reflect on past mistakes without sinking into harsh self-condemnation or defensive denial.',
    reflectionPrompt: 'Self-compassion is what makes self-examination endurable.',
  },

  // 2. Emotional Regulation (Q9-Q16)
  {
    id: 9,
    dimensionId: 'emotional_regulation',
    dimensionName: 'Emotional Regulation',
    dimensionDescription: 'Steadying the nervous system and choosing response over reaction.',
    text: 'When provoked or unfairly challenged, I am able to pause and breathe before deciding how to respond.',
    reflectionPrompt: 'The space between impulse and action is where freedom lives.',
  },
  {
    id: 10,
    dimensionId: 'emotional_regulation',
    dimensionName: 'Emotional Regulation',
    dimensionDescription: 'Steadying the nervous system and choosing response over reaction.',
    text: 'I possess reliable internal practices that help me settle my nervous system during intense stress.',
    reflectionPrompt: 'Grounding practices are essential tools for modern leadership and daily peace.',
  },
  {
    id: 11,
    dimensionId: 'emotional_regulation',
    dimensionName: 'Emotional Regulation',
    dimensionDescription: 'Steadying the nervous system and choosing response over reaction.',
    text: 'I avoid discharging my frustration onto colleagues, family, or strangers who had no part in causing it.',
    reflectionPrompt: 'Containing one’s frustration protects relational trust.',
  },
  {
    id: 12,
    dimensionId: 'emotional_regulation',
    dimensionName: 'Emotional Regulation',
    dimensionDescription: 'Steadying the nervous system and choosing response over reaction.',
    text: 'I can sit quietly with discomfort or uncertainty without rushing into impulsive decision-making.',
    reflectionPrompt: 'Stillness in ambiguity is a rare and powerful capacity.',
  },
  {
    id: 13,
    dimensionId: 'emotional_regulation',
    dimensionName: 'Emotional Regulation',
    dimensionDescription: 'Steadying the nervous system and choosing response over reaction.',
    text: 'When plans unexpectedly fall apart, I adapt with steady patience rather than persistent bitterness.',
    reflectionPrompt: 'Flexibility is the natural expression of emotional resilience.',
  },
  {
    id: 14,
    dimensionId: 'emotional_regulation',
    dimensionName: 'Emotional Regulation',
    dimensionDescription: 'Steadying the nervous system and choosing response over reaction.',
    text: 'I do not use external distractions (endless scrolling, overwork, excessive habits) as my sole method of coping.',
    reflectionPrompt: 'Facing feeling directly reduces dependency on unconscious numbing.',
  },
  {
    id: 15,
    dimensionId: 'emotional_regulation',
    dimensionName: 'Emotional Regulation',
    dimensionDescription: 'Steadying the nervous system and choosing response over reaction.',
    text: 'I am able to recover my emotional equilibrium in a healthy timeframe after a significant disappointment.',
    reflectionPrompt: 'Equilibrium is not the absence of sorrow, but the return of ground.',
  },
  {
    id: 16,
    dimensionId: 'emotional_regulation',
    dimensionName: 'Emotional Regulation',
    dimensionDescription: 'Steadying the nervous system and choosing response over reaction.',
    text: 'I can acknowledge feeling hurt or disappointed without immediately retaliating or withdrawing completely.',
    reflectionPrompt: 'Staying open in vulnerability prevents relational hardening.',
  },

  // 3. Pattern Recognition (Q17-Q24)
  {
    id: 17,
    dimensionId: 'pattern_recognition',
    dimensionName: 'Pattern Recognition',
    dimensionDescription: 'Discerning recurring emotional habits and defensive loops.',
    text: 'I recognize the specific circumstances, environments, and personality types that reliably trigger my defensiveness.',
    reflectionPrompt: 'Knowing your triggers removes their surprise power.',
  },
  {
    id: 18,
    dimensionId: 'pattern_recognition',
    dimensionName: 'Pattern Recognition',
    dimensionDescription: 'Discerning recurring emotional habits and defensive loops.',
    text: 'I can catch myself in the middle of an old emotional script before it plays all the way through.',
    reflectionPrompt: 'Interruption is the first step of genuine transformation.',
  },
  {
    id: 19,
    dimensionId: 'pattern_recognition',
    dimensionName: 'Pattern Recognition',
    dimensionDescription: 'Discerning recurring emotional habits and defensive loops.',
    text: 'I understand the roots of my recurring insecurities and how they manifest in professional or personal relationships.',
    reflectionPrompt: 'Understanding the past prevents it from masquerading as the present.',
  },
  {
    id: 20,
    dimensionId: 'pattern_recognition',
    dimensionName: 'Pattern Recognition',
    dimensionDescription: 'Discerning recurring emotional habits and defensive loops.',
    text: 'I notice when my desire to control outcomes is actually unacknowledged fear seeking reassurance.',
    reflectionPrompt: 'Control is frequently fear wearing a confident mask.',
  },
  {
    id: 21,
    dimensionId: 'pattern_recognition',
    dimensionName: 'Pattern Recognition',
    dimensionDescription: 'Discerning recurring emotional habits and defensive loops.',
    text: 'I can trace the cycle of my over-commitment and understand why I struggle with setting early boundaries.',
    reflectionPrompt: 'Boundary issues often stem from an unexamined need to please.',
  },
  {
    id: 22,
    dimensionId: 'pattern_recognition',
    dimensionName: 'Pattern Recognition',
    dimensionDescription: 'Discerning recurring emotional habits and defensive loops.',
    text: 'I see how my defense mechanisms (humor, intellectualizing, silence) serve to keep others at a safe distance.',
    reflectionPrompt: 'Defenses once protected us; now they often isolate us.',
  },
  {
    id: 23,
    dimensionId: 'pattern_recognition',
    dimensionName: 'Pattern Recognition',
    dimensionDescription: 'Discerning recurring emotional habits and defensive loops.',
    text: 'I am able to learn from repeated relational conflicts rather than blaming the other person entirely.',
    reflectionPrompt: 'Examining your 50% in any dynamic is where agency begins.',
  },
  {
    id: 24,
    dimensionId: 'pattern_recognition',
    dimensionName: 'Pattern Recognition',
    dimensionDescription: 'Discerning recurring emotional habits and defensive loops.',
    text: 'I can spot the early signs of emotional exhaustion in myself weeks before a collapse occurs.',
    reflectionPrompt: 'Subtle signals are easier to treat than full crises.',
  },

  // 4. Empathy & Resonance (Q25-Q32)
  {
    id: 25,
    dimensionId: 'empathy',
    dimensionName: 'Empathy & Resonance',
    dimensionDescription: 'Honoring and attuning to the emotional reality of others.',
    text: 'I can listen attentively to someone without mentally drafting my rebuttal or offering unsolicited advice.',
    reflectionPrompt: 'Pure listening is one of the highest forms of human generosity.',
  },
  {
    id: 26,
    dimensionId: 'empathy',
    dimensionName: 'Empathy & Resonance',
    dimensionDescription: 'Honoring and attuning to the emotional reality of others.',
    text: 'I can genuinely validate someone else’s feelings even when their perspective differs fundamentally from mine.',
    reflectionPrompt: 'Validation does not require agreement; it requires respect.',
  },
  {
    id: 27,
    dimensionId: 'empathy',
    dimensionName: 'Empathy & Resonance',
    dimensionDescription: 'Honoring and attuning to the emotional reality of others.',
    text: 'I pick up on unspoken grief, worry, or tension in friends or colleagues without them having to explicitly declare it.',
    reflectionPrompt: 'Emotional sensitivity detects what words often conceal.',
  },
  {
    id: 28,
    dimensionId: 'empathy',
    dimensionName: 'Empathy & Resonance',
    dimensionDescription: 'Honoring and attuning to the emotional reality of others.',
    text: 'I am able to offer comfort without making the other person’s pain about my own past experiences.',
    reflectionPrompt: 'True presence keeps the spotlight on the person who is hurting.',
  },
  {
    id: 29,
    dimensionId: 'empathy',
    dimensionName: 'Empathy & Resonance',
    dimensionDescription: 'Honoring and attuning to the emotional reality of others.',
    text: 'I maintain empathy for people who are acting from a place of fear or unexamined pain.',
    reflectionPrompt: 'Compassion sees the wound behind the reactive armor.',
  },
  {
    id: 30,
    dimensionId: 'empathy',
    dimensionName: 'Empathy & Resonance',
    dimensionDescription: 'Honoring and attuning to the emotional reality of others.',
    text: 'I actively seek to understand the lived experiences and cultural backgrounds that shape how others view the world.',
    reflectionPrompt: 'Curiosity dissolves the narrowness of personal assumptions.',
  },
  {
    id: 31,
    dimensionId: 'empathy',
    dimensionName: 'Empathy & Resonance',
    dimensionDescription: 'Honoring and attuning to the emotional reality of others.',
    text: 'I can hold emotional space for another person’s tears or sorrow without feeling an urgent need to cheer them up.',
    reflectionPrompt: 'Sitting in stillness with another is often more healing than forced optimism.',
  },
  {
    id: 32,
    dimensionId: 'empathy',
    dimensionName: 'Empathy & Resonance',
    dimensionDescription: 'Honoring and attuning to the emotional reality of others.',
    text: 'I can celebrate the triumphs and good fortune of others without experiencing quiet envy or comparison.',
    reflectionPrompt: 'Shared joy multiplies emotional abundance.',
  },

  // 5. Social Intelligence (Q33-Q40)
  {
    id: 33,
    dimensionId: 'social_intelligence',
    dimensionName: 'Social Intelligence',
    dimensionDescription: 'Navigating group dynamics and relational climates.',
    text: 'I quickly sense the emotional atmosphere and unspoken hierarchy in a room when I enter a meeting or gathering.',
    reflectionPrompt: 'Every group has a subtle energetic baseline worth reading.',
  },
  {
    id: 34,
    dimensionId: 'social_intelligence',
    dimensionName: 'Social Intelligence',
    dimensionDescription: 'Navigating group dynamics and relational climates.',
    text: 'I know how to facilitate productive dialogue between individuals holding conflicting views without escalating hostility.',
    reflectionPrompt: 'Bridging divides requires holding a calm center.',
  },
  {
    id: 35,
    dimensionId: 'social_intelligence',
    dimensionName: 'Social Intelligence',
    dimensionDescription: 'Navigating group dynamics and relational climates.',
    text: 'I adapt my communication tone thoughtfully based on the emotional readiness and context of my listeners.',
    reflectionPrompt: 'Timing and tone determine whether truth can be received.',
  },
  {
    id: 36,
    dimensionId: 'social_intelligence',
    dimensionName: 'Social Intelligence',
    dimensionDescription: 'Navigating group dynamics and relational climates.',
    text: 'I notice when someone in a conversation is feeling excluded or talked over and gently create space for their voice.',
    reflectionPrompt: 'Inclusion is created in the micro-moments of human discourse.',
  },
  {
    id: 37,
    dimensionId: 'social_intelligence',
    dimensionName: 'Social Intelligence',
    dimensionDescription: 'Navigating group dynamics and relational climates.',
    text: 'I can decline invitations or disengage from unhealthy group dynamics with quiet dignity and firmness.',
    reflectionPrompt: 'Healthy boundaries protect relational longevity.',
  },
  {
    id: 38,
    dimensionId: 'social_intelligence',
    dimensionName: 'Social Intelligence',
    dimensionDescription: 'Navigating group dynamics and relational climates.',
    text: 'I understand how organizational pressures and systemic incentives shape interpersonal behavior in the workplace.',
    reflectionPrompt: 'Distinguishing structural pressure from individual malice brings clarity.',
  },
  {
    id: 39,
    dimensionId: 'social_intelligence',
    dimensionName: 'Social Intelligence',
    dimensionDescription: 'Navigating group dynamics and relational climates.',
    text: 'I can de-escalate collective anxiety in a team by remaining steady, grounded, and clear.',
    reflectionPrompt: 'A grounded nervous system is contagious in times of turbulence.',
  },
  {
    id: 40,
    dimensionId: 'social_intelligence',
    dimensionName: 'Social Intelligence',
    dimensionDescription: 'Navigating group dynamics and relational climates.',
    text: 'I build relationships based on mutual respect, trust, and shared values rather than mere transactional advantage.',
    reflectionPrompt: 'Enduring networks are built on genuine human resonance.',
  },

  // 6. Intentional Communication (Q41-Q48)
  {
    id: 41,
    dimensionId: 'intentional_communication',
    dimensionName: 'Intentional Communication',
    dimensionDescription: 'Speaking truth with clarity, care, and respectful precision.',
    text: 'I can express difficult feedback directly and clearly without relying on sarcasm, passive aggression, or cruelty.',
    reflectionPrompt: 'Direct clarity is an act of relational respect.',
  },
  {
    id: 42,
    dimensionId: 'intentional_communication',
    dimensionName: 'Intentional Communication',
    dimensionDescription: 'Speaking truth with clarity, care, and respectful precision.',
    text: 'I am comfortable saying &ldquo;I don’t know&rdquo; or &ldquo;I made an error&rdquo; openly without defensive posturing.',
    reflectionPrompt: 'Intellectual humility builds immense credibility.',
  },
  {
    id: 43,
    dimensionId: 'intentional_communication',
    dimensionName: 'Intentional Communication',
    dimensionDescription: 'Speaking truth with clarity, care, and respectful precision.',
    text: 'I state my needs and boundaries clearly rather than expecting others to instinctively read my mind.',
    reflectionPrompt: 'Unexpressed expectations are pre-planned resentments.',
  },
  {
    id: 44,
    dimensionId: 'intentional_communication',
    dimensionName: 'Intentional Communication',
    dimensionDescription: 'Speaking truth with clarity, care, and respectful precision.',
    text: 'I choose the right medium (in-person, voice, written) for delicate conversations rather than hiding behind short texts.',
    reflectionPrompt: 'High-stakes nuance belongs in human voice and presence.',
  },
  {
    id: 45,
    dimensionId: 'intentional_communication',
    dimensionName: 'Intentional Communication',
    dimensionDescription: 'Speaking truth with clarity, care, and respectful precision.',
    text: 'When apologizing, I take full ownership of my impact without adding justifying &ldquo;buts&rdquo; or excuses.',
    reflectionPrompt: 'A clean apology repairs what defensiveness further breaks.',
  },
  {
    id: 46,
    dimensionId: 'intentional_communication',
    dimensionName: 'Intentional Communication',
    dimensionDescription: 'Speaking truth with clarity, care, and respectful precision.',
    text: 'I listen to understand rather than to formulate my next counter-point while the other person is still speaking.',
    reflectionPrompt: 'Presence during dialogue is the antidote to misunderstanding.',
  },
  {
    id: 47,
    dimensionId: 'intentional_communication',
    dimensionName: 'Intentional Communication',
    dimensionDescription: 'Speaking truth with clarity, care, and respectful precision.',
    text: 'I can disagree with someone’s idea while affirming my respect and dignity for them as a human being.',
    reflectionPrompt: 'Separating ideas from human worth elevates conversation.',
  },
  {
    id: 48,
    dimensionId: 'intentional_communication',
    dimensionName: 'Intentional Communication',
    dimensionDescription: 'Speaking truth with clarity, care, and respectful precision.',
    text: 'I speak with measured intention, choosing words that clarify and build rather than provoke or inflame.',
    reflectionPrompt: 'Intentional words foster understanding and peace.',
  },
];
