<script setup lang="ts">
import type { TocItem } from "~/composables/useToc";

defineProps<{
  items: TocItem[];
  title?: string;
}>();
</script>

<template>
  <aside
    v-if="items.length > 0"
    class="bg-white border border-gray-200 rounded-sm p-5 sticky top-24 shadow-xs"
  >
    <h4 class="text-xs font-semibold uppercase tracking-wider text-[#206be7] mb-3 pb-2 border-b border-gray-100">
      {{ title || '目录导航' }}
    </h4>
    <ul class="space-y-2 text-xs text-gray-600 list-none p-0 m-0">
      <li v-for="item in items" :key="item.id">
        <a :href="`#${item.id}`" class="block py-1 hover:text-[#206be7] transition-colors">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </aside>
</template>
