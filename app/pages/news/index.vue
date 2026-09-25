<script setup lang="ts">
import { newsList, newsCategories } from "~/data/news";

const route = useRoute();
const router = useRouter();

// Active Category from query or default
const activeCategory = ref((route.query.category as string) || "all");

// View Mode: 'card' (图文列表 cols-3) or 'list' (文章列表 default horizontal row)
const viewMode = ref<"card" | "list">((route.query.view as "card" | "list") || "card");

// Pagination
const currentPage = ref(1);
const pageSize = 6;

watch(() => route.query.category, (newCat) => {
  if (newCat) {
    activeCategory.value = String(newCat);
    // If selecting company, default to list style like demo
    if (newCat === "company") {
      viewMode.value = "list";
    } else if (newCat === "industry") {
      viewMode.value = "card";
    }
  } else {
    activeCategory.value = "all";
  }
  currentPage.value = 1;
}, { immediate: true });

const filteredNews = computed(() => {
  if (activeCategory.value === "all") {
    return newsList;
  }
  return newsList.filter((item) => item.category === activeCategory.value);
});

const totalPages = computed(() => Math.ceil(filteredNews.value.length / pageSize) || 1);

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredNews.value.slice(start, start + pageSize);
});

const currentCategoryLabel = computed(() => {
  const cat = newsCategories.find((c) => c.key === activeCategory.value);
  return cat ? cat.label : "全部动态";
});

const selectCategory = (key: string) => {
  activeCategory.value = key;
  currentPage.value = 1;
  router.push({
    path: "/news",
    query: {
      ...(key !== "all" ? { category: key } : {}),
      view: viewMode.value,
    },
  });
};

const setViewMode = (mode: "card" | "list") => {
  viewMode.value = mode;
  router.push({
    path: "/news",
    query: {
      ...(activeCategory.value !== "all" ? { category: activeCategory.value } : {}),
      view: mode,
    },
  });
};

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/news");

useSeoMeta({
  title: () => `${currentCategoryLabel.value} - 新闻动态 - 贝瑞医疗`,
  description: "汇聚贝瑞医疗最新公司资讯、核医学科场所建设行业动态、技术解析及政策规范解读。",
  ogTitle: () => `${currentCategoryLabel.value} - 新闻动态 - 贝瑞医疗`,
  ogDescription: "汇聚贝瑞医疗最新公司资讯、核医学科场所建设行业动态、技术解析及政策规范解读。",
  ogUrl: `${SITE_URL}/news`,
});
</script>

