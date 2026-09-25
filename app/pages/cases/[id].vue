<script setup lang="ts">
import type { CaseItem } from "~/types";
import { caseList, caseTechSpecs } from "~/data/cases";

const route = useRoute();
const caseId = computed(() => Number(route.params.id) || 1);

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical(`/cases/${caseId.value}`);

// Find current item or default to first
const currentCase = computed<CaseItem>(() => {
  return caseList.find((item) => Number(item.id) === caseId.value) ?? caseList[0]!;
});

// Gallery images: case gallery or main image + supporting medical construction images
const galleryImages = computed(() => {
  if (currentCase.value.galleryImages && currentCase.value.galleryImages.length > 0) {
    return currentCase.value.galleryImages;
  }
  const base = currentCase.value.imageUrl;
  return [
    base,
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  ];
});

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
  <div class="page-case-detail">
    <!-- 1. 案例/产品详情专属头部区块 -->
    <ArticleHeaderBlock
      :title="currentCase.title"
      :bg-image="currentCase.imageUrl"
    />

    <!-- 2. 面包屑导航区块 -->
    <BreadcrumbBlock
      :items="[
        { label: '产品列表', to: '/cases' },
        { label: currentCase.title }
      ]"
    />

    <div class="max-w-[1200px] mx-auto px-5">
      <!-- 3. 产品顶部关键信息与相册预览区块 -->
      <CasePreviewBlock
        :case-item="currentCase"
        :gallery-images="galleryImages"
      />

      <!-- 4. 主体内容：选项卡详情区块 + 相关推荐区块 + 侧边栏挂件区块 -->
      <div class="flex flex-col lg:flex-row gap-9 items-start mb-15">
        <main class="flex-1 min-w-0 w-full space-y-8">
          <CaseDetailTabsBlock
            :case-item="currentCase"
            :gallery-images="galleryImages"
            :tech-specs="caseTechSpecs"
            :prev-case="prevCase"
            :next-case="nextCase"
          />

          <CaseRelatedBlock
            :related-cases="relatedCases"
          />
        </main>

        <div class="w-full lg:w-[300px] shrink-0">
          <SidebarWidget active-path="/cases" />
        </div>
      </div>
    </div>
  </div>
</template>

