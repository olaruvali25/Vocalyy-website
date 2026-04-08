'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  glowOnHover?: boolean;
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ children, className, padding = 'md', glowOnHover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'bg-bg-card border border-border-subtle rounded-xl transition-all duration-300 ease-smooth',
          glowOnHover && 'hover:border-border-glow hover:shadow-card-hover hover:-translate-y-0.5',
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlowCard.displayName = 'GlowCard';

export { GlowCard };
export type { GlowCardProps };
