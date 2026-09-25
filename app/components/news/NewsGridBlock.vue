<script setup lang="ts">
import type { NewsItem } from "~/types";

const props = withDefaults(
  defineProps<{
    categories: { key: string; label: string }[];
    news: NewsItem[];
    initialCategory?: string;
    initialViewMode?: "card" | "list";
    pageSize?: number;
  }>(),
  {
    initialCategory: "all",
    initialViewMode: "card",
    pageSize: 6,
  }
);

const emit = defineEmits<{
  (e: "update:category", key: string): void;
  (e: "update:viewMode", mode: "card" | "list"): void;
}>();

const activeCategory = ref(props.initialCategory);
const viewMode = ref<"card" | "list">(props.initialViewMode);
const currentPage = ref(1);

watch(() => props.initialCategory, (newCat) => {
  if (newCat) {
    activeCategory.value = newCat;
    currentPage.value = 1;
  }
});

watch(() => props.initialViewMode, (newMode) => {
  if (newMode) {
    viewMode.value = newMode;
  }
});

const filteredNews = computed(() => {
  if (activeCategory.value === "all") {
    return props.news;
  }
  return props.news.filter((item) => item.category === activeCategory.value);
});

const totalPages = computed(() => Math.ceil(filteredNews.value.length / props.pageSize) || 1);

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * props.pageSize;
  return filteredNews.value.slice(start, start + props.pageSize);
});

const selectCategory = (key: string) => {
  activeCategory.value = key;
  currentPage.value = 1;
  emit("update:category", key);
};

const setViewMode = (mode: "card" | "list") => {
  viewMode.value = mode;
  emit("update:viewMode", mode);
};
</script>

