/**
 * 行业背景页面结构化数据源
 * 包含：全球健康挑战、核医学核心发展驱动力
 */

export interface IndustryItem {
  icon: string;
  title: string;
  desc: string;
}

export const industryChallenges: IndustryItem[] = [
  {
    icon: "fa-solid fa-heart-pulse",
    title: "癌症发病率持续攀升",
    desc: "全球癌症负担不断加重，早期发现与精准治疗成为提升生存率的关键。",
  },
  {
    icon: "fa-solid fa-brain",
    title: "神经退行性疾病高发",
    desc: "阿尔茨海默病、帕金森病等给医疗体系带来严峻考验，亟需更精准的诊断手段。",
  },
  {
    icon: "fa-solid fa-microscope",
    title: "传统影像局限待突破",
    desc: "传统影像仅能呈现解剖结构，核医学可深度揭示分子代谢与功能信息，让早期微小病灶无处遁形。",
  },
];

export const industryDrivers: IndustryItem[] = [
  {
    icon: "fa-solid fa-x-ray",
    title: "多模态设备普及",
    desc: "PET/CT、PET/MR 加速普及，分辨率与工作效率持续迭代升级。",
  },
  {
    icon: "fa-solid fa-flask",
    title: "新型放射性药物",
    desc: "PSMA、Ga-68 DOTATATE、Lu-177 等相继获批上市并加速临床转化。",
  },
  {
    icon: "fa-solid fa-atom",
    title: "核素选择多样化",
    desc: "Ga-68、Cu-64、Lu-177、Ac-225、Y-90 等精准适配不同疾病靶点。",
  },
  {
    icon: "fa-solid fa-arrows-spin",
    title: "诊疗一体化",
    desc: "诊断与治疗协同发展，推动核医学向更细分、更高疗效方向演进。",
  },
];

export interface IndustryPageData {
  banner: {
    title: string;
    description: string;
  };
  sectionHeaders: {
    challenges: {
      title: string;
      subtitle: string;
    };
    drivers: {
      title: string;
      subtitle: string;
    };
  };
}

export const industryPageData: IndustryPageData = {
  banner: {
    title: "行业背景",
    description: "核医学迎来精准医疗新时代，政策与临床需求双轮驱动科室场所高标规范化建设",
  },
  sectionHeaders: {
    challenges: {
      title: "全球健康挑战与核医学价值",
      subtitle: "核医学在疾病早期诊断、精准分期、疗效评估及靶向治疗全流程中展现核心价值",
    },
    drivers: {
      title: "核医学发展的核心驱动力",
      subtitle: "先进成像技术与放射性药物创新研发加速临床落地",
    },
  },
};
