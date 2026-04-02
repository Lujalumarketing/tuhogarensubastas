export interface HeroContent {
  title: string;
  subtitle: string;
  personalProof: string;
  valueBullets: string[];
  primaryCta: string;
}

export interface TrainingContent {
  title: string;
  text: string;
  cta: string;
}

export interface FinalCtaContent {
  title: string;
  text: string;
  button: string;
}

export interface SiteConfig {
  brandName: string;
  brandTitle: string;
  whatsAppNumber: string;
  instagramUrl: string;
  linkedinUrl: string;
  founderImagePath: string;
  defaultWhatsAppMessage: string;
  legalName: string;
  legalYear: number;
  hero: HeroContent;
  training: TrainingContent;
  differentiator: string;
  story: string;
  audience: string[];
  finalCta: FinalCtaContent;
}

export interface ServiceItem {
  id: string;
  name: string;
  trademark: string;
  description: string;
  bullets: string[];
  priceBefore: string;
  priceNow: string;
  notes: string[];
  badge?: string;
  isRecommended?: boolean;
  cta: string;
  microcopy?: string;
  priceReinforcement?: string;
  urgency?: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
