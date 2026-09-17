'use client';

import React from 'react';
import { DimensionScore } from '@/lib/audit/scoring';

export interface InnerMapRadarProps {
  scores: DimensionScore[];
  size?: number;
}

export function InnerMapRadar({ scores, size = 380 }: InnerMapRadarProps) {
  const center = size / 2;
  const radius = (size - 80) / 2;
  const total = scores.length || 6;
  const angleStep = (Math.PI * 2) / total;

  // Compute background polygon rings (25%, 50%, 75%, 100%)
  const levels = [0.25, 0.5, 0.75, 1.0];

  const getCoordinates = (index: number, levelRadius: number) => {
    // Start from top (- PI / 2)
    const angle = index * angleStep - Math.PI / 2;
    const x = center + levelRadius * Math.cos(angle);
    const y = center + levelRadius * Math.sin(angle);
    return { x, y };
  };

  // Compute data polygon points
  const points = scores.map((item, i) => {
    // Value between 0.15 and 1.0 (min visual radius 15% for clarity)
    const normalizedValue = Math.max(0.15, item.percentage / 100);
    return getCoordinates(i, radius * normalizedValue);
  });

  const polygonPath = points.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <div className="flex flex-col items-center justify-center relative select-none">
      <svg
        width={size}
        height={size}
        className="overflow-visible"
        viewBox={`0 0 ${size} ${size}`}
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
              x1={center}
              y1={center}
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

        {/* Data Point Dots & Score Labels */}
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r="4.5"
              fill="#C86D51"
              stroke="#FAF6EE"
              strokeWidth="2"
            />
          </g>
        ))}

        {/* Outer Dimension Label Texts */}
        {scores.map((score, i) => {
          const labelCoord = getCoordinates(i, radius + 28);
          return (
            <text
              key={i}
              x={labelCoord.x}
              y={labelCoord.y}
              textAnchor="middle"
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
