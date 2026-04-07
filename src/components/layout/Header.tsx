'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu, type IndustryLink } from './MobileMenu';

const industryIcons: Record<string, string> = {
  'clinici-dentare': '\u{1F9B7}',
  'cabinete-medicale': '\u{1FA7A}',
  'saloane-de-frumusete': '\u{2728}',
  'firme-de-avocatura': '\u{2696}',
  'agentii-imobiliare': '\u{1F3E0}',
  'service-auto': '\u{1F697}',
  'frizerii-barbershop': '\u{2702}',
  'hoteluri-hospitality': '\u{1F3E8}',
  'consultanti-imigrare': '\u{2708}',
  'notariate': '\u{1F4DC}',
};

function getIndustries(locale: string): IndustryLink[] {
  const industries = [
    { ro: 'Clinici dentare', en: 'Dental Clinics', slug: 'clinici-dentare' },
    { ro: 'Cabinete medicale', en: 'Medical Offices', slug: 'cabinete-medicale' },
    { ro: 'Saloane de frumusete', en: 'Beauty Salons', slug: 'saloane-de-frumusete' },
    { ro: 'Firme de avocatura', en: 'Law Firms', slug: 'firme-de-avocatura' },
    { ro: 'Agentii imobiliare', en: 'Real Estate', slug: 'agentii-imobiliare' },
    { ro: 'Service auto', en: 'Auto Service', slug: 'service-auto' },
    { ro: 'Frizerii & Barbershop', en: 'Barbershops', slug: 'frizerii-barbershop' },
    { ro: 'Hoteluri & Hospitality', en: 'Hotels & Hospitality', slug: 'hoteluri-hospitality' },
    { ro: 'Consultanti imigrare', en: 'Immigration Consultants', slug: 'consultanti-imigrare' },
    { ro: 'Notariate', en: 'Notary Offices', slug: 'notariate' },
  ];
  const pathBase = locale === 'ro' ? `/${locale}/industrii` : `/${locale}/industries`;
  return industries.map((i) => ({
    label: locale === 'ro' ? i.ro : i.en,
    href: `${pathBase}/${i.slug}`,
    slug: i.slug,
  })) as (IndustryLink & { slug: string })[];
}

function getNavLinks(locale: string) {
  if (locale === 'ro') {
    return [
      { label: 'Cum functioneaza', href: `/${locale}/cum-functioneaza` },
      { label: 'Preturi', href: `/${locale}/preturi` },
      { label: 'Despre noi', href: `/${locale}/despre-noi` },
      { label: 'Contact', href: `/${locale}/contact` },
    ];
  }
  return [
    { label: 'How it works', href: `/${locale}/how-it-works` },
    { label: 'Pricing', href: `/${locale}/pricing` },
    { label: 'About', href: `/${locale}/about` },
    { label: 'Contact', href: `/${locale}/contact` },
  ];
}

export function Header() {
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const industries = getIndustries(locale);
  const navLinks = getNavLinks(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-smooth',
          scrolled
            ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border-subtle shadow-lg shadow-bg-primary/50'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-site items-center justify-between px-4 lg:px-8">
          <Link href={`/${locale}`} className="font-satoshi text-2xl font-bold text-accent-primary">
            YORAM
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-3 py-2 font-sans text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {locale === 'ro' ? 'Industrii' : 'Industries'}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-text-secondary">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                  >
                    <div className="grid w-[600px] grid-cols-2 gap-1 rounded-2xl border border-border-subtle bg-bg-card/95 p-3 shadow-glow-lg backdrop-blur-xl">
                      {(industries as (IndustryLink & { slug: string })[]).map((industry) => (
                        <Link
                          key={industry.href}
                          href={industry.href}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-sans text-sm text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
                        >
                          <span className="text-base">{industryIcons[industry.slug] ?? ''}</span>
                          {industry.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 font-sans text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <Button href={`/${locale}/contact`} variant="primary" size="sm">
              {locale === 'ro' ? 'Solicita demo' : 'Request demo'}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        industries={industries}
        navLinks={navLinks}
      />
    </>
  );
}
