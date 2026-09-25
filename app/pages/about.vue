<script setup lang="ts">
import { aboutPageData } from "~/data/about";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/about");

useSeoMeta({
  title: `${aboutPageData.bannerBlock.title} - 贝瑞医疗 · 专注核医学场所建设一站式服务`,
  description: aboutPageData.articleBlock.summary || aboutPageData.bannerBlock.description,
  ogTitle: `${aboutPageData.bannerBlock.title} - 贝瑞医疗`,
  ogDescription: aboutPageData.articleBlock.summary || aboutPageData.bannerBlock.description,
  ogUrl: `${SITE_URL}/about`,
});
</script>

<template>
  <div class="page-about">
    <!-- 1. 顶部横幅区块 -->
    <PageBanner
      :title="aboutPageData.bannerBlock.title"
      :description="aboutPageData.bannerBlock.description"
      :breadcrumbs="[{ label: aboutPageData.bannerBlock.title }]"
    />

    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex flex-col lg:flex-row gap-9 items-start mb-15">
        <!-- 2. 富文本文章内容区块 -->
        <main class="flex-1 min-w-0 w-full">
          <ArticleContentBlock
            :summary="aboutPageData.articleBlock.summary"
            :content="aboutPageData.articleBlock.content"
            :cta="aboutPageData.ctaBlock"
          />
        </main>

        <!-- 3. 右侧边栏挂件区块 -->
        <div class="w-full lg:w-[300px] shrink-0">
          <SidebarWidget active-path="/about" />
        </div>
      </div>
    </div>
  </div>
</template>

