import React from 'react';
import { DimensionInfo } from '@/content/auditQuestions';

export interface AuditProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  currentDimension: DimensionInfo;
}

export function AuditProgressBar({
  currentQuestion,
  totalQuestions,
  currentDimension,
}: AuditProgressBarProps) {
  const percentage = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between text-xs font-sans">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tertiary" />
          <span className="font-semibold uppercase tracking-wider text-primary">
            {currentDimension.name}
          </span>
        </div>
        <span className="text-on-surface-variant font-medium">
          Question {currentQuestion} of {totalQuestions} ({percentage}%)
        </span>
      </div>

      {/* Hairline Progress Track */}
      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden border border-outline-variant/40">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default AuditProgressBar;
