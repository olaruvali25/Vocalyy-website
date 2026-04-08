'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function CaseStudiesPage() {
  const t = useTranslations('caseStudies');
  const locale = useLocale();

  return (
    <main className="section-padding">
      <div className="container-site max-w-3xl text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-satoshi text-hero mb-4">{t('title')}</h1>
          <p className="text-text-secondary text-hero-sub mb-8">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-12"
        >
          <div className="text-6xl mb-6">📊</div>
          <p className="text-text-secondary text-lg mb-6">
            {t('comingSoon')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 text-accent-primary hover:underline font-medium"
          >
            {locale === 'ro' ? 'Contactează-ne' : 'Contact us'} →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
