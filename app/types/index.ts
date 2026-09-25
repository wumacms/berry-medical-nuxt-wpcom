export interface NavItem {
  title: string;
  path: string;
  icon?: string;
}

export interface CaseItem {
  id: string | number;
  title: string;
  category: string;
  categoryLabel: string;
  summary: string;
  tags: string[];
  imageUrl: string;
  details?: string;
}

export interface NewsItem {
  id: string | number;
  title: string;
  category: string;
  categoryLabel: string;
  date: string;
  author?: string;
  readCount?: number;
  summary: string;
  content?: string;
  imageUrl: string;
  tags?: string[];
}

export interface ServiceChapter {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface AdvantageItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  type?: string;
  message?: string;
}
