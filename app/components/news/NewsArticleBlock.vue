<script setup lang="ts">
import type { NewsItem } from "~/types";

defineProps<{
  article: NewsItem;
  prevArticle?: NewsItem | null;
  nextArticle?: NewsItem | null;
  relatedArticles?: NewsItem[];
}>();
</script>

<template>
  <article class="news-article-block bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-xs">
    <!-- 导语摘要区块 -->
    <div v-if="article.summary" class="bg-blue-50/50 border-l-4 border-[#206be7] p-5 mb-8 rounded-r-sm">
      <p class="text-sm text-gray-700 leading-relaxed font-normal m-0 italic">
        {{ article.summary }}
      </p>
    </div>

    <!-- 正文区域 -->
    <div class="text-[15px] text-gray-700 leading-[1.85] space-y-4" v-html="article.content" />

    <!-- 底部文章标签与翻页 -->
    <div class="mt-10 pt-6 border-t border-gray-200">
      <div v-if="article.tags && article.tags.length > 0" class="flex flex-wrap gap-2 mb-5 items-center">
        <span class="text-xs text-gray-400 mr-2 flex items-center">标签：</span>
        <span v-for="tag in article.tags" :key="tag" class="mr-2">
          <NuxtLink
            :to="`/search?s=${encodeURIComponent(tag)}`"
            class="bg-gray-100 text-gray-600 hover:bg-[#206be7] hover:text-white px-3 py-1 rounded text-xs transition-colors"
          >
            {{ tag }}
          </NuxtLink>
        </span>
      </div>

      <!-- 上一篇 / 下一篇翻页 -->
      <div class="flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-500 pt-4 border-t border-dashed border-gray-200">
        <div>
          <span class="text-gray-400 mr-2">上一篇：</span>
          <NuxtLink v-if="prevArticle" :to="`/news/${prevArticle.id}`" class="text-gray-800 hover:text-[#206be7] transition">
            {{ prevArticle.title }}
          </NuxtLink>
          <span v-else class="text-gray-400">已经是第一篇</span>
        </div>
        <div>
          <span class="text-gray-400 mr-2">下一篇：</span>
          <NuxtLink v-if="nextArticle" :to="`/news/${nextArticle.id}`" class="text-gray-800 hover:text-[#206be7] transition">
            {{ nextArticle.title }}
          </NuxtLink>
          <span v-else class="text-gray-400">已经是最后一篇</span>
        </div>
      </div>
    </div>

    <!-- 相关新闻推荐 -->
    <div v-if="relatedArticles && relatedArticles.length > 0" class="mt-12 pt-8 border-t border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="w-1.5 h-4 bg-[#206be7] rounded-xs inline-block"></span>
        相关新闻与前沿资讯
      </h3>

      <ul class="space-y-3 list-none p-0 m-0">
        <li v-for="rel in relatedArticles" :key="rel.id" class="text-sm">
          <NuxtLink
            :to="`/news/${rel.id}`"
            class="text-gray-700 hover:text-[#206be7] hover:underline flex items-center justify-between gap-4 transition"
          >
            <span class="truncate flex items-center gap-2">
              <i class="fa-solid fa-angle-right text-xs text-gray-400"></i>
              {{ rel.title }}
            </span>
            <span class="text-xs text-gray-400 shrink-0">{{ rel.date }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </article>
</template>
