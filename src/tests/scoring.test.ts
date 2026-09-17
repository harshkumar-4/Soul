import { describe, it, expect } from 'vitest';
import { calculateAuditResult } from '@/lib/audit/scoring';
import { auditQuestions } from '@/content/auditQuestions';

describe('EQ Audit Scoring Engine', () => {
  it('should compute neutral 50% score when all answers are 3', () => {
    const answers: Record<number, number> = {};
    auditQuestions.forEach((q) => {
      answers[q.id] = 3;
    });

    const result = calculateAuditResult({ answers });
    expect(result.overallScore).toBe(50);
    expect(result.dimensionScores.length).toBe(6);
    result.dimensionScores.forEach((dim) => {
      expect(dim.percentage).toBe(50);
      expect(dim.level).toBe('Developing');
    });
  });

  it('should compute 100% score when all answers are 5 (Consistently)', () => {
    const answers: Record<number, number> = {};
    auditQuestions.forEach((q) => {
      answers[q.id] = 5;
    });

    const result = calculateAuditResult({ answers });
    expect(result.overallScore).toBe(100);
    expect(result.strongestDimension.percentage).toBe(100);
    expect(result.strongestDimension.level).toBe('Refined');
  });

  it('should identify strongest and growth dimensions correctly', () => {
    const answers: Record<number, number> = {};
    auditQuestions.forEach((q) => {
      // High score for emotional awareness (Q1..8)
      if (q.dimensionId === 'emotional_awareness') {
        answers[q.id] = 5;
      } else if (q.dimensionId === 'emotional_regulation') {
        answers[q.id] = 1;
      } else {
        answers[q.id] = 3;
      }
    });

    const result = calculateAuditResult({ answers });
    expect(result.strongestDimension.dimensionId).toBe('emotional_awareness');
    expect(result.growthDimension.dimensionId).toBe('emotional_regulation');
    expect(result.growthDimension.percentage).toBe(0);
    expect(result.recommendedPathway.title).toBe('Quiet Bloom Retreat');
  });
});
