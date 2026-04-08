'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { GlowCard } from '@/components/ui/GlowCard';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { cn } from '@/lib/utils';

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

const TIERS = ['starter', 'professional', 'premium'] as const;

function PricingCard({
  tier,
  isRecommended,
}: {
  tier: string;
  isRecommended: boolean;
}) {
  const t = useTranslations('pricing.tiers');
  const tPricing = useTranslations('pricing');
  const locale = useLocale();

  return (
    <GlowCard
      padding="lg"
      className={cn(
        'h-full flex flex-col relative',
        isRecommended && 'border-accent-primary/40 shadow-glow scale-[1.02]'
      )}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-primary text-bg-primary text-xs font-bold rounded-full">
          {t(`${tier}.badge`)}
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-satoshi font-bold text-text-primary mb-2">
          {t(`${tier}.name`)}
        </h3>
        <p className="text-text-secondary text-sm mb-4">{t(`${tier}.idealFor`)}</p>
        <div className="flex items-end justify-center gap-1">
          <span className="text-4xl font-mono font-bold text-accent-primary">
            €{t(`${tier}.price`)}
          </span>
          <span className="text-text-secondary text-sm mb-1">{tPricing('perMonth')}</span>
        </div>
        <p className="text-xs text-text-secondary mt-1">
          + €{t(`${tier}.setup`)} {tPricing('setupOnce')}
        </p>
      </div>

      <div className="border-t border-border-subtle my-4" />

      <ul className="space-y-3 flex-1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          let feature: string;
          try {
            feature = t(`${tier}.features.${i}`);
          } catch {
            return null;
          }
          if (!feature) return null;
          return (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent-primary flex-shrink-0 mt-0.5">
                <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-text-secondary">{feature}</span>
            </li>
          );
        })}
      </ul>

      <div className="mt-6">
        <Button
          variant={isRecommended ? 'primary' : 'secondary'}
          size="md"
          href={`/${locale}/contact`}
          className="w-full"
        >
          {t(`${tier}.cta`)}
        </Button>
      </div>
    </GlowCard>
  );
}

function ComparisonTable() {
  const t = useTranslations('pricing.comparison');

  const features = [
    'voiceAgent',
    'languages',
    'availability',
    'integrations',
    'analytics',
    'customVoice',
    'prioritySupport',
    'dedicatedManager',
    'sla',
    'whiteLabel',
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border-subtle">
            <th className="py-4 px-4 text-left font-satoshi font-bold text-text-primary">
              {t('feature')}
            </th>
            {TIERS.map((tier) => (
              <th
                key={tier}
                className={cn(
                  'py-4 px-4 text-center font-satoshi font-bold',
                  tier === 'professional' ? 'text-accent-primary' : 'text-text-primary'
                )}
              >
                {t(`headers.${tier}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature} className="border-b border-border-subtle/50 hover:bg-bg-elevated/30 transition-colors">
              <td className="py-3 px-4 text-text-secondary">{t(`rows.${feature}.label`)}</td>
              {TIERS.map((tier) => {
                const val = t(`rows.${feature}.${tier}`);
                const isCheck = val === 'true';
                const isCross = val === 'false';
                return (
                  <td key={tier} className="py-3 px-4 text-center">
                    {isCheck ? (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mx-auto text-accent-primary">
                        <path d="M5 9L8 12L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : isCross ? (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mx-auto text-text-secondary/40">
                        <path d="M6 6L12 12M12 6L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <span className="text-text-secondary">{val}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PreturiPage() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  const faqItems = [0, 1, 2, 3, 4].map((i) => ({
    id: `pricing-faq-${i}`,
    title: t(`faq.items.${i}.question`),
    content: t(`faq.items.${i}.answer`),
  }));

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

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-site">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {TIERS.map((tier) => (
              <motion.div key={tier} variants={fadeUp}>
                <PricingCard tier={tier} isRecommended={tier === 'professional'} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary text-center mb-10"
          >
            {t('comparison.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlowCard padding="md" className="overflow-hidden">
              <ComparisonTable />
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-site max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary text-center mb-10"
          >
            {t('faq.title')}
          </motion.h2>
          <Accordion items={faqItems} />
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
