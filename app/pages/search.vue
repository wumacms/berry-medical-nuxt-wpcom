<script setup lang="ts">
import { caseList } from "~/data/cases";
import { newsList } from "~/data/news";

const route = useRoute();
const router = useRouter();

const query = ref((route.query.s as string) || "");
const currentSearchText = ref((route.query.s as string) || "");

// Pagination
const currentPage = ref(1);
const pageSize = 6;

watch(() => route.query.s, (newVal) => {
  query.value = (newVal as string) || "";
  currentSearchText.value = (newVal as string) || "";
  currentPage.value = 1;
});

const handleSearch = () => {
  if (query.value.trim()) {
    router.push({
      path: "/search",
      query: { s: query.value.trim() },
    });
  }
};

interface SearchResultItem {
  id: string | number;
  type: "case" | "news";
  title: string;
  categoryLabel: string;
  summary: string;
  imageUrl: string;
  date?: string;
  url: string;
}

// Search across both cases and news
const allResults = computed<SearchResultItem[]>(() => {
  const kw = currentSearchText.value.trim().toLowerCase();
  if (!kw) return [];

  const results: SearchResultItem[] = [];

  // Match Cases
  for (const c of caseList) {
    const matchTitle = c.title.toLowerCase().includes(kw);
    const matchSummary = c.summary.toLowerCase().includes(kw);
    const matchTags = c.tags.some((t) => t.toLowerCase().includes(kw));
    const matchCategory = c.categoryLabel.toLowerCase().includes(kw);

    if (matchTitle || matchSummary || matchTags || matchCategory) {
      results.push({
        id: `case-${c.id}`,
        type: "case",
        title: c.title,
        categoryLabel: `产品案例 · ${c.categoryLabel}`,
        summary: c.summary,
        imageUrl: c.imageUrl,
        url: `/cases/${c.id}`,
      });
    }
  }

  // Match News
  for (const n of newsList) {
    const matchTitle = n.title.toLowerCase().includes(kw);
    const matchSummary = n.summary.toLowerCase().includes(kw);
    const matchCategory = n.categoryLabel.toLowerCase().includes(kw);
    const matchContent = (n.content || "").toLowerCase().includes(kw);

    if (matchTitle || matchSummary || matchCategory || matchContent) {
      results.push({
        id: `news-${n.id}`,
        type: "news",
        title: n.title,
        categoryLabel: `新闻资讯 · ${n.categoryLabel}`,
        summary: n.summary,
        imageUrl: n.imageUrl,
        date: n.date,
        url: `/news/${n.id}`,
      });
    }
  }

  return results;
});

// Pagination
const totalPages = computed(() => Math.ceil(allResults.value.length / pageSize) || 1);

const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return allResults.value.slice(start, start + pageSize);
});

// HTML entity escaping to prevent XSS
const escapeHtml = (str: string) =>
  str.replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[m]!));

// Regex special character escaping to prevent ReDoS
const escapeRegExp = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Highlight keywords helper (XSS-safe)
const highlightKeyword = (text: string) => {
  const kw = currentSearchText.value.trim();
  if (!kw) return escapeHtml(text);
  const safeText = escapeHtml(text);
  const safeKw = escapeRegExp(escapeHtml(kw));
  const regex = new RegExp(`(${safeKw})`, "gi");
  return safeText.replace(regex, `<mark class="bg-yellow-200 text-gray-900 rounded-xs px-0.5">$1</mark>`);
};

const { setCanonical } = useJsonLd();
setCanonical("/search");

useSeoMeta({
  title: () => currentSearchText.value ? `关于「${currentSearchText.value}」的搜索结果 - 贝瑞医疗` : "全站搜索 - 贝瑞医疗",
  description: "贝瑞医疗全站内容搜索，查找核医学场所建设产品、实施案例与行业动态。",
});
</script>

