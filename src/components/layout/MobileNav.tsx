'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/what-we-offer', label: 'What We Offer' },
  { href: '/what-makes-us-different', label: 'What Makes Us Different' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
];

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface p-6 shadow-2xl border-l border-outline-variant flex flex-col justify-between animate-in slide-in-from-right duration-300">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-outline-variant/60">
            <Link
              href="/"
              onClick={onClose}
              className="font-serif text-2xl text-primary tracking-tight"
            >
              SoulfulI
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-on-surface-variant hover:text-primary rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'text-lg font-sans transition-colors py-1',
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-on-surface-variant hover:text-primary'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-outline-variant/60 space-y-3">
          <Button
            href="/eq-audit"
            variant="primary"
            className="w-full rounded-full py-3 text-sm"
            onClick={onClose}
          >
            Take the EQ Audit
          </Button>
          <p className="text-center text-xs text-on-surface-variant/70 pt-2">
            Mind · Heart · Spirit
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
