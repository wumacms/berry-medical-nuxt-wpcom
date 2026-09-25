import type { NavItem } from "~/types";

/**
 * 桌面端 + 移动端主导航菜单数据源
 * TheNavbar 通过 v-for 遍历此数组进行渲染
 */
export const mainNav: NavItem[] = [
  { title: "首页", path: "/" },
  { title: "产品列表", path: "/cases" },
  {
    title: "列表模板",
    path: "/news",
    children: [
      { title: "默认列表 (全部动态)", path: "/news" },
      { title: "产品列表 (网格卡片)", path: "/cases" },
      { title: "图文列表 (行业动态)", path: "/news?category=industry" },
      { title: "文章列表 (公司新闻)", path: "/news?category=company" },
    ],
  },
  {
    title: "服务体系",
    path: "/services",
    children: [
      {
        title: "设计篇 · 选址与工艺",
        path: "/services#design",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=300&auto=format&fit=crop",
        description: "分区规划与防护施工图",
      },
      {
        title: "施工篇 · 辐射防护",
        path: "/services#construction",
        image:
          "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=300&auto=format&fit=crop",
        description: "衰变池与洁净净化工程",
      },
      {
        title: "运维篇 · 数字孪生",
        path: "/services#equipment",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=300&auto=format&fit=crop",
        description: "瑞核V1.0态势感知平台",
      },
    ],
  },
  { title: "专业优势", path: "/advantages" },
  { title: "关于我们", path: "/about" },
  { title: "联系我们", path: "/contact" },
];

export const footerQuickLinks: NavItem[] = [
  { title: "行业背景", path: "/industry" },
  { title: "企业简介", path: "/company" },
  { title: "服务内容", path: "/services" },
  { title: "专业优势", path: "/advantages" },
  { title: "业绩介绍", path: "/cases" },
  { title: "新闻动态", path: "/news" },
];

export const footerServiceLinks: NavItem[] = [
  { title: "设计篇", path: "/services#design" },
  { title: "施工篇", path: "/services#construction" },
  { title: "设备篇", path: "/services#equipment" },
  { title: "数字孪生", path: "/advantages#digital" },
  { title: "常见问题", path: "/contact#faq" },
];

export const companyContact = {
  name: "贝瑞医疗科技（郑州）有限公司",
  enName: "Berry Medical Technology (Zhengzhou) Co., Ltd.",
  slogan:
    "专注核医学场所建设一站式服务，提供从规划到运维的全生命周期解决方案。",
  phone: "18503878846",
  phoneSecondary: "13215991477",
  email: "530051528@qq.com",
  address: "郑州市高新技术产业开发区瑞达路睿达广场1栋14层",
  website: "www.berrymedical.com.cn",
  icp: "豫ICP备xxxxxxxx号",
};
