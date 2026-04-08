'use client';

import { motion } from 'framer-motion';
import { GlowCard } from '@/components/ui/GlowCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { MissedCallsChart } from '@/components/charts/MissedCallsChart';
import { cn } from '@/lib/utils';

interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface ChartDataItem {
  industry: string;
  value: number;
}

interface ProblemStatementProps {
  stats: StatItem[];
  description: string;
  chartData: ChartDataItem[];
  className?: string;
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function ProblemStatement({
  stats,
  description,
  chartData,
  className,
}: ProblemStatementProps) {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container-site">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlowCard padding="lg" className="text-center">
                <div className="text-3xl lg:text-4xl mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-text-secondary text-lg text-center max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <MissedCallsChart data={chartData} />
        </motion.div>
      </div>
    </section>
  );
}

export { ProblemStatement };
export type { ProblemStatementProps, StatItem, ChartDataItem };
