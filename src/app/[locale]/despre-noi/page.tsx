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
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function DespreNoiPage() {
  const t = useTranslations('about');
  const locale = useLocale();

  const values = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 2L17.09 8.26L24 9.27L19 14.14L20.18 21.02L14 17.77L7.82 21.02L9 14.14L4 9.27L10.91 8.26L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      title: t('values.0.title'),
      description: t('values.0.description'),
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" />
          <path d="M14 8V14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: t('values.1.title'),
      description: t('values.1.description'),
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 2L4 7.5V14C4 20.9 8.44 27.35 14 28C19.56 27.35 24 20.9 24 14V7.5L14 2Z" stroke="currentColor" strokeWidth="2" />
          <path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: t('values.2.title'),
      description: t('values.2.description'),
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
          <path d="M14.5 9.5L18.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: t('values.3.title'),
      description: t('values.3.description'),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
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

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-site max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary mb-6">
              {t('whoWeAre.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('whoWeAre.paragraph1')}</p>
              <p>{t('whoWeAre.paragraph2')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-site max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary mb-6">
              {t('whyWeExist.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('whyWeExist.paragraph1')}</p>
              <p>{t('whyWeExist.paragraph2')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-site max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary mb-6">
              {t('ourApproach.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('ourApproach.paragraph1')}</p>
              <p>{t('ourApproach.paragraph2')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-satoshi font-bold text-text-primary text-center mb-12"
          >
            {t('values.title')}
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {values.map((value, i) => (
              <motion.div key={i} variants={fadeUp}>
                <GlowCard padding="lg" className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-5 text-accent-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-satoshi font-bold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
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
