<script setup lang="ts">
import PageBanner from "~/components/common/PageBanner.vue";
import SidebarWidget from "~/components/common/SidebarWidget.vue";
import { caseList, caseCategories } from "~/data/cases";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/cases");

useSeoMeta({
  title: "产品列表 - 贝瑞医疗 · 核医学场所建设与实施案例",
  description: "贝瑞医疗已为全国30余家医疗机构提供核医学场所建设实施服务，覆盖三甲医院、肿瘤专科医院及科研机构。",
  ogTitle: "产品列表 - 贝瑞医疗",
  ogDescription: "贝瑞医疗精选核医学科建设标杆工程与技术方案产品展示。",
  ogUrl: `${SITE_URL}/cases`,
});

const activeCategory = ref("all");
const currentPage = ref(1);
const pageSize = 6;

const filteredCases = computed(() => {
  if (activeCategory.value === "all") {
    return caseList;
  }
  return caseList.filter((item) => item.category === activeCategory.value);
});

const totalPages = computed(() => Math.ceil(filteredCases.value.length / pageSize) || 1);

const paginatedCases = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredCases.value.slice(start, start + pageSize);
});

const selectCategory = (catKey: string) => {
  activeCategory.value = catKey;
  currentPage.value = 1;
};
</script>

<template>
  <div class="page-category-product">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner
      title="产品列表"
      description="专注于核医学场所选址设计、辐射防护施工、衰变池系统与综合合规验收标杆工程展示"
      bg-image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
      :breadcrumbs="[{ label: '产品列表' }]"
    />

    <!-- Main Content Layout (75% Main + 25% Sidebar) -->
    <div class="wpcom-container">
      <div class="wpcom-layout-wrap">
        <!-- 左侧主体内容 -->
        <main class="wpcom-main">
          <!-- 分类筛选器 Tabs -->
          <div class="flex items-center gap-2 mb-8 flex-wrap pb-4 border-b border-gray-100">
            <button
              v-for="cat in caseCategories"
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

          <!-- 产品列表网格 (WPCOM .post-loop.post-loop-product.cols-3) -->
          <ul class="post-loop post-loop-product cols-3">
            <li v-for="item in paginatedCases" :key="item.id" class="post-item">
              <div class="p-item-wrap">
                <NuxtLink :to="`/cases/${item.id}`" class="thumb" :title="item.title">
                  <img
                    :src="item.imageUrl"
                    :alt="item.title"
                    loading="lazy"
                  />
                </NuxtLink>
                <h3 class="title">
                  <NuxtLink :to="`/cases/${item.id}`" :title="item.title">
                    {{ item.title }}
                  </NuxtLink>
                </h3>
              </div>
            </li>
          </ul>

          <!-- 空状态 -->
          <div v-if="paginatedCases.length === 0" class="py-16 text-center text-gray-400 text-sm">
            <i class="fa-regular fa-folder-open text-3xl mb-3 block"></i>
            该分类下暂无产品或案例
          </div>

          <!-- 分页栏 (WPCOM Pagination) -->
          <ul v-if="totalPages > 1" class="pagination">
            <li class="disabled">
              <span>{{ currentPage }} / {{ totalPages }}</span>
            </li>
            <li
              v-for="p in totalPages"
              :key="p"
              :class="{ active: currentPage === p }"
            >
              <button
                type="button"
                class="min-w-9 h-9 px-3 border border-gray-200 text-xs rounded-xs hover:border-[#206be7] hover:text-[#206be7] cursor-pointer"
                :class="{ 'bg-[#206be7] text-white !border-[#206be7] font-semibold': currentPage === p }"
                @click="currentPage = p"
              >
                {{ p }}
              </button>
            </li>
            <li v-if="currentPage < totalPages" class="next">
              <button
                type="button"
                class="h-9 px-3 border border-gray-200 text-xs rounded-xs hover:border-[#206be7] hover:text-[#206be7] cursor-pointer"
                @click="currentPage++"
              >
                下一页 &gt;
              </button>
            </li>
          </ul>
        </main>

        <!-- 右侧边栏 -->
        <div class="wpcom-sidebar">
          <SidebarWidget active-path="/cases" />
        </div>
      </div>
    </div>
  </div>
</template>
