'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className={cn('flex items-center gap-1 font-sans text-sm', className)}>
      <button
        type="button"
        onClick={() => switchLocale('ro')}
        className={cn(
          'px-2 py-1 rounded transition-colors duration-200',
          locale === 'ro'
            ? 'text-accent-primary font-medium'
            : 'text-text-secondary hover:text-text-primary'
        )}
      >
        RO
      </button>
      <span className="text-border-subtle">|</span>
      <button
        type="button"
        onClick={() => switchLocale('en')}
        className={cn(
          'px-2 py-1 rounded transition-colors duration-200',
          locale === 'en'
            ? 'text-accent-primary font-medium'
            : 'text-text-secondary hover:text-text-primary'
        )}
      >
        EN
      </button>
    </div>
  );
}
