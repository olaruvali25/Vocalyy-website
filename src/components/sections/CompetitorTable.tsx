'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CompetitorRow {
  feature: string;
  traditional: boolean | string;
  us: boolean | string;
}

interface CompetitorTableProps {
  rows: CompetitorRow[];
  traditionalLabel?: string;
  usLabel?: string;
  className?: string;
}

const rowVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-sm">{value}</span>;
  }
  if (value) {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10L8.5 13.5L15 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CompetitorTable({
  rows,
  traditionalLabel = 'Traditional',
  usLabel = 'YORAM AI',
  className,
}: CompetitorTableProps) {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container-site max-w-3xl mx-auto">
        <div className="rounded-2xl border border-border-subtle overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-bg-elevated">
            <div className="px-5 py-4 text-text-secondary text-sm font-medium">
              Caracteristica
            </div>
            <div className="px-5 py-4 text-text-secondary text-sm font-medium text-center">
              {traditionalLabel}
            </div>
            <div className="px-5 py-4 text-accent-primary text-sm font-bold text-center shadow-glow rounded-t-lg">
              {usLabel}
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={rowVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={cn(
                'grid grid-cols-3 border-t border-border-subtle',
                i % 2 === 0 ? 'bg-bg-card' : 'bg-bg-secondary'
              )}
            >
              <div className="px-5 py-3.5 text-text-primary text-sm">
                {row.feature}
              </div>
              <div className="px-5 py-3.5 flex items-center justify-center text-text-secondary/50">
                <CellValue value={row.traditional} />
              </div>
              <div className="px-5 py-3.5 flex items-center justify-center text-accent-primary">
                <CellValue value={row.us} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CompetitorTable };
export type { CompetitorTableProps, CompetitorRow };
