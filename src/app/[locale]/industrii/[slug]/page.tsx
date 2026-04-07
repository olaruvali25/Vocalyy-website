'use client';

import { useTranslations, useLocale } from 'next-intl';
import { use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { BeforeAfterComparison } from '@/components/sections/BeforeAfterComparison';
import { GlowCard } from '@/components/ui/GlowCard';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const INDUSTRY_SLUGS = [
  'clinici-dentare',
  'cabinete-medicale',
  'saloane-de-frumusete',
  'firme-de-avocatura',
  'agentii-imobiliare',
  'service-auto',
  'frizerii-barbershop',
  'hoteluri-hospitality',
  'consultanti-imigrare',
  'notariate',
] as const;

const INDUSTRY_ICONS: Record<string, string> = {
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

const RECOMMENDED_TIERS: Record<string, string> = {
  'clinici-dentare': 'professional',
  'cabinete-medicale': 'professional',
  'saloane-de-frumusete': 'starter',
  'firme-de-avocatura': 'premium',
  'agentii-imobiliare': 'professional',
  'service-auto': 'starter',
  'frizerii-barbershop': 'starter',
  'hoteluri-hospitality': 'premium',
  'consultanti-imigrare': 'professional',
  'notariate': 'professional',
};

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
  visible: { transition: { staggerChildren: 0.1 } },
};

interface IndustryPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const locale = useLocale();
  const t = useTranslations('industries');
  const tc = useTranslations('common');

  const resolvedParams = use(params);
  const slug = resolvedParams.slug ?? '';

  if (!INDUSTRY_SLUGS.includes(slug as typeof INDUSTRY_SLUGS[number])) {
    notFound();
  }

  const key = `items.${slug}`;
  const icon = INDUSTRY_ICONS[slug] ?? '';
  const recommendedTier = RECOMMENDED_TIERS[slug] ?? 'professional';

  const trustItems = [
    tc('trust.badge1'),
    tc('trust.badge2'),
    tc('trust.badge3'),
  ];

  const stats = [
    { value: Number(t(`${key}.stats.0.value`)), label: t(`${key}.stats.0.label`), suffix: t(`${key}.stats.0.suffix`) },
    { value: Number(t(`${key}.stats.1.value`)), label: t(`${key}.stats.1.label`), suffix: t(`${key}.stats.1.suffix`) },
    { value: Number(t(`${key}.stats.2.value`)), label: t(`${key}.stats.2.label`), suffix: t(`${key}.stats.2.suffix`) },
    { value: Number(t(`${key}.stats.3.value`)), label: t(`${key}.stats.3.label`), suffix: t(`${key}.stats.3.suffix`) },
  ];

  const beforeAfterItems = [
    { before: t(`${key}.beforeAfter.0.before`), after: t(`${key}.beforeAfter.0.after`) },
    { before: t(`${key}.beforeAfter.1.before`), after: t(`${key}.beforeAfter.1.after`) },
    { before: t(`${key}.beforeAfter.2.before`), after: t(`${key}.beforeAfter.2.after`) },
    { before: t(`${key}.beforeAfter.3.before`), after: t(`${key}.beforeAfter.3.after`) },
  ];

  const scenarios = [
    { title: t(`${key}.scenarios.0.title`), description: t(`${key}.scenarios.0.description`) },
    { title: t(`${key}.scenarios.1.title`), description: t(`${key}.scenarios.1.description`) },
    { title: t(`${key}.scenarios.2.title`), description: t(`${key}.scenarios.2.description`) },
  ];

  const features = [
    { title: t(`${key}.features.0.title`), description: t(`${key}.features.0.description`) },
    { title: t(`${key}.features.1.title`), description: t(`${key}.features.1.description`) },
    { title: t(`${key}.features.2.title`), description: t(`${key}.features.2.description`) },
    { title: t(`${key}.features.3.title`), description: t(`${key}.features.3.description`) },
  ];

  const objections = [
    { id: `${slug}-obj-0`, title: t(`${key}.objections.0.question`), content: t(`${key}.objections.0.answer`) },
    { id: `${slug}-obj-1`, title: t(`${key}.objections.1.question`), content: t(`${key}.objections.1.answer`) },
    { id: `${slug}-obj-2`, title: t(`${key}.objections.2.question`), content: t(`${key}.objections.2.answer`) },
  ];

  return (
    <>
      {/* 1. Hero */}
      <Hero
        headline={`${icon} ${t(`${key}.hero`)}`}
        subheadline={t(`${key}.description`)}
        ctaPrimary={{ text: tc('cta.requestDemo'), href: `/${locale}/contact` }}
        ctaSecondary={{ text: tc('cta.seePricing'), href: `/${locale}/preturi` }}
        trustItems={trustItems}
        className="min-h-[70vh]"
      />

      {/* 2. Stats Grid */}
      <section className="section-padding">
        <div className="container-site">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <GlowCard padding="lg" className="text-center">
                  <div className="text-3xl lg:text-4xl font-mono font-bold text-accent-primary mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Scenarios */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary text-center mb-12"
          >
            {t(`${key}.scenariosTitle`)}
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {scenarios.map((scenario, i) => (
              <motion.div key={i} variants={fadeUp}>
                <GlowCard padding="lg" className="h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-4">
                    <span className="text-accent-primary font-mono font-bold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
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

      {/* 4. Before/After */}
      <BeforeAfterComparison
        items={beforeAfterItems}
        titleBefore={t(`${key}.beforeTitle`)}
        titleAfter={t(`${key}.afterTitle`)}
      />

      {/* 5. ROI Calculator placeholder */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-site max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary mb-4">
              {t(`${key}.roiTitle`)}
            </h2>
            <p className="text-text-secondary mb-8">
              {t(`${key}.roiDescription`)}
            </p>
            <GlowCard padding="lg" className="border-accent-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-text-secondary text-sm mb-1">{t('roi.callsPerDay')}</p>
                  <p className="text-2xl font-mono font-bold text-accent-primary">{t(`${key}.roiDefaults.callsPerDay`)}</p>
                </div>
                <div>
                  <p className="text-text-secondary text-sm mb-1">{t('roi.missedPercent')}</p>
                  <p className="text-2xl font-mono font-bold text-negative">{t(`${key}.roiDefaults.missedPercent`)}</p>
                </div>
                <div>
                  <p className="text-text-secondary text-sm mb-1">{t('roi.avgValue')}</p>
                  <p className="text-2xl font-mono font-bold text-accent-primary">{t(`${key}.roiDefaults.avgValue`)}</p>
                </div>
              </div>
              <div className="border-t border-border-subtle my-6" />
              <p className="text-lg font-satoshi font-bold text-accent-primary">
                {t(`${key}.roiResult`)}
              </p>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* 6. Features */}
      <section className="section-padding">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary text-center mb-12"
          >
            {t(`${key}.featuresTitle`)}
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={fadeUp}>
                <GlowCard padding="lg" className="h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent-primary">
                      <path d="M5 10L8.5 13.5L15 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-satoshi font-bold text-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Objections FAQ */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-site max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary text-center mb-10"
          >
            {t(`${key}.objectionsTitle`)}
          </motion.h2>
          <Accordion items={objections} />
        </div>
      </section>

      {/* 8. Pricing recommendation */}
      <section className="section-padding">
        <div className="container-site max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary mb-4">
              {t(`${key}.pricingTitle`)}
            </h2>
            <p className="text-text-secondary mb-6">
              {t(`${key}.pricingDescription`)}
            </p>
            <GlowCard padding="lg" className="border-accent-primary/30 shadow-glow inline-block">
              <p className="text-sm text-text-secondary mb-2">{t('recommendedPlan')}</p>
              <p className="text-2xl font-satoshi font-bold text-accent-primary capitalize">
                {recommendedTier}
              </p>
            </GlowCard>
            <div className="mt-8">
              <Button variant="primary" size="lg" href={`/${locale}/preturi`}>
                {tc('cta.seePricing')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Demo CTA */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-site max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary mb-4">
              {t(`${key}.demoTitle`)}
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              {t(`${key}.demoDescription`)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href={`/${locale}/contact`}>
                {tc('cta.requestDemo')}
              </Button>
              <Button variant="secondary" size="lg" href={`/${locale}/cum-functioneaza`}>
                {tc('cta.howItWorks')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
