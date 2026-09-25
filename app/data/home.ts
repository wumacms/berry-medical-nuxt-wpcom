/**
 * 首页专属展示数据配置
 * 包含：首屏 Hero 轮播、核心服务特性卡片、关于我们预览数据
 */

export interface HeroSlide {
  title: string;
  desc: string;
  subdesc: string;
  btnText: string;
  btnLink: string;
  img: string;
}

export interface ServiceFeatureItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface AboutPreviewStat {
  value: string;
  label: string;
}

export interface AboutPreviewData {
  title: string;
  paragraphs: string[];
  stats: AboutPreviewStat[];
  btnText: string;
  btnLink: string;
  imageUrl: string;
}

/** 1. 首页首屏焦点轮播数据 */
export const heroSlides: HeroSlide[] = [
  {
    title: "专业的核医学场所建设全生命周期服务商",
    desc: "专注选址规划 · 辐射防护施工 · 环评卫评验收 · 数字孪生运维",
    subdesc: "致力于为国内各类医疗机构提供高质量核医学场所建设与综合防护工程服务",
    btnText: "了解服务体系",
    btnLink: "/services",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "瑞核V1.0数字孪生态势感知平台",
    desc: "三维微仿真 · 辐射剂量监测 · 负压通风状态 · 设备智能预警",
    subdesc: "运用高精3D空间模拟与IoT物联传感技术，打造可视化的现代智慧核医学科室",
    btnText: "探索数字孪生",
    btnLink: "/advantages",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "放射性药物制备与高标净化场所建设",
    desc: "C级背景局部A级 · 衰变池工程 · GMP取证全流程保障",
    subdesc: "严格遵循国家放射性同位素与射线装置安全标准，助力客户一次性通过官方核查",
    btnText: "立即咨询对接",
    btnLink: "/contact",
    img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1600&auto=format&fit=crop",
  },
];

/** 2. 首页核心服务卡片数据 */
export const serviceFeatures: ServiceFeatureItem[] = [
  {
    icon: "fa-solid fa-compass-drafting",
    title: "选址与工艺规划",
    description: "以核医学临床流程与辐射安全为核心，精确划分控制区与监督区，优化人流物流动线。",
    link: "/services#design",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "辐射防护与施工",
    description: "高标铅复合屏蔽工程、电动防护铅门、防辐射铅玻璃，经济适用兼顾防护合规。",
    link: "/services#construction",
  },
  {
    icon: "fa-solid fa-water",
    title: "衰变池与洁净工程",
    description: "放射性废水多级衰变池系统、C级洁净背景与百级层流保护，保障环保安全排废。",
    link: "/services#construction",
  },
  {
    icon: "fa-solid fa-network-wired",
    title: "数字孪生运维平台",
    description: "瑞核V1.0态势感知平台，实现设备运转、空间剂量与负压排风一体化智能预警。",
    link: "/advantages#digital",
  },
];

/** 3. 首页关于我们预览数据 */
export const aboutPreviewData: AboutPreviewData = {
  title: "专注核医学场所建设一站式服务",
  paragraphs: [
    "贝瑞医疗科技（郑州）有限公司是一家专注于核医学工作场所规划设计、辐射防护施工、放射性废水衰变池系统、环评卫评药监综合验收以及数字化孪生运维的高新技术服务企业。",
    "技术团队核心成员深耕核技术应用与辐射防护领域15年以上，累计参与全国30余家三甲医院及科研药企的核医学场所实施建设，为客户提供从概念规划到合规运营的\"交钥匙\"闭环工程。",
  ],
  stats: [
    { value: "15+", label: "年专业团队经验" },
    { value: "30+", label: "场所建设实施" },
    { value: "100%", label: "一次性验收达标" },
  ],
  btnText: "深入了解贝瑞医疗",
  btnLink: "/about",
  imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
};
