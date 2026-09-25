<script setup lang="ts">
interface Props {
  icon?: string;
  number: string;
  label: string;
  desc?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="relative bg-white rounded-3xl p-8 text-center shadow-xs border border-slate-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
    <!-- 卡片顶部微光饰条 -->
    <div
      class="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-500" />

    <div v-if="icon"
      class="w-14 h-14 rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/25 transition-all duration-300">
      <i :class="icon"></i>
    </div>
    <span
      class="block text-4xl lg:text-5xl font-extrabold tracking-tight bg-linear-to-r from-primary to-[#F28C38] bg-clip-text text-transparent">
      {{ number }}
    </span>
    <span class="text-sm text-slate-800 tracking-wide mt-3 block font-bold">
      {{ label }}
    </span>
    <p v-if="desc" class="text-xs text-slate-400 mt-2 leading-relaxed">
      {{ desc }}
    </p>
  </div>
</template>
