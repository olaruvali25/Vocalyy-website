'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface CostComparisonChartProps {
  className?: string;
}

const data = [
  {
    label: 'Receptionera full-time',
    range: '25.000 - 40.000',
    minPct: 63,
    maxPct: 100,
    color: '#EF4444',
    opacity: 0.5,
    note: null,
  },
  {
    label: 'Serviciu preluare apeluri',
    range: '12.000 - 36.000',
    minPct: 30,
    maxPct: 90,
    color: '#F59E0B',
    opacity: 0.5,
    note: null,
  },
  {
    label: 'Agentul nostru AI',
    range: '3.600 - 5.400',
    minPct: 9,
    maxPct: 14,
    color: '#7C3AED',
    opacity: 1,
    note: 'Si lucreaza 24/7 fara pauze.',
  },
];

const barVariant = {
  hidden: { width: '0%' },
  visible: (pct: number) => ({
    width: `${pct}%`,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function CostComparisonChart({ className }: CostComparisonChartProps) {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn('w-full space-y-6', className)}
    >
      {data.map((item, i) => (
        <div key={i}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-text-primary text-sm">{item.label}</span>
            <span className="font-mono text-sm" style={{ color: item.color }}>
              {item.range}{'\u20AC'}/an
            </span>
          </div>

          <div className="relative h-8 bg-bg-elevated rounded-lg overflow-hidden">
            <motion.div
              custom={item.maxPct}
              variants={barVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="absolute inset-y-0 left-0 rounded-lg"
              style={{
                backgroundColor: item.color,
                opacity: item.opacity,
                filter:
                  item.color === '#7C3AED'
                    ? 'drop-shadow(0 0 12px rgba(124, 58, 237, 0.4))'
                    : undefined,
              }}
            />
          </div>

          {item.note && (
            <p className="mt-1.5 text-accent-primary text-xs font-medium italic">
              {item.note}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export { CostComparisonChart };
export type { CostComparisonChartProps };
