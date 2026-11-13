export type MaterialType =
  | 'Rudraksha'
  | 'Karungali'
  | 'Pyrite'
  | 'Rose Quartz'
  | 'Amethyst'
  | 'Tiger Eye'
  | 'Sandalwood'
  | '7 Chakra';

export type PurposeType =
  | 'Wealth'
  | 'Protection'
  | 'Love'
  | 'Peace'
  | 'Luck'
  | 'Health'
  | 'Courage'
  | 'Balance';

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  sanskritName?: string;
  material: MaterialType;
  purpose: PurposeType;
  collectionSlug: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  bestseller: boolean;
  images: string[];
  badges: string[];
  shortDescription: string;
  description: string;
  benefits: string[];
  specifications: {
    beadSize: string;
    beadCount: string;
    cord: string;
    metalAccents: string;
    origin: string;
    certificationNumber: string;
  };
  ritualGuide: {
    bestDay: string;
    deity: string;
    mantra: string;
    energizingSteps: string[];
  };
  sizes: string[];
  faqs: { question: string; answer: string }[];
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  sanskritName: string;
  tagline: string;
  description: string;
  image: string;
  beadCountTag?: string;
  purpose: PurposeType;
  material: MaterialType;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  productSlug: string;
  productName: string;
  title: string;
  comment: string;
  verifiedBuyer: boolean;
  avatar: string;
  productImage?: string;
  material: MaterialType;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

export interface BatchReport {
  id: string;
  reportNumber: string;
  testedDate: string;
  productName: string;
  beadBatch: string;
  testMethod: string;
  density: string;
  specificGravity: string;
  fissureIntegrity: string;
  nablLabId: string;
  resultStatus: 'Passed - 100% Authentic' | 'Conforms to Pure Standard';
  qrVerifyUrl: string;
}
