import type { NavItem } from "~/types";

export const mainNav: NavItem[] = [
  { title: "首页", path: "/" },
  { title: "行业背景", path: "/industry" },
  { title: "企业简介", path: "/company" },
  { title: "服务内容", path: "/services" },
  { title: "专业优势", path: "/advantages" },
  { title: "业绩介绍", path: "/cases" },
  { title: "新闻动态", path: "/news" },
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
