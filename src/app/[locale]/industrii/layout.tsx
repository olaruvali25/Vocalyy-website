import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Soluții AI pe Industrii – Clinici, Saloane, Avocatură și mai mult',
  description:
    'Agent vocal AI adaptat pentru 10+ industrii din România: clinici dentare, cabinete medicale, saloane de frumusețe, firme de avocatură, imobiliare și altele.',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'YORAM AI',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

interface IndustriiLayoutProps {
  children: ReactNode;
}

export default function IndustriiLayout({ children }: IndustriiLayoutProps) {
  return (
    <>
      <div className="pt-24 pb-4">
        <div className="container-site">
          <Breadcrumb />
        </div>
      </div>
      {children}
    </>
  );
}
