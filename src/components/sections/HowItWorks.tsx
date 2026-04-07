'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HowItWorksProps {
  steps: Step[];
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function StepNode({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className="flex flex-col items-center text-center"
    >
      {/* Step circle */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-2 border-accent-primary bg-bg-card flex items-center justify-center animate-glow-pulse">
          <span className="text-accent-primary text-xl">{step.icon}</span>
        </div>
        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent-primary text-bg-primary text-xs font-mono font-bold flex items-center justify-center">
          {step.number}
        </span>
      </div>

      {/* Content */}
      <h3 className="mt-5 text-lg font-satoshi font-bold text-text-primary">
        {step.title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary max-w-xs leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

function ConnectingLine({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1 px-2">
      <svg width="100%" height="4" className="overflow-visible">
        <motion.line
          x1="0"
          y1="2"
          x2="100%"
          y2="2"
          stroke="rgba(124, 58, 237, 0.3)"
          strokeWidth="2"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </div>
  );
}

function VerticalConnector() {
  return (
    <div className="lg:hidden flex justify-center py-4">
      <div className="w-0.5 h-8 bg-gradient-to-b from-accent-primary/40 to-accent-primary/10" />
    </div>
  );
}

function HowItWorks({ steps, className }: HowItWorksProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section ref={sectionRef} className={cn('section-padding', className)}>
      <div className="container-site">
        {isDesktop ? (
          /* Desktop: horizontal layout */
          <div className="flex items-start justify-between">
            {steps.map((step, i) => (
              <div key={step.number} className="contents">
                <div className="flex-1 max-w-xs">
                  <StepNode step={step} index={i} />
                </div>
                {i < steps.length - 1 && (
                  <ConnectingLine isVisible={isInView} />
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Mobile: vertical layout with left line */
          <div className="relative pl-12">
            {/* Vertical connecting line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[1.9rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent-primary/40 via-accent-primary/20 to-transparent origin-top"
            />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative flex items-start gap-5"
                >
                  {/* Step circle for mobile */}
                  <div className="absolute -left-12">
                    <div className="w-10 h-10 rounded-full border-2 border-accent-primary bg-bg-card flex items-center justify-center animate-glow-pulse">
                      <span className="text-accent-primary font-mono text-sm font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-accent-primary mb-2 text-lg">{step.icon}</div>
                    <h3 className="text-lg font-satoshi font-bold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export { HowItWorks };
export type { HowItWorksProps, Step };
