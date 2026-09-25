<script setup lang="ts">
interface Props {
  tag: string;
  tagIcon?: string;
  title: string;
  highlight?: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

withDefaults(defineProps<Props>(), {
  tagIcon: "fa-solid fa-circle-check",
  highlight: "",
  imageUrl: "/images/hero_petct_suite.jpg",
  imageAlt: "贝瑞医疗",
});
</script>

<template>
  <section
    class="relative bg-linear-to-b from-slate-50/80 via-white to-slate-50/40 overflow-hidden border-b border-slate-100">
    <!-- 科技感微光背景光晕 -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -bottom-20 left-10 w-80 h-80 bg-tech-cyan/5 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- 左侧文字 -->
        <div class="space-y-6">
          <div
            class="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide border border-primary/15">
            <i :class="[tagIcon, 'text-[10px]']"></i> {{ tag }}
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            {{ title }}<br v-if="highlight">
            <span v-if="highlight" class="bg-linear-to-r from-primary to-[#F28C38] bg-clip-text text-transparent">{{
              highlight }}</span>
          </h1>
          <p class="text-base text-slate-600 leading-relaxed max-w-lg font-normal">
            {{ description }}
          </p>

          <!-- 槽位：行动号召按钮或锚点导航 -->
          <div v-if="$slots.actions" class="flex flex-wrap items-center gap-3 pt-2">
            <slot name="actions" />
          </div>
        </div>

        <!-- 右侧主视觉 -->
        <div v-if="imageUrl"
          class="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 bg-slate-100 aspect-4/3 flex items-center justify-center border border-slate-200/80 group">
          <img :src="withBase(imageUrl)" :alt="imageAlt"
            class="w-full h-full object-cover group-hover:scale-103 transition duration-700" loading="eager">
        </div>
      </div>
    </div>
  </section>
</template>
