import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact YORAM – Solicită un Demo Gratuit',
  description:
    'Contactează-ne pentru un demo gratuit personalizat. Răspundem în 24h. Fără obligații, fără spam.',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'YORAM AI',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
