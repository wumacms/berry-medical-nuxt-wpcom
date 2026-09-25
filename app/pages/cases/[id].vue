<script setup lang="ts">
import type { CaseItem } from "~/types";
import { caseList } from "~/data/cases";

const route = useRoute();
const caseId = computed(() => Number(route.params.id) || 1);

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical(`/cases/${caseId.value}`);

// Find current item or default to first
const currentCase = computed<CaseItem>(() => {
  return caseList.find((item) => Number(item.id) === caseId.value) ?? caseList[0]!;
});

// Gallery images: main image + supporting medical construction images
const galleryImages = computed(() => {
  const base = currentCase.value.imageUrl;
  return [
    base,
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  ];
});

const selectedImgIndex = ref(0);

// Active Tab
const activeTab = ref("intro");

// Prev / Next Cases
const currentIndex = computed(() => caseList.findIndex((item) => Number(item.id) === Number(currentCase.value.id)));
const prevCase = computed(() => (currentIndex.value > 0 ? caseList[currentIndex.value - 1] : null));
const nextCase = computed(() => (currentIndex.value < caseList.length - 1 ? caseList[currentIndex.value + 1] : null));

// Related cases (excluding current)
const relatedCases = computed(() => {
  return caseList.filter((item) => Number(item.id) !== Number(currentCase.value.id)).slice(0, 3);
});

useSeoMeta({
  title: () => `${currentCase.value.title} - 贝瑞医疗产品与业绩详情`,
  description: () => currentCase.value.summary,
  ogTitle: () => currentCase.value.title,
  ogDescription: () => currentCase.value.summary,
  ogImage: () => currentCase.value.imageUrl,
  ogUrl: () => `${SITE_URL}/cases/${caseId.value}`,
});
</script>

