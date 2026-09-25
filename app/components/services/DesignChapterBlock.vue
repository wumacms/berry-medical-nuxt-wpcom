<script setup lang="ts">
import type { ServiceChapter } from "~/types";

defineProps<{
  chapter: ServiceChapter;
  intro: string;
  principles: string[];
}>();
</script>

<template>
  <!-- 篇章一：设计篇区块 -->
  <section id="design" class="py-16 bg-gray-50/70 border-b border-gray-200/80 scroll-mt-20">
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex items-center gap-4 mb-10 pb-4 border-b border-gray-200">
        <div class="w-12 h-12 rounded-sm bg-[#206be7] text-white flex items-center justify-center text-xl shadow-md">
          <i class="fa-solid fa-drafting-compass"></i>
        </div>
        <div>
          <span class="text-xs font-bold text-[#206be7] tracking-wider uppercase">01 DESIGN CHAPTER</span>
          <h2 class="text-2xl font-bold text-gray-900 tracking-tight">设计篇：科学选址与专业方案深化</h2>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
        <div class="space-y-5 text-sm text-gray-600 leading-relaxed">
          <p>{{ intro }}</p>
          <div class="bg-white rounded-sm p-6 border border-gray-200">
            <h4 class="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <i class="fa-solid fa-circle-check text-[#206be7]"></i>
              布局总体设计原则
            </h4>
            <ul class="space-y-2 text-xs text-gray-600 list-none p-0 m-0">
              <li v-for="(p, idx) in principles" :key="idx" class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#206be7] mt-1.5 shrink-0"></span>
                <span>{{ p }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="feat in chapter.features"
            :key="feat.title"
            class="bg-white border border-gray-200 rounded-sm p-5 hover:border-[#206be7] hover:shadow-md transition"
          >
            <i class="fa-solid fa-check text-[#206be7] text-sm mb-2 block"></i>
            <h4 class="text-sm font-semibold text-gray-900 mb-1.5">{{ feat.title }}</h4>
            <p class="text-xs text-gray-500 leading-relaxed">{{ feat.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
