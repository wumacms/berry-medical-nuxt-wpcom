<script setup lang="ts">
import type { CtaBlockData } from "~/types/blocks";

defineProps<{
  summary?: string;
  content: string;
  cta?: CtaBlockData;
}>();
</script>

<template>
  <article class="bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-xs">
    <!-- 导语摘要区块（与新闻详情页对齐） -->
    <div v-if="summary" class="bg-blue-50/50 border-l-4 border-[#206be7] p-5 mb-8 rounded-r-sm">
      <p class="text-sm text-gray-700 leading-relaxed font-normal m-0 italic">
        {{ summary }}
      </p>
    </div>

    <!-- 正文区域（富文本 HTML 渲染） -->
    <div class="text-[15px] text-gray-700 leading-[1.85] space-y-4" v-html="content" />

    <!-- 底部咨询横幅 CTA -->
    <div
      v-if="cta"
      class="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/70 p-6 rounded-sm"
    >
      <div>
        <h4 v-if="cta.title" class="text-base font-semibold text-gray-900">{{ cta.title }}</h4>
        <p v-if="cta.description" class="text-xs text-gray-500 mt-1">{{ cta.description }}</p>
      </div>
      <NuxtLink
        :to="cta.buttonLink"
        class="inline-flex items-center justify-center gap-2 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-sm font-medium px-6 py-2.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer shrink-0 group"
      >
        <span>{{ cta.buttonText }}</span>
        <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.75 transition-transform duration-200"></i>
      </NuxtLink>
    </div>
  </article>
</template>
