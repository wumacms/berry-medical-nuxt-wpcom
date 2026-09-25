<script setup lang="ts">
import type { NewsItem } from "~/types";

interface Props {
  item: NewsItem;
  featured?: boolean;
}

withDefaults(defineProps<Props>(), {
  featured: false,
});
</script>

<template>
  <!-- 置顶/精选大卡片模式 -->
  <article v-if="featured"
    class="group rounded-3xl overflow-hidden bg-light shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div class="grid md:grid-cols-2">
      <div class="aspect-4/3 md:aspect-auto md:h-full overflow-hidden">
        <img :src="withBase(item.imageUrl)" :alt="item.title"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy">
      </div>
      <div class="p-6 sm:p-8 flex flex-col justify-center">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {{ item.categoryLabel }}
          </span>
          <span class="text-xs text-dark/40">
            <i class="fa-regular fa-calendar mr-1"></i>{{ item.date }}
          </span>
        </div>
        <NuxtLink :to="`/news/${item.id}`">
          <h2 class="text-xl sm:text-2xl font-bold text-dark leading-snug group-hover:text-primary transition">
            {{ item.title }}
          </h2>
        </NuxtLink>
        <p class="text-sm text-dark/60 leading-relaxed mt-3 line-clamp-3">
          {{ item.summary }}
        </p>
        <div class="flex items-center gap-2 mt-5">
          <NuxtLink :to="`/news/${item.id}`"
            class="text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            阅读全文 <i class="fa-solid fa-arrow-right text-xs"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>

  <!-- 常规新闻卡片模式 -->
  <article v-else
    class="group rounded-3xl overflow-hidden bg-light shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
    <div class="aspect-16/10 overflow-hidden">
      <img :src="withBase(item.imageUrl)" :alt="item.title"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy">
    </div>
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {{ item.categoryLabel }}
        </span>
        <span class="text-xs text-dark/40">
          <i class="fa-regular fa-calendar mr-1"></i>{{ item.date }}
        </span>
      </div>
      <NuxtLink :to="`/news/${item.id}`">
        <h3 class="text-lg font-bold text-dark leading-snug group-hover:text-primary transition line-clamp-2">
          {{ item.title }}
        </h3>
      </NuxtLink>
      <p class="text-sm text-dark/50 leading-relaxed mt-2 line-clamp-2 flex-1">
        {{ item.summary }}
      </p>
      <NuxtLink :to="`/news/${item.id}`"
        class="text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-4">
        阅读全文 <i class="fa-solid fa-arrow-right text-xs"></i>
      </NuxtLink>
    </div>
  </article>
</template>