<template>
  <div class="page-search-results">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner :title="currentSearchText ? `搜索结果: ${currentSearchText}` : '全站内容搜索'"
      :description="currentSearchText ? `为您找到关于「${currentSearchText}」的共 ${allResults.length} 条相关结果` : '输入关键词快速查找核医学场所建设方案、施工案例与行业新闻'"
      bg-image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
      :breadcrumbs="[
        { label: '搜索结果' }
      ]" />

    <div class="wpcom-container">
      <div class="wpcom-layout-wrap">
        <main class="wpcom-main">
          <!-- 搜索输入框工具栏 -->
          <div class="bg-gray-50/70 border border-gray-200 rounded-sm p-4 sm:p-5 mb-8">
            <form @submit.prevent="handleSearch" class="flex items-center gap-2">
              <input v-model="query" type="text" placeholder="重新输入搜索关键词..."
                class="flex-1 text-xs sm:text-sm bg-white border border-gray-300 rounded-sm px-4 py-2.5 outline-none focus:border-[#206be7] transition" />
              <button type="submit" class="wpcom-btn btn-primary py-2.5 px-5 text-xs sm:text-sm font-medium">
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>搜索</span>
              </button>
            </form>

            <div class="flex items-center gap-2 mt-3 text-xs text-gray-500">
              <span>热门推荐：</span>
              <button type="button" class="hover:text-[#206be7] hover:underline"
                @click="query = '核医学科'; handleSearch()">
                核医学科
              </button>
              <span>·</span>
              <button type="button" class="hover:text-[#206be7] hover:underline"
                @click="query = '辐射防护'; handleSearch()">
                辐射防护
              </button>
              <span>·</span>
              <button type="button" class="hover:text-[#206be7] hover:underline" @click="query = '衰变池'; handleSearch()">
                衰变池
              </button>
              <span>·</span>
              <button type="button" class="hover:text-[#206be7] hover:underline"
                @click="query = '数字孪生'; handleSearch()">
                数字孪生
              </button>
              <span>·</span>
              <button type="button" class="hover:text-[#206be7] hover:underline" @click="query = 'GMP'; handleSearch()">
                GMP验收
              </button>
            </div>
          </div>

          <!-- 搜索结果列表 (WPCOM .post-loop.post-loop-default) -->
          <div v-if="paginatedResults.length > 0">
            <ul class="post-loop post-loop-default">
              <li v-for="item in paginatedResults" :key="item.id" class="post-item">
                <div class="item-img">
                  <NuxtLink :to="item.url" :title="item.title">
                    <img :src="item.imageUrl" :alt="item.title" loading="lazy" />
                  </NuxtLink>
                </div>
                <div class="item-content">
                  <div>
                    <h2 class="item-title">
                      <NuxtLink :to="item.url" :title="item.title" v-html="highlightKeyword(item.title)"></NuxtLink>
                    </h2>
                    <div class="item-excerpt">
                      <p v-html="highlightKeyword(item.summary)"></p>
                    </div>
                  </div>
                  <div class="item-meta">
                    <span class="text-[#206be7] font-medium bg-blue-50 px-2 py-0.5 rounded-xs">
                      {{ item.categoryLabel }}
                    </span>
                    <span v-if="item.date" class="text-gray-400">
                      {{ item.date }}
                    </span>
                    <NuxtLink :to="item.url"
                      class="ml-auto text-xs text-[#206be7] hover:underline flex items-center gap-1">
                      <span>查看详情</span>
                      <i class="fa-solid fa-angle-right text-[10px]"></i>
                    </NuxtLink>
                  </div>
                </div>
              </li>
            </ul>

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
          </div>

          <!-- 空搜索结果 -->
          <div v-else class="py-20 text-center bg-white border border-gray-200 rounded-sm p-8">
            <div
              class="w-16 h-16 rounded-full bg-blue-50 text-[#206be7] mx-auto flex items-center justify-center text-2xl mb-4">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-2">未找到匹配的结果</h3>
            <p class="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
              很抱歉，没有找到与「{{ currentSearchText }}」相关的内容。建议尝试缩短搜索词或更换其他关键词，也可以直接联系我们获取支持。
            </p>
            <div class="mt-6 flex justify-center gap-4">
              <NuxtLink to="/cases" class="wpcom-btn btn-outline text-xs">
                浏览全部产品与案例
              </NuxtLink>
              <NuxtLink to="/contact" class="wpcom-btn btn-primary text-xs">
                在线咨询客服
              </NuxtLink>
            </div>
          </div>
        </main>

        <!-- 右侧边栏 -->
        <div class="wpcom-sidebar">
          <SidebarWidget />
        </div>
      </div>
    </div>
  </div>
</template>
