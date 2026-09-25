import type { ServiceChapter } from "~/types";

/** 核医学科总体布局设计原则 */
export const layoutPrinciples: string[] = [
  "使工作场所的外照射水平和放射性污染发生的概率达到国家标准最小化。",
  "保持影像检查设备工作场所内极低辐射本底水平，避免对微小病灶成像质量造成干扰。",
  "控制区入口和出口设置门禁权限控制、互锁铅防护门与单向动线，限制受检者与污染扩散。",
  "在分装和给药室出口设计专用卫生通过间与气闸缓冲，强制进行表面污染监测。",
  "放射性废水经专用三级或多级串联衰变池充分衰变达标后，方可排入医院污水处理管网。",
];

export const serviceChapters: ServiceChapter[] = [
  {
    id: "design",
    code: "01 DESIGN",
    title: "设计篇",
    subtitle: "选址规划与专业方案设计",
    icon: "fa-solid fa-drafting-compass",
    description:
      "从选址评估、方案深化到专项施工图设计，融合医疗流程优化、辐射防护安全与空间美学，确保一次性通过专家论证。",
    features: [
      {
        title: "科学选址评估",
        description:
          "充分评估周边环境敏感度，避开产科、儿科、食堂等密集区，确保单独人流物流出入口。",
        icon: "fa-solid fa-location-crosshairs",
      },
      {
        title: "严格分区布局",
        description:
          "精准划分控制区、监督区与非限制区，设置卫生通过间与单向门禁，外照射与污染风险最小化。",
        icon: "fa-solid fa-shield-halved",
      },
      {
        title: "BIM三维管综",
        description:
          "运用BIM与数字孪生技术提前进行管线碰撞检测与设备搬入吊装路径模拟推演。",
        icon: "fa-solid fa-cube",
      },
      {
        title: "合规施工图纸",
        description:
          "全套图纸深度满足辐射防护、环保、消防及卫健委审查验收标准要求。",
        icon: "fa-solid fa-file-pen",
      },
    ],
  },
  {
    id: "construction",
    code: "02 CONSTRUCTION",
    title: "施工篇",
    subtitle: "高标准辐射防护与净化施工",
    icon: "fa-solid fa-helmet-safety",
    description:
      "具备专业资质的施工团队，严控材料与工艺细节，建造兼备高防护等级与洁净舒适的核医学场所。",
    features: [
      {
        title: "铅/硫酸钡辐射防护",
        description:
          "严格按照当量计算施工铅板、防辐射钡砂砂浆、铅玻璃及电动气密防护门，接缝无缝搭接。",
        icon: "fa-solid fa-door-closed",
      },
      {
        title: "放射性废水衰变系统",
        description:
          "设计多联串联衰变池及自动化控制取样监测装置，确保达标排放普通管网。",
        icon: "fa-solid fa-faucet-drip",
      },
      {
        title: "气压梯度与排风过滤",
        description:
          "定向气流控制系统，严格负压阶梯递减，排风经活性炭与高效过滤器高空排放。",
        icon: "fa-solid fa-wind",
      },
      {
        title: "GMP洁净装饰",
        description:
          "无尘防静电地坪、圆弧角阴阳角处理、抗菌洁净壁板，满足药监GMP验收规范。",
        icon: "fa-solid fa-wand-magic-sparkles",
      },
    ],
  },
  {
    id: "equipment",
    code: "03 EQUIPMENT",
    title: "设备篇",
    subtitle: "核医学专业仪器与防护配套",
    icon: "fa-solid fa-microchip",
    description:
      "携手国际与国内一线核仪器厂商，提供从合成热室、分装手套箱到辐射监测仪器的全套供应与维保支持。",
    features: [
      {
        title: "合成与分装热室",
        description:
          "高屏蔽当量（50-75mmPb），集成层流净化、负压互锁及机械手操作接口。",
        icon: "fa-solid fa-box-archive",
      },
      {
        title: "放射性活度计",
        description:
          "高精度电离室探测器，宽能量响应范围，支持正电子与单光子核素活度精准校准。",
        icon: "fa-solid fa-gauge-high",
      },
      {
        title: "辐射监测与防护用具",
        description:
          "全套个人剂量报警仪、表面污染检测仪、铅衣、铅眼镜及移动注射防护屏风。",
        icon: "fa-solid fa-radiation",
      },
      {
        title: "气动物流传输系统",
        description:
          "专为放射性药品设计的高速铅屏蔽气动物流管道，实现安全快速院内派送。",
        icon: "fa-solid fa-truck-fast",
      },
    ],
  },
];

export interface ServicesPageData {
  banner: {
    title: string;
    description: string;
  };
  sectionOverview: {
    title: string;
    subtitle: string;
  };
  designIntro: string;
  cta: {
    text: string;
    link: string;
  };
}

export const servicesPageData: ServicesPageData = {
  banner: {
    title: "服务体系",
    description: "涵盖规划设计、辐射防护施工、衰变池净化工程、设备供应及数字孪生全生命周期闭环服务",
  },
  sectionOverview: {
    title: "三大专业篇章",
    subtitle: "设计、施工、设备三大篇章，构建核医学场所建设完整交付矩阵",
  },
  designIntro:
    "选址、方案及专项施工图设计：新建、改建项目定制方案，融合功能优化、成本控制与美学设计，严格遵循行业规范，从选址到布局确保辐射防护、制药用药安全及空间利用合理。",
  cta: {
    text: "立即预约项目工勘与需求沟通",
    link: "/contact",
  },
};
