import React from 'react';
import { cn } from '@/lib/utils';

export interface MilestoneItem {
  number: string;
  title: string;
  description: string;
}

export interface ProgressionTimelineProps {
  milestones: MilestoneItem[];
  className?: string;
}

export function ProgressionTimeline({ milestones, className }: ProgressionTimelineProps) {
  return (
    <div className={cn('w-full space-y-8', className)}>
      {/* Desktop Grid with Connecting Rule */}
      <div className="hidden sm:grid sm:grid-cols-4 gap-6 lg:gap-8 relative">
        <div className="absolute top-[9px] left-0 right-0 h-px bg-outline-variant -z-0" />
        {milestones.map((item, idx) => (
          <div key={idx} className="relative z-10 space-y-2 pr-2">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-background border border-secondary flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-sans text-label-sm uppercase tracking-wider text-primary font-semibold">
                {item.number} {item.title}
              </span>
            </div>
            <p className="font-sans text-body-sm text-on-surface-variant pt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Vertical Stepper */}
      <div className="sm:hidden space-y-6 relative pl-6 border-l border-outline-variant">
        {milestones.map((item, idx) => (
          <div key={idx} className="relative space-y-1">
            <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-background border border-secondary flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-primary" />
            </span>
            <span className="font-sans text-label-sm uppercase tracking-wider text-primary font-semibold block">
              {item.number} {item.title}
            </span>
            <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressionTimeline;
