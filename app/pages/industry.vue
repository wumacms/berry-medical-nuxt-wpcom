<script setup lang="ts">
const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/industry");

useSeoMeta({
  title: "行业背景 - 贝瑞医疗 · 核医学迎来精准医疗新时代",
  description: "全球健康挑战日益凸显，癌症与神经退行性疾病高发。核医学凭借在重大疾病诊疗中的独特优势，成为精准医疗领域的核心力量。",
  ogTitle: "行业背景 - 贝瑞医疗 · 核医学迎来精准医疗新时代",
  ogDescription: "全球健康挑战日益凸显，癌症与神经退行性疾病高发。核医学凭借在重大疾病诊疗中的独特优势，成为精准医疗领域的核心力量。",
  ogUrl: `${SITE_URL}/industry`,
});

const challenges = [
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

const drivers = [
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
</script>

<template>
  <div class="page-industry">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner title="行业背景" description="核医学迎来精准医疗新时代，政策与临床需求双轮驱动科室场所高标规范化建设"
      bg-image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
      :breadcrumbs="[{ label: '行业背景' }]" />

    <div class="max-w-[1200px] mx-auto px-5">
      <!-- 全球健康挑战与核医学价值 -->
      <section class="py-12 bg-white">
        <SectionHeader title="全球健康挑战与核医学价值" subtitle="核医学在疾病早期诊断、精准分期、疗效评估及靶向治疗全流程中展现核心价值" />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div v-for="item in challenges" :key="item.title"
            class="bg-gray-50/70 border border-gray-200 rounded-sm p-8 hover:border-[#206be7] hover:shadow-lg transition">
            <div class="w-12 h-12 rounded-sm bg-blue-50 text-[#206be7] flex items-center justify-center text-xl mb-4">
              <i :class="item.icon"></i>
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-xs text-gray-500 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 核心驱动力 -->
      <section class="py-12 bg-gray-50/70 border-t border-b border-gray-200/80 mb-16 p-8 rounded-sm">
        <SectionHeader title="核医学发展的核心驱动力" subtitle="先进成像技术与放射性药物创新研发加速临床落地" />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="d in drivers" :key="d.title"
            class="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#206be7] hover:shadow-md transition text-center">
            <div
              class="w-12 h-12 rounded-full bg-blue-50 text-[#206be7] flex items-center justify-center text-xl mx-auto mb-4">
              <i :class="d.icon"></i>
            </div>
            <h4 class="text-sm font-semibold text-gray-900 mb-2">{{ d.title }}</h4>
            <p class="text-xs text-gray-500 leading-relaxed">{{ d.desc }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
