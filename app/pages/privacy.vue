<script setup lang="ts">
import { privacyData } from "~/data/privacy";
import { parseToc } from "~/composables/useToc";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/privacy");

useSeoMeta({
  title: `${privacyData.title} - 贝瑞医疗`,
  description: privacyData.summary,
  ogTitle: `${privacyData.title} - 贝瑞医疗`,
  ogDescription: privacyData.summary,
  ogUrl: `${SITE_URL}/privacy`,
});

// 从富文本 HTML 正文中自动解析侧边目录导航
const menuItems = computed(() => parseToc(privacyData.content));
</script>

<template>
  <div class="page-privacy">
    <!-- 1. 顶部横幅区块 -->
    <PageBanner
      :title="privacyData.banner.title"
      :description="privacyData.banner.description"
    />

    <!-- 2. 面包屑导航区块 -->
    <BreadcrumbBlock :items="[{ label: privacyData.banner.title }]" />


    <div class="max-w-[1200px] mx-auto px-5 mb-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- 2. 侧边目录导航区块（基于正文标题自动解析） -->
        <div v-if="menuItems.length > 0" class="lg:col-span-3">
          <TocNavBlock :items="menuItems" />
        </div>

        <!-- 3. 主体正文区块 -->
        <main :class="menuItems.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'">
          <p v-if="privacyData.date" class="text-xs text-gray-400 mb-4">更新日期：{{ privacyData.date }}</p>
          <ArticleContentBlock
            :summary="privacyData.summary"
            :content="privacyData.content"
          />
        </main>
      </div>
    </div>
  </div>
</template>

