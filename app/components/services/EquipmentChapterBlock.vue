<script setup lang="ts">
import type { CtaBlockData, ServiceChapter } from "~/types";

defineProps<{
  chapter: ServiceChapter;
  cta: CtaBlockData;
}>();
</script>

<template>
  <!-- 篇章三：设备篇与运维区块 -->
  <section id="equipment" class="py-16 bg-gray-50/70 scroll-mt-20">
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex items-center gap-4 mb-10 pb-4 border-b border-gray-200">
        <div class="w-12 h-12 rounded-sm bg-[#206be7] text-white flex items-center justify-center text-xl shadow-md">
          <i class="fa-solid fa-microchip"></i>
        </div>
        <div>
          <span class="text-xs font-bold text-[#206be7] tracking-wider uppercase">03 EQUIPMENT & OPERATION</span>
          <h2 class="text-2xl font-bold text-gray-900 tracking-tight">设备篇：全套专业设备供应与数字孪生运维</h2>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div
          v-for="feat in chapter.features"
          :key="feat.title"
          class="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#206be7] hover:shadow-lg transition"
        >
          <i class="fa-solid fa-cube text-[#206be7] text-lg mb-3 block"></i>
          <h4 class="text-sm font-semibold text-gray-900 mb-2">{{ feat.title }}</h4>
          <p class="text-xs text-gray-500 leading-relaxed">{{ feat.description }}</p>
        </div>
      </div>

      <!-- 底部咨询 CTA -->
      <div class="text-center pt-6">
        <NuxtLink
          :to="cta.buttonLink"
          class="inline-flex items-center justify-center gap-2 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-[15px] font-medium px-8 py-3.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
        >
          <span>{{ cta.buttonText }}</span>
          <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.75 transition-transform duration-200"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
