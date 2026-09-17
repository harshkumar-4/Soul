import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

export interface OfferingCardProps {
  title: string;
  tagline: string;
  description: string;
  href: string;
  badgeText?: string;
  badgeVariant?: 'sage' | 'sand' | 'terracotta' | 'forest';
  imageSrc?: string;
  imageAlt?: string;
  features?: string[];
  ctaText?: string;
  className?: string;
}

export function OfferingCard({
  title,
  tagline,
  description,
  href,
  badgeText,
  badgeVariant = 'sage',
  imageSrc,
  imageAlt = '',
  features,
  ctaText = 'Explore Pathway',
  className,
}: OfferingCardProps) {
  return (
    <div
      className={cn(
        'group bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 rounded-lg p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm',
        className
      )}
    >
      <div className="space-y-6">
        {imageSrc && (
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded bg-surface-container-high">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="space-y-3">
          {badgeText && <Badge variant={badgeVariant}>{badgeText}</Badge>}
          <h3 className="font-serif text-headline-md text-primary font-normal leading-snug">
            {title}
          </h3>
          <p className="font-serif text-body-md text-secondary italic font-normal">
            {tagline}
          </p>
          <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
            {description}
          </p>
        </div>

        {features && features.length > 0 && (
          <ul className="space-y-2 pt-2 border-t border-outline-variant/40 text-body-sm text-on-surface-variant">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-secondary select-none font-serif">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-6 mt-6 border-t border-outline-variant/40 flex items-center justify-between">
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-sans text-body-sm font-semibold text-primary group-hover:text-tertiary transition-colors"
        >
          <span>{ctaText}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

export default OfferingCard;
