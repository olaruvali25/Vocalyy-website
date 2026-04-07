import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog YORAM – Resurse AI pentru Afaceri din România',
  description:
    'Articole, ghiduri și studii de caz despre automatizarea apelurilor și agenții vocali AI pentru afaceri din România.',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'YORAM AI',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
