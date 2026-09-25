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
    specs: {
      categoryLabel: "核医学科场所建设",
      protectionLevel: "甲级放射性非密封工作场所",
      duration: "90 - 120 工作日（含环评卫评取证）",
      acceptance: "放射诊疗许可证 · 辐射安全许可证 · 卫评控评合格",
    },
    content: `
      <p class="leading-relaxed">
        华中地区某大型三甲综合医院核医学科新建工程，规划建筑面积约1200㎡。贝瑞医疗作为该项目EPC总承包工程服务商，深度参与前期规划勘测、科室动线优化、辐射防护施工及环评卫评全流程取证。
      </p>
      <p class="leading-relaxed">
        针对该项目包含正电子断层显像（PET/CT）、单光子断层显像（SPECT/CT）及核素治疗病房的多功能复合需求，项目组实行了严格的“医患分流、净污分流、放射源独立转运”三通道动线隔离体系。
      </p>
      <figure class="my-6 rounded-sm overflow-hidden">
        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=crop" alt="某三甲医院核医学科新建项目实施效果" class="w-full h-auto rounded-sm object-cover" />
        <figcaption class="text-xs text-gray-400 text-center mt-2">某三甲医院核医学科新建项目 实施竣工实景</figcaption>
      </figure>
      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4 pl-3 border-l-4 border-[#206be7]">
        方案特色与实施核心
      </h2>
      <p class="leading-relaxed">
        1. <strong>流程动线科学分区</strong>：严格遵照国家《电离辐射防护与辐射源安全基本标准》(GB 18871-2002) 和《核医学放射防护要求》(GBZ 120-2020)，实现控制区与监督区明确界定，杜绝交叉污染。
      </p>
      <p class="leading-relaxed">
        2. <strong>高标屏蔽精工保障</strong>：针对F-18、Tc-99m等多种核素能量精密计算铅当量厚度，特制超重型气密铅防护门与穿墙防辐射沉淀槽，实现零缝隙漏射线风险。
      </p>
      <p class="leading-relaxed">
        3. <strong>全流程取证配合</strong>：从环境影响评价报告表编制、放射卫生防护预评价，到控制效果评价及药监GMP飞行检查，保障客户一次性通过环保局与卫健委专家组验收。
      </p>
    `,
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
    specs: {
      categoryLabel: "放射性药物制备车间",
      protectionLevel: "GMP C级背景 + 局部A级热室层流",
      duration: "75 - 90 工作日",
      acceptance: "放射性药品使用许可证（第四类） · 国家药监GMP核查",
    },
    content: `
      <p class="leading-relaxed">
        本项目系为华东某医学院附属医院放射性药物研究转化中心打造的高洁净度放射性药物制备车间。项目兼顾高能量放射性操作人员安全屏蔽与无菌制剂生产GMP规范。
      </p>
      <p class="leading-relaxed">
        车间整体设计为C级（ISO 7）受控洁净环境，在合成热室与分装手套箱内实现A级（ISO 5）垂直单向流洁净保护。配合全自动压差定风量调节阀，确保洁净区对外保持梯度负压，既阻断微粒进入，又防止放射性气溶胶外溢。
      </p>
      <figure class="my-6 rounded-sm overflow-hidden">
        <img src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1470&auto=format&fit=crop" alt="放射性药物制备净化场所实施效果" class="w-full h-auto rounded-sm object-cover" />
        <figcaption class="text-xs text-gray-400 text-center mt-2">高洁净度放射性药物制备车间竣工实景</figcaption>
      </figure>
      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4 pl-3 border-l-4 border-[#206be7]">
        核心技术亮点
      </h2>
      <p class="leading-relaxed">
        1. <strong>气流流型精准控制</strong>：自主研发双级回风互锁与气密封门系统，气压梯度精度控制在±3Pa以内，满足无菌制备严苛标准。
      </p>
      <p class="leading-relaxed">
        2. <strong>热室与屏蔽通风集成</strong>：全套引入耐辐射防腐排风管道与高效碘吸附排风过滤箱，放射性废气净化率达99.9%以上。
      </p>
      <p class="leading-relaxed">
        3. <strong>GMP合规取证全周期护航</strong>：提供完整的DQ、IQ、OQ、PQ验证文件支持，助力医院高分通过药监局第四类许可证合规审查。
      </p>
    `,
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
    specs: {
      categoryLabel: "智慧核医学物联网平台",
      protectionLevel: "实时全域辐射态势感知与三级报警",
      duration: "20 - 30 工作日部署上线",
      acceptance: "国家信息系统三级等保 · 智慧医院互联互通评审",
    },
    content: `
      <p class="leading-relaxed">
        “瑞核V1.0数字孪生态势感知平台”是贝瑞医疗针对现代核医学科安全运维与智慧化管理需求自主研发的轻量化Web端三维物联中枢。
      </p>
      <p class="leading-relaxed">
        系统通过毫米级高精度BIM空间建模，1:1数字孪生复刻核医学科地下衰变池、给药室、扫描间与注射后候诊室，接入空间内所有高灵敏辐射剂量仪、压差传感器和机组状态探头。
      </p>
      <figure class="my-6 rounded-sm overflow-hidden">
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop" alt="瑞核数字孪生态势感知平台三维界面" class="w-full h-auto rounded-sm object-cover" />
        <figcaption class="text-xs text-gray-400 text-center mt-2">瑞核V1.0数字孪生管理系统三维实时监控大屏</figcaption>
      </figure>
      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4 pl-3 border-l-4 border-[#206be7]">
        系统功能矩阵
      </h2>
      <p class="leading-relaxed">
        1. <strong>全域辐射场态势云图</strong>：通过三维粒子与等高线色彩直观展现整座科室空间辐射剂量衰减曲线，医护人员工作路径剂量实时可测。
      </p>
      <p class="leading-relaxed">
        2. <strong>智能通风与负压监控</strong>：毫秒级采集新风排风机运转频率与压差梯度，一旦负压失衡或滤网阻力超标立即秒级声光告警。
      </p>
      <p class="leading-relaxed">
        3. <strong>应急预案联动指挥</strong>：内置放射性核素泼溅、排风系统故障应急预案，触发警报时系统自动联动封闭电磁屏蔽门并绘制最佳疏散通道。
      </p>
    `,
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
    specs: {
      categoryLabel: "旧院区有限空间改造",
      protectionLevel: "非密封I-131治疗病房高标屏蔽",
      duration: "45 - 60 工作日",
      acceptance: "放射卫生防护控制效果评价 · 环保局复核",
    },
    content: `
      <p class="leading-relaxed">
        老旧院区有限空间改建核医学科室是行业公认的工程难题。本项目位于某市级三级医院住院部二层，场地原为普通病房，改造总面积不足300㎡，面临建筑承重荷载有限、层高受限、无法加设室外排风立管等多重严苛约束。
      </p>
      <p class="leading-relaxed">
        贝瑞医疗工程团队运用轻质复合屏蔽材料替代传统重混凝土，大幅减轻楼板结构自重；运用三维碰撞检测优化通风管线走向，在受限层高内嵌入活性炭高效排风过滤单元与独立放射性废水收集衰变箱。
      </p>
      <figure class="my-6 rounded-sm overflow-hidden">
        <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1470&auto=format&fit=crop" alt="有限空间场地改造项目实施效果" class="w-full h-auto rounded-sm object-cover" />
        <figcaption class="text-xs text-gray-400 text-center mt-2">老旧建筑有限空间改建核医学病房实景</figcaption>
      </figure>
      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4 pl-3 border-l-4 border-[#206be7]">
        改造技术突破
      </h2>
      <p class="leading-relaxed">
        1. <strong>自重轻量化屏蔽结构</strong>：采用定制高密度铅锑合金夹芯板与微晶防辐射砂浆，满足4-6个铅当量要求同时降低楼板自重荷载超40%。
      </p>
      <p class="leading-relaxed">
        2. <strong>分散式微型衰变系统</strong>：针对旧楼无地下室条件，研发微型双级不锈钢承压衰变储液罐，配备密闭防渗围堰与在线pH/活度探头。
      </p>
      <p class="leading-relaxed">
        3. <strong>静音高压排风消音系统</strong>：针对紧邻住院病房特点，定制管道阻抗消声器与浮筑隔振机座，室内噪声控制在50dB(A)以内。
      </p>
    `,
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
    specs: {
      categoryLabel: "分子影像中心建设",
      protectionLevel: "511keV高能湮灭辐射重屏蔽",
      duration: "60 - 90 工作日",
      acceptance: "大型医用设备配置许可机房验收 · 辐射安全许可",
    },
    content: `
      <p class="leading-relaxed">
        PET/CT作为现代医学尖端分子影像设备，其正电子核素（如18F）发射的511keV湮灭γ射线能量极高，穿透力极强，对机房及周边区域的屏蔽防护要求极为严苛。
      </p>
      <p class="leading-relaxed">
        贝瑞医疗为某区域医疗中心打造标准化PET/CT分子影像中心，全面规划受检者专用注射室、注射后重屏蔽候诊室、扫描间、操作间、读片室及放射性废物暂存间。
      </p>
      <figure class="my-6 rounded-sm overflow-hidden">
        <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1470&auto=format&fit=crop" alt="PET/CT分子影像中心实施效果" class="w-full h-auto rounded-sm object-cover" />
        <figcaption class="text-xs text-gray-400 text-center mt-2">PET/CT检查机房与注射候诊区整体交付实景</figcaption>
      </figure>
      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4 pl-3 border-l-4 border-[#206be7]">
        方案特色与保障
      </h2>
      <p class="leading-relaxed">
        1. <strong>高能湮灭辐射精密屏蔽</strong>：扫描室四周墙体与观察窗采用高纯度铅板搭配重晶石混凝土复核屏蔽，操作位辐射水平接近自然本底。
      </p>
      <p class="leading-relaxed">
        2. <strong>单向受检闭环动线</strong>：注射后候诊室设立独立专用卫生间与专用出入通道，实现全封闭闭环管理，医护暴露风险降至最低。
      </p>
      <p class="leading-relaxed">
        3. <strong>设备地基与电磁防微振</strong>：满足GE、联影、西门子等主流PET/CT厂商的机架基础沉降与微振控制规范，保障成像精度。
      </p>
    `,
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
    specs: {
      categoryLabel: "核化学与放射性药物实验室",
      protectionLevel: "多核素开放式操作综合防护",
      duration: "60 - 80 工作日",
      acceptance: "高校科研辐射安全许可 · 生态环境局环评验收",
    },
    content: `
      <p class="leading-relaxed">
        本项目为华中重点高校核物理与放射化学系新建的高标准科研级放射化学实验室。针对科研实验核素种类多、操作频次高、实验工况灵活多变等特点量身定制。
      </p>
      <p class="leading-relaxed">
        实验室整体布局包含放射化学标记合成室、高活度分装操作间、分析测试仪器室及三废暂存室。配备高规格铅屏蔽通风柜、全排风超净工作台以及耐腐蚀耐辐照环氧自流坪地面。
      </p>
      <figure class="my-6 rounded-sm overflow-hidden">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop" alt="科研机构核医学实验室建设效果" class="w-full h-auto rounded-sm object-cover" />
        <figcaption class="text-xs text-gray-400 text-center mt-2">科研级放射化学实验室竣工实景</figcaption>
      </figure>
      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4 pl-3 border-l-4 border-[#206be7]">
        方案特色与实施核心
      </h2>
      <p class="leading-relaxed">
        1. <strong>模块化灵活屏蔽手套箱</strong>：支持各种能量核素研发操作，屏蔽箱可根据实验需求快速升级铅当量或加装机械手。
      </p>
      <p class="leading-relaxed">
        2. <strong>全变频变风量排风系统</strong>：根据通风柜移门开度自动调节排风量，保持恒定0.5m/s面风速，最大程度保障实验人员安全。
      </p>
      <p class="leading-relaxed">
        3. <strong>全流程科研环保合规验收</strong>：协助校方编制辐射安全管理规章制度与环评报告，确保高效率取得辐射安全许可证。
      </p>
    `,
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
