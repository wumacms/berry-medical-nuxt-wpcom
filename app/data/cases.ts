import type { CaseItem } from "~/types";

export interface CaseTechSpec {
  category: string;
  standard: string;
  indicator: string;
}

/** 案例详情页技术指标与规范执行表通用数据 */
export const caseTechSpecs: CaseTechSpec[] = [
  {
    category: "辐射防护剂量",
    standard: "GB 18871-2002、GBZ 120-2020",
    indicator: "控制区外公众剂量率 < 2.5 µSv/h，远优于国标要求",
  },
  {
    category: "废水衰变池",
    standard: "HJ 1188-2021 核医学辐射安全",
    indicator: "多级推流式/间歇式全自动智能衰变池，耐酸防腐双层防漏",
  },
  {
    category: "负压通风净化",
    standard: "GB 50333 医院洁净手术部规范",
    indicator: "分级负压梯度、定风量变频控制、活性炭高效微粒过滤装置",
  },
  {
    category: "数字化态势感知",
    standard: "贝瑞企业级数字孪生规范",
    indicator: "瑞核V1.0引擎，微秒级数据传感上报，3D空间全景可视",
  },
];

export const caseStats = [
  {
    icon: "fa-solid fa-building-circle-check",
    number: "30+",
    label: "场所建设实施项目",
    desc: "覆盖全国多家医疗机构",
  },
  {
    icon: "fa-solid fa-file-shield",
    number: "10+",
    label: "许可证取证支持",
    desc: "放射性药品使用许可证（第四类）",
  },
  {
    icon: "fa-solid fa-lightbulb",
    number: "100+",
    label: "方案技术咨询",
    desc: "核医学场所方案技术咨询",
  },
  {
    icon: "fa-solid fa-people-group",
    number: "15+",
    label: "年专业技术团队",
    desc: "核医学场所建设经验",
  },
];

export const caseCategories = [
  { key: "all", label: "全部案例" },
  { key: "nuclear", label: "核医学科" },
  { key: "pharmacy", label: "制药场所" },
  { key: "digital", label: "数字化" },
  { key: "renovation", label: "场地改造" },
];

export const caseList: CaseItem[] = [
  {
    id: 1,
    title: "某三甲医院核医学科新建项目",
    category: "nuclear",
    categoryLabel: "核医学科",
    summary: "整体分区布局设计、辐射防护施工、环评卫评支持，一次性通过验收。",
    tags: ["设计", "施工", "验收"],
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=crop",
    details:
      "华中地区某三甲医院新建核医学科，建筑面积约1200㎡，严格按照辐射防护要求进行控制区与监督区划分，配置放射性废水处理衰变系统与专业防护设施，顺利取得放射诊疗许可证。",
  },
  {
    id: 2,
    title: "放射性药物制备净化场所项目",
    category: "pharmacy",
    categoryLabel: "制药场所",
    summary: "C级背景局部A级环境，满足GMP药监验收要求，保障药物生产质量。",
    tags: ["净化", "GMP", "药监"],
    imageUrl:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1470&auto=format&fit=crop",
    details:
      "针对正电子及单光子放射性药物生产制备需求，量身定制万级净化背景及百级层流保护系统，协助客户通过药监局GMP核查与放射性药品生产/使用许可。",
  },
  {
    id: 3,
    title: "瑞核数字孪生态势感知平台",
    category: "digital",
    categoryLabel: "数字化",
    summary: "实现设备运行、辐射安全、安防及日常运营管理一体化。",
    tags: ["数字孪生", "智慧管理"],
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop",
    details:
      "基于3D数字孪生引擎对整座核医学场所进行高精度复原，实时接入环境辐射监测传感器、负压通风状态与设备运转健康度，打造透明化智慧科室。",
  },
  {
    id: 4,
    title: "有限空间场地改造项目",
    category: "renovation",
    categoryLabel: "场地改造",
    summary: "实施难度大、空间布局有限的场地改造服务，创新方案解决复杂场景。",
    tags: ["改造", "空间优化"],
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1470&auto=format&fit=crop",
    details:
      "在不足300㎡的旧病房区域改建放射性核素治疗病房，团队通过精密计算屏蔽厚度与管线综合布置，成功克服楼面荷载限制与通风管井穿插难题。",
  },
  {
    id: 5,
    title: "PET/CT分子影像中心建设",
    category: "nuclear",
    categoryLabel: "影像中心",
    summary: "多模态设备配套场所建设，满足PET/CT、PET/MR等设备安装要求。",
    tags: ["PET/CT", "影像中心"],
    imageUrl:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1470&auto=format&fit=crop",
    details:
      "包含给药注射室、候诊留观室、扫描检查机房及操作机房的一体化动线设计，最大化缩短病人留滞路径与交叉感染风险。",
  },
  {
    id: 6,
    title: "科研机构核医学实验室建设",
    category: "pharmacy",
    categoryLabel: "科研机构",
    summary: "满足科研级放射性药物研发与实验需求，配套专业设备设施。",
    tags: ["实验室", "研发"],
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop",
    details:
      "为知名高校核科学研究所搭建放射化学实验室，配置铅屏蔽手套箱、气动物流系统与排风净化过滤机组。",
  },
];

export const clientTypes = [
  {
    icon: "fa-solid fa-hospital",
    title: "三甲医院",
    desc: "核医学科新建、改建及设备配套项目",
  },
  {
    icon: "fa-solid fa-hospital-user",
    title: "肿瘤专科医院",
    desc: "放射性药物治疗场所及防护设施建设",
  },
  {
    icon: "fa-solid fa-microscope",
    title: "科研机构",
    desc: "核医学实验室及药物研发场所建设",
  },
  {
    icon: "fa-solid fa-industry",
    title: "行业企业",
    desc: "放射性药物生产及配套设施建设",
  },
];

export const testimonials = [
  {
    name: "张主任",
    title: "某三甲医院核医学科",
    avatar: "张",
    content:
      "贝瑞团队专业高效，从设计到验收全程把控，帮助我们顺利拿到许可证，是值得信赖的合作伙伴。",
  },
  {
    name: "李院长",
    title: "某肿瘤专科医院",
    avatar: "李",
    content:
      "场地改造难度大，贝瑞给出了创新方案，空间利用率高，辐射防护也完全达标，非常专业。",
  },
  {
    name: "王经理",
    title: "某科研机构",
    avatar: "王",
    content:
      "从环评到药监验收，贝瑞提供了全流程技术支持，让我们少走了很多弯路，服务非常到位。",
  },
];
