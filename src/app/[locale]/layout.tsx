import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OrganizationSchema, SoftwareApplicationSchema } from '@/components/StructuredData';
import '@/styles/globals.css';

// Plus Jakarta Sans — closest Google Fonts match to Satoshi (geometric, bold display font)
const satoshi = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-satoshi',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const generalSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-general-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL('https://yoram.ro'),
  title: {
    default: 'YORAM – Agent Vocal AI pentru Afaceri din România',
    template: '%s | YORAM',
  },
  description:
    'Agent vocal AI care răspunde la telefon 24/7, programează automat și crește veniturile. Configurat în 3-5 zile. Fără contracte lungi.',
  keywords: [
    'agent vocal AI',
    'receptionist AI Romania',
    'automatizare apeluri',
    'agent AI telefon',
    'programari automate',
    'YORAM AI',
    'voice agent Romania',
  ],
  openGraph: {
    type: 'website',
    siteName: 'YORAM AI',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'ro' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${satoshi.variable} ${generalSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <OrganizationSchema />
        <SoftwareApplicationSchema />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="relative">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
