<script setup lang="ts">
import { heroSlides } from "~/data/home";

const activeSlide = ref(0);
const slides = heroSlides;

let slideTimer: ReturnType<typeof setInterval> | null = null;

const startTimer = () => {
  slideTimer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % slides.length;
  }, 5500);
};

const stopTimer = () => {
  if (slideTimer) {
    clearInterval(slideTimer);
    slideTimer = null;
  }
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});
</script>

<template>
  <section
    class="section modules-swiper relative h-120 sm:h-135 md:h-150 overflow-hidden bg-gray-900 select-none"
    @mouseenter="stopTimer"
    @mouseleave="startTimer"
  >
    <div v-for="(slide, idx) in slides" :key="idx"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="activeSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'">
      <!-- 背景图片 -->
      <img :src="slide.img" :alt="slide.title"
        class="w-full h-full object-cover transform scale-105 transition-transform duration-7000 ease-out"
        :class="{ 'scale-100': activeSlide === idx }" loading="eager" />
      <!-- 遮罩渐变 -->
      <div class="absolute inset-0 bg-linear-to-r from-gray-950/85 via-gray-900/60 to-gray-950/85"></div>

      <!-- 轮播内容 -->
      <div class="absolute inset-0 flex items-center">
        <div class="max-w-[1200px] mx-auto px-5 w-full">
          <div class="max-w-2xl text-left space-y-4 animate-fade-in">
            <span
              class="inline-block px-3 py-1 bg-[#206be7]/30 border border-[#206be7]/60 text-white text-xs font-semibold rounded-xs">
              {{ slide.desc }}
            </span>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {{ slide.title }}
            </h2>
            <p class="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
              {{ slide.subdesc }}
            </p>
            <div class="pt-3">
              <NuxtLink :to="slide.btnLink" class="inline-flex items-center justify-center gap-2 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-[15px] font-medium px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group">
                <span>{{ slide.btnText }}</span>
                <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.75 transition-transform duration-200"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 轮播指示点 -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
      <button v-for="(_, idx) in slides" :key="idx" class="h-2 rounded-full transition-all cursor-pointer"
        :class="activeSlide === idx ? 'w-8 bg-[#206be7]' : 'w-2 bg-white/50 hover:bg-white'"
        :aria-label="`切换到第 ${idx + 1} 张轮播`" @click="activeSlide = idx"></button>
    </div>

    <!-- 轮播左右切换箭头 -->
    <button type="button"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-[#206be7] text-white flex items-center justify-center transition opacity-0 hover:opacity-100 group-hover:opacity-100 cursor-pointer md:flex"
      aria-label="上一张" @click="activeSlide = (activeSlide - 1 + slides.length) % slides.length">
      <i class="fa-solid fa-angle-left text-lg"></i>
    </button>
    <button type="button"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-[#206be7] text-white flex items-center justify-center transition opacity-0 hover:opacity-100 group-hover:opacity-100 cursor-pointer md:flex"
      aria-label="下一张" @click="activeSlide = (activeSlide + 1) % slides.length">
      <i class="fa-solid fa-angle-right text-lg"></i>
    </button>
  </section>
</template>
