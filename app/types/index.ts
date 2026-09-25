export interface NavItem {
  title: string;
  path: string;
  icon?: string;
  /** 子菜单项（支持下拉菜单） */
  children?: NavItem[];
  /** 高级菜单卡片图片（用于图文式下拉） */
  image?: string;
  /** 高级菜单卡片描述 */
  description?: string;
  /** 是否在桌面导航隐藏（仅在移动端显示） */
  mobileOnly?: boolean;
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
  /** 富文本图文正文（与新闻详情页一致） */
  content?: string;
  /** 现场实景组图 */
  galleryImages?: string[];
  /** 专属技术指标属性 */
  specs?: {
    categoryLabel?: string;
    protectionLevel?: string;
    duration?: string;
    acceptance?: string;
  };
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

export interface AboutArticleData {
  id?: string | number;
  title: string;
  category?: string;
  categoryLabel?: string;
  date?: string;
  author?: string;
  readCount?: number;
  summary: string;
  content: string;
  imageUrl?: string;
  tags?: string[];
}

export interface AboutPageData {
  banner: {
    title: string;
    description: string;
  };
  article: AboutArticleData;
  title: string;
  summary: string;
  content: string;
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface PrivacyPageData {
  banner: {
    title: string;
    description: string;
  };
  title: string;
  date: string;
  summary: string;
  content: string;
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

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  type?: string;
  message?: string;
}
