<script setup lang="ts">
defineProps<{
  faqs: {
    q: string;
    a: string;
  }[];
}>();
</script>

<template>
  <!-- 常见问题答疑 FAQ 区块 -->
  <div class="max-w-3xl mx-auto pt-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
      <i class="fa-regular fa-circle-question text-[#206be7]"></i>
      <span>常见问题解答</span>
    </h3>
    <div class="space-y-4">
      <div
        v-for="(faq, idx) in faqs"
        :key="idx"
        class="p-4 bg-white border border-gray-200 rounded-sm"
      >
        <h4 class="text-sm font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
          <span
            class="w-5 h-5 rounded-full bg-blue-100 text-[#206be7] text-[11px] flex items-center justify-center font-bold"
          >
            问
          </span>
          {{ faq.q }}
        </h4>
        <p class="text-xs text-gray-600 leading-relaxed pl-7 m-0">
          {{ faq.a }}
        </p>
      </div>
    </div>
  </div>
</template>
