<script setup lang="ts">
import { servicesPageData } from "~/data/services";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/services");

useSeoMeta({
  title: "服务体系 - 贝瑞医疗 · 核医学场所建设整体解决方案",
  description: "从设计到施工，从设备到运维，贝瑞医疗提供设计篇、施工篇、设备篇核医学场所建设全生命周期一站式闭环服务，助力医疗机构合规高效建设。",
  ogTitle: "服务体系 - 贝瑞医疗 · 核医学场所建设整体解决方案",
  ogDescription: "涵盖工艺流程规划、辐射屏蔽测算、衰变池施工、智能化设备集成及环评药监验收的全流程一站式服务。",
  ogUrl: `${SITE_URL}/services`,
});
</script>

<template>
  <div class="page-services">
    <!-- 1. 顶部横幅区块 (Banner Block) -->
    <PageBanner
      :title="servicesPageData.bannerBlock.title"
      :description="servicesPageData.bannerBlock.description"
      :breadcrumbs="[{ label: servicesPageData.bannerBlock.title }]"
    />

    <!-- 2. 服务总览三大篇章导航区块 (Overview Block) -->
    <ServiceOverviewBlock
      :header="servicesPageData.overviewBlock.header"
      :chapters="servicesPageData.overviewBlock.chapters"
    />

    <!-- 3. 篇章一：设计篇区块 (Design Block) -->
    <DesignChapterBlock
      :chapter="servicesPageData.overviewBlock.chapters[0]!"
      :intro="servicesPageData.designBlock.intro"
      :principles="servicesPageData.designBlock.principles"
    />

    <!-- 4. 篇章二：施工篇区块 (Construction Block) -->
    <ConstructionChapterBlock :chapter="servicesPageData.overviewBlock.chapters[1]!" />

    <!-- 5. 篇章三：设备篇与运维区块 (Equipment & CTA Block) -->
    <EquipmentChapterBlock
      :chapter="servicesPageData.overviewBlock.chapters[2]!"
      :cta="servicesPageData.equipmentBlock.cta"
    />
  </div>
</template>
