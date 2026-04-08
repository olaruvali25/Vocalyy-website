'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { GlowCard } from '@/components/ui/GlowCard';
import { Button } from '@/components/ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function CumFunctioneazaPage() {
  const t = useTranslations('howItWorks');
  const tc = useTranslations('common');
  const locale = useLocale();

  const steps = [
    {
      number: 1,
      title: t('steps.0.title'),
      description: t('steps.0.description'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: 2,
      title: t('steps.1.title'),
      description: t('steps.1.description'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      number: 3,
      title: t('steps.2.title'),
      description: t('steps.2.description'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8 12C8 7.58 11.58 4 16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 4L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 4L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 12C16 16.42 12.42 20 8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: 4,
      title: t('steps.3.title'),
      description: t('steps.3.description'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
          <path d="M9 9V21" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      number: 5,
      title: t('steps.4.title'),
      description: t('steps.4.description'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const trustCards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 2L4 7.5V14C4 20.9 8.44 27.35 14 28C19.56 27.35 24 20.9 24 14V7.5L14 2Z" stroke="currentColor" strokeWidth="2" />
          <path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: t('trust.gdpr.title'),
      description: t('trust.gdpr.description'),
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="4" y="13" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 13V9C8 5.69 10.69 3 14 3C17.31 3 20 5.69 20 9V13" stroke="currentColor" strokeWidth="2" />
          <circle cx="14" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: t('trust.encryption.title'),
      description: t('trust.encryption.description'),
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
          <path d="M7 25V23C7 19.69 9.69 17 13 17H15C18.31 17 21 19.69 21 23V25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: t('trust.humanHandoff.title'),
      description: t('trust.humanHandoff.description'),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-hero font-satoshi font-bold text-text-primary">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-hero-sub text-text-secondary max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5-step Timeline */}
      <section className="section-padding">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary text-center mb-12"
          >
            {t('timeline.title')}
          </motion.h2>
          <HowItWorks steps={steps} />
        </div>
      </section>

      {/* Live Demo Embed */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-site max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary mb-4">
              {t('demo.title')}
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              {t('demo.description')}
            </p>
            <GlowCard padding="lg" className="border-accent-primary/20">
              <div className="aspect-video flex items-center justify-center bg-bg-elevated rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-accent-primary ml-1">
                      <path d="M10 6L26 16L10 26V6Z" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-text-secondary text-sm">{t('demo.placeholder')}</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary text-center mb-12"
          >
            {t('trust.title')}
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {trustCards.map((card, i) => (
              <motion.div key={i} variants={fadeUp}>
                <GlowCard padding="lg" className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mx-auto mb-5 text-accent-primary">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-satoshi font-bold text-text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <Button variant="primary" size="lg" href={`/${locale}/contact`}>
              {t('cta.button')}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
