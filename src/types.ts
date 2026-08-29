export interface Slide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'cloud' | 'brain' | 'shield';
  features: string[];
  specs: { label: string; value: string }[];
}

export interface NewsItem {
  id: string;
  category: '活動訊息' | '技術分享' | '企業榮譽' | '雲端科技';
  date: string;
  title: string;
  imageUrl: string;
  summary: string;
  content: string[];
  readTime: string;
  author: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
