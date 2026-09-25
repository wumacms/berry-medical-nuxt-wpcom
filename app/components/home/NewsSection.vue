<script setup lang="ts">
import { newsList, newsCategories } from "~/data/news";

const activeNewsTab = ref("all");
const filteredNews = computed(() => {
  if (activeNewsTab.value === "all") {
    return newsList.slice(0, 8);
  }
  return newsList.filter((item) => item.category === activeNewsTab.value).slice(0, 8);
});
</script>

<template>
  <section class="py-16 md:py-20 bg-gray-50/70 border-t border-gray-200/60">
    <div class="max-w-[1200px] mx-auto px-5">
      <SectionHeader title="新闻动态" subtitle="聚焦核医学科前沿技术与公司最新动态" />

      <!-- 分类切换标签 -->
      <div class="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
        <button v-for="cat in newsCategories" :key="cat.key" type="button"
          class="px-5 py-2 text-xs sm:text-sm rounded-xs border transition-all cursor-pointer" :class="activeNewsTab === cat.key
            ? 'bg-[#206be7] text-white border-[#206be7] font-medium shadow-sm'
            : 'bg-white text-gray-700 border-gray-200 hover:border-[#206be7] hover:text-[#206be7]'
            " @click="activeNewsTab = cat.key">
          {{ cat.label }}
        </button>
      </div>

      <!-- 4列图文列表网格 -->
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0 mb-10">
        <li v-for="news in filteredNews" :key="news.id">
          <div class="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 group">
            <NuxtLink :to="`/news/${news.id}`" class="block aspect-3/2 overflow-hidden bg-slate-100">
              <img :src="news.imageUrl" :alt="news.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </NuxtLink>
            <div class="p-4 flex flex-col flex-1">
              <h3 class="text-sm font-semibold leading-snug m-0 mb-2.5">
                <NuxtLink :to="`/news/${news.id}`" :title="news.title" class="text-gray-900 group-hover:text-[#206be7] transition-colors line-clamp-2">
                  {{ news.title }}
                </NuxtLink>
              </h3>
              <div class="text-xs text-gray-500 leading-relaxed mb-3.5 flex-1 line-clamp-3">
                <p class="m-0">{{ news.summary }}</p>
              </div>
              <div class="flex items-center justify-between text-xs text-gray-400 pt-2.5 border-t border-slate-100 mt-auto">
                <span class="text-[#206be7] bg-blue-50/80 px-2 py-0.5 rounded-xs font-medium">{{ news.categoryLabel }}</span>
                <span class="text-slate-400 text-[11px]">{{ news.date }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="text-center mt-8">
        <NuxtLink to="/news" class="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[#262626] hover:bg-[#206be7] border border-[#262626] hover:border-[#206be7] rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap hover:shadow-[0_4px_12px_rgba(32,107,231,0.24)] group">
          <span>查看更多动态</span>
          <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.75 transition-transform duration-200"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
