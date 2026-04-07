'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlowCard } from '@/components/ui/GlowCard';
import { cn } from '@/lib/utils';

interface Industry {
  slug: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface IndustryGridProps {
  industries: Industry[];
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function IndustryGrid({ industries, className }: IndustryGridProps) {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
            >
              <Link href={`/industrii/${industry.slug}`} className="block group">
                <GlowCard padding="md" className="h-full">
                  <div className="text-2xl mb-3">{industry.icon}</div>
                  <h3 className="font-satoshi font-bold text-text-primary text-sm mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-3">
                    {industry.description}
                  </p>
                  <span className="inline-flex items-center text-accent-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Afla mai mult
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
                      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </GlowCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-text-secondary text-sm">
            Nu vezi industria ta?{' '}
            <Link
              href="/contact"
              className="text-accent-primary hover:underline underline-offset-4"
            >
              Contacteaza-ne
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export { IndustryGrid };
export type { IndustryGridProps, Industry };
