<script setup lang="ts">
import { advantagesPageData } from "~/data/advantages";

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
    <!-- 1. 顶部横幅区块 (Banner Block) -->
    <PageBanner
      :title="advantagesPageData.bannerBlock.title"
      :description="advantagesPageData.bannerBlock.description"
      :breadcrumbs="[{ label: advantagesPageData.bannerBlock.title }]"
    />

    <!-- 2. 关键数据统计区块 (Stats Block) -->
    <AdvantageStatsBlock :stats="advantagesPageData.statsBlock" />

    <!-- 3. 六大核心优势网格区块 (Core Advantages Block) -->
    <CoreAdvantagesBlock
      :header="advantagesPageData.coreBlock.header"
      :items="advantagesPageData.coreBlock.items"
    />

    <!-- 4. 数字孪生赋能区块 (Digital Twin Block) -->
    <DigitalTwinBlock
      :header="advantagesPageData.digitalTwinBlock.header"
      :heading="advantagesPageData.digitalTwinBlock.heading"
      :paragraphs="advantagesPageData.digitalTwinBlock.paragraphs"
      :features="advantagesPageData.digitalTwinBlock.features"
      :cta="advantagesPageData.digitalTwinBlock.cta"
    />
  </div>
</template>
