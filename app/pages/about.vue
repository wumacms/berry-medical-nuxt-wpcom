<script setup lang="ts">
import { aboutData } from "~/data/about";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/about");

useSeoMeta({
  title: `${aboutData.banner.title} - 贝瑞医疗 · 专注核医学场所建设一站式服务`,
  description: aboutData.summary || aboutData.banner.description,
  ogTitle: `${aboutData.banner.title} - 贝瑞医疗`,
  ogDescription: aboutData.summary || aboutData.banner.description,
  ogUrl: `${SITE_URL}/about`,
});
</script>

<template>
  <div class="page-about">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner
      :title="aboutData.banner.title"
      :description="aboutData.banner.description"
      :breadcrumbs="[{ label: aboutData.banner.title }]"
    />

    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex flex-col lg:flex-row gap-9 items-start mb-15">
        <!-- 左侧主体正文（富文本文章结构，与新闻详情页保持完全一致） -->
        <main class="flex-1 min-w-0 w-full">
          <article class="bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-xs">
            <!-- 导语摘要区块（与新闻详情页一致） -->
            <div v-if="aboutData.summary" class="bg-blue-50/50 border-l-4 border-[#206be7] p-5 mb-8 rounded-r-sm">
              <p class="text-sm text-gray-700 leading-relaxed font-normal m-0 italic">
                {{ aboutData.summary }}
              </p>
            </div>

            <!-- 正文区域（富文本HTML渲染，与新闻详情页一致） -->
            <div class="text-[15px] text-gray-700 leading-[1.85] space-y-4" v-html="aboutData.content" />

            <!-- 底部咨询横幅 -->
            <div
              v-if="aboutData.cta"
              class="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/70 p-6 rounded-sm"
            >
              <div>
                <h4 class="text-base font-semibold text-gray-900">{{ aboutData.cta.title }}</h4>
                <p class="text-xs text-gray-500 mt-1">{{ aboutData.cta.description }}</p>
              </div>
              <NuxtLink
                :to="aboutData.cta.buttonLink"
                class="inline-flex items-center justify-center gap-2 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-sm font-medium px-6 py-2.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer shrink-0 group"
              >
                <span>{{ aboutData.cta.buttonText }}</span>
                <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.75 transition-transform duration-200"></i>
              </NuxtLink>
            </div>
          </article>
        </main>

        <!-- 右侧边栏 -->
        <div class="w-full lg:w-[300px] shrink-0">
          <SidebarWidget active-path="/about" />
        </div>
      </div>
    </div>
  </div>
</template>
