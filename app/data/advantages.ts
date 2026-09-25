export const advantageStats = [
  {
    icon: "fa-solid fa-file-shield",
    number: "10+",
    label: "核医学许可证取证支持",
    desc: "放射性药品使用许可证（第四类）",
  },
  {
    icon: "fa-solid fa-people-group",
    number: "15+",
    label: "年专业技术团队",
    desc: "核医学场所建设经验",
  },
  {
    icon: "fa-solid fa-building-circle-check",
    number: "30+",
    label: "场所建设实施项目",
    desc: "覆盖全国多家医疗机构",
  },
  {
    icon: "fa-solid fa-lightbulb",
    number: "100+",
    label: "方案技术咨询",
    desc: "核医学场所方案技术咨询",
  },
];

export const coreAdvantages = [
  {
    icon: "fa-solid fa-book-open",
    title: "参编核医学行业规范标准",
    description:
      "参与核医学行业规范标准编制，紧跟国家卫健委与生态环境部政策前沿，确保方案领先合规。",
  },
  {
    icon: "fa-solid fa-compress",
    title: "场地改造服务专长",
    description:
      "以实施难度大、空间布局有限的既有院区场地改造服务为专长，攻克楼面荷载与防辐射屏障冲突难题。",
  },
  {
    icon: "fa-solid fa-cubes",
    title: "数字孪生技术赋能",
    description:
      "自主研发瑞核V1.0系统，通过数字孪生3D可视化仿真技术实现核医学科全方位智能化运维监管。",
  },
  {
    icon: "fa-solid fa-arrows-spin",
    title: "全生命周期闭环服务",
    description:
      "涵盖从选址、设计、施工到环评、药监验收、设备供应及7×24h运维的一站式闭环交钥匙解决方案。",
  },
  {
    icon: "fa-solid fa-people-carry-box",
    title: "经验丰富的核心团队",
    description:
      "汇聚具备十年以上知名科研院所、三甲医疗机构及核工业企业背景的跨学科专家与项目领军人。",
  },
  {
    icon: "fa-solid fa-gears",
    title: "专业设备与技术支撑",
    description:
      "配备高精密度辐射检测仪器、精密测绘装备与全套热室设备供应链，具备深厚工程沉淀。",
  },
];

export const digitalTwinFeatures = [
  {
    title: "高精度三维实景复原",
    description:
      "通过BIM及3D扫描，1:1毫米级还原核医学科建筑结构、屏蔽墙厚度及暗藏管道走线。",
    icon: "fa-solid fa-cube",
  },
  {
    title: "辐射场态势动态感知",
    description:
      "接入传感器实时采集给药室、衰变池、注射后候诊室辐射当量率，动态色彩云图直观预警。",
    icon: "fa-solid fa-wave-square",
  },
  {
    title: "设备健康预测性维护",
    description:
      "对排风负压机组、铅防护门互锁电机、层流净化风机实施振动与功耗AI分析，故障早知晓。",
    icon: "fa-solid fa-microchip",
  },
  {
    title: "突发辐射泄漏应急指挥",
    description:
      "内置应急疏散与气密隔离预案，一旦出现剂量异常，秒级触发联动封锁并规划最佳撤离路线。",
    icon: "fa-solid fa-triangle-exclamation",
  },
];

export interface AdvantagesPageData {
  /** 1. 顶部横幅区块 */
  bannerBlock: {
    title: string;
    description: string;
  };
  /** 2. 关键数据统计区块 */
  statsBlock: typeof advantageStats;
  /** 3. 六大核心优势网格区块 */
  coreBlock: {
    header: {
      title: string;
      subtitle: string;
    };
    items: typeof coreAdvantages;
  };
  /** 4. 数字孪生赋能区块 */
  digitalTwinBlock: {
    header: {
      title: string;
      subtitle: string;
    };
    heading: string;
    paragraphs: string[];
    features: typeof digitalTwinFeatures;
    cta: {
      text: string;
      link: string;
    };
  };

  // 兼顾原有字段兼容性
  banner: {
    title: string;
    description: string;
  };
  sectionHeaders: {
    core: { title: string; subtitle: string };
    digital: { title: string; subtitle: string };
  };
  digitalTwin: {
    heading: string;
    paragraphs: string[];
    cta: { text: string; link: string };
  };
}

const bannerBlockData = {
  title: "专业优势",
  description: "十五年行业积淀与标准参编实力，以自主研发数字孪生技术驱动核医学场所高质量建设",
};

const coreBlockData = {
  header: {
    title: "六大核心优势",
    subtitle: "以高标准防护、合规取证与技术自研驱动服务全方位领先",
  },
  items: coreAdvantages,
};

const digitalTwinBlockData = {
  header: {
    title: "瑞核V1.0数字孪生系统",
    subtitle: "自主研发面向核医学科场所的下一代智慧物联态势感知运维系统",
  },
  heading: "全方位数字化态势感知与运行预警",
  paragraphs: [
    "传统核医学场所运维往往依赖人工巡检和分散的单机仪表，存在空间盲区多、数据滞后和事故预警不足等痛点。贝瑞医疗打造“瑞核V1.0数字孪生运维平台”，实现物理场所与数字空间实时映射。",
    "平台实时采集场所各测点的剂量率、通风柜面风速、室内外负压差、衰变池液位等核心安全参数，一旦发现异常立即触发声光及短信多级报警，全天候守护医护与公众安全。",
  ],
  features: digitalTwinFeatures,
  cta: {
    text: "预约数字孪生系统演示",
    link: "/contact",
  },
};

export const advantagesPageData: AdvantagesPageData = {
  bannerBlock: bannerBlockData,
  statsBlock: advantageStats,
  coreBlock: coreBlockData,
  digitalTwinBlock: digitalTwinBlockData,

  // 兼容别名
  banner: bannerBlockData,
  sectionHeaders: {
    core: coreBlockData.header,
    digital: digitalTwinBlockData.header,
  },
  digitalTwin: {
    heading: digitalTwinBlockData.heading,
    paragraphs: digitalTwinBlockData.paragraphs,
    cta: digitalTwinBlockData.cta,
  },
};
