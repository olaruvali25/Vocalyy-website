import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ro', 'en'],
  defaultLocale: 'ro',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/industrii': {
      ro: '/industrii',
      en: '/industries',
    },
    '/industrii/clinici-dentare': {
      ro: '/industrii/clinici-dentare',
      en: '/industries/dental-clinics',
    },
    '/industrii/cabinete-medicale': {
      ro: '/industrii/cabinete-medicale',
      en: '/industries/medical-offices',
    },
    '/industrii/saloane-de-frumusete': {
      ro: '/industrii/saloane-de-frumusete',
      en: '/industries/beauty-salons',
    },
    '/industrii/firme-de-avocatura': {
      ro: '/industrii/firme-de-avocatura',
      en: '/industries/law-firms',
    },
    '/industrii/agentii-imobiliare': {
      ro: '/industrii/agentii-imobiliare',
      en: '/industries/real-estate',
    },
    '/industrii/service-auto': {
      ro: '/industrii/service-auto',
      en: '/industries/auto-service',
    },
    '/industrii/frizerii-barbershop': {
      ro: '/industrii/frizerii-barbershop',
      en: '/industries/barbershops',
    },
    '/industrii/hoteluri-hospitality': {
      ro: '/industrii/hoteluri-hospitality',
      en: '/industries/hotels-hospitality',
    },
    '/industrii/consultanti-imigrare': {
      ro: '/industrii/consultanti-imigrare',
      en: '/industries/immigration-consultants',
    },
    '/industrii/notariate': {
      ro: '/industrii/notariate',
      en: '/industries/notary-offices',
    },
    '/preturi': {
      ro: '/preturi',
      en: '/pricing',
    },
    '/cum-functioneaza': {
      ro: '/cum-functioneaza',
      en: '/how-it-works',
    },
    '/despre-noi': {
      ro: '/despre-noi',
      en: '/about',
    },
    '/contact': {
      ro: '/contact',
      en: '/contact',
    },
    '/blog': {
      ro: '/blog',
      en: '/blog',
    },
    '/studii-de-caz': {
      ro: '/studii-de-caz',
      en: '/case-studies',
    },
    '/faq': {
      ro: '/faq',
      en: '/faq',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
