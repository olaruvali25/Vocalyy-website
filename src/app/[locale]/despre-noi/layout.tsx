import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Despre YORAM – Echipa din România',
  description:
    'Suntem o echipă de specialiști AI din România. Am construit YORAM pentru că am văzut cum afacerile bune pierd clienți pur și simplu pentru că nu pot răspunde la telefon.',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'YORAM AI',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function DespreNoiLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
