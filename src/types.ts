export type CategoryType = 
  | 'All'
  | 'Mobile Stand'
  | 'Coaster Set'
  | 'Desk Holder'
  | 'Noteped & Pen Holder'
  | 'Paper Weight'
  | 'Charging Stand'
  | 'Desk Organiser'
  | 'Calendar'
  | 'Corporate Gifts in Metal'
  | 'Premium Office Accessories';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategoryType;
  itemCode: string;
  material: string;
  finish: string;
  dimensions: string;
  height: string;
  length: string;
  width: string;
  weight: string;
  diameter: string;
  plate: string;
  ss: string;
  thickness: string;
  minOrderQty: number; // e.g. 100 pcs
  readyStockCount: string; // e.g. "1000+ Cartons"
  laserMarkingAvailable: boolean;
  colorOptions: string[];
  packaging: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  featured?: boolean;
  inStock: boolean;
  bestFor: string[]; // e.g. ["Corporate Events", "Employee Welcome Kits", "Executive Gifting"]
  estimatedLeadTime: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Corporate Gifts' | 'Awards' | 'Trophies' | 'Laser Marking' | 'Events' | 'Office Accessories';
  image: string;
  description: string;
  clientType?: string;
  materialUsed: string;
}

export interface BlogSection {
  id: string;
  title: string;
  content: string;
  subsections?: { subtitle: string; body: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  heroImage: string;
  quote: {
    text: string;
    author: string;
  };
  toc: { id: string; title: string }[];
  sections: BlogSection[];
  tags: string[];
  relatedProductCategory: CategoryType;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  designation: string;
  company: string;
  location: string;
  productSupplied: string;
  rating: number;
  orderVolume: string;
}

export interface FilterState {
  category: CategoryType;
  material: string;
  searchQuery: string;
  sortBy: 'featured' | 'name-asc' | 'name-desc' | 'moq-asc';
  inStockOnly: boolean;
  laserMarkingOnly: boolean;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  customizationNotes?: string;
  logoUrl?: string;
}