<template>
  <div class="page-news-list">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner :title="currentCategoryLabel === '全部动态' ? '新闻动态' : currentCategoryLabel"
      description="汇聚核医学科场所建设前沿行业动态、技术分享与企业重要发展纪实"
      bg-image="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop"
      :breadcrumbs="[
        { label: '新闻动态', to: activeCategory !== 'all' ? '/news' : undefined },
        ...(activeCategory !== 'all' ? [{ label: currentCategoryLabel }] : [])
      ]" />

    <div class="wpcom-container">
      <div class="wpcom-layout-wrap">
        <main class="wpcom-main">
          <!-- 顶部工具条：分类选项卡 + 视图切换按钮 (图文 vs 列表) -->
          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
            <!-- 分类选项卡 -->
            <div class="flex items-center gap-2 flex-wrap">
              <button v-for="cat in newsCategories" :key="cat.key" type="button"
                class="px-4 py-1.5 text-xs sm:text-sm rounded-sm border transition-all cursor-pointer" :class="activeCategory === cat.key
                  ? 'bg-[#206be7] text-white border-[#206be7] font-medium shadow-xs'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#206be7] hover:text-[#206be7]'
                  " @click="selectCategory(cat.key)">
                {{ cat.label }}
              </button>
            </div>

            <!-- 视图切换器: 图文卡片 vs 文章列表 -->
            <div class="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
              <span class="text-xs text-gray-400 mr-1 hidden sm:inline">排版风格：</span>
              <button type="button"
                class="w-8 h-8 rounded-sm border flex items-center justify-center text-xs transition cursor-pointer"
                :class="viewMode === 'card'
                  ? 'bg-[#206be7] text-white border-[#206be7]'
                  : 'bg-white text-gray-600 border-gray-200 hover:text-[#206be7]'
                  " title="图文卡片风格 (Demo 图文列表)" @click="setViewMode('card')">
                <i class="fa-solid fa-table-cells-large"></i>
              </button>
              <button type="button"
                class="w-8 h-8 rounded-sm border flex items-center justify-center text-xs transition cursor-pointer"
                :class="viewMode === 'list'
                  ? 'bg-[#206be7] text-white border-[#206be7]'
                  : 'bg-white text-gray-600 border-gray-200 hover:text-[#206be7]'
                  " title="文章列表风格 (Demo 文章列表)" @click="setViewMode('list')">
                <i class="fa-solid fa-list"></i>
              </button>
            </div>
          </div>

          <!-- 风格 1：图文列表 (WPCOM .post-loop.post-loop-image-news.cols-3) -->
          <ul v-if="viewMode === 'card'" class="post-loop post-loop-image-news cols-3">
            <li v-for="news in paginatedNews" :key="news.id" class="post-item">
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
                    <NuxtLink :to="`/news?category=${news.category}`" class="item-cat hover:underline">
                      {{ news.categoryLabel }}
                    </NuxtLink>
                    <span class="item-date">{{ news.date }}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <!-- 风格 2：文章列表 (WPCOM .post-loop.post-loop-default) -->
          <ul v-else class="post-loop post-loop-default">
            <li v-for="news in paginatedNews" :key="news.id" class="post-item">
              <div class="item-img">
                <NuxtLink :to="`/news/${news.id}`" :title="news.title">
                  <img :src="news.imageUrl" :alt="news.title" loading="lazy" />
                </NuxtLink>
              </div>
              <div class="item-content">
                <div>
                  <h2 class="item-title">
                    <NuxtLink :to="`/news/${news.id}`" :title="news.title">{{ news.title }}</NuxtLink>
                  </h2>
                  <div class="item-excerpt">
                    <p>{{ news.summary }}</p>
                  </div>
                </div>
                <div class="item-meta">
                  <NuxtLink :to="`/news?category=${news.category}`" class="hover:underline">
                    {{ news.categoryLabel }}
                  </NuxtLink>
                  <span class="text-gray-300">·</span>
                  <span class="date">{{ news.date }}</span>
                  <span v-if="news.readCount" class="text-gray-400">
                    <i class="fa-regular fa-eye ml-2 text-[10px]"></i> {{ news.readCount }} 次浏览
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

          <!-- 分页器 (WPCOM Pagination) -->
          <ul v-if="totalPages > 1" class="pagination">
            <li class="disabled">
              <span>{{ currentPage }} / {{ totalPages }}</span>
            </li>
            <li v-for="p in totalPages" :key="p" :class="{ active: currentPage === p }">
              <button type="button"
                class="min-w-9 h-9 px-3 border border-gray-200 text-xs rounded-xs hover:border-[#206be7] hover:text-[#206be7] cursor-pointer"
                :class="{ 'bg-[#206be7] text-white border-[#206be7]! font-semibold': currentPage === p }"
                @click="currentPage = p">
                {{ p }}
              </button>
            </li>
            <li v-if="currentPage < totalPages" class="next">
              <button type="button"
                class="h-9 px-3 border border-gray-200 text-xs rounded-xs hover:border-[#206be7] hover:text-[#206be7] cursor-pointer"
                @click="currentPage++">
                下一页 &gt;
              </button>
            </li>
          </ul>
        </main>

        <!-- 右侧边栏 -->
        <div class="wpcom-sidebar">
          <SidebarWidget :active-path="`/news?category=${activeCategory}`" />
        </div>
      </div>
    </div>
  </div>
</template>
