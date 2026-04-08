'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const plannedArticles = [
  { slug: 'cat-pierde-clinica-dentara-apeluri-pierdute', titleRo: 'Cât pierde o clinică dentară din apeluri pierdute — calcul real', titleEn: 'How Much a Dental Clinic Loses from Missed Calls — Real Numbers' },
  { slug: 'de-ce-80-procent-nu-lasa-mesaj-vocal', titleRo: 'De ce 80% dintre cei care sună nu lasă mesaj vocal', titleEn: 'Why 80% of Callers Never Leave a Voicemail' },
  { slug: 'agent-vocal-vs-secretara', titleRo: 'Agentul vocal vs. secretara: ce e mai eficient în 2026?', titleEn: 'AI Voice Agent vs. Receptionist: What Works Better in 2026?' },
  { slug: 'cum-sa-nu-pierzi-clienti-weekend-saloane', titleRo: 'Cum să nu mai pierzi clienți în weekend — ghid saloane', titleEn: 'How to Stop Losing Clients on Weekends — Salon Guide' },
  { slug: 'ce-este-agent-vocal', titleRo: 'Ce e un agent vocal și de ce contează', titleEn: 'What Is a Voice Agent and Why It Matters' },
  { slug: '5-lucruri-agent-vocal-face-mai-bine', titleRo: '5 lucruri pe care un agent vocal le face mai bine decât un om', titleEn: '5 Things a Voice Agent Does Better Than a Human' },
  { slug: 'costul-apel-pierdut-imobiliare', titleRo: 'Costul real al unui apel pierdut în imobiliare', titleEn: 'The Real Cost of a Missed Call in Real Estate' },
  { slug: 'programare-automata-telefon', titleRo: 'Cum funcționează programarea automată prin telefon', titleEn: 'How Automatic Phone Scheduling Works' },
  { slug: 'afaceri-romania-pierd-clienti', titleRo: 'De ce afacerile din România pierd clienți', titleEn: 'Why Romanian Businesses Are Losing Clients' },
  { slug: 'studiu-caz-clinica-programari-38-procent', titleRo: 'Studiu de caz: cum a crescut o clinică programările cu 38%', titleEn: 'Case Study: How a Clinic Increased Appointments by 38%' },
];

export default function BlogPage() {
  const t = useTranslations('blog');
  const locale = useLocale();

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
          <p className="text-text-secondary text-hero-sub">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plannedArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/${locale}/blog/${article.slug}`}>
                <article className="glass-card p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-text-secondary font-mono mb-3 uppercase tracking-wider">
                      {locale === 'ro' ? 'Articol' : 'Article'}
                    </div>
                    <h2 className="font-satoshi text-lg text-text-primary mb-3 leading-tight">
                      {locale === 'ro' ? article.titleRo : article.titleEn}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-accent-primary text-sm mt-4">
                    <span>{locale === 'ro' ? 'Citește' : 'Read'}</span>
                    <span>→</span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
