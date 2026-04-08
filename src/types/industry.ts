export interface IndustryStats {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface IndustryScenario {
  title: string;
  without: string;
  with: string;
}

export interface IndustryObjection {
  question: string;
  answer: string;
}

export interface BeforeAfterItem {
  before: string;
  after: string;
}

export interface IndustryFeature {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryData {
  slug: string;
  nameRo: string;
  nameEn: string;
  icon: string;
  heroRo: string;
  heroEn: string;
  descriptionRo: string;
  descriptionEn: string;
  stats: IndustryStats[];
  scenarios: IndustryScenario[];
  beforeAfter: BeforeAfterItem[];
  objections: IndustryObjection[];
  features: IndustryFeature[];
  recommendedTier: 'starter' | 'professional' | 'premium';
  roiDefaults: {
    callsPerDay: number;
    missedCallPercent: number;
    avgAppointmentValue: number;
  };
}
