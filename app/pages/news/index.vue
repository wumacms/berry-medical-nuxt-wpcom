<script setup lang="ts">
import { newsList, newsCategories } from "~/data/news";

const route = useRoute();
const router = useRouter();

const activeCategory = computed(() => (route.query.category as string) || "all");
const viewMode = computed<"card" | "list">(() => (route.query.view as "card" | "list") || (route.query.category === "company" ? "list" : "card"));

const currentCategoryLabel = computed(() => {
  const cat = newsCategories.find((c) => c.key === activeCategory.value);
  return cat ? cat.label : "全部动态";
});

const onCategoryChange = (key: string) => {
  const nextMode = key === "company" ? "list" : viewMode.value;
  router.push({
    path: "/news",
    query: {
      ...(key !== "all" ? { category: key } : {}),
      view: nextMode,
    },
  });
};

const onViewModeChange = (mode: "card" | "list") => {
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
  <div class="page-news">
    <!-- 1. 顶部横幅区块 -->
    <PageBanner
      :title="currentCategoryLabel === '全部动态' ? '新闻动态' : currentCategoryLabel"
      description="汇聚核医学科场所建设前沿行业动态、技术分享与企业重要发展纪实"
      bg-image="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop"
      :breadcrumbs="[
        { label: '新闻动态', to: activeCategory !== 'all' ? '/news' : undefined },
        ...(activeCategory !== 'all' ? [{ label: currentCategoryLabel }] : [])
      ]"
    />

    <!-- 2. 主体布局：新闻网格/列表区块 + 侧边栏挂件区块 -->
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex flex-col lg:flex-row gap-9 items-start mb-15">
        <main class="flex-1 min-w-0 w-full">
          <NewsGridBlock
            :categories="newsCategories"
            :news="newsList"
            :initial-category="activeCategory"
            :initial-view-mode="viewMode"
            @update:category="onCategoryChange"
            @update:view-mode="onViewModeChange"
          />
        </main>

        <div class="w-full lg:w-[300px] shrink-0">
          <SidebarWidget :active-path="`/news?category=${activeCategory}`" />
        </div>
      </div>
    </div>
  </div>
</template>

