'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const { ref, isInView } = useScrollReveal({ threshold: 0.3, triggerOnce: true });
  const count = useCountUp(value, duration, isInView);

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={cn('font-mono font-bold text-accent-primary', className)}
    >
      {prefix}
      {count.toLocaleString('ro-RO')}
      {suffix}
    </span>
  );
}

export { AnimatedCounter };
export type { AnimatedCounterProps };
