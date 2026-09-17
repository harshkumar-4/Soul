import { auditQuestions, dimensionsMap, DimensionId, DimensionInfo } from '@/content/auditQuestions';

export interface AuditSubmission {
  answers: Record<number, number>; // questionId -> score (1..5)
  email?: string;
  name?: string;
}

export interface DimensionScore {
  dimensionId: DimensionId;
  info: DimensionInfo;
  rawScore: number;
  maxScore: number;
  percentage: number; // 0..100
  level: 'Emerging' | 'Developing' | 'Integrated' | 'Refined';
  reflection: string;
}

export interface AuditResult {
  overallScore: number; // 0..100
  dimensionScores: DimensionScore[];
  strongestDimension: DimensionScore;
  growthDimension: DimensionScore;
  overallNarrative: string;
  recommendedPathway: {
    title: string;
    description: string;
    href: string;
    badgeText: string;
  };
  completedAt: string;
}

export function calculateAuditResult(submission: AuditSubmission): AuditResult {
  const dimensionTotals: Record<DimensionId, { sum: number; count: number }> = {
    emotional_awareness: { sum: 0, count: 0 },
    emotional_regulation: { sum: 0, count: 0 },
    pattern_recognition: { sum: 0, count: 0 },
    empathy: { sum: 0, count: 0 },
    social_intelligence: { sum: 0, count: 0 },
    intentional_communication: { sum: 0, count: 0 },
  };

  auditQuestions.forEach((q) => {
    const answer = submission.answers[q.id] || 3; // Default to neutral 3 if unanswered
    dimensionTotals[q.dimensionId].sum += answer;
    dimensionTotals[q.dimensionId].count += 1;
  });

  const dimensionScores: DimensionScore[] = (Object.keys(dimensionTotals) as DimensionId[]).map(
    (dimId) => {
      const data = dimensionTotals[dimId];
      const max = data.count * 5;
      const min = data.count * 1;
      // Normalize percentage on 1..5 scale: (sum - min) / (max - min) * 100
      const percentage = Math.round(((data.sum - min) / (max - min)) * 100);

      let level: DimensionScore['level'] = 'Developing';
      if (percentage >= 80) level = 'Refined';
      else if (percentage >= 60) level = 'Integrated';
      else if (percentage >= 40) level = 'Developing';
      else level = 'Emerging';

      return {
        dimensionId: dimId,
        info: dimensionsMap[dimId],
        rawScore: data.sum,
        maxScore: max,
        percentage,
        level,
        reflection: dimensionsMap[dimId].reflectionFocus,
      };
    }
  );

  // Sort dimensions to find strongest and growth areas
  const sorted = [...dimensionScores].sort((a, b) => b.percentage - a.percentage);
  const strongest = sorted[0];
  const growth = sorted[sorted.length - 1];

  const overallScore = Math.round(
    dimensionScores.reduce((acc, curr) => acc + curr.percentage, 0) / dimensionScores.length
  );

  let overallNarrative =
    'Your profile reflects a thoughtful, evolving emotional capacity. You possess authentic self-reflective grounding while holding fertile ground for deeper non-reactive communication and nervous system stability.';

  if (overallScore >= 75) {
    overallNarrative =
      'Your profile reveals a deeply integrated emotional consciousness. You demonstrate consistent self-attunement and relational generosity, providing a steady, grounded presence for those around you.';
  } else if (overallScore < 50) {
    overallNarrative =
      'Your profile indicates a powerful moment of emerging inquiry. By giving yourself permission to slow down and observe habitual reactive patterns, you are laying the foundation for transformative clarity.';
  }

  // Determine tailored recommendation
  const recommendedPathway =
    growth.dimensionId === 'emotional_regulation' || growth.dimensionId === 'emotional_awareness'
      ? {
          title: 'Quiet Bloom Retreat',
          description:
            'A Himalayan sanctuary in Dharamshala designed for deep nervous system reset, stillness, and restoring grounded presence.',
          href: '/quiet-bloom',
          badgeText: 'Contemplative Retreat',
        }
      : {
          title: 'Inner Compass Program',
          description:
            'A guided 5-pillar journey focused on mastering intentional communication, non-reactive leadership, and relational resonance.',
          href: '/inner-compass',
          badgeText: 'Guided Program',
        };

  return {
    overallScore,
    dimensionScores,
    strongestDimension: strongest,
    growthDimension: growth,
    overallNarrative,
    recommendedPathway,
    completedAt: new Date().toISOString(),
  };
}
