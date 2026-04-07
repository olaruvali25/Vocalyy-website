'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { DemoSection } from '@/components/sections/DemoSection';

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const contactInfo = [
  { icon: '✉️', key: 'email' },
  { icon: '📞', key: 'phone' },
  { icon: '💬', key: 'whatsapp' },
  { icon: '🕐', key: 'schedule' },
  { icon: '📍', key: 'address' },
];

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <main className="section-padding">
      <div className="container-site">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h1 className="font-satoshi text-hero mb-4">{t('title')}</h1>
          <p className="text-text-secondary text-hero-sub max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <DemoSection headline={t('title')} />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {contactInfo.map((item) => (
              <div
                key={item.key}
                className="glass-card p-5 flex items-center gap-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-text-primary font-medium">
                  {t(`info.${item.key}`)}
                </p>
              </div>
            ))}
            <div className="glass-card p-5 border-l-2 border-accent-primary">
              <p className="text-accent-primary font-medium">
                {t('info.response')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
