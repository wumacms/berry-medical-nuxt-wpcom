<script setup lang="ts">
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
  <div>
    <!-- Top Banner & Breadcrumbs -->
    <PageBanner
      title="产品列表"
      description="专注于核医学场所选址设计、辐射防护施工、衰变池系统与综合合规验收标杆工程展示"
      bg-image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
      :breadcrumbs="[{ label: '产品列表' }]"
    />

    <!-- Main Content Layout -->
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex flex-col lg:flex-row gap-9 items-start mb-15">
        <!-- 左侧主体内容 -->
        <main class="flex-1 min-w-0 w-full">
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

          <!-- 产品列表网格 -->
          <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-none p-0 m-0 mb-10">
            <li
              v-for="item in paginatedCases"
              :key="item.id"
              class="bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 group"
            >
              <div>
                <NuxtLink :to="`/cases/${item.id}`" class="block aspect-3/2 overflow-hidden bg-slate-100" :title="item.title">
                  <img
                    :src="item.imageUrl"
                    :alt="item.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </NuxtLink>
                <h3 class="p-4 m-0 text-sm md:text-[15px] font-medium leading-snug text-center">
                  <NuxtLink
                    :to="`/cases/${item.id}`"
                    :title="item.title"
                    class="text-gray-900 group-hover:text-[#206be7] transition-colors duration-200"
                  >
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

          <!-- 分页栏 -->
          <ul v-if="totalPages > 1" class="flex items-center justify-center gap-1.5 my-8 list-none p-0">
            <li class="inline-flex items-center justify-center min-w-9 h-9 px-3 border border-gray-200 text-xs rounded-xs text-gray-400 bg-gray-50">
              <span>{{ currentPage }} / {{ totalPages }}</span>
            </li>
            <li
              v-for="p in totalPages"
              :key="p"
            >
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
        </main>

        <!-- 右侧边栏 -->
        <div class="w-full lg:w-[300px] shrink-0">
          <SidebarWidget active-path="/cases" />
        </div>
      </div>
    </div>
  </div>
</template>
