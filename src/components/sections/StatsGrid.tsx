'use client';

import { motion } from 'framer-motion';
import { GlowCard } from '@/components/ui/GlowCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { cn } from '@/lib/utils';

interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsGridProps {
  stats: StatItem[];
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
            >
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
        </div>
      </div>
    </section>
  );
}

export { StatsGrid };
export type { StatsGridProps, StatItem };
