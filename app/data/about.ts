/**
 * “关于我们”页面结构化数据源
 */

export interface AboutAdvantageItem {
  number: string;
  title: string;
  description: string;
}

export interface AboutPageData {
  banner: {
    title: string;
    description: string;
  };
  intro: {
    paragraphs: string[];
  };
  overview: {
    title: string;
    description: string;
    image: {
      url: string;
      caption: string;
    };
  };
  advantages: {
    title: string;
    items: AboutAdvantageItem[];
  };
  vision: {
    title: string;
    quote: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const aboutData: AboutPageData = {
  banner: {
    title: "关于我们",
    description: "十五年深耕核技术应用与辐射防护工程，打造高品质核医学场所建设标杆",
  },
  intro: {
    paragraphs: [
      "是一家专业从事核医学科工作场所、放射性药物制药净化车间及核辐射实验室规划设计、屏蔽施工、环境评估与智能化运维的综合型工程科技企业。",
      "公司立足中原，业务网络覆盖全国主要省市。核心技术团队深耕核技术应用、辐射安全防护与特种净化工程十五年以上，累计为国内30余家大型综合医院及科研院所提供高水准的全生命周期交钥匙服务，工程一次性验收达标率保持在100%。",
    ],
  },
  overview: {
    title: "关于贝瑞医疗",
    description:
      "核医学科场所建设涉及非密封放射性核素操作、精密影像设备重载基底、高标射线屏蔽、负压气流控制及放射性废液废气达标排放等诸多严苛规范，技术门槛高、跨学科交叉多。贝瑞医疗打破了传统设计院不懂工艺动线、施工队不懂辐射安全、设备商不懂法规验收的行业壁垒，构建了“设计 - 施工 - 设备 - 验收 - 运维”一体化的闭环服务体系。",
    image: {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
      caption: "贝瑞医疗实施完成的现代化高品质核医学科室",
    },
  },
  advantages: {
    title: "贝瑞医疗的核心优势",
    items: [
      {
        number: "一",
        title: "专业资深开发与工程团队",
        description:
          "团队核心成员均来自于核物理、辐射防护工程、医疗暖通净化及建筑声学领域，拥有丰富的大型三甲医院核医学科新建与复杂旧院区有限空间改造经验。",
      },
      {
        number: "二",
        title: "全流程便捷化项目管理",
        description:
          "从前期选址可行性勘测、科室动线优化，到专项防护施工图绘制、工程落地实施，实行项目经理终身负责制，统一进度把控与高标质量核验。",
      },
      {
        number: "三",
        title: "全生命周期资质合规验收保障",
        description:
          "对标国家环保、卫健委及国家药监局规范，全程协同配合完成《环境影响评价报告》审批、放射卫生防护评价检测，以及放射性药品使用许可证（第四类）申报，确保客户平稳快速取证。",
      },
      {
        number: "四",
        title: "前沿数字孪生科技创新",
        description:
          "自主研发“瑞核V1.0数字孪生态势感知平台”，运用高精度3D空间仿真引擎与IoT物联网微传感器，实时监控场所空间辐射剂量分布、负压梯度与排风机组健康度。",
      },
      {
        number: "五",
        title: "长久无忧终身售后运维",
        description:
          "工程交付后提供专属项目档案，设立7×24小时应急响应通道，定期回访巡检与屏蔽效能复测，为科室平稳长久运行提供坚强后盾。",
      },
    ],
  },
  vision: {
    title: "企业使命与愿景",
    quote:
      "“以科学严谨的核工标准护航医患安全，以科技创新驱动现代智慧核医学场所高质量发展。”",
    description:
      "面对全国核医学诊疗资源下沉与精准靶向诊疗技术的迅猛发展，贝瑞医疗将持续秉持“专业、求实、创新、共赢”的理念，携手更多医疗健康机构共筑现代智慧放射诊疗空间新蓝图！",
  },
  cta: {
    title: "需要了解针对您单位的定制方案？",
    description: "我们的技术总工将为您提供免费的项目选址评估与技术建议。",
    buttonText: "立即联系对接",
    buttonLink: "/contact",
  },
};
