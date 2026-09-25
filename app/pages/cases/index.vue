<script setup lang="ts">
import { caseList, caseCategories } from "~/data/cases";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/cases");

useSeoMeta({
  title: "产品列表 - 贝瑞医疗 · 核医学场所建设与实施案例",
  description: "贝瑞医疗已为全国30余家医疗机构提供核医学场所建设实施服务，覆盖三甲医院、肿瘤专科医院及科研机构。",
  ogTitle: "产品列表 - 贝瑞医疗",
  ogDescription: "贝瑞医疗精选核医学科建设标杆工程与技术方案产品展示。",
  ogUrl: `${SITE_URL}/cases`,
});
</script>

<template>
  <div class="page-cases">
    <!-- 1. 顶部横幅区块 -->
    <PageBanner
      title="产品列表"
      description="专注于核医学场所选址设计、辐射防护施工、衰变池系统与综合合规验收标杆工程展示"
      :breadcrumbs="[{ label: '产品列表' }]"
    />

    <!-- 2. 主体布局：产品网格区块 + 侧边栏挂件区块 -->
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex flex-col lg:flex-row gap-9 items-start mb-15">
        <main class="flex-1 min-w-0 w-full">
          <CaseGridBlock
            :categories="caseCategories"
            :cases="caseList"
          />
        </main>

        <div class="w-full lg:w-[300px] shrink-0">
          <SidebarWidget active-path="/cases" />
        </div>
      </div>
    </div>
  </div>
</template>

