<script setup lang="ts">
import { aboutPreviewData } from '~/data/home'
</script>

<template>
  <section class="py-16 md:py-20 bg-gray-50/70 border-t border-b border-gray-200/60">
    <div class="max-w-[1200px] mx-auto px-5">
      <SectionHeader title="关于我们" subtitle="专业的核医学场所建设全生命周期服务团队" />

      <div
        class="bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- 左侧图片 -->
        <div class="lg:col-span-6 overflow-hidden rounded-sm aspect-4/3 bg-gray-100 border border-gray-100">
          <img :src="aboutPreviewData.imageUrl"
            alt="贝瑞医疗核医学场所建设工程" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy" />
        </div>

        <!-- 右侧介绍文字 -->
        <div class="lg:col-span-6 space-y-5 text-left">
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
            {{ aboutPreviewData.title }}
          </h3>
          <p v-for="(paragraph, index) in aboutPreviewData.paragraphs" :key="index" class="text-sm text-gray-600 leading-relaxed">
            {{ paragraph }}
          </p>

          <div class="grid grid-cols-3 gap-4 pt-3 border-t border-gray-100">
            <div v-for="(stat, index) in aboutPreviewData.stats" :key="index" class="text-center">
              <span class="block text-2xl font-bold text-[#206be7]">{{ stat.value }}</span>
              <span class="block text-xs text-gray-500 mt-1">{{ stat.label }}</span>
            </div>
          </div>

          <div class="pt-2">
            <NuxtLink :to="aboutPreviewData.btnLink" class="inline-flex items-center justify-center gap-2 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-[15px] font-medium px-8 py-3.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group">
              <span>{{ aboutPreviewData.btnText }}</span>
              <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.75 transition-transform duration-200"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
