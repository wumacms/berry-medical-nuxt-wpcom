<script setup lang="ts">
import type { CaseItem } from "~/types";

interface Props {
  item: CaseItem;
}

defineProps<Props>();
</script>

<template>
  <div
    class="group rounded-3xl overflow-hidden bg-light shadow-xs hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
    <div class="aspect-4/3 overflow-hidden relative">
      <img :src="withBase(item.imageUrl)" :alt="item.title"
        class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" loading="lazy">
      <span class="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        {{ item.categoryLabel }}
      </span>
    </div>

    <div class="p-6 flex flex-col flex-1 justify-between">
      <div>
        <h3 class="text-lg font-bold text-dark group-hover:text-primary transition-colors duration-200">
          {{ item.title }}
        </h3>
        <p class="text-sm text-dark/60 mt-2 leading-relaxed">
          {{ item.summary }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-200/50">
        <span v-for="tag in item.tags" :key="tag"
          class="text-[11px] font-medium text-dark/60 bg-white px-2.5 py-1 rounded-full border border-gray-100 shadow-2xs">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
