import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prețuri Agent Vocal AI',
  description:
    'Pachete clare fără surprize: Starter €299/lună, Professional €449/lună, Premium €699/lună. Setup în 3-5 zile. Fără contracte.',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'YORAM AI',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function PreturiLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
