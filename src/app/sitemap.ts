import { MetadataRoute } from 'next';

const INDUSTRY_SLUGS = [
  'clinici-dentare',
  'cabinete-medicale',
  'saloane-de-frumusete',
  'firme-de-avocatura',
  'agentii-imobiliare',
  'service-auto',
  'frizerii-barbershop',
  'hoteluri-hospitality',
  'consultanti-imigrare',
  'notariate',
];

const LOCALES = ['ro', 'en'];
const BASE_URL = 'https://yoram.ro';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/preturi',
    '/cum-functioneaza',
    '/despre-noi',
    '/contact',
    '/faq',
    '/industrii',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
    for (const slug of INDUSTRY_SLUGS) {
      entries.push({
        url: `${BASE_URL}/${locale}/industrii/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
