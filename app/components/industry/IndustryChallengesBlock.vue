<script setup lang="ts">
import type { SectionHeaderBlockData } from "~/types";

defineProps<{
  header: SectionHeaderBlockData;
  items: {
    icon: string;
    title: string;
    desc: string;
  }[];
}>();
</script>

<template>
  <!-- 全球健康挑战与核医学价值区块 -->
  <section class="py-12 bg-white">
    <SectionHeader :title="header.title" :subtitle="header.subtitle" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div
        v-for="item in items"
        :key="item.title"
        class="bg-gray-50/70 border border-gray-200 rounded-sm p-8 hover:border-[#206be7] hover:shadow-lg transition"
      >
        <div class="w-12 h-12 rounded-sm bg-blue-50 text-[#206be7] flex items-center justify-center text-xl mb-4">
          <i :class="item.icon"></i>
        </div>
        <h3 class="text-base font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
        <p class="text-xs text-gray-500 leading-relaxed">{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>
