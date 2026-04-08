'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';

interface BreadcrumbProps {
  className?: string;
}

const segmentLabels: Record<string, Record<string, string>> = {
  ro: {
    industrii: 'Industrii',
    'clinici-dentare': 'Clinici dentare',
    'cabinete-medicale': 'Cabinete medicale',
    'saloane-de-frumusete': 'Saloane de frumusete',
    'firme-de-avocatura': 'Firme de avocatura',
    'agentii-imobiliare': 'Agentii imobiliare',
    'service-auto': 'Service auto',
    'frizerii-barbershop': 'Frizerii & Barbershop',
    'hoteluri-hospitality': 'Hoteluri & Hospitality',
    'consultanti-imigrare': 'Consultanti imigrare',
    notariate: 'Notariate',
    preturi: 'Preturi',
    'cum-functioneaza': 'Cum functioneaza',
    'despre-noi': 'Despre noi',
    contact: 'Contact',
    blog: 'Blog',
    'studii-de-caz': 'Studii de caz',
    faq: 'FAQ',
  },
  en: {
    industries: 'Industries',
    'dental-clinics': 'Dental Clinics',
    'medical-offices': 'Medical Offices',
    'beauty-salons': 'Beauty Salons',
    'law-firms': 'Law Firms',
    'real-estate': 'Real Estate',
    'auto-service': 'Auto Service',
    barbershops: 'Barbershops',
    'hotels-hospitality': 'Hotels & Hospitality',
    'immigration-consultants': 'Immigration Consultants',
    'notary-offices': 'Notary Offices',
    pricing: 'Pricing',
    'how-it-works': 'How it works',
    about: 'About',
    contact: 'Contact',
    blog: 'Blog',
    'case-studies': 'Case Studies',
    faq: 'FAQ',
  },
};

export function Breadcrumb({ className }: BreadcrumbProps) {
  const pathname = usePathname();
  const locale = useLocale();

  const segments = pathname
    .split('/')
    .filter(Boolean)
    .filter((seg) => seg !== locale);

  if (segments.length === 0) return null;

  const labels = segmentLabels[locale] ?? segmentLabels.ro;

  const crumbs = segments.map((segment, index) => {
    const href = `/${locale}/${segments.slice(0, index + 1).join('/')}`;
    const label = labels[segment] ?? segment.replace(/-/g, ' ');
    const isLast = index === segments.length - 1;
    return { href, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className={cn('font-sans text-sm', className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link
            href={`/${locale}`}
            className="text-text-secondary transition-colors hover:text-text-primary"
          >
            {locale === 'ro' ? 'Acasa' : 'Home'}
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-text-secondary/40"
            >
              <path
                d="M4.5 2.5L7.5 6L4.5 9.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {crumb.isLast ? (
              <span className="text-accent-primary">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="text-text-secondary transition-colors hover:text-text-primary"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
