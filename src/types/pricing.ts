export interface PricingFeature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  premium: boolean | string;
}

export interface PricingTier {
  id: 'starter' | 'professional' | 'premium';
  nameRo: string;
  nameEn: string;
  price: number;
  setupFee: number;
  minutesIncluded: number;
  isRecommended: boolean;
  featuresRo: string[];
  featuresEn: string[];
  idealForRo: string;
  idealForEn: string;
}
