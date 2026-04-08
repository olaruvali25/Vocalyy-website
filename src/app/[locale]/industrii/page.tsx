'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
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
  visible: { transition: { staggerChildren: 0.08 } },
};

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

export default function IndustriiPage() {
  const t = useTranslations('industries');
  const locale = useLocale();

  return (
    <>
      <section className="section-padding">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-hero font-satoshi font-bold text-text-primary">
              {t('title')}
            </h1>
            <p className="mt-4 text-hero-sub text-text-secondary max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((ind) => (
              <motion.div key={ind.slug} variants={fadeUp}>
                <a href={`/${locale}/industrii/${ind.slug}`} className="block h-full">
                  <GlowCard padding="lg" className="h-full flex flex-col items-start gap-4">
                    <span className="text-4xl">{ind.icon}</span>
                    <div>
                      <h2 className="text-xl font-satoshi font-bold text-text-primary mb-2">
                        {t(`items.${ind.slug}.name`)}
                      </h2>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {t(`items.${ind.slug}.description`)}
                      </p>
                    </div>
                    <span className="mt-auto text-accent-primary text-sm font-medium">
                      {t('viewDetails')} &rarr;
                    </span>
                  </GlowCard>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-bg-secondary">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
