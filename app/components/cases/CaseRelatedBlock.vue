<script setup lang="ts">
import type { CaseItem } from "~/types";

defineProps<{
  relatedCases: CaseItem[];
  title?: string;
}>();
</script>

<template>
  <div v-if="relatedCases.length > 0" class="case-related-block mt-8 pt-8 border-t border-gray-200">
    <h3 class="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
      <span class="w-1.5 h-4 bg-[#206be7] rounded-xs inline-block"></span>
      {{ title || '相关产品与案例' }}
    </h3>

    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-none p-0 m-0">
      <li
        v-for="rel in relatedCases"
        :key="rel.id"
        class="bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 group"
      >
        <div>
          <NuxtLink :to="`/cases/${rel.id}`" class="block aspect-3/2 overflow-hidden bg-slate-100">
            <img
              :src="rel.imageUrl"
              :alt="rel.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </NuxtLink>
          <h4 class="p-3 m-0 text-xs sm:text-sm font-medium text-center truncate">
            <NuxtLink :to="`/cases/${rel.id}`" class="text-gray-900 group-hover:text-[#206be7] transition-colors">
              {{ rel.title }}
            </NuxtLink>
          </h4>
        </div>
      </li>
    </ul>
  </div>
</template>
