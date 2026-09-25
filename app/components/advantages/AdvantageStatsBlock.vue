<script setup lang="ts">
defineProps<{
  stats: {
    icon?: string;
    number: string;
    label: string;
    desc: string;
  }[];
}>();
</script>

<template>
  <!-- 关键数据卡片区块 (Stats Block) -->
  <section class="py-12 bg-white border-b border-gray-100">
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-gray-50/80 border border-gray-200 rounded-sm p-6 text-center hover:border-[#206be7] hover:shadow-md transition"
        >
          <div class="text-3xl sm:text-4xl font-bold text-[#206be7] mb-2 tracking-tight">
            {{ stat.number }}
          </div>
          <div class="text-sm font-semibold text-gray-900 mb-1">
            {{ stat.label }}
          </div>
          <div class="text-xs text-gray-500">
            {{ stat.desc }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
