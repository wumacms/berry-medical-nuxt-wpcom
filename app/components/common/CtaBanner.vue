<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  phone?: string;
}

withDefaults(defineProps<Props>(), {
  title: "期待与您携手“核”作",
  subtitle: "贝瑞医疗为您提供核医学场所选址、设计、防护施工到环评验收的全生命周期闭环服务。",
  btnText: "立即咨询方案",
  btnLink: "/contact",
  phone: "18503878846",
});
</script>

<template>
  <section class="py-20 bg-linear-to-r from-primary to-[#d66815] text-white overflow-hidden relative">
    <!-- 背景光圈装饰 -->
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl mx-auto text-center space-y-6">
        <span
          class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
          <i class="fa-solid fa-handshake-angle text-xs"></i> 携手合作 · 共筑健康
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {{ title }}
        </h2>
        <p class="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <NuxtLink :to="btnLink"
            class="bg-white text-primary font-bold px-8 py-3.5 rounded-full shadow-lg hover:bg-white/95 hover:shadow-xl transition-all duration-300 text-sm flex items-center gap-2">
            <i class="fa-regular fa-comment-dots"></i> {{ btnText }}
          </NuxtLink>
          <a :href="`tel:${phone}`"
            class="bg-transparent border border-white/50 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-sm flex items-center gap-2">
            <i class="fa-solid fa-phone"></i> {{ phone }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
