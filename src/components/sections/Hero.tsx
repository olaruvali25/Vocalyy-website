'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface HeroCTA {
  text: string;
  href: string;
}

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaPrimary: HeroCTA;
  ctaSecondary: HeroCTA;
  trustItems: string[];
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

function Hero({ headline, subheadline, ctaPrimary, ctaSecondary, trustItems, className }: HeroProps) {
  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Animated grid */}
      <div className="animated-grid" />

      {/* Ambient orbs */}
      <div
        className="hero-orb hero-orb-teal animate-float"
        style={{ width: 600, height: 600, top: '5%', left: '-10%' }}
      />
      <div
        className="hero-orb hero-orb-purple animate-float"
        style={{ width: 400, height: 400, bottom: '10%', right: '-5%', animationDelay: '-2s' }}
      />
      <div
        className="hero-orb hero-orb-teal"
        style={{ width: 200, height: 200, top: '50%', right: '20%', opacity: 0.12, filter: 'blur(40px)' }}
      />

      {/* Radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-site relative z-10 text-center max-w-5xl mx-auto px-4"
      >
        {/* System label */}
        <motion.div variants={fadeUpVariants} className="flex justify-center mb-6">
          <span className="section-label">
            YORAM · Agent Vocal AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-hero font-satoshi font-bold text-text-primary text-balance leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUpVariants}
          className="mt-6 text-hero-sub text-text-secondary max-w-2xl mx-auto text-balance leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href={ctaPrimary.href}>
            {ctaPrimary.text}
          </Button>
          <Button variant="secondary" size="lg" href={ctaSecondary.href}>
            {ctaSecondary.text}
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {trustItems.map((item) => (
            <Badge key={item} variant="default">
              {item}
            </Badge>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-text-secondary/40"
          >
            <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-accent-primary/40" />
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export { Hero };
export type { HeroProps, HeroCTA };
