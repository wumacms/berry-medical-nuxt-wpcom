<script setup lang="ts">
import type { CaseItem } from "~/types";

const props = defineProps<{
  caseItem: CaseItem;
  galleryImages: string[];
}>();

const selectedImgIndex = ref(0);
</script>

<template>
  <div class="case-preview-block flex flex-col lg:flex-row gap-10 bg-white p-6 sm:p-8 border border-gray-200 rounded-sm mb-9">
    <!-- 左侧大图 + 缩略图轮播切换 -->
    <div class="w-full lg:w-[480px] shrink-0">
      <div class="aspect-4/3 overflow-hidden border border-gray-200 rounded-sm bg-slate-50 cursor-zoom-in">
        <img
          :src="galleryImages[selectedImgIndex] || caseItem.imageUrl"
          :alt="caseItem.title"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <!-- 缩略图切换行 -->
      <div class="flex gap-2.5 mt-3.5 overflow-x-auto pb-1">
        <div
          v-for="(img, idx) in galleryImages"
          :key="idx"
          class="w-[76px] aspect-square border-2 rounded overflow-hidden cursor-pointer transition-all duration-200 shrink-0"
          :class="selectedImgIndex === idx ? 'border-[#206be7] opacity-100' : 'border-gray-200 opacity-60 hover:opacity-100'"
          @click="selectedImgIndex = idx"
        >
          <img :src="img" :alt="`${caseItem.title} 缩略图 ${idx + 1}`" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- 右侧关键参数与属性信息 -->
    <div class="flex-1 flex flex-col">
      <h2 class="text-xl sm:text-[22px] font-semibold text-gray-900 mb-4 leading-snug m-0">
        {{ caseItem.title }}
      </h2>

      <div class="bg-slate-50 rounded p-4 mb-5 border border-gray-100">
        <div class="text-[13.5px] py-1.5 border-b border-dashed border-gray-200 flex">
          <span class="text-gray-500 w-[90px] shrink-0">项目分类：</span>
          <span class="text-gray-900 font-medium">{{ caseItem.specs?.categoryLabel || `${caseItem.categoryLabel}场所建设` }}</span>
        </div>
        <div class="text-[13.5px] py-1.5 border-b border-dashed border-gray-200 flex">
          <span class="text-gray-500 w-[90px] shrink-0">防护等级：</span>
          <span class="text-gray-900 font-medium">{{ caseItem.specs?.protectionLevel || '甲级/乙级放射性非密封工作场所' }}</span>
        </div>
        <div class="text-[13.5px] py-1.5 border-b border-dashed border-gray-200 flex">
          <span class="text-gray-500 w-[90px] shrink-0">建设周期：</span>
          <span class="text-gray-900 font-medium">{{ caseItem.specs?.duration || '60 - 120 工作日（含验收周期）' }}</span>
        </div>
        <div class="text-[13.5px] py-1.5 flex">
          <span class="text-gray-500 w-[90px] shrink-0">验收支持：</span>
          <span class="text-gray-900 font-medium">{{ caseItem.specs?.acceptance || '放射诊疗许可证 · 辐射安全许可证 · 药监GMP核查' }}</span>
        </div>
      </div>

      <div class="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
        <p class="m-0">{{ caseItem.summary }}</p>
      </div>

      <NuxtLink
        to="/contact"
        class="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-sm font-medium shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer w-fit"
      >
        <i class="fa-regular fa-comment-dots"></i>
        <span>立即在线咨询此方案 / 预约工程师</span>
        <i class="fa-solid fa-arrow-right text-xs"></i>
      </NuxtLink>
    </div>
  </div>
</template>
