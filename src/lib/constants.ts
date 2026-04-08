import type { PricingTier, PricingFeature } from '@/types/pricing';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    nameRo: 'Starter',
    nameEn: 'Starter',
    price: 299,
    setupFee: 500,
    minutesIncluded: 1500,
    isRecommended: false,
    featuresRo: [
      'Apeluri 24/7',
      'Conversație naturală română',
      'Răspuns FAQ-uri',
      'Mesaje pe WhatsApp/email',
      'Booking de bază (link existent)',
      'Configurare în 3-5 zile',
      'Suport email',
    ],
    featuresEn: [
      '24/7 call answering',
      'Natural Romanian conversation',
      'FAQ responses',
      'WhatsApp/email messages',
      'Basic booking (existing link)',
      'Setup in 3-5 days',
      'Email support',
    ],
    idealForRo: 'Ideal pentru: saloane, frizerii, service auto mic',
    idealForEn: 'Ideal for: salons, barbershops, small auto services',
  },
  {
    id: 'professional',
    nameRo: 'Professional',
    nameEn: 'Professional',
    price: 449,
    setupFee: 800,
    minutesIncluded: 3000,
    isRecommended: true,
    featuresRo: [
      'Tot din Starter +',
      'Conversație completă (dialog real)',
      'Programare directă în calendar',
      'Apeluri simultane nelimitate',
      'Înregistrare și transcriere apeluri',
      'Raport lunar detaliat',
      'Integrare CRM',
      'Suport prioritar email + WhatsApp',
    ],
    featuresEn: [
      'Everything in Starter +',
      'Full conversation (real dialogue)',
      'Direct calendar booking',
      'Unlimited simultaneous calls',
      'Call recording & transcription',
      'Detailed monthly reports',
      'CRM integration',
      'Priority support via email + WhatsApp',
    ],
    idealForRo: 'Ideal pentru: clinici, imobiliare, avocatură',
    idealForEn: 'Ideal for: clinics, real estate, law firms',
  },
  {
    id: 'premium',
    nameRo: 'Premium',
    nameEn: 'Premium',
    price: 699,
    setupFee: 1500,
    minutesIncluded: 6000,
    isRecommended: false,
    featuresRo: [
      'Tot din Professional +',
      'Voce custom (tonul brandului tău)',
      'Follow-up outbound (apeluri de confirmare)',
      'Dashboard analytics în timp real',
      'Manager cont dedicat',
      'Check-in săptămânal',
      'Suport urgență',
      'Onboarding personal',
    ],
    featuresEn: [
      'Everything in Professional +',
      'Custom voice (your brand\'s tone)',
      'Outbound follow-up (confirmation calls)',
      'Real-time analytics dashboard',
      'Dedicated account manager',
      'Weekly check-in',
      'Emergency support',
      'Personal onboarding',
    ],
    idealForRo: 'Ideal pentru: clinici mari, avocatură, volume mari',
    idealForEn: 'Ideal for: large clinics, law firms, high volume',
  },
];

export const COMPARISON_FEATURES: PricingFeature[] = [
  {
    name: 'Apeluri 24/7',
    starter: true,
    professional: true,
    premium: true,
  },
  {
    name: 'Conversație naturală română',
    starter: true,
    professional: true,
    premium: true,
  },
  {
    name: 'Răspuns FAQ-uri',
    starter: true,
    professional: true,
    premium: true,
  },
  {
    name: 'Mesaje WhatsApp/email',
    starter: true,
    professional: true,
    premium: true,
  },
  {
    name: 'Booking de bază (link existent)',
    starter: true,
    professional: true,
    premium: true,
  },
  {
    name: 'Conversație completă (dialog real)',
    starter: false,
    professional: true,
    premium: true,
  },
  {
    name: 'Programare directă în calendar',
    starter: false,
    professional: true,
    premium: true,
  },
  {
    name: 'Apeluri simultane nelimitate',
    starter: false,
    professional: true,
    premium: true,
  },
  {
    name: 'Înregistrare și transcriere apeluri',
    starter: false,
    professional: true,
    premium: true,
  },
  {
    name: 'Raport lunar detaliat',
    starter: false,
    professional: true,
    premium: true,
  },
  {
    name: 'Integrare CRM',
    starter: false,
    professional: true,
    premium: true,
  },
  {
    name: 'Voce custom (tonul brandului)',
    starter: false,
    professional: false,
    premium: true,
  },
  {
    name: 'Follow-up outbound',
    starter: false,
    professional: false,
    premium: true,
  },
  {
    name: 'Dashboard analytics real-time',
    starter: false,
    professional: false,
    premium: true,
  },
  {
    name: 'Manager cont dedicat',
    starter: false,
    professional: false,
    premium: true,
  },
  {
    name: 'Check-in săptămânal',
    starter: false,
    professional: false,
    premium: true,
  },
  {
    name: 'Suport urgență',
    starter: false,
    professional: false,
    premium: true,
  },
  {
    name: 'Onboarding personal',
    starter: false,
    professional: false,
    premium: true,
  },
  {
    name: 'Minute incluse',
    starter: '1.500',
    professional: '3.000',
    premium: '6.000',
  },
  {
    name: 'Suport',
    starter: 'Email',
    professional: 'Email + WhatsApp',
    premium: 'Dedicat + urgență',
  },
];

export const MISSED_CALLS_CHART_DATA: { industry: string; value: number }[] = [
  { industry: 'Clinici Dentare', value: 14500 },
  { industry: 'Firme de Avocatură', value: 18200 },
  { industry: 'Agenții Imobiliare', value: 21800 },
  { industry: 'Saloane de Frumusețe', value: 9600 },
];

export const COST_COMPARISON_DATA: {
  name: string;
  min: number;
  max: number;
  color: string;
}[] = [
  {
    name: 'Receptionist full-time',
    min: 25000,
    max: 40000,
    color: '#ef4444',
  },
  {
    name: 'Serviciu preluare apeluri',
    min: 12000,
    max: 24000,
    color: '#f59e0b',
  },
  {
    name: 'Agentul nostru vocal AI',
    min: 3588,
    max: 8388,
    color: '#10b981',
  },
];

export const TRUST_ITEMS_RO: string[] = [
  'GDPR Compliant',
  'Suport în limba română',
  'Configurare în 3-5 zile',
  'Fără contracte pe termen lung',
  'Uptime 99.9%',
  'Construit în România',
];

export const TRUST_ITEMS_EN: string[] = [
  'GDPR Compliant',
  'Romanian Language Support',
  'Setup in 3-5 Days',
  'No Long-Term Contracts',
  '99.9% Uptime',
  'Built in Romania',
];

export const OVERAGE_RATE_PER_MINUTE = 0.15;

export const ANNUAL_DISCOUNT_MONTHS = 2;

export const SETUP_TIMELINE_DAYS = { min: 3, max: 5 };

export const SUPPORT_EMAIL = 'contact@yoram.ro';

export const SITE_URL = 'https://yoram.ro';

export const AVAILABLE_LOCALES = ['ro', 'en'] as const;

export const DEFAULT_LOCALE = 'ro' as const;
