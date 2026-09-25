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
  <!-- 核医学发展的核心驱动力区块 -->
  <section class="py-12 bg-gray-50/70 border-t border-b border-gray-200/80 mb-16 p-8 rounded-sm">
    <SectionHeader :title="header.title" :subtitle="header.subtitle" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="d in items"
        :key="d.title"
        class="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#206be7] hover:shadow-md transition text-center"
      >
        <div
          class="w-12 h-12 rounded-full bg-blue-50 text-[#206be7] flex items-center justify-center text-xl mx-auto mb-4"
        >
          <i :class="d.icon"></i>
        </div>
        <h4 class="text-sm font-semibold text-gray-900 mb-2">{{ d.title }}</h4>
        <p class="text-xs text-gray-500 leading-relaxed">{{ d.desc }}</p>
      </div>
    </div>
  </section>
</template>