<template>
  <div>
    <!-- Top Banner & Breadcrumbs -->
    <PageBanner
      :title="currentCase.title"
      :bg-image="currentCase.imageUrl"
      :breadcrumbs="[
        { label: '产品列表', to: '/cases' },
        { label: currentCase.title }
      ]"
    />

    <div class="max-w-[1200px] mx-auto px-5">
      <!-- 1. 产品顶部预览区 -->
      <div class="flex flex-col lg:flex-row gap-10 bg-white p-6 sm:p-8 border border-gray-200 rounded-sm mb-9">
        <!-- 左侧大图 + 缩略图轮播切换 -->
        <div class="w-full lg:w-[480px] shrink-0">
          <div class="aspect-4/3 overflow-hidden border border-gray-200 rounded-sm bg-slate-50 cursor-zoom-in">
            <img :src="galleryImages[selectedImgIndex]" :alt="currentCase.title" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>

          <!-- 缩略图切换行 -->
          <div class="flex gap-2.5 mt-3.5">
            <div
              v-for="(img, idx) in galleryImages"
              :key="idx"
              class="w-[76px] aspect-square border-2 rounded overflow-hidden cursor-pointer transition-all duration-200"
              :class="selectedImgIndex === idx ? 'border-[#206be7] opacity-100' : 'border-gray-200 opacity-60 hover:opacity-100'"
              @click="selectedImgIndex = idx"
            >
              <img :src="img" :alt="`${currentCase.title} 缩略图 ${idx + 1}`" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- 右侧关键参数与属性信息 -->
        <div class="flex-1 flex flex-col">
          <h2 class="text-xl sm:text-[22px] font-semibold text-gray-900 mb-4 leading-snug m-0">
            {{ currentCase.title }}
          </h2>

          <div class="bg-slate-50 rounded p-4 mb-5 border border-gray-100">
            <div class="text-[13.5px] py-1.5 border-b border-dashed border-gray-200 flex">
              <span class="text-gray-500 w-[90px] shrink-0">项目分类：</span>
              <span class="text-gray-900 font-medium">{{ currentCase.categoryLabel }}场所建设</span>
            </div>
            <div class="text-[13.5px] py-1.5 border-b border-dashed border-gray-200 flex">
              <span class="text-gray-500 w-[90px] shrink-0">防护等级：</span>
              <span class="text-gray-900 font-medium">甲级/乙级放射性非密封工作场所</span>
            </div>
            <div class="text-[13.5px] py-1.5 border-b border-dashed border-gray-200 flex">
              <span class="text-gray-500 w-[90px] shrink-0">建设周期：</span>
              <span class="text-gray-900 font-medium">60 - 120 工作日（含验收周期）</span>
            </div>
            <div class="text-[13.5px] py-1.5 flex">
              <span class="text-gray-500 w-[90px] shrink-0">验收支持：</span>
              <span class="text-gray-900 font-medium">放射诊疗许可证 · 辐射安全许可证 · 药监GMP核查</span>
            </div>
          </div>

          <div class="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
            <p class="m-0">{{ currentCase.summary }}</p>
          </div>

          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-sm font-medium shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer w-fit"
          >
            <i class="fa-regular fa-comment-dots"></i>
            <span>立即在线咨询此方案 / 预约工程师</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- 2. 下方两列主体布局 (左边详情内容 + 右侧边栏) -->
      <div class="flex flex-col lg:flex-row gap-9 items-start mb-15">
        <main class="flex-1 min-w-0 w-full">
          <div class="bg-white border border-gray-200 rounded-sm p-6 sm:p-8">
            <!-- 详情 Tab 切换 -->
            <div class="flex items-center gap-6 border-b border-gray-200 pb-3 mb-6">
              <button
                type="button"
                class="text-base font-semibold pb-2 border-b-2 transition cursor-pointer"
                :class="activeTab === 'intro' ? 'border-[#206be7] text-[#206be7]' : 'border-transparent text-gray-500 hover:text-gray-900'"
                @click="activeTab = 'intro'"
              >
                项目介绍
              </button>

              <button
                type="button"
                class="text-base font-semibold pb-2 border-b-2 transition cursor-pointer"
                :class="activeTab === 'specs' ? 'border-[#206be7] text-[#206be7]' : 'border-transparent text-gray-500 hover:text-gray-900'"
                @click="activeTab = 'specs'"
              >
                技术参数与建设规范
              </button>

              <button
                type="button"
                class="text-base font-semibold pb-2 border-b-2 transition cursor-pointer"
                :class="activeTab === 'photos' ? 'border-[#206be7] text-[#206be7]' : 'border-transparent text-gray-500 hover:text-gray-900'"
                @click="activeTab = 'photos'"
              >
                现场工程实景
              </button>
            </div>

            <!-- Tab 1: 项目介绍 -->
            <div v-if="activeTab === 'intro'" class="text-[15px] text-gray-700 leading-relaxed space-y-4">
              <p class="leading-relaxed">
                {{ currentCase.details || currentCase.summary }}
              </p>
              <p class="leading-relaxed">
                在核医学科及放射性工作场所实施过程中，贝瑞医疗团队从前期选址勘测、科室动线优化、辐射屏蔽计算、通风负压设计，到现场防辐射结构实施、铅门防护与观察窗安装、放射性废水多级衰变池铺设，提供全生命周期闭环实施服务。
              </p>

              <figure class="my-6 rounded-sm overflow-hidden">
                <img :src="currentCase.imageUrl" :alt="currentCase.title" class="w-full h-auto rounded-sm" />
                <figcaption class="text-xs text-gray-400 text-center mt-2">{{ currentCase.title }} 实施竣工效果</figcaption>
              </figure>

              <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4 pl-3 border-l-4 border-[#206be7]">
                方案特色与实施核心
              </h2>
              <p class="leading-relaxed">
                1. <strong>流程动线科学分区</strong>：严格遵照国家《电离辐射防护与辐射源安全基本标准》(GB 18871-2002) 和《核医学放射防护要求》(GBZ
                120-2020)，实现受检者通道、医护通道与放射源转运通道物理分离，杜绝交叉污染。
              </p>
              <p class="leading-relaxed">
                2. <strong>高标屏蔽精工保障</strong>：根据核素能量（如F-18、Tc-99m、I-131、Lu-177等）精密计算铅当量厚度，杜绝任何穿墙管线缝隙漏线风险。
              </p>
              <p class="leading-relaxed">
                3. <strong>全流程取证配合</strong>：从环境影响评价报告表编制、放射卫生防护预评价，到控制效果评价及药监GMP飞行检查，保障客户一次性通过环保局与卫健委专家组验收。
              </p>
            </div>

            <!-- Tab 2: 技术规格 -->
            <div v-else-if="activeTab === 'specs'" class="text-[15px] text-gray-700 leading-relaxed">
              <h2 class="text-xl font-semibold text-gray-900 mt-2 mb-4 pl-3 border-l-4 border-[#206be7]">
                技术指标与规范执行表
              </h2>
              <div class="overflow-x-auto my-6">
                <table class="w-full text-xs text-left border border-gray-200 divide-y divide-gray-200">
                  <thead class="bg-gray-50 text-gray-700">
                    <tr>
                      <th class="py-3 px-4 font-semibold">项目类别</th>
                      <th class="py-3 px-4 font-semibold">设计与建设执行标准</th>
                      <th class="py-3 px-4 font-semibold">贝瑞医疗实施指标</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 text-gray-600">
                    <tr>
                      <td class="py-3 px-4 font-medium text-gray-900">辐射防护剂量</td>
                      <td class="py-3 px-4">GB 18871-2002、GBZ 120-2020</td>
                      <td class="py-3 px-4">控制区外公众剂量率 &lt; 2.5 µSv/h，远优于国标要求</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-4 font-medium text-gray-900">废水衰变池</td>
                      <td class="py-3 px-4">HJ 1188-2021 核医学辐射安全</td>
                      <td class="py-3 px-4">多级推流式/间歇式全自动智能衰变池，耐酸防腐双层防漏</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-4 font-medium text-gray-900">负压通风净化</td>
                      <td class="py-3 px-4">GB 50333 医院洁净手术部规范</td>
                      <td class="py-3 px-4">分级负压梯度、定风量变频控制、活性炭高效微粒过滤装置</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-4 font-medium text-gray-900">数字化态势感知</td>
                      <td class="py-3 px-4">贝瑞企业级数字孪生规范</td>
                      <td class="py-3 px-4">瑞核V1.0引擎，微秒级数据传感上报，3D空间全景可视</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Tab 3: 实景图片 -->
            <div v-else class="text-[15px] text-gray-700 leading-relaxed">
              <h2 class="text-xl font-semibold text-gray-900 mt-2 mb-4 pl-3 border-l-4 border-[#206be7]">
                现场实景相册
              </h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div
                  v-for="(img, idx) in galleryImages"
                  :key="idx"
                  class="rounded-sm overflow-hidden aspect-4/3 bg-gray-100 border border-gray-200"
                >
                  <img :src="img" :alt="`实景图 ${idx + 1}`" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <!-- 底部标签与翻页导航 -->
            <div class="mt-10 pt-6 border-t border-gray-200">
              <div class="flex flex-wrap gap-2 mb-5 items-center">
                <span class="text-xs text-gray-400 mr-2 flex items-center">标签：</span>
                <span v-for="tag in currentCase.tags" :key="tag" class="mr-2">
                  <NuxtLink
                    to="/cases"
                    class="bg-gray-100 text-gray-600 hover:bg-[#206be7] hover:text-white px-3 py-1 rounded text-xs transition-colors"
                  >
                    {{ tag }}
                  </NuxtLink>
                </span>
              </div>

              <div class="flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-500 pt-4 border-t border-dashed border-gray-200">
                <div>
                  <span class="text-gray-400 mr-2">上一个：</span>
                  <NuxtLink v-if="prevCase" :to="`/cases/${prevCase.id}`" class="text-gray-800 hover:text-[#206be7] transition">
                    {{ prevCase.title }}
                  </NuxtLink>
                  <span v-else class="text-gray-400">已经是第一个</span>
                </div>
                <div>
                  <span class="text-gray-400 mr-2">下一个：</span>
                  <NuxtLink v-if="nextCase" :to="`/cases/${nextCase.id}`" class="text-gray-800 hover:text-[#206be7] transition">
                    {{ nextCase.title }}
                  </NuxtLink>
                  <span v-else class="text-gray-400">已经是最后一个</span>
                </div>
              </div>
            </div>

            <!-- 相关产品 / 相关案例 -->
            <div class="mt-12 pt-8 border-t border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span class="w-1.5 h-4 bg-[#206be7] rounded-xs inline-block"></span>
                相关产品与案例
              </h3>

              <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-none p-0 m-0">
                <li
                  v-for="rel in relatedCases"
                  :key="rel.id"
                  class="bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 group"
                >
                  <div>
                    <NuxtLink :to="`/cases/${rel.id}`" class="block aspect-3/2 overflow-hidden bg-slate-100">
                      <img :src="rel.imageUrl" :alt="rel.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </NuxtLink>
                    <h4 class="p-3 m-0 text-xs sm:text-sm font-medium text-center truncate">
                      <NuxtLink :to="`/cases/${rel.id}`" class="text-gray-900 group-hover:text-[#206be7] transition-colors">
                        {{ rel.title }}
                      </NuxtLink>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>

        <!-- 右侧边栏 -->
        <div class="w-full lg:w-[300px] shrink-0">
          <SidebarWidget active-path="/cases" />
        </div>
      </div>
    </div>
  </div>
</template>
