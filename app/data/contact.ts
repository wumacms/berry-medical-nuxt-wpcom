import { companyContact } from "./navigation";

/**
 * 联系我们页面数据配置
 * 包含：手风琴联络方式说明、常见问题 FAQ
 */

export interface ContactAccordionItem {
  title: string;
  icon: string;
  content: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const contactAccordionItems: ContactAccordionItem[] = [
  {
    title: "公司地址",
    icon: "fa-solid fa-location-dot",
    content: companyContact.address,
    desc: "乘车路线：郑州地铁1号线或高新技术开发区快速公交均可便捷到达。",
  },
  {
    title: "联系电话",
    icon: "fa-solid fa-phone",
    content: `${companyContact.phone} / ${companyContact.phoneSecondary}`,
    desc: "工作时段：周一至周日 8:30 - 18:30，节假日正常接待。",
  },
  {
    title: "电子邮箱",
    icon: "fa-regular fa-envelope",
    content: companyContact.email,
    desc: "欢迎发送项目图纸或招标文件至邮箱，我们将于24小时内反馈技术方案建议。",
  },
  {
    title: "商务合作与技术咨询",
    icon: "fa-solid fa-handshake",
    content: "新建核医学科规划 · 辐射防护工程实施 · 衰变池系统 · 环评卫评药监验收",
    desc: "技术团队拥有15+年核技术应用与屏蔽设计实战经验，覆盖全国主要省份。",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    q: "核医学场所建设一般需要多长时间？",
    a: "项目周期因场所规模、改造难度及审批流程而异，通常为3-12个月不等。我们会在方案设计阶段提供详细的时间规划与工期倒排表。",
  },
  {
    q: "是否提供环评、卫评及药监验收支持？",
    a: "是的，我们提供从环境影响评价、职业病危害放射防护预评价/控制效果评价到药监放射性药品使用许可证（第四类）的全流程技术咨询与专家指导服务。",
  },
  {
    q: "有限空间的场地改造能否承接？",
    a: "可以。实施难度大、既有院区空间受限的场地改造服务是我们的专长，团队拥有成熟的重载楼面强化、精密屏蔽测算与空间极致利用经验。",
  },
];

export interface ContactPageData {
  bannerBlock: {
    title: string;
    description: string;
  };
  wechatBlock: {
    qrImage: string;
    title: string;
    description: string;
  };
  infoBlock: {
    accordions: ContactAccordionItem[];
  };
  formBlock: {
    header: {
      title: string;
      subtitle: string;
    };
  };
  faqBlock: {
    header: {
      title: string;
    };
    faqs: FaqItem[];
  };
}

export const contactPageData: ContactPageData = {
  bannerBlock: {
    title: "联系我们",
    description: "期待与您携手“核”作，共筑安全合规的现代智慧核医学诊疗空间",
  },
  wechatBlock: {
    qrImage: "/images/qrcode.png",
    title: "微信扫码关注我们",
    description: "直连资深技术工程师，在线解答工程疑问",
  },
  infoBlock: {
    accordions: contactAccordionItems,
  },
  formBlock: {
    header: {
      title: "联系我们",
      subtitle: "与我们取得联系，我们将快速响应您的需求",
    },
  },
  faqBlock: {
    header: {
      title: "常见问题解答",
    },
    faqs: contactFaqs,
  },
};
