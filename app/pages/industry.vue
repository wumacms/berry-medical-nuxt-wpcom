<script setup lang="ts">
import {
  industryChallenges,
  industryDrivers,
  industryPageData,
} from "~/data/industry";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/industry");

useSeoMeta({
  title: "行业背景 - 贝瑞医疗 · 核医学迎来精准医疗新时代",
  description: "全球健康挑战日益凸显，癌症与神经退行性疾病高发。核医学凭借在重大疾病诊疗中的独特优势，成为精准医疗领域的核心力量。",
  ogTitle: "行业背景 - 贝瑞医疗 · 核医学迎来精准医疗新时代",
  ogDescription: "全球健康挑战日益凸显，癌症与神经退行性疾病高发。核医学凭借在重大疾病诊疗中的独特优势，成为精准医疗领域的核心力量。",
  ogUrl: `${SITE_URL}/industry`,
});
</script>

<template>
  <div class="page-industry">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner
      :title="industryPageData.banner.title"
      :description="industryPageData.banner.description"
      :breadcrumbs="[{ label: industryPageData.banner.title }]"
    />

    <div class="max-w-[1200px] mx-auto px-5">
      <!-- 全球健康挑战与核医学价值 -->
      <section class="py-12 bg-white">
        <SectionHeader
          :title="industryPageData.sectionHeaders.challenges.title"
          :subtitle="industryPageData.sectionHeaders.challenges.subtitle"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div v-for="item in industryChallenges" :key="item.title"
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
        <SectionHeader
          :title="industryPageData.sectionHeaders.drivers.title"
          :subtitle="industryPageData.sectionHeaders.drivers.subtitle"
        />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="d in industryDrivers" :key="d.title"
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
