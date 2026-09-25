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
  <div class="page-product-detail">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner :title="currentCase.title" :bg-image="currentCase.imageUrl" :breadcrumbs="[
      { label: '产品列表', to: '/cases' },
      { label: currentCase.title }
    ]" />

    <div class="wpcom-container">
      <!-- 1. 产品顶部预览区 (.entry-preview entry-preview2) -->
      <div class="entry-preview">
        <!-- 左侧大图 + 缩略图轮播切换 -->
        <div class="entry-img-wrap">
          <div class="main-img-box">
            <img :src="galleryImages[selectedImgIndex]" :alt="currentCase.title" class="w-full h-full object-cover" />
          </div>

          <!-- 缩略图切换行 -->
          <div class="thumb-carousel">
            <div v-for="(img, idx) in galleryImages" :key="idx" class="thumb-item"
              :class="{ active: selectedImgIndex === idx }" @click="selectedImgIndex = idx">
              <img :src="img" :alt="`${currentCase.title} 缩略图 ${idx + 1}`" />
            </div>
          </div>
        </div>

        <!-- 右侧关键参数与属性信息 -->
        <div class="entry-info">
          <h2 class="entry-info-title">{{ currentCase.title }}</h2>

          <div class="entry-info-item-wrap">
            <div class="entry-info-item">
              <span class="label">项目分类：</span>
              <span class="val">{{ currentCase.categoryLabel }}场所建设</span>
            </div>
            <div class="entry-info-item">
              <span class="label">防护等级：</span>
              <span class="val">甲级/乙级放射性非密封工作场所</span>
            </div>
            <div class="entry-info-item">
              <span class="label">建设周期：</span>
              <span class="val">60 - 120 工作日（含验收周期）</span>
            </div>
            <div class="entry-info-item">
              <span class="label">验收支持：</span>
              <span class="val">放射诊疗许可证 · 辐射安全许可证 · 药监GMP核查</span>
            </div>
          </div>

          <div class="entry-info-excerpt">
            <p>{{ currentCase.summary }}</p>
          </div>

          <NuxtLink to="/contact" class="wpcom-btn btn-primary btn-lg inline-flex items-center gap-2">
            <i class="fa-regular fa-comment-dots"></i>
            <span>立即在线咨询此方案 / 预约工程师</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- 2. 下方两列主体布局 (左边详情内容 + 右侧边栏) -->
      <div class="wpcom-layout-wrap">
        <main class="wpcom-main">
          <div class="bg-white border border-gray-200 rounded-sm p-6 sm:p-8">
            <!-- 详情 Tab 切换 (WPCOM .entry-tab) -->
            <div class="flex items-center gap-6 border-b border-gray-200 pb-3 mb-6">
              <button type="button" class="text-base font-semibold pb-2 border-b-2 transition cursor-pointer" :class="activeTab === 'intro'
                ? 'border-[#206be7] text-[#206be7]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
                " @click="activeTab = 'intro'">
                项目介绍
              </button>

              <button type="button" class="text-base font-semibold pb-2 border-b-2 transition cursor-pointer" :class="activeTab === 'specs'
                ? 'border-[#206be7] text-[#206be7]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
                " @click="activeTab = 'specs'">
                技术参数与建设规范
              </button>

              <button type="button" class="text-base font-semibold pb-2 border-b-2 transition cursor-pointer" :class="activeTab === 'photos'
                ? 'border-[#206be7] text-[#206be7]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
                " @click="activeTab = 'photos'">
                现场工程实景
              </button>
            </div>

            <!-- Tab 1: 项目介绍 -->
            <div v-if="activeTab === 'intro'" class="entry-content space-y-4">
              <p>
                {{ currentCase.details || currentCase.summary }}
              </p>
              <p>
                在核医学科及放射性工作场所实施过程中，贝瑞医疗团队从前期选址勘测、科室动线优化、辐射屏蔽计算、通风负压设计，到现场防辐射结构实施、铅门防护与观察窗安装、放射性废水多级衰变池铺设，提供全生命周期闭环实施服务。
              </p>

              <figure>
                <img :src="currentCase.imageUrl" :alt="currentCase.title" />
                <figcaption class="text-xs text-gray-400 text-center mt-2">{{ currentCase.title }} 实施竣工效果</figcaption>
              </figure>

              <h2>方案特色与实施核心</h2>
              <p>
                1. <strong>流程动线科学分区</strong>：严格遵照国家《电离辐射防护与辐射源安全基本标准》(GB 18871-2002) 和《核医学放射防护要求》(GBZ
                120-2020)，实现受检者通道、医护通道与放射源转运通道物理分离，杜绝交叉污染。
              </p>
              <p>
                2. <strong>高标屏蔽精工保障</strong>：根据核素能量（如F-18、Tc-99m、I-131、Lu-177等）精密计算铅当量厚度，杜绝任何穿墙管线缝隙漏线风险。
              </p>
              <p>
                3. <strong>全流程取证配合</strong>：从环境影响评价报告表编制、放射卫生防护预评价，到控制效果评价及药监GMP飞行检查，保障客户一次性通过环保局与卫健委专家组验收。
              </p>
            </div>

            <!-- Tab 2: 技术规格 -->
            <div v-else-if="activeTab === 'specs'" class="entry-content">
              <h2>技术指标与规范执行表</h2>
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
            <div v-else class="entry-content">
              <h2>现场实景相册</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div v-for="(img, idx) in galleryImages" :key="idx"
                  class="rounded-sm overflow-hidden aspect-4/3 bg-gray-100 border border-gray-200">
                  <img :src="img" :alt="`实景图 ${idx + 1}`" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <!-- 底部标签与翻页导航 (WPCOM .entry-footer) -->
            <div class="entry-footer">
              <div class="entry-tag">
                <span class="text-xs text-gray-400 mr-2 flex items-center">标签：</span>
                <span v-for="tag in currentCase.tags" :key="tag" class="mr-2">
                  <NuxtLink to="/cases">{{ tag }}</NuxtLink>
                </span>
              </div>

              <div class="entry-page-nav">
                <div>
                  <span class="text-gray-400 mr-2">上一个：</span>
                  <NuxtLink v-if="prevCase" :to="`/cases/${prevCase.id}`">{{ prevCase.title }}</NuxtLink>
                  <span v-else class="text-gray-400">已经是第一个</span>
                </div>
                <div>
                  <span class="text-gray-400 mr-2">下一个：</span>
                  <NuxtLink v-if="nextCase" :to="`/cases/${nextCase.id}`">{{ nextCase.title }}</NuxtLink>
                  <span v-else class="text-gray-400">已经是最后一个</span>
                </div>
              </div>
            </div>

            <!-- 相关产品 / 相关案例 (WPCOM .entry-related) -->
            <div class="mt-12 pt-8 border-t border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span class="w-1.5 h-4 bg-[#206be7] rounded-xs inline-block"></span>
                相关产品与案例
              </h3>

              <ul class="post-loop post-loop-product cols-3">
                <li v-for="rel in relatedCases" :key="rel.id" class="post-item">
                  <div class="p-item-wrap">
                    <NuxtLink :to="`/cases/${rel.id}`" class="thumb">
                      <img :src="rel.imageUrl" :alt="rel.title" loading="lazy" />
                    </NuxtLink>
                    <h4 class="title">
                      <NuxtLink :to="`/cases/${rel.id}`">{{ rel.title }}</NuxtLink>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>

        <!-- 右侧边栏 -->
        <div class="wpcom-sidebar">
          <SidebarWidget active-path="/cases" />
        </div>
      </div>
    </div>
  </div>
</template>
