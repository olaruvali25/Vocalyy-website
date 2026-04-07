'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'positive' | 'negative';
  className?: string;
}

const variantStyles = {
  default: 'border-border-subtle text-text-secondary bg-bg-elevated',
  accent: 'border-border-glow text-accent-primary bg-accent-primary/5',
  positive: 'border-positive/30 text-positive bg-positive/5',
  negative: 'border-negative/30 text-negative bg-negative/5',
};

function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
export type { BadgeProps };
