'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface AccordionItemProps {
  id: string;
  title: string;
  subtitle?: string;
  index?: string;
  children: React.ReactNode;
}

export function AccordionItem({
  title,
  subtitle,
  index,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps & { isOpen?: boolean; onToggle?: () => void }) {
  return (
    <div className="border-b border-outline-variant/60 py-5 transition-colors">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded py-1"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          {index && (
            <span className="font-serif text-secondary text-headline-sm pt-0.5 select-none">
              {index}
            </span>
          )}
          <div>
            <h3 className="font-serif text-headline-sm text-primary font-normal leading-snug">
              {title}
            </h3>
            {subtitle && (
              <p className="font-sans text-body-sm text-on-surface-variant mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <span className="font-serif text-2xl text-secondary select-none shrink-0 leading-none pt-1">
          {isOpen ? '—' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pt-4 pb-2 pl-0 sm:pl-10 font-sans text-body-md text-on-surface-variant leading-relaxed animate-in fade-in-50 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

export interface AccordionProps {
  items: {
    id: string;
    index?: string;
    title: string;
    subtitle?: string;
    content: React.ReactNode;
  }[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('divide-y divide-transparent', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          index={item.index}
          title={item.title}
          subtitle={item.subtitle}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggleItem(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
