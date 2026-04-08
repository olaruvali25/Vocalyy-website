'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';

interface IndustryLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  industries: IndustryLink[];
  navLinks: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, industries, navLinks }: MobileMenuProps) {
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const locale = useLocale();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-border-subtle bg-bg-primary lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto">
              <div className="flex items-center justify-between border-b border-border-subtle px-6 py-4">
                <span className="font-satoshi text-xl font-bold text-accent-primary">
                  YORAM
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M15 5L5 15M5 5L15 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 px-6 py-6">
                <ul className="space-y-1">
                  <li>
                    <button
                      type="button"
                      onClick={() => setIndustriesOpen(!industriesOpen)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-sans text-base text-text-primary transition-colors hover:bg-bg-elevated"
                    >
                      <span>{locale === 'ro' ? 'Industrii' : 'Industries'}</span>
                      <motion.svg
                        animate={{ rotate: industriesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-text-secondary"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {industriesOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4"
                        >
                          {industries.map((industry) => (
                            <li key={industry.href}>
                              <Link
                                href={industry.href}
                                onClick={onClose}
                                className="block rounded-lg px-4 py-2 font-sans text-sm text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
                              >
                                {industry.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block rounded-xl px-4 py-3 font-sans text-base text-text-primary transition-colors hover:bg-bg-elevated"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-border-subtle px-6 py-6 space-y-4">
                <LanguageSwitcher className="justify-center" />
                <Button href={`/${locale}/contact`} variant="primary" size="md" className="w-full">
                  {locale === 'ro' ? 'Solicita demo' : 'Request demo'}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export type { MobileMenuProps, IndustryLink };
