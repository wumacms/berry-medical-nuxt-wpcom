import type { NewsItem } from "~/types";

export const newsCategories = [
  { key: "all", label: "全部" },
  { key: "company", label: "公司新闻" },
  { key: "industry", label: "行业资讯" },
  { key: "tech", label: "技术分享" },
  { key: "policy", label: "政策法规" },
];

export const newsList: NewsItem[] = [
  {
    id: 1,
    title: "贝瑞医疗签约某三甲医院核医学科整体改造项目",
    category: "company",
    categoryLabel: "公司新闻",
    date: "2026-09-18",
    author: "贝瑞医疗编辑部",
    readCount: 1250,
    summary:
      "近日，贝瑞医疗与华中地区某三甲医院正式签约，将为其核医学科提供从选址规划、辐射防护施工到环评验收的全生命周期一站式服务。项目预计工期6个月，建成后将显著提升该院核医学诊疗能力。",
    imageUrl:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1470&auto=format&fit=crop",
    tags: ["核医学科", "场所建设", "三甲医院", "辐射防护"],
    content: `
      <p>近日，贝瑞医疗科技（郑州）有限公司与华中地区某知名三甲医院正式签署合作协议，承接该院核医学科整体改造项目。该项目涵盖核医学科场所的选址评估、方案设计、辐射防护施工、放射性废水处理系统建设，以及环评、卫评、药监验收等全流程服务。</p>
      <p>据悉，该院核医学科原有场地已使用超过十年，存在空间布局不合理、防护设施老化、诊疗流程不畅等问题，难以满足日益增长的核医学诊疗需求。院方经过多方考察与严格评审，最终选择贝瑞医疗作为项目合作伙伴，正是看重其在核医学场所建设领域的全产业链服务能力与丰富的项目实战经验。</p>
      <blockquote class="border-l-4 border-primary bg-light rounded-r-2xl py-4 px-6 my-6">
        <p class="text-dark/80 font-medium italic leading-relaxed">“核医学科场所建设不同于普通医疗空间，涉及辐射防护、洁净环境、放射性废物处理等多项专业要求，必须由具备全流程能力的团队来统筹实施。”</p>
        <footer class="text-xs text-dark/40 mt-3">—— 贝瑞医疗项目负责人</footer>
      </blockquote>
      <p>项目启动后，贝瑞医疗技术团队第一时间进驻现场，开展详细的场地勘察与需求调研。针对场地空间有限、原有结构改造难度大等挑战，团队将运用自主研发的瑞核V1.0数字孪生系统进行模拟推演，在虚拟空间中完成布局优化与流程验证，确保方案的科学性与可实施性。</p>
      <h2 class="text-xl sm:text-2xl font-bold text-dark pt-4 mb-3">项目亮点与实施计划</h2>
      <p>根据规划，该项目将重点围绕三大核心模块展开：一是核医学工作场所的整体分区布局优化，严格按照辐射防护要求划分控制区与监督区，确保工作场所安全合规；二是辐射防护施工与放射性废水衰变池系统建设，采用经济适用的防护材料，兼顾防护效果与成本控制；三是配套设备设施的更新与集成，包括活度测量系统、防护手套箱、合成热室等专业设备。</p>
      <p>项目预计总工期为6个月，分为方案设计、施工建设、设备安装调试、验收取证四个阶段。贝瑞医疗将组建专项项目组，配备工艺设计、工程管理、研发技术、售后服务等多部门协同，确保项目高质量交付。</p>
    `,
  },
  {
    id: 2,
    title: "瑞核V1.0数字孪生平台完成重大版本升级",
    category: "tech",
    categoryLabel: "技术分享",
    date: "2026-09-10",
    author: "数字化研发部",
    readCount: 980,
    summary:
      "新版本新增设备预测性维护与辐射剂量智能预警模块，进一步提升核医学科智能化管理水平。",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop",
    tags: ["数字孪生", "智慧管理", "系统升级"],
    content: `
      <p>贝瑞医疗自主研发的“瑞核V1.0数字孪生态势感知平台”近日完成重大版本升级。本次升级聚焦于核医学科日常运行安全与效率痛点，推出了多项突破性功能。</p>
      <p>首先，平台全面升级了3D空间引擎渲染效率，能够以轻量化Web端实现千万级面数的高精度场所复刻。其次，新增设备运行状态预测性AI预警算法，实时对负压风机、通风柜风速及屏蔽门连锁装置进行健康诊断。</p>
      <p>目前，该升级版本已在两家合作三甲医院先行上线试运行，获得医护人员与工程管理部门的一致好评。</p>
    `,
  },
  {
    id: 3,
    title: "放射性药物制备场所GMP验收要点解析",
    category: "industry",
    categoryLabel: "行业资讯",
    date: "2026-09-03",
    author: "法规咨询组",
    readCount: 1420,
    summary:
      "结合最新药监政策，梳理放射性药物制备净化场所的验收标准与常见问题，助力高效通过审批。",
    imageUrl:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1470&auto=format&fit=crop",
    tags: ["GMP", "药监", "制药场所", "验收标准"],
    content: `
      <p>随着放射性靶向药物（如Lu-177、Ac-225等）在临床诊疗中的爆发式应用，医院和药企对院内自制放射性药物场所的需求激增。本文系统梳理GMP合规验收的关键考量。</p>
      <p>核心控制点包括：C级背景下的百级层流保护、人流与物流单向净化通道设计、废气高空达标排放过滤系统以及数据完整性与批记录追溯要求。</p>
    `,
  },
  {
    id: 4,
    title: "有限空间核医学场所改造项目顺利通过验收",
    category: "company",
    categoryLabel: "公司新闻",
    date: "2026-08-25",
    author: "工程部",
    readCount: 860,
    summary:
      "贝瑞医疗凭借创新布局方案，在不足300㎡空间内完成核医学科整体改造，一次性通过环评及卫评验收。",
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1470&auto=format&fit=crop",
    tags: ["有限空间", "改造工程", "环评验收"],
    content: `
      <p>在既有医疗楼宇中改造核医学科是业内公认的技术难题。贝瑞医疗工程团队通过精密的三维激光测绘与管线避让设计，成功化解了承重结构受限和屏蔽层厚度挤占空间的双重难题，项目顺利一次性通过卫健委及环保局的达标验收。</p>
    `,
  },
  {
    id: 5,
    title: "核医学诊疗项目环评新规解读与应对策略",
    category: "policy",
    categoryLabel: "政策法规",
    date: "2026-08-15",
    author: "政策研究室",
    readCount: 1680,
    summary:
      "针对最新发布的核技术应用项目环评要求，分析对核医学场所建设的影响及合规建议。",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop",
    tags: ["政策法规", "环评", "辐射防护"],
    content: `
      <p>生态环境部近期针对核技术利用辐射安全监管提出更高标准。医疗单位在新建或扩建核医学科时，需要重点关注源项估算精准度、周围环境敏感受体剂量评估以及突发核素泄漏应急预案编制。</p>
    `,
  },
  {
    id: 6,
    title: "核医学防护设备选型指南：手套箱与热室篇",
    category: "tech",
    categoryLabel: "技术分享",
    date: "2026-08-08",
    author: "设备支持组",
    readCount: 1100,
    summary:
      "从防护性能、洁净等级到操作便捷性，全面对比分析合成热室与分装热室的选型要点。",
    imageUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop",
    tags: ["设备选型", "热室", "手套箱"],
    content: `
      <p>热室与手套箱是放射性药物合成、标记及分装的核心屏障设备。选型时需综合考虑操作核素的射线类型（伽马/贝塔/阿尔法）、铅屏蔽当量（如50mmPb/75mmPb）、排风洁净度与电离室集成位置。</p>
    `,
  },
];
