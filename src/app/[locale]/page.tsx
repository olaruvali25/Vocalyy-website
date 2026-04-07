'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Hero } from '@/components/sections/Hero';
import { ProblemStatement } from '@/components/sections/ProblemStatement';
import { BeforeAfterComparison } from '@/components/sections/BeforeAfterComparison';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { GlowCard } from '@/components/ui/GlowCard';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

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

function WhatAgentDoesSection() {
  const t = useTranslations('homepage.whatAgentDoes');

  const scenarios = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 12C8 7.58 11.58 4 16 4C20.42 4 24 7.58 24 12V20H8V12Z" stroke="currentColor" strokeWidth="2" />
          <path d="M4 20H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 20V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 20V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: t('scenario1.title'),
      description: t('scenario1.description'),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M4 12H28" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="22" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: t('scenario2.title'),
      description: t('scenario2.description'),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 16L28 10" stroke="currentColor" strokeWidth="2" />
          <path d="M16 16L4 10" stroke="currentColor" strokeWidth="2" />
          <path d="M16 16V28" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: t('scenario3.title'),
      description: t('scenario3.description'),
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-satoshi font-bold text-text-primary">
            {t('title')}
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {scenarios.map((scenario, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlowCard padding="lg" className="h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mx-auto mb-5 text-accent-primary">
                  {scenario.icon}
                </div>
                <h3 className="text-lg font-satoshi font-bold text-text-primary mb-3">
                  {scenario.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {scenario.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IndustryGridSection() {
  const t = useTranslations('homepage.industries');
  const locale = useLocale();

  const industries = [
    { slug: 'clinici-dentare', icon: '\u{1F9B7}' },
    { slug: 'cabinete-medicale', icon: '\u{1FA7A}' },
    { slug: 'saloane-de-frumusete', icon: '\u{2728}' },
    { slug: 'firme-de-avocatura', icon: '\u{2696}' },
    { slug: 'agentii-imobiliare', icon: '\u{1F3E0}' },
    { slug: 'service-auto', icon: '\u{1F697}' },
    { slug: 'frizerii-barbershop', icon: '\u{2702}' },
    { slug: 'hoteluri-hospitality', icon: '\u{1F3E8}' },
    { slug: 'consultanti-imigrare', icon: '\u{2708}' },
    { slug: 'notariate', icon: '\u{1F4DC}' },
  ];

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-satoshi font-bold text-text-primary">
            {t('title')}
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.map((ind) => (
            <motion.div key={ind.slug} variants={fadeUp}>
              <a
                href={`/${locale}/industrii/${ind.slug}`}
                className="glass-card flex flex-col items-center gap-3 p-6 text-center group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {ind.icon}
                </span>
                <span className="text-sm font-sans text-text-secondary group-hover:text-text-primary transition-colors">
                  {t(`items.${ind.slug}`)}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CostComparisonSection() {
  const t = useTranslations('homepage.costComparison');

  return (
    <section className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-satoshi font-bold text-text-primary">
            {t('title')}
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlowCard padding="lg" className="border-negative/20">
              <h3 className="text-lg font-satoshi font-bold text-negative/80 mb-4">
                {t('traditional.title')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t('traditional.salary')}</span>
                  <span className="text-text-primary font-mono">{t('traditional.salaryValue')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t('traditional.taxes')}</span>
                  <span className="text-text-primary font-mono">{t('traditional.taxesValue')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t('traditional.training')}</span>
                  <span className="text-text-primary font-mono">{t('traditional.trainingValue')}</span>
                </div>
                <div className="border-t border-border-subtle my-3" />
                <div className="flex justify-between text-base font-bold">
                  <span className="text-text-primary">{t('traditional.total')}</span>
                  <span className="text-negative">{t('traditional.totalValue')}</span>
                </div>
              </div>
            </GlowCard>

            <GlowCard padding="lg" className="border-accent-primary/30 shadow-glow">
              <h3 className="text-lg font-satoshi font-bold text-accent-primary mb-4">
                {t('aiAgent.title')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t('aiAgent.subscription')}</span>
                  <span className="text-text-primary font-mono">{t('aiAgent.subscriptionValue')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t('aiAgent.setup')}</span>
                  <span className="text-text-primary font-mono">{t('aiAgent.setupValue')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t('aiAgent.availability')}</span>
                  <span className="text-accent-primary font-mono">{t('aiAgent.availabilityValue')}</span>
                </div>
                <div className="border-t border-border-subtle my-3" />
                <div className="flex justify-between text-base font-bold">
                  <span className="text-text-primary">{t('aiAgent.total')}</span>
                  <span className="text-accent-primary">{t('aiAgent.totalValue')}</span>
                </div>
              </div>
            </GlowCard>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 text-accent-primary font-satoshi font-bold text-xl"
          >
            {t('savings')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function TrustSignalsSection() {
  const t = useTranslations('common.trust');

  const signals = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: t('gdpr_obj.title'),
      description: t('gdpr_obj.description'),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M7 11V7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: t('encryption.title'),
      description: t('encryption.description'),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M6 21V19C6 16.79 7.79 15 10 15H14C16.21 15 18 16.79 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: t('humanHandoff.title'),
      description: t('humanHandoff.description'),
    },
  ];

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-site">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {signals.map((signal, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlowCard padding="lg" className="text-center h-full">
                <div className="w-12 h-12 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mx-auto mb-4 text-accent-primary">
                  {signal.icon}
                </div>
                <h3 className="text-lg font-satoshi font-bold text-text-primary mb-2">
                  {signal.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {signal.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DemoSectionBlock() {
  const t = useTranslations('homepage.demo');
  const locale = useLocale();

  return (
    <section className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-satoshi font-bold text-text-primary">
            {t('title')}
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href={`/${locale}/contact`}>
              {t('ctaPrimary')}
            </Button>
            <Button variant="secondary" size="lg" href={`/${locale}/cum-functioneaza`}>
              {t('ctaSecondary')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const t = useTranslations('homepage');
  const tc = useTranslations('common');

  const heroTrustItems = [
    tc('trust.gdpr'),
    tc('trust.romanianSupport'),
    tc('trust.setup'),
    tc('trust.noContracts'),
  ];

  const problemStats = [
    { value: 126000, label: t('problem.stat1.label'), prefix: '€', suffix: '/an' },
    { value: 80, label: t('problem.stat2.label'), suffix: '%' },
    { value: 42, label: t('problem.stat3.label'), suffix: '%' },
    { value: 300, label: t('problem.stat4.label'), prefix: '€' },
  ];

  const chartData = [
    { industry: 'Clinici dentare', value: 8400 },
    { industry: 'Saloane', value: 6050 },
    { industry: 'Avocatură', value: 15000 },
    { industry: 'Imobiliare', value: 12000 },
  ];

  const beforeAfterItems = [
    { before: t('beforeAfter.items.0.before'), after: t('beforeAfter.items.0.after') },
    { before: t('beforeAfter.items.1.before'), after: t('beforeAfter.items.1.after') },
    { before: t('beforeAfter.items.2.before'), after: t('beforeAfter.items.2.after') },
    { before: t('beforeAfter.items.3.before'), after: t('beforeAfter.items.3.after') },
    { before: t('beforeAfter.items.4.before'), after: t('beforeAfter.items.4.after') },
    { before: t('beforeAfter.items.5.before'), after: t('beforeAfter.items.5.after') },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92V19.92C22 20.48 21.56 20.96 21 21C14.38 21.5 8.5 18.5 4.5 13.5C1.5 9.5 0 5 1 1C1.04 0.44 1.52 0 2.08 0H5.08C5.57 0 6 0.36 6.08 0.85C6.24 1.78 6.52 2.69 6.9 3.55L5.04 5.41C6.76 8.59 9.41 11.24 12.59 12.96L14.45 11.1C15.31 11.48 16.22 11.76 17.15 11.92C17.64 12 18 12.43 18 12.92V15.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: 2,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: 3,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
          <path d="M8 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Hero
        headline={t('hero.headline')}
        subheadline={t('hero.subheadline')}
        ctaPrimary={{
          text: t('hero.ctaPrimary'),
          href: '#demo',
        }}
        ctaSecondary={{
          text: t('hero.ctaSecondary'),
          href: '#how-it-works',
        }}
        trustItems={heroTrustItems}
      />

      <ProblemStatement
        stats={problemStats}
        description={t('problem.description')}
        chartData={chartData}
      />

      <WhatAgentDoesSection />

      <BeforeAfterComparison
        items={beforeAfterItems}
        titleBefore={t('beforeAfter.titleBefore')}
        titleAfter={t('beforeAfter.titleAfter')}
      />

      <div id="how-it-works">
        <HowItWorks steps={howItWorksSteps} />
      </div>

      <IndustryGridSection />

      <CostComparisonSection />

      <TrustSignalsSection />

      <div id="demo">
        <DemoSectionBlock />
      </div>
    </>
  );
}
