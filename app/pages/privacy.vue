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
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner
      :title="privacyData.banner.title"
      :description="privacyData.banner.description"
      :breadcrumbs="[{ label: privacyData.banner.title }]"
    />

    <div class="max-w-[1200px] mx-auto px-5 mb-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- 侧边目录（基于富文本正文中的标题自动解析生成） -->
        <aside
          v-if="menuItems.length > 0"
          class="lg:col-span-3 bg-white border border-gray-200 rounded-sm p-5 sticky top-24 shadow-xs"
        >
          <h4 class="text-xs font-semibold uppercase tracking-wider text-[#206be7] mb-3 pb-2 border-b border-gray-100">
            目录导航
          </h4>
          <ul class="space-y-2 text-xs text-gray-600 list-none p-0 m-0">
            <li v-for="item in menuItems" :key="item.id">
              <a :href="`#${item.id}`" class="block py-1 hover:text-[#206be7] transition-colors">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </aside>

        <!-- 正文（富文本文章，与新闻文章/关于我们对齐） -->
        <main
          :class="menuItems.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'"
          class="bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-xs"
        >
          <p v-if="privacyData.date" class="text-xs text-gray-400 mb-6">更新日期：{{ privacyData.date }}</p>

          <!-- 导语摘要区块（与新闻详情页一致） -->
          <div v-if="privacyData.summary" class="bg-blue-50/50 border-l-4 border-[#206be7] p-5 mb-8 rounded-r-sm">
            <p class="text-sm text-gray-700 leading-relaxed font-normal m-0 italic">
              {{ privacyData.summary }}
            </p>
          </div>

          <!-- 富文本正文区域 -->
          <div class="text-[14px] text-gray-600 leading-[1.8] space-y-4" v-html="privacyData.content" />
        </main>
      </div>
    </div>
  </div>
</template>
