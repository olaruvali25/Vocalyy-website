import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Întrebări Frecvente – Agent Vocal AI YORAM',
  description:
    'Tot ce trebuie să știi despre agentul vocal AI: cum funcționează, costuri, securitate, integrări și mai mult.',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'YORAM AI',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function FaqLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
