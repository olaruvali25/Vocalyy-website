import { ReactNode } from 'react';
import { Metadata } from 'next';

const INDUSTRY_NAMES: Record<string, string> = {
  'clinici-dentare': 'Clinici Dentare',
  'cabinete-medicale': 'Cabinete Medicale',
  'saloane-de-frumusete': 'Saloane de Frumusețe',
  'firme-de-avocatura': 'Firme de Avocatură',
  'agentii-imobiliare': 'Agenții Imobiliare',
  'service-auto': 'Service Auto',
  'frizerii-barbershop': 'Frizerii & Barbershop',
  'hoteluri-hospitality': 'Hoteluri & Hospitality',
  'consultanti-imigrare': 'Consultanți Imigrare',
  notariate: 'Notariate',
};

interface SlugLayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SlugLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const industryName = INDUSTRY_NAMES[slug] ?? slug;

  return {
    title: `Agent Vocal AI pentru ${industryName}`,
    description: `Automatizează apelurile telefonice pentru ${industryName} cu YORAM. Agent vocal AI care răspunde 24/7, programează clienți și nu pierde niciun apel.`,
    openGraph: {
      type: 'website',
      locale: 'ro_RO',
      siteName: 'YORAM AI',
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default function IndustrySlugLayout({ children }: SlugLayoutProps) {
  return <>{children}</>;
}
