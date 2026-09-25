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
    <div class="wpcom-container">
      <SectionHeader title="新闻动态" subtitle="聚焦核医学科前沿技术与公司最新动态" />

      <!-- 分类切换标签 (WPCOM Module Tab) -->
      <div class="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
        <button v-for="cat in newsCategories" :key="cat.key" type="button"
          class="px-5 py-2 text-xs sm:text-sm rounded-xs border transition-all cursor-pointer" :class="activeNewsTab === cat.key
            ? 'bg-[#206be7] text-white border-[#206be7] font-medium shadow-sm'
            : 'bg-white text-gray-700 border-gray-200 hover:border-[#206be7] hover:text-[#206be7]'
            " @click="activeNewsTab = cat.key">
          {{ cat.label }}
        </button>
      </div>

      <!-- 4列图文列表网格 (.post-loop.post-loop-image-news.cols-4) -->
      <ul class="post-loop post-loop-image-news cols-4">
        <li v-for="news in filteredNews" :key="news.id" class="post-item">
          <div class="post-item-inner">
            <NuxtLink :to="`/news/${news.id}`" class="post-thumb">
              <img :src="news.imageUrl" :alt="news.title" loading="lazy" />
            </NuxtLink>
            <div class="post-body">
              <h3 class="item-title">
                <NuxtLink :to="`/news/${news.id}`" :title="news.title">{{ news.title }}</NuxtLink>
              </h3>
              <div class="item-excerpt">
                <p>{{ news.summary }}</p>
              </div>
              <div class="item-meta">
                <span class="item-cat">{{ news.categoryLabel }}</span>
                <span class="item-date">{{ news.date }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="text-center mt-8">
        <NuxtLink to="/news" class="wpcom-btn btn-dark">
          查看更多动态 <i class="fa-solid fa-arrow-right"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
