/**
 * 全站“区块化（Block-Based Architecture）”核心契约与类型定义
 * 网站的基本原子单位是区块，页面由区块组装而成
 */

import type { CaseItem, NewsItem, ServiceChapter } from "./index";

/** 基础区块：面包屑导航项契约 */
export interface BreadcrumbItem {
  label: string;
  to?: string;
}

/** 基础区块：顶部横幅区块数据契约（纯粹包含横幅自身视觉数据） */
export interface BannerBlockData {
  title: string;
  description?: string;
  bgImage?: string;
}

/** 基础区块：文章/内容详情页头部区块契约 (Article / Detail Header) */
export interface ArticleHeaderBlockData {
  title: string;
  date?: string;
  author?: string;
  views?: number | string;
  bgImage?: string;
}

/** 基础区块：标准区块头部（主标题 + 副标题） */
export interface SectionHeaderBlockData {
  title: string;
  subtitle?: string;
}

/** 基础区块：行动召唤（CTA）卡片/按钮区块 */
export interface CtaBlockData {
  title?: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
}

/** 基础区块：标准富文本文章区块（导语摘要 + HTML 正文） */
export interface ArticleBlockData {
  id?: string | number;
  title: string;
  summary?: string;
  content: string;
  date?: string;
  author?: string;
  readCount?: number;
  imageUrl?: string;
  tags?: string[];
}

/** 首页完整区块数据模型 */
export interface HomePageBlocks {
  heroBlock: {
    slides: {
      title: string;
      desc: string;
      subdesc: string;
      btnText: string;
      btnLink: string;
      img: string;
    }[];
  };
  servicesBlock: {
    header: SectionHeaderBlockData;
    items: {
      icon: string;
      title: string;
      description: string;
      link: string;
    }[];
  };
  aboutBlock: {
    header: SectionHeaderBlockData;
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
    btnText: string;
    btnLink: string;
    imageUrl: string;
  };
  casesBlock: {
    header: SectionHeaderBlockData;
  };
  newsBlock: {
    header: SectionHeaderBlockData;
  };
  contactBlock: {
    header: SectionHeaderBlockData;
  };
}

/** 专业优势页完整区块数据模型 */
export interface AdvantagesPageBlocks {
  bannerBlock: BannerBlockData;
  statsBlock: {
    icon: string;
    number: string;
    label: string;
    desc: string;
  }[];
  coreBlock: {
    header: SectionHeaderBlockData;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  digitalTwinBlock: {
    header: SectionHeaderBlockData;
    heading: string;
    paragraphs: string[];
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
    cta: {
      text: string;
      link: string;
    };
  };
}

/** 服务体系页完整区块数据模型 */
export interface ServicesPageBlocks {
  bannerBlock: BannerBlockData;
  overviewBlock: {
    header: SectionHeaderBlockData;
    chapters: ServiceChapter[];
  };
  designBlock: {
    intro: string;
    principles: string[];
    features: { title: string; description: string }[];
  };
  constructionBlock: {
    features: { title: string; description: string }[];
  };
  equipmentBlock: {
    features: { title: string; description: string }[];
    cta: CtaBlockData;
  };
}

/** 行业背景页完整区块数据模型 */
export interface IndustryPageBlocks {
  bannerBlock: BannerBlockData;
  challengesBlock: {
    header: SectionHeaderBlockData;
    items: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };
  driversBlock: {
    header: SectionHeaderBlockData;
    items: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };
}

/** 联系我们页完整区块数据模型 */
export interface ContactPageBlocks {
  bannerBlock: BannerBlockData;
  wechatBlock: {
    qrImage: string;
    title: string;
    description: string;
  };
  accordionBlock: {
    icon: string;
    title: string;
    content: string;
  }[];
  formBlock: {
    header: SectionHeaderBlockData;
  };
  faqBlock: {
    header: SectionHeaderBlockData;
    faqs: { question: string; answer: string }[];
  };
}

/** 关于我们页完整区块数据模型 */
export interface AboutPageBlocks {
  bannerBlock: BannerBlockData;
  articleBlock: ArticleBlockData;
  ctaBlock: CtaBlockData;
}

/** 产品列表页完整区块数据模型 */
export interface CasesPageBlocks {
  bannerBlock: BannerBlockData;
  categories: { key: string; label: string }[];
  cases: CaseItem[];
}

/** 新闻动态页完整区块数据模型 */
export interface NewsPageBlocks {
  bannerBlock: BannerBlockData;
  categories: { key: string; label: string }[];
  news: NewsItem[];
}

