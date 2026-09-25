<script setup lang="ts">
import { newsList } from "~/data/news";

const route = useRoute();
const articleId = computed(() => Number(route.params.id) || 1);

const currentArticle = computed(() => {
  return newsList.find((item) => item.id === articleId.value) ?? newsList[0]!;
});

const { setCanonical, setArticleSchema, SITE_URL } = useJsonLd();
setCanonical(`/news/${articleId.value}`);

watchEffect(() => {
  if (currentArticle.value) {
    setArticleSchema({
      id: currentArticle.value.id,
      title: currentArticle.value.title,
      summary: currentArticle.value.summary,
      imageUrl: currentArticle.value.imageUrl,
      date: currentArticle.value.date,
      author: currentArticle.value.author,
    });
  }
});

// Prev / Next Article
const currentIndex = computed(() => newsList.findIndex((item) => item.id === currentArticle.value.id));
const prevArticle = computed(() => (currentIndex.value > 0 ? newsList[currentIndex.value - 1] : null));
const nextArticle = computed(() => (currentIndex.value < newsList.length - 1 ? newsList[currentIndex.value + 1] : null));

// Related Articles
const relatedArticles = computed(() => {
  return newsList.filter((item) => item.id !== currentArticle.value.id).slice(0, 5);
});

useSeoMeta({
  title: () => `${currentArticle.value?.title ?? ""} - 贝瑞医疗新闻动态`,
  description: () => currentArticle.value?.summary,
  ogTitle: () => currentArticle.value?.title,
  ogDescription: () => currentArticle.value?.summary,
  ogImage: () => currentArticle.value?.imageUrl,
  ogUrl: () => `${SITE_URL}/news/${articleId.value}`,
});
</script>

<template>
  <div class="page-news-detail">
    <!-- 1. 顶部横幅区块 -->
    <PageBanner
      :title="currentArticle.title"
      :bg-image="currentArticle.imageUrl"
      :breadcrumbs="[
        { label: '新闻动态', to: '/news' },
        { label: currentArticle.categoryLabel, to: `/news?category=${currentArticle.category}` },
        { label: currentArticle.title }
      ]"
      :meta="{
        category: currentArticle.categoryLabel,
        categoryTo: `/news?category=${currentArticle.category}`,
        date: currentArticle.date,
        author: currentArticle.author || '贝瑞医疗编辑部',
        views: currentArticle.readCount || 1200
      }"
    />

    <!-- 2. 主体布局：新闻文章区块 + 侧边栏挂件区块 -->
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex flex-col lg:flex-row gap-9 items-start mb-15">
        <main class="flex-1 min-w-0 w-full">
          <NewsArticleBlock
            :article="currentArticle"
            :prev-article="prevArticle"
            :next-article="nextArticle"
            :related-articles="relatedArticles"
          />
        </main>

        <div class="w-full lg:w-[300px] shrink-0">
          <SidebarWidget :active-path="`/news?category=${currentArticle.category}`" />
        </div>
      </div>
    </div>
  </div>
</template>

