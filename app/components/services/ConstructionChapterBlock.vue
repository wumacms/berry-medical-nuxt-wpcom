<script setup lang="ts">
import type { ServiceChapter } from "~/types";

defineProps<{
  chapter: ServiceChapter;
}>();
</script>

<template>
  <!-- 篇章二：施工篇区块 -->
  <section id="construction" class="py-16 bg-white border-b border-gray-200/80 scroll-mt-20">
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex items-center gap-4 mb-10 pb-4 border-b border-gray-200">
        <div class="w-12 h-12 rounded-sm bg-[#206be7] text-white flex items-center justify-center text-xl shadow-md">
          <i class="fa-solid fa-helmet-safety"></i>
        </div>
        <div>
          <span class="text-xs font-bold text-[#206be7] tracking-wider uppercase">02 CONSTRUCTION CHAPTER</span>
          <h2 class="text-2xl font-bold text-gray-900 tracking-tight">施工篇：辐射防护施工与环保洁净工程</h2>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div
          v-for="feat in chapter.features"
          :key="feat.title"
          class="bg-gray-50/70 border border-gray-200 rounded-sm p-6 hover:bg-white hover:border-[#206be7] hover:shadow-lg transition"
        >
          <div class="w-10 h-10 rounded-sm bg-blue-50 text-[#206be7] flex items-center justify-center text-lg mb-4">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <h4 class="text-base font-semibold text-gray-900 mb-2">{{ feat.title }}</h4>
          <p class="text-xs text-gray-600 leading-relaxed">{{ feat.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
