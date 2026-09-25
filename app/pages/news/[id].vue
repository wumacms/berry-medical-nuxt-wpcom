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
  <div class="page-article-detail">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner :title="currentArticle.title" :bg-image="currentArticle.imageUrl" :breadcrumbs="[
      { label: '新闻动态', to: '/news' },
      { label: currentArticle.categoryLabel, to: `/news?category=${currentArticle.category}` },
      { label: currentArticle.title }
    ]" :meta="{
        category: currentArticle.categoryLabel,
        categoryTo: `/news?category=${currentArticle.category}`,
        date: currentArticle.date,
        author: currentArticle.author || '贝瑞医疗编辑部',
        views: currentArticle.readCount || 1200
      }" />

    <div class="wpcom-container">
      <div class="wpcom-layout-wrap">
        <main class="wpcom-main">
          <article class="bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-xs">
            <!-- 导语摘要区块 -->
            <div class="bg-blue-50/50 border-l-4 border-[#206be7] p-5 mb-8 rounded-r-sm">
              <p class="text-sm text-gray-700 leading-relaxed font-normal m-0 italic">
                {{ currentArticle.summary }}
              </p>
            </div>

            <!-- 正文区域 (.entry-content) -->
            <div class="entry-content" v-html="currentArticle.content"></div>

            <!-- 底部文章标签与翻页 (WPCOM .entry-footer) -->
            <div class="entry-footer">
              <div v-if="currentArticle.tags" class="entry-tag">
                <span class="text-xs text-gray-400 mr-2 flex items-center">标签：</span>
                <span v-for="tag in currentArticle.tags" :key="tag" class="mr-2">
                  <NuxtLink :to="`/search?s=${encodeURIComponent(tag)}`">{{ tag }}</NuxtLink>
                </span>
              </div>

              <!-- 上一篇 / 下一篇翻页 -->
              <div class="entry-page-nav">
                <div>
                  <span class="text-gray-400 mr-2">上一篇：</span>
                  <NuxtLink v-if="prevArticle" :to="`/news/${prevArticle.id}`">{{ prevArticle.title }}</NuxtLink>
                  <span v-else class="text-gray-400">已经是第一篇</span>
                </div>
                <div>
                  <span class="text-gray-400 mr-2">下一篇：</span>
                  <NuxtLink v-if="nextArticle" :to="`/news/${nextArticle.id}`">{{ nextArticle.title }}</NuxtLink>
                  <span v-else class="text-gray-400">已经是最后一篇</span>
                </div>
              </div>
            </div>

            <!-- 相关新闻推荐 (WPCOM .entry-related) -->
            <div class="mt-12 pt-8 border-t border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span class="w-1.5 h-4 bg-[#206be7] rounded-xs inline-block"></span>
                相关新闻与前沿资讯
              </h3>

              <ul class="space-y-3 list-none p-0 m-0">
                <li v-for="rel in relatedArticles" :key="rel.id" class="text-sm">
                  <NuxtLink :to="`/news/${rel.id}`"
                    class="text-gray-700 hover:text-[#206be7] hover:underline flex items-center justify-between gap-4 transition">
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
        </main>

        <!-- 右侧边栏 -->
        <div class="wpcom-sidebar">
          <SidebarWidget :active-path="`/news?category=${currentArticle.category}`" />
        </div>
      </div>
    </div>
  </div>
</template>
