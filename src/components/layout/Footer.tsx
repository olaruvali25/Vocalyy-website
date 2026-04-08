import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps {
  locale?: string;
  className?: string;
}

function getFooterData(locale: string) {
  const isRo = locale === 'ro';
  return {
    industries: {
      title: isRo ? 'Industrii' : 'Industries',
      links: [
        { label: isRo ? 'Clinici dentare' : 'Dental Clinics', href: `/${locale}/${isRo ? 'industrii/clinici-dentare' : 'industries/dental-clinics'}` },
        { label: isRo ? 'Cabinete medicale' : 'Medical Offices', href: `/${locale}/${isRo ? 'industrii/cabinete-medicale' : 'industries/medical-offices'}` },
        { label: isRo ? 'Saloane de frumusete' : 'Beauty Salons', href: `/${locale}/${isRo ? 'industrii/saloane-de-frumusete' : 'industries/beauty-salons'}` },
        { label: isRo ? 'Firme de avocatura' : 'Law Firms', href: `/${locale}/${isRo ? 'industrii/firme-de-avocatura' : 'industries/law-firms'}` },
        { label: isRo ? 'Agentii imobiliare' : 'Real Estate', href: `/${locale}/${isRo ? 'industrii/agentii-imobiliare' : 'industries/real-estate'}` },
      ],
      viewAll: {
        label: isRo ? 'Vezi toate' : 'View all',
        href: `/${locale}/${isRo ? 'industrii' : 'industries'}`,
      },
    },
    company: {
      title: isRo ? 'Companie' : 'Company',
      links: [
        { label: isRo ? 'Despre noi' : 'About', href: `/${locale}/${isRo ? 'despre-noi' : 'about'}` },
        { label: isRo ? 'Cum functioneaza' : 'How it works', href: `/${locale}/${isRo ? 'cum-functioneaza' : 'how-it-works'}` },
        { label: isRo ? 'Preturi' : 'Pricing', href: `/${locale}/${isRo ? 'preturi' : 'pricing'}` },
        { label: 'Contact', href: `/${locale}/contact` },
      ],
    },
    resources: {
      title: isRo ? 'Resurse' : 'Resources',
      links: [
        { label: 'Blog', href: `/${locale}/blog` },
        { label: isRo ? 'Studii de caz' : 'Case Studies', href: `/${locale}/${isRo ? 'studii-de-caz' : 'case-studies'}` },
        { label: 'FAQ', href: `/${locale}/faq` },
      ],
    },
    contact: {
      title: 'Contact',
      items: [
        { icon: 'email', label: 'contact@yoram.ai', href: 'mailto:contact@yoram.ai' },
        { icon: 'phone', label: '+40 712 345 678', href: 'tel:+40712345678' },
        { icon: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/40712345678' },
        { icon: 'schedule', label: isRo ? 'Luni - Vineri, 09:00 - 18:00' : 'Mon - Fri, 9:00 AM - 6:00 PM' },
        { icon: 'location', label: isRo ? 'Bucuresti, Romania' : 'Bucharest, Romania' },
      ],
    },
    legal: {
      copyright: `\u00A9 ${new Date().getFullYear()} YORAM AI. ${isRo ? 'Toate drepturile rezervate.' : 'All rights reserved.'}`,
      links: [
        { label: isRo ? 'Termeni si conditii' : 'Terms & Conditions', href: '#' },
        { label: isRo ? 'Politica de confidentialitate' : 'Privacy Policy', href: '#' },
        { label: 'GDPR', href: '#' },
      ],
    },
  };
}

const contactIcons: Record<string, React.ReactNode> = {
  email: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4L8 8.5L14 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><rect x="2" y="3" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" /></svg>
  ),
  phone: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.5 2H4.5C3.4 2 2.5 2.9 2.5 4C2.5 9.5 6.5 13.5 12 13.5C13.1 13.5 14 12.6 14 11.5V9.5L11.5 8L9.8 9.7C8.7 9.1 7.9 8.3 7.3 7.2L9 5.5L7.5 3L6.5 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  whatsapp: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5C4.4 1.5 1.5 4.4 1.5 8C1.5 9.3 1.9 10.5 2.5 11.5L1.5 14.5L4.6 13.5C5.6 14.1 6.7 14.5 8 14.5C11.6 14.5 14.5 11.6 14.5 8C14.5 4.4 11.6 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.2" /><path d="M10.5 9.5C10.2 10.2 9.2 10.7 8.5 10.5C7.5 10.2 5.8 8.5 5.5 7.5C5.3 6.8 5.8 5.8 6.5 5.5L7 7L6.5 7.5C6.8 8.2 7.8 9.2 8.5 9.5L9 9L10.5 9.5Z" stroke="currentColor" strokeWidth="1" /></svg>
  ),
  schedule: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" /><path d="M8 4.5V8L10.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
  ),
  location: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.2" /><circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" /></svg>
  ),
};

export function Footer({ locale = 'ro', className }: FooterProps) {
  const data = getFooterData(locale);

  return (
    <footer className={cn('border-t border-border-subtle bg-bg-secondary', className)}>
      <div className="mx-auto max-w-site px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 font-satoshi text-sm font-semibold uppercase tracking-wider text-text-primary">
              {data.industries.title}
            </h4>
            <ul className="space-y-2.5">
              {data.industries.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-text-secondary transition-colors hover:text-accent-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={data.industries.viewAll.href} className="font-sans text-sm font-medium text-accent-primary transition-colors hover:text-accent-primary/80">
                  {data.industries.viewAll.label} &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-satoshi text-sm font-semibold uppercase tracking-wider text-text-primary">
              {data.company.title}
            </h4>
            <ul className="space-y-2.5">
              {data.company.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-text-secondary transition-colors hover:text-accent-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-satoshi text-sm font-semibold uppercase tracking-wider text-text-primary">
              {data.resources.title}
            </h4>
            <ul className="space-y-2.5">
              {data.resources.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-text-secondary transition-colors hover:text-accent-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-satoshi text-sm font-semibold uppercase tracking-wider text-text-primary">
              {data.contact.title}
            </h4>
            <ul className="space-y-3">
              {data.contact.items.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-text-secondary">{contactIcons[item.icon]}</span>
                  {item.href ? (
                    <a href={item.href} className="font-sans text-sm text-text-secondary transition-colors hover:text-accent-primary" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-sans text-sm text-text-secondary">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-8">
          <p className="font-sans text-xs text-text-secondary">{data.legal.copyright}</p>
          <div className="flex items-center gap-4">
            {data.legal.links.map((link) => (
              <Link key={link.label} href={link.href} className="font-sans text-xs text-text-secondary transition-colors hover:text-text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
