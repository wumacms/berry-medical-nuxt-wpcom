<script setup lang="ts">
import type { CaseItem } from "~/types";

defineProps<{
  caseItem: CaseItem;
  galleryImages: string[];
  techSpecs: { category: string; standard: string; indicator: string }[];
  prevCase?: CaseItem | null;
  nextCase?: CaseItem | null;
}>();

const activeTab = ref("intro");
</script>

<template>
  <div class="case-detail-tabs-block bg-white border border-gray-200 rounded-sm p-6 sm:p-8">
    <!-- 详情 Tab 切换 -->
    <div class="flex items-center gap-6 border-b border-gray-200 pb-3 mb-6">
      <button
        type="button"
        class="text-base font-semibold pb-2 border-b-2 transition cursor-pointer"
        :class="activeTab === 'intro' ? 'border-[#206be7] text-[#206be7]' : 'border-transparent text-gray-500 hover:text-gray-900'"
        @click="activeTab = 'intro'"
      >
        项目介绍
      </button>

      <button
        type="button"
        class="text-base font-semibold pb-2 border-b-2 transition cursor-pointer"
        :class="activeTab === 'specs' ? 'border-[#206be7] text-[#206be7]' : 'border-transparent text-gray-500 hover:text-gray-900'"
        @click="activeTab = 'specs'"
      >
        技术参数与建设规范
      </button>

      <button
        type="button"
        class="text-base font-semibold pb-2 border-b-2 transition cursor-pointer"
        :class="activeTab === 'photos' ? 'border-[#206be7] text-[#206be7]' : 'border-transparent text-gray-500 hover:text-gray-900'"
        @click="activeTab = 'photos'"
      >
        现场工程实景
      </button>
    </div>

    <!-- Tab 1: 项目介绍（富文本模式，与新闻详情页一致） -->
    <div v-if="activeTab === 'intro'" class="text-[15px] text-gray-700 leading-relaxed space-y-4">
      <div v-if="caseItem.content" class="space-y-4" v-html="caseItem.content" />
      <template v-else>
        <p class="leading-relaxed">
          {{ caseItem.details || caseItem.summary }}
        </p>
        <figure class="my-6 rounded-sm overflow-hidden">
          <img :src="caseItem.imageUrl" :alt="caseItem.title" class="w-full h-auto rounded-sm" />
          <figcaption class="text-xs text-gray-400 text-center mt-2">{{ caseItem.title }} 实施竣工效果</figcaption>
        </figure>
      </template>
    </div>

    <!-- Tab 2: 技术规格 -->
    <div v-else-if="activeTab === 'specs'" class="text-[15px] text-gray-700 leading-relaxed">
      <h2 class="text-xl font-semibold text-gray-900 mt-2 mb-4 pl-3 border-l-4 border-[#206be7]">
        技术指标与规范执行表
      </h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-xs text-left border border-gray-200 divide-y divide-gray-200">
          <thead class="bg-gray-50 text-gray-700">
            <tr>
              <th class="py-3 px-4 font-semibold">项目类别</th>
              <th class="py-3 px-4 font-semibold">设计与建设执行标准</th>
              <th class="py-3 px-4 font-semibold">贝瑞医疗实施指标</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 text-gray-600">
            <tr v-for="spec in techSpecs" :key="spec.category">
              <td class="py-3 px-4 font-medium text-gray-900">{{ spec.category }}</td>
              <td class="py-3 px-4">{{ spec.standard }}</td>
              <td class="py-3 px-4">{{ spec.indicator }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tab 3: 实景图片 -->
    <div v-else class="text-[15px] text-gray-700 leading-relaxed">
      <h2 class="text-xl font-semibold text-gray-900 mt-2 mb-4 pl-3 border-l-4 border-[#206be7]">
        现场实景相册
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div
          v-for="(img, idx) in galleryImages"
          :key="idx"
          class="rounded-sm overflow-hidden aspect-4/3 bg-gray-100 border border-gray-200"
        >
          <img :src="img" :alt="`实景图 ${idx + 1}`" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- 底部标签与翻页导航 -->
    <div class="mt-10 pt-6 border-t border-gray-200">
      <div v-if="caseItem.tags && caseItem.tags.length > 0" class="flex flex-wrap gap-2 mb-5 items-center">
        <span class="text-xs text-gray-400 mr-2 flex items-center">标签：</span>
        <span v-for="tag in caseItem.tags" :key="tag" class="mr-2">
          <NuxtLink
            to="/cases"
            class="bg-gray-100 text-gray-600 hover:bg-[#206be7] hover:text-white px-3 py-1 rounded text-xs transition-colors"
          >
            {{ tag }}
          </NuxtLink>
        </span>
      </div>

      <div class="flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-500 pt-4 border-t border-dashed border-gray-200">
        <div>
          <span class="text-gray-400 mr-2">上一个：</span>
          <NuxtLink v-if="prevCase" :to="`/cases/${prevCase.id}`" class="text-gray-800 hover:text-[#206be7] transition">
            {{ prevCase.title }}
          </NuxtLink>
          <span v-else class="text-gray-400">已经是第一个</span>
        </div>
        <div>
          <span class="text-gray-400 mr-2">下一个：</span>
          <NuxtLink v-if="nextCase" :to="`/cases/${nextCase.id}`" class="text-gray-800 hover:text-[#206be7] transition">
            {{ nextCase.title }}
          </NuxtLink>
          <span v-else class="text-gray-400">已经是最后一个</span>
        </div>
      </div>
    </div>
  </div>
</template>
