<script setup lang="ts">
import type { SectionHeaderBlockData } from "~/types";

defineProps<{
  header: SectionHeaderBlockData;
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
}>();
</script>

<template>
  <!-- 六大专业能力/核心优势区块 -->
  <section id="features" class="py-16 bg-gray-50/70 border-b border-gray-200/80">
    <div class="max-w-[1200px] mx-auto px-5">
      <SectionHeader :title="header.title" :subtitle="header.subtitle" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="bg-white border border-gray-200 rounded-sm p-8 hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-sm bg-blue-50 text-[#206be7] flex items-center justify-center text-xl mb-6">
            <i :class="item.icon"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">
            {{ item.title }}
          </h3>
          <p class="text-xs text-gray-500 leading-relaxed font-normal m-0">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
