<script setup lang="ts">
import type { SectionHeaderBlockData, ServiceChapter } from "~/types";

defineProps<{
  header: SectionHeaderBlockData;
  chapters: ServiceChapter[];
}>();
</script>

<template>
  <!-- 服务总览三大篇章导航区块 -->
  <section class="py-12 bg-white border-b border-gray-100">
    <div class="max-w-[1200px] mx-auto px-5">
      <SectionHeader :title="header.title" :subtitle="header.subtitle" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="chap in chapters"
          :key="chap.id"
          class="bg-white border border-gray-200 rounded-sm p-8 hover:border-[#206be7] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div
              class="w-14 h-14 rounded-full bg-blue-50 text-[#206be7] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition duration-300"
            >
              <i :class="chap.icon"></i>
            </div>
            <span class="text-xs font-semibold text-[#206be7] tracking-wider uppercase">{{ chap.code }}</span>
            <h3 class="text-xl font-bold text-gray-900 mt-2 mb-3">
              {{ chap.title }}
            </h3>
            <p class="text-xs text-gray-500 leading-relaxed mb-6 font-normal">
              {{ chap.description }}
            </p>
          </div>
          <a
            :href="`#${chap.id}`"
            class="text-[#206be7] text-xs font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
          >
            <span>查看{{ chap.title }}详情</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
