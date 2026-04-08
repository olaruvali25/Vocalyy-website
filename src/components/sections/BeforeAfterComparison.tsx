'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComparisonItem {
  before: string;
  after: string;
}

interface BeforeAfterComparisonProps {
  items: ComparisonItem[];
  titleBefore: string;
  titleAfter: string;
  className?: string;
}

const rowVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function BeforeAfterComparison({
  items,
  titleBefore,
  titleAfter,
  className,
}: BeforeAfterComparisonProps) {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container-site max-w-4xl mx-auto">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <div className="rounded-xl bg-negative/5 border border-negative/20 px-6 py-4">
            <h3 className="font-satoshi font-bold text-negative/80 text-lg">
              {titleBefore}
            </h3>
          </div>
          <div className="rounded-xl bg-accent-primary/5 border border-accent-primary/20 px-6 py-4 shadow-glow">
            <h3 className="font-satoshi font-bold text-accent-primary text-lg">
              {titleAfter}
            </h3>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={rowVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6"
            >
              {/* Before column */}
              <div className="glass-card px-5 py-4 flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <circle cx="9" cy="9" r="8" stroke="#EF4444" strokeWidth="1.5" opacity="0.6" />
                  <path
                    d="M6 6L12 12M12 6L6 12"
                    stroke="#EF4444"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-text-secondary text-sm">{item.before}</span>
              </div>

              {/* After column */}
              <div className="glass-card px-5 py-4 flex items-center gap-3 border-l-2 border-l-accent-primary/40"
                style={{
                  boxShadow: 'inset 4px 0 12px -4px rgba(124, 58, 237, 0.1)',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <circle cx="9" cy="9" r="8" stroke="#7C3AED" strokeWidth="1.5" opacity="0.6" />
                  <path
                    d="M5.5 9L8 11.5L12.5 6.5"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-text-primary text-sm">{item.after}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { BeforeAfterComparison };
export type { BeforeAfterComparisonProps, ComparisonItem };
