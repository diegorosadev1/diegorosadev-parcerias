export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  startingPrice: string;
  deliveryTime: string;
  icon: 'rocket' | 'monitor' | 'cart';
  accentColor: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: 'message' | 'code' | 'approval' | 'publish' | 'design' | 'calendar' | 'check' | 'rocket';
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Site Institucional' | 'Landing Page' | 'E-commerce';
  tagline: string;
  description: string;
  accent: string;
  badgeColor: string;
  tags: string[];
  features: string[];
  mockupType: 'automotive' | 'dealership' | 'fitness' | 'iot';
}

export interface AgencyBenefit {
  text: string;
}
