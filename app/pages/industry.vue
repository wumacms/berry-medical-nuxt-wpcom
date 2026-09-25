<script setup lang="ts">
import { industryPageData } from "~/data/industry";

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
    <!-- 1. 顶部横幅区块 (Banner Block) -->
    <PageBanner
      :title="industryPageData.bannerBlock.title"
      :description="industryPageData.bannerBlock.description"
    />

    <!-- 2. 面包屑导航区块 (Breadcrumb Block) -->
    <BreadcrumbBlock :items="[{ label: industryPageData.bannerBlock.title }]" />


    <div class="max-w-[1200px] mx-auto px-5">
      <!-- 2. 全球健康挑战与核医学价值区块 (Challenges Block) -->
      <IndustryChallengesBlock
        :header="industryPageData.challengesBlock.header"
        :items="industryPageData.challengesBlock.items"
      />

      <!-- 3. 核医学发展的核心驱动力区块 (Drivers Block) -->
      <IndustryDriversBlock
        :header="industryPageData.driversBlock.header"
        :items="industryPageData.driversBlock.items"
      />
    </div>
  </div>
</template>
