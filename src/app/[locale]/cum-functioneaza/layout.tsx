import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cum Funcționează Agentul Vocal AI',
  description:
    'În 3 pași simpli: ne spui despre afacerea ta, configurăm agentul în 3-5 zile, agentul preia apelurile automat 24/7.',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'YORAM AI',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function CumFunctioneazaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
