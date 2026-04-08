'use client';

import { cn } from '@/lib/utils';

interface TrustSignalsProps {
  items: string[];
  className?: string;
}

const iconMap: Record<string, string> = {
  GDPR: '\uD83D\uDEE1\uFE0F',
  gdpr: '\uD83D\uDEE1\uFE0F',
  romana: '\uD83C\uDDF7\uD83C\uDDF4',
  'Suport romana': '\uD83C\uDDF7\uD83C\uDDF4',
  uptime: '\u23F0',
  '99.9': '\u23F0',
  suport: '\uD83D\uDCAC',
  'Fara contract': '\u2705',
  setup: '\u26A1',
};

function getIcon(item: string): string {
  const lower = item.toLowerCase();
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lower.includes(key.toLowerCase())) return icon;
  }
  return '\u2714\uFE0F';
}

function TrustSignals({ items, className }: TrustSignalsProps) {
  return (
    <section className={cn('py-8', className)}>
      <div className="container-site">
        <div className="bg-bg-elevated/50 rounded-xl border border-border-subtle px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-text-secondary text-sm"
              >
                <span className="text-base">{getIcon(item)}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { TrustSignals };
export type { TrustSignalsProps };
