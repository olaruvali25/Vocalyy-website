import type { Metadata } from 'next';

const SITE_URL = 'https://yoram.ro';
const SITE_NAME = 'YORAM - Agent Vocal AI';

interface PageSEO {
  titleRo: string;
  titleEn: string;
  descriptionRo: string;
  descriptionEn: string;
  path: string;
  pathEn?: string;
}

export function generatePageMetadata(
  page: PageSEO,
  locale: string
): Metadata {
  const isRo = locale === 'ro';
  const title = isRo ? page.titleRo : page.titleEn;
  const description = isRo ? page.descriptionRo : page.descriptionEn;
  const pathRo = `/ro${page.path}`;
  const pathEn = `/en${page.pathEn || page.path}`;
  const url = `${SITE_URL}${isRo ? pathRo : pathEn}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: url,
      languages: {
        ro: `${SITE_URL}${pathRo}`,
        en: `${SITE_URL}${pathEn}`,
        'x-default': `${SITE_URL}${pathRo}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: isRo ? 'ro_RO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'YORAM',
    description: 'Agent vocal AI pentru afaceri din România',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logos/logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Romanian', 'English'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Romania',
    },
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  price: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'YORAM',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Romania',
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price,
        priceCurrency: 'EUR',
        unitText: 'MONTH',
      },
    },
  };
}

export function generateFAQSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export const PAGE_SEO = {
  home: {
    titleRo: 'Agent Vocal AI pentru Afaceri',
    titleEn: 'AI Voice Agent for Businesses',
    descriptionRo:
      'Agentul nostru vocal AI preia apelurile afacerii tale 24/7. Programări automate, conversații naturale în română. De la €299/lună.',
    descriptionEn:
      'Our AI voice agent answers your business calls 24/7. Automatic scheduling, natural conversations. From €299/month.',
    path: '',
  },
  pricing: {
    titleRo: 'Prețuri Agent Vocal AI',
    titleEn: 'AI Voice Agent Pricing',
    descriptionRo:
      'Prețuri clare, fără surprize. De la €299/lună. Starter, Professional, Premium. Configurare inclusă.',
    descriptionEn:
      'Clear pricing, no surprises. From €299/month. Starter, Professional, Premium. Setup included.',
    path: '/preturi',
    pathEn: '/pricing',
  },
  howItWorks: {
    titleRo: 'Cum Funcționează Agentul Vocal',
    titleEn: 'How the Voice Agent Works',
    descriptionRo:
      'Configurare în 3-5 zile. Ne spui despre afacerea ta, configurăm agentul, începe să răspundă. Simplu.',
    descriptionEn:
      'Setup in 3-5 days. Tell us about your business, we configure the agent, it starts answering. Simple.',
    path: '/cum-functioneaza',
    pathEn: '/how-it-works',
  },
  about: {
    titleRo: 'Despre Noi - Echipa YORAM',
    titleEn: 'About Us - YORAM Team',
    descriptionRo:
      'Echipă din România care ajută afacerile locale să nu mai piardă clienți la telefon. Tehnologie AI, rezultate măsurabile.',
    descriptionEn:
      'A Romanian team helping local businesses stop losing clients on the phone. AI technology, measurable results.',
    path: '/despre-noi',
    pathEn: '/about',
  },
  contact: {
    titleRo: 'Contact - Programează un Demo',
    titleEn: 'Contact - Schedule a Demo',
    descriptionRo:
      'Contactează-ne pentru un demo gratuit al agentului vocal AI. Răspundem în max 24h.',
    descriptionEn:
      'Contact us for a free AI voice agent demo. We respond within 24h.',
    path: '/contact',
  },
  faq: {
    titleRo: 'Întrebări Frecvente - Agent Vocal AI',
    titleEn: 'FAQ - AI Voice Agent',
    descriptionRo:
      'Răspunsuri la cele mai frecvente întrebări despre agentul vocal AI: configurare, costuri, securitate, GDPR.',
    descriptionEn:
      'Answers to frequently asked questions about the AI voice agent: setup, costs, security, GDPR.',
    path: '/faq',
  },
  blog: {
    titleRo: 'Blog - Agent Vocal AI',
    titleEn: 'Blog - AI Voice Agent',
    descriptionRo:
      'Articole despre cum să nu mai pierzi clienți la telefon. Calcule reale, ghiduri practice, studii de caz.',
    descriptionEn:
      'Articles about how to stop losing clients on the phone. Real calculations, practical guides, case studies.',
    path: '/blog',
  },
  industries: {
    titleRo: 'Industrii - Agent Vocal AI',
    titleEn: 'Industries - AI Voice Agent',
    descriptionRo:
      'Soluții personalizate de agent vocal AI pentru clinici, saloane, avocatură, imobiliare, service auto și mai multe.',
    descriptionEn:
      'Customized AI voice agent solutions for clinics, salons, law firms, real estate, auto service and more.',
    path: '/industrii',
    pathEn: '/industries',
  },
} as const;
