<script setup lang="ts">
import type { FaqItem } from "~/types";

interface Props {
  items: FaqItem[];
}

defineProps<Props>();

const activeIndex = ref<number | null>(0);

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="space-y-4">
    <div v-for="(item, index) in items" :key="index"
      class="bg-light rounded-2xl border border-gray-100/80 transition-all duration-300 overflow-hidden"
      :class="activeIndex === index ? 'shadow-md border-primary/20 bg-white' : 'hover:border-gray-200'">
      <button
        class="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
        @click="toggle(index)">
        <div class="flex items-start gap-4">
          <div
            class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors"
            :class="activeIndex === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'">
            Q
          </div>
          <h3 class="text-base font-bold text-dark pt-0.5">
            {{ item.question }}
          </h3>
        </div>
        <div class="text-dark/40 text-sm pt-1 shrink-0">
          <i class="fa-solid fa-chevron-down transition-transform duration-300"
            :class="{ 'rotate-180 text-primary': activeIndex === index }"></i>
        </div>
      </button>

      <div v-show="activeIndex === index" class="px-6 pb-6 pt-0 text-sm text-dark/60 leading-relaxed pl-17">
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>
