<script setup lang="ts">
import {
  advantageStats,
  coreAdvantages,
  digitalTwinFeatures,
} from "~/data/advantages";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/advantages");

useSeoMeta({
  title: "专业优势 - 贝瑞医疗 · 六大专业能力铸就行业标杆",
  description: "从参编国家行业标准到自主研发瑞核V1.0数字孪生系统，贝瑞医疗以全生命周期闭环服务打造核医学场所建设不可替代的专业壁垒。",
  ogTitle: "专业优势 - 贝瑞医疗 · 六大专业能力铸就行业标杆",
  ogDescription: "参编标准、数字孪生驱动、全流程闭环，筑牢核医学科建设专业护城河。",
  ogUrl: `${SITE_URL}/advantages`,
});
</script>

<template>
  <div class="page-advantages">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner title="专业优势" description="十五年行业积淀与标准参编实力，以自主研发数字孪生技术驱动核医学场所高质量建设"
      bg-image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
      :breadcrumbs="[{ label: '专业优势' }]" />

    <!-- 关键数据卡片 (WPCOM Module 7 Stats Row) -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="wpcom-container">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="stat in advantageStats" :key="stat.label"
            class="bg-gray-50/80 border border-gray-200 rounded-sm p-6 text-center hover:border-[#206be7] hover:shadow-md transition">
            <div class="text-3xl sm:text-4xl font-bold text-[#206be7] mb-2 tracking-tight">
              {{ stat.number }}
            </div>
            <div class="text-sm font-semibold text-gray-900 mb-1">
              {{ stat.label }}
            </div>
            <div class="text-xs text-gray-500">
              {{ stat.desc }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 六大专业能力 -->
    <section id="features" class="py-16 bg-gray-50/70 border-b border-gray-200/80">
      <div class="wpcom-container">
        <SectionHeader title="六大核心优势" subtitle="以高标准防护、合规取证与技术自研驱动服务全方位领先" />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, idx) in coreAdvantages" :key="idx"
            class="bg-white border border-gray-200 rounded-sm p-8 hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-sm bg-blue-50 text-[#206be7] flex items-center justify-center text-xl mb-6">
              <i :class="item.icon"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              {{ item.title }}
            </h3>
            <p class="text-xs text-gray-500 leading-relaxed font-normal m-0">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 数字孪生赋能区块 -->
    <section id="digital" class="py-16 bg-white">
      <div class="wpcom-container">
        <SectionHeader title="瑞核V1.0数字孪生系统" subtitle="自主研发面向核医学科场所的下一代智慧物联态势感知运维系统" />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          <!-- 左侧描述 -->
          <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
            <h3 class="text-2xl font-bold text-gray-900 tracking-tight">
              全方位数字化态势感知与运行预警
            </h3>
            <p>
              传统核医学场所运维往往依赖人工巡检和分散的单机仪表，存在空间盲区多、数据滞后和事故预警不足等痛点。贝瑞医疗打造“瑞核V1.0数字孪生运维平台”，实现物理场所与数字空间实时映射。
            </p>
            <p>
              平台实时采集场所各测点的剂量率、通风柜面风速、室内外负压差、衰变池液位等核心安全参数，一旦发现异常立即触发声光及短信多级报警，全天候守护医护与公众安全。
            </p>
            <div class="pt-2">
              <NuxtLink to="/contact" class="wpcom-btn btn-primary">
                预约数字孪生系统演示 <i class="fa-solid fa-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>

          <!-- 右侧特性列表 -->
          <div class="space-y-3">
            <div v-for="(feat, idx) in digitalTwinFeatures" :key="idx"
              class="bg-gray-50 border border-gray-200 rounded-sm p-4 hover:border-[#206be7] transition">
              <div class="flex items-start gap-3">
                <div
                  class="w-7 h-7 rounded-full bg-[#206be7] text-white flex items-center justify-center text-xs shrink-0 font-bold">
                  {{ idx + 1 }}
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-gray-900 mb-1">{{ feat.title }}</h4>
                  <p class="text-xs text-gray-500 leading-relaxed m-0">{{ feat.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
