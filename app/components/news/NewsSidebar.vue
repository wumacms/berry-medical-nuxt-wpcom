<script setup lang="ts">
import { newsList } from "~/data/news";

const hotArticles = computed(() => {
  return [...newsList].sort((a, b) => (b.readCount || 0) - (a.readCount || 0)).slice(0, 4);
});

const popularTags = [
  "核医学科",
  "辐射防护",
  "环评验收",
  "GMP",
  "数字孪生",
  "设备选型",
  "场地改造",
  "放射性药物",
];

const searchQuery = ref("");
</script>

<template>
  <aside class="space-y-8 lg:sticky lg:top-28">
    <!-- 搜索 -->
    <div class="bg-light rounded-3xl p-6 border border-gray-100">
      <h4 class="text-sm font-bold text-dark mb-4 flex items-center gap-2">
        <i class="fa-solid fa-magnifying-glass text-primary text-xs"></i> 搜索新闻
      </h4>
      <div class="relative">
        <input v-model="searchQuery" type="text" placeholder="输入关键词…"
          class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition">
        <button
          class="absolute right-3 top-1/2 -translate-y-1/2 text-dark/40 hover:text-primary transition cursor-pointer"
          aria-label="搜索">
          <i class="fa-solid fa-arrow-right text-sm"></i>
        </button>
      </div>
    </div>

    <!-- 热门文章 -->
    <div class="bg-light rounded-3xl p-6 border border-gray-100">
      <h4 class="text-sm font-bold text-dark mb-4 flex items-center gap-2">
        <i class="fa-solid fa-fire text-primary text-xs"></i> 热门推荐
      </h4>
      <ul class="space-y-4">
        <li v-for="(article, idx) in hotArticles" :key="article.id">
          <NuxtLink :to="`/news/${article.id}`" class="group flex items-start gap-3">
            <span class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition"
              :class="idx === 0 ? 'bg-primary text-white' : 'bg-primary/10 text-primary'">
              {{ idx + 1 }}
            </span>
            <div>
              <p class="text-sm font-medium text-dark leading-snug group-hover:text-primary transition line-clamp-2">
                {{ article.title }}
              </p>
              <p class="text-[11px] text-dark/40 mt-1">
                {{ article.date }} · {{ article.readCount }} 次阅读
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- 标签云 -->
    <div class="bg-light rounded-3xl p-6 border border-gray-100">
      <h4 class="text-sm font-bold text-dark mb-4 flex items-center gap-2">
        <i class="fa-solid fa-tags text-primary text-xs"></i> 热门标签
      </h4>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in popularTags" :key="tag"
          class="bg-white text-dark/60 text-xs px-3 py-1.5 rounded-full border border-gray-200 hover:border-primary/40 hover:text-primary transition cursor-pointer">
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- 订阅卡片 -->
    <div class="bg-linear-to-br from-primary to-[#d66815] rounded-3xl p-6 text-white shadow-xl">
      <i class="fa-regular fa-envelope-open text-2xl mb-3 opacity-80"></i>
      <h4 class="text-base font-bold mb-1">获取技术咨询</h4>
      <p class="text-xs text-white/80 leading-relaxed mb-4">
        针对新建或改造核医学科提供专业方案指导。
      </p>
      <NuxtLink to="/contact"
        class="bg-white text-primary text-xs font-semibold px-4 py-2.5 rounded-full inline-flex items-center gap-2 hover:bg-gray-50 transition">
        <i class="fa-regular fa-paper-plane"></i> 立即咨询
      </NuxtLink>
    </div>
  </aside>
</template>
