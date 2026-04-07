'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Accordion } from '@/components/ui/Accordion';

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const categories = ['about', 'setup', 'costs', 'security'] as const;

export default function FAQPage() {
  const t = useTranslations('faq');

  return (
    <main className="section-padding">
      <div className="container-site max-w-3xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h1 className="font-satoshi text-hero mb-4">{t('title')}</h1>
          <p className="text-text-secondary text-hero-sub">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, catIndex) => {
            const items = [];
            for (let i = 0; i < 10; i++) {
              try {
                const question = t(`categories.${category}.items.${i}.question`);
                const answer = t(`categories.${category}.items.${i}.answer`);
                if (question && answer) {
                  items.push({ id: `${category}-${i}`, title: question, content: answer });
                }
              } catch {
                break;
              }
            }

            if (items.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                transition={{
                  duration: 0.6,
                  delay: catIndex * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h2 className="font-satoshi text-2xl text-text-primary mb-6">
                  {t(`categories.${category}.title`)}
                </h2>
                <Accordion items={items} />
              </motion.div>
            );
          })}
        </div>

        {/* FAQPage Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: categories.flatMap((category) => {
                const items = [];
                for (let i = 0; i < 10; i++) {
                  try {
                    const question = t(`categories.${category}.items.${i}.question`);
                    const answer = t(`categories.${category}.items.${i}.answer`);
                    if (question && answer) {
                      items.push({
                        '@type': 'Question',
                        name: question,
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text: answer,
                        },
                      });
                    }
                  } catch {
                    break;
                  }
                }
                return items;
              }),
            }),
          }}
        />
      </div>
    </main>
  );
}
