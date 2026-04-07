export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'YORAM AI',
    description: 'Agent vocal AI pentru afaceri din România',
    url: 'https://yoram.ro',
    areaServed: 'RO',
    serviceType: 'AI Voice Agent',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '299',
      highPrice: '699',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'YORAM Voice Agent',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
    offers: {
      '@type': 'Offer',
      price: '299',
      priceCurrency: 'EUR',
      priceValidUntil: '2027-12-31',
    },
    description:
      'Agent vocal AI care răspunde automat la apelurile telefonice ale afacerii tale, 24/7',
    inLanguage: 'ro',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
