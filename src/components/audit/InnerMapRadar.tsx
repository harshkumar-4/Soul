'use client';

import React from 'react';
import { DimensionScore } from '@/lib/audit/scoring';

export interface InnerMapRadarProps {
  scores: DimensionScore[];
  size?: number;
}

export function InnerMapRadar({ scores }: InnerMapRadarProps) {
  const width = 520;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 122;
  const total = scores.length || 6;
  const angleStep = (Math.PI * 2) / total;

  // Background concentric rings (25%, 50%, 75%, 100%)
  const levels = [0.25, 0.5, 0.75, 1.0];

  const getCoordinates = (index: number, levelRadius: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const x = centerX + levelRadius * Math.cos(angle);
    const y = centerY + levelRadius * Math.sin(angle);
    return { x, y, angle };
  };

  const points = scores.map((item, i) => {
    const normalizedValue = Math.max(0.15, item.percentage / 100);
    return getCoordinates(i, radius * normalizedValue);
  });

  const polygonPath = points.map((p) => `${p.x},${p.y}`).join(' ');
  const accessibleSummary = scores
    .map((s) => `${s.info.name}: ${s.percentage}%`)
    .join(', ');

  return (
    <div className="w-full flex flex-col items-center justify-center relative select-none">
      <svg
        role="img"
        aria-label={`Inner Map six-dimension profile: ${accessibleSummary}`}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full max-w-[480px] h-auto"
      >
        {/* Background Concentric Webs */}
        {levels.map((lvl, lIdx) => {
          const ringPoints = Array.from({ length: total }).map((_, i) =>
            getCoordinates(i, radius * lvl)
          );
          const ringPath = ringPoints.map((p) => `${p.x},${p.y}`).join(' ');
          return (
            <polygon
              key={lIdx}
              points={ringPath}
              fill="none"
              stroke="#DDD6C8"
              strokeWidth={lIdx === levels.length - 1 ? '1.5' : '1'}
              strokeDasharray={lIdx < levels.length - 1 ? '3 3' : undefined}
            />
          );
        })}

        {/* Radial Axis Spokes */}
        {scores.map((_, i) => {
          const outer = getCoordinates(i, radius);
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={outer.x}
              y2={outer.y}
              stroke="#DDD6C8"
              strokeWidth="1"
            />
          );
        })}

        {/* Active Data Filled Polygon */}
        <polygon
          points={polygonPath}
          fill="rgba(31, 42, 36, 0.15)"
          stroke="#1F2A24"
          strokeWidth="2"
          className="transition-all duration-700 ease-out"
        />

        {/* Data Point Dots */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4.5"
            fill="#C86D51"
            stroke="#FAF6EE"
            strokeWidth="2"
          />
        ))}

        {/* Outer Dimension Label Texts positioned cleanly inside the SVG viewBox */}
        {scores.map((score, i) => {
          const { x, y, angle } = getCoordinates(i, radius + 24);
          const cos = Math.cos(angle);
          const textAnchor =
            cos > 0.2 ? 'start' : cos < -0.2 ? 'end' : 'middle';

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor={textAnchor}
              dominantBaseline="middle"
              className="text-[11px] font-sans font-semibold uppercase tracking-wider fill-primary"
            >
              {score.info.shortName} ({score.percentage}%)
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default InnerMapRadar;
