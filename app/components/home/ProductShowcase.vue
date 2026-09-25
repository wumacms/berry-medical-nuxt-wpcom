<script setup lang="ts">
import { caseList } from "~/data/cases";

const productSliderIndex = ref(0);
const productsPerView = 4;
const totalProducts = computed(() => caseList.length);
const maxProductIndex = computed(() => Math.max(0, totalProducts.value - productsPerView));

const prevProduct = () => {
  productSliderIndex.value = Math.max(0, productSliderIndex.value - 1);
};
const nextProduct = () => {
  productSliderIndex.value = Math.min(maxProductIndex.value, productSliderIndex.value + 1);
};
</script>

<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="wpcom-container">
      <SectionHeader title="产品展示" subtitle="我们的代表性产品与服务案例" />

      <!-- 4列轮播区域 -->
      <div class="relative group/slider">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${productSliderIndex * (100 / productsPerView)}%)` }">
            <div v-for="c in caseList" :key="c.id" class="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3">
              <div
                class="post-item bg-white border border-gray-200 rounded-sm overflow-hidden group hover:border-[#206be7] hover:shadow-xl transition-all duration-300">
                <div class="post-thumb aspect-4/3 overflow-hidden bg-gray-100 relative">
                  <img :src="c.imageUrl" :alt="c.title"
                    class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy" />
                  <div
                    class="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <NuxtLink :to="`/cases/${c.id}`"
                      class="text-xs font-semibold hover:underline flex items-center gap-1.5 text-white">
                      <span>查看项目详情</span>
                      <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </NuxtLink>
                  </div>
                </div>

                <div class="p-4">
                  <h3
                    class="text-sm font-semibold text-gray-900 group-hover:text-[#206be7] transition-colors truncate">
                    <NuxtLink :to="`/cases/${c.id}`">{{ c.title }}</NuxtLink>
                  </h3>
                  <div class="flex items-center gap-2 mt-2 text-[11px] text-gray-500">
                    <span class="text-[#206be7] bg-blue-50 px-1.5 py-0.5 rounded-xs">
                      {{ c.categoryLabel }}
                    </span>
                    <span class="truncate">{{ c.tags.join(" · ") }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 轮播左右切换控制 -->
        <button type="button"
          class="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 text-gray-700 hover:text-white hover:bg-[#206be7] flex items-center justify-center transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer z-10"
          :disabled="productSliderIndex === 0" aria-label="前一组产品" @click="prevProduct">
          <i class="fa-solid fa-chevron-left text-sm"></i>
        </button>
        <button type="button"
          class="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 text-gray-700 hover:text-white hover:bg-[#206be7] flex items-center justify-center transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer z-10"
          :disabled="productSliderIndex >= maxProductIndex" aria-label="后一组产品" @click="nextProduct">
          <i class="fa-solid fa-chevron-right text-sm"></i>
        </button>
      </div>

      <div class="text-center mt-10">
        <NuxtLink to="/cases" class="wpcom-btn btn-dark">
          查看更多产品案例 <i class="fa-solid fa-arrow-right"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
