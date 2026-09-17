'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import MobileNav from '@/components/layout/MobileNav';

const navLinks = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/what-we-offer', label: 'What We Offer' },
  { href: '/what-makes-us-different', label: 'What Makes Us Different' },
  { href: '/community', label: 'Join Our Community' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-surface/95 backdrop-blur-md border-b border-outline-variant/80 shadow-[0_1px_8px_rgba(31,42,36,0.04)]'
            : 'bg-surface/90 backdrop-blur-sm border-b border-outline-variant/50'
        )}
      >
        <div className="h-20 max-w-[1240px] mx-auto px-6 lg:px-16 flex items-center justify-between gap-8">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="group inline-flex items-baseline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <span className="font-serif text-[28px] tracking-tight text-primary font-normal group-hover:text-secondary transition-colors">
                SoulfulI
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-sans font-medium text-on-surface-variant">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary',
                      isActive
                        ? "text-primary font-semibold after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1.5px] after:bg-tertiary"
                        : 'hover:text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <Button
              href="/eq-audit"
              variant="primary"
              className="rounded-full px-5 sm:px-6 py-2.5 text-[13px] tracking-wide"
            >
              Take the EQ Audit
            </Button>

            <Link
              href="/contact"
              className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:border-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Contact & Support"
            >
              <User className="w-4 h-4 text-primary" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-on-surface-variant hover:text-primary rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

export default Header;
