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

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  type?: string;
  message?: string;
}
