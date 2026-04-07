'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: number;
  setupFee: number;
  features: PricingFeature[];
  idealFor: string;
  ctaText: string;
  ctaHref: string;
  recommended?: boolean;
}

interface PricingTableProps {
  tiers: PricingTier[];
  className?: string;
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i === 1 ? 0 : 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function PricingTable({ tiers, className }: PricingTableProps) {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              className={cn(
                'relative rounded-2xl border bg-bg-card p-6 lg:p-8 transition-all duration-300',
                tier.recommended
                  ? 'border-accent-primary/40 shadow-glow-lg md:-mt-4 md:mb-4'
                  : 'border-border-subtle/60'
              )}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="accent">Recomandat</Badge>
                </div>
              )}

              <h3 className="font-satoshi font-bold text-xl text-text-primary">
                {tier.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-4xl lg:text-5xl font-bold text-accent-primary">
                  {tier.price}
                </span>
                <span className="text-text-secondary text-sm">{'\u20AC'}/luna</span>
              </div>

              <p className="mt-1 text-text-secondary text-xs">
                Setup: {tier.setupFee}{'\u20AC'} (o singura data)
              </p>

              <div className="mt-6 space-y-3">
                {tier.features.map((feature, fi) => (
                  <div key={fi} className="flex items-start gap-2.5">
                    {feature.included ? (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
                        <path d="M4.5 9L7.5 12L13.5 6" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5 opacity-40">
                        <path d="M6 6L12 12M12 6L6 12" stroke="#8B8B9E" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                    <span className={cn(
                      'text-sm',
                      feature.included ? 'text-text-primary' : 'text-text-secondary/50'
                    )}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-text-secondary italic">
                Ideal pentru: {tier.idealFor}
              </p>

              <div className="mt-6">
                <Button
                  variant={tier.recommended ? 'primary' : 'secondary'}
                  size="md"
                  href={tier.ctaHref}
                  className="w-full justify-center"
                >
                  {tier.ctaText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { PricingTable };
export type { PricingTableProps, PricingTier, PricingFeature };