<template>
  <div class="news-grid-block">
    <!-- 顶部工具条：分类选项卡 + 视图切换按钮 (图文 vs 列表) -->
    <div
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100"
    >
      <!-- 分类选项卡 -->
      <div class="flex items-center gap-2 flex-wrap">
        <button
          v-for="cat in categories"
          :key="cat.key"
          type="button"
          class="px-4 py-1.5 text-xs sm:text-sm rounded-sm border transition-all cursor-pointer"
          :class="activeCategory === cat.key
            ? 'bg-[#206be7] text-white border-[#206be7] font-medium shadow-xs'
            : 'bg-white text-gray-700 border-gray-200 hover:border-[#206be7] hover:text-[#206be7]'
          "
          @click="selectCategory(cat.key)"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- 视图切换器: 图文卡片 vs 文章列表 -->
      <div class="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
        <span class="text-xs text-gray-400 mr-1 hidden sm:inline">排版风格：</span>
        <button
          type="button"
          class="w-8 h-8 rounded-sm border flex items-center justify-center text-xs transition cursor-pointer"
          :class="viewMode === 'card'
            ? 'bg-[#206be7] text-white border-[#206be7]'
            : 'bg-white text-gray-600 border-gray-200 hover:text-[#206be7]'
          "
          title="图文卡片风格"
          @click="setViewMode('card')"
        >
          <i class="fa-solid fa-table-cells-large"></i>
        </button>
        <button
          type="button"
          class="w-8 h-8 rounded-sm border flex items-center justify-center text-xs transition cursor-pointer"
          :class="viewMode === 'list'
            ? 'bg-[#206be7] text-white border-[#206be7]'
            : 'bg-white text-gray-600 border-gray-200 hover:text-[#206be7]'
          "
          title="文章列表风格"
          @click="setViewMode('list')"
        >
          <i class="fa-solid fa-list"></i>
        </button>
      </div>
    </div>

    <!-- 风格 1：图文列表 -->
    <ul v-if="viewMode === 'card'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0 mb-10">
      <li v-for="item in paginatedNews" :key="item.id">
        <div class="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 group">
          <NuxtLink :to="`/news/${item.id}`" class="block aspect-3/2 overflow-hidden bg-slate-100">
            <img :src="item.imageUrl" :alt="item.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </NuxtLink>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-sm md:text-[15px] font-semibold leading-snug m-0 mb-2.5">
              <NuxtLink :to="`/news/${item.id}`" :title="item.title" class="text-gray-900 group-hover:text-[#206be7] transition-colors line-clamp-2">
                {{ item.title }}
              </NuxtLink>
            </h3>
            <div class="text-xs md:text-[13px] text-gray-500 leading-relaxed mb-3.5 flex-1 line-clamp-3">
              <p class="m-0">{{ item.summary }}</p>
            </div>
            <div class="flex items-center justify-between text-xs text-gray-400 pt-2.5 border-t border-slate-100 mt-auto">
              <NuxtLink :to="`/news?category=${item.category}`" class="text-[#206be7] bg-blue-50/80 px-2 py-0.5 rounded-xs font-medium hover:underline">
                {{ item.categoryLabel }}
              </NuxtLink>
              <span>{{ item.date }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- 风格 2：文章横向列表 -->
    <ul v-else class="space-y-0 divide-y divide-gray-200 list-none p-0 m-0 mb-10">
      <li v-for="item in paginatedNews" :key="item.id" class="flex flex-col sm:flex-row gap-6 py-6 first:pt-0 group">
        <div class="w-full sm:w-60 aspect-3/2 overflow-hidden rounded-sm bg-slate-100 shrink-0">
          <NuxtLink :to="`/news/${item.id}`" :title="item.title">
            <img :src="item.imageUrl" :alt="item.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </NuxtLink>
        </div>
        <div class="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <h2 class="text-base md:text-lg font-semibold leading-snug m-0 mb-2.5">
              <NuxtLink :to="`/news/${item.id}`" :title="item.title" class="text-gray-900 group-hover:text-[#206be7] transition-colors">
                {{ item.title }}
              </NuxtLink>
            </h2>
            <div class="text-xs md:text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
              <p class="m-0">{{ item.summary }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3 text-xs text-gray-400">
            <NuxtLink :to="`/news?category=${item.category}`" class="text-[#206be7] font-medium hover:underline">
              {{ item.categoryLabel }}
            </NuxtLink>
            <span class="text-gray-300">·</span>
            <span>{{ item.date }}</span>
            <span v-if="item.readCount" class="text-gray-400">
              <i class="fa-regular fa-eye ml-2 text-[10px]"></i> {{ item.readCount }} 次浏览
            </span>
          </div>
        </div>
      </li>
    </ul>

    <!-- 无数据提示 -->
    <div v-if="paginatedNews.length === 0" class="py-16 text-center text-gray-400 text-sm">
      <i class="fa-regular fa-newspaper text-3xl mb-3 block"></i>
      当前分类下暂无文章动态
    </div>

    <!-- 分页器 -->
    <ul v-if="totalPages > 1" class="flex items-center justify-center gap-1.5 my-8 list-none p-0">
      <li class="inline-flex items-center justify-center min-w-9 h-9 px-3 border border-gray-200 text-xs rounded-xs text-gray-400 bg-gray-50">
        <span>{{ currentPage }} / {{ totalPages }}</span>
      </li>
      <li v-for="p in totalPages" :key="p">
        <button
          type="button"
          class="min-w-9 h-9 px-3 border border-gray-200 text-xs rounded-xs hover:border-[#206be7] hover:text-[#206be7] cursor-pointer transition-colors"
          :class="currentPage === p ? 'bg-[#206be7] text-white !border-[#206be7] font-semibold' : 'bg-white text-gray-700'"
          @click="currentPage = p"
        >
          {{ p }}
        </button>
      </li>
      <li v-if="currentPage < totalPages">
        <button
          type="button"
          class="h-9 px-3 border border-gray-200 text-xs rounded-xs hover:border-[#206be7] hover:text-[#206be7] cursor-pointer transition-colors bg-white text-gray-700"
          @click="currentPage++"
        >
          下一页 &gt;
        </button>
      </li>
    </ul>
  </div>
</template>
