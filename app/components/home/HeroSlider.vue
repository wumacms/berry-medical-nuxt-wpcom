<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import { heroSlides } from "~/data/home";

const slides = heroSlides;

// 初始化 Embla Carousel，开启无缝循环与 5 秒自动播放
const [emblaRef, emblaApi] = emblaCarouselVue(
  {
    loop: true,
    duration: 30, // 滑动动画持续帧数，提供极佳的手势平滑度
  },
  [
    Autoplay({
      delay: 5000, // 严格 5 秒间隔
      stopOnMouseEnter: true, // 鼠标悬浮自动暂停
      stopOnInteraction: false, // 交互后恢复自动轮播
    }),
  ]
);

const selectedIndex = ref(0);

const onSelect = () => {
  if (!emblaApi.value) return;
  selectedIndex.value = emblaApi.value.selectedScrollSnap();
};

watch(emblaApi, (api) => {
  if (!api) return;
  onSelect();
  api.on("select", onSelect);
  api.on("reInit", onSelect);
});

const scrollPrev = () => {
  emblaApi.value?.scrollPrev();
};

const scrollNext = () => {
  emblaApi.value?.scrollNext();
};

const scrollTo = (index: number) => {
  emblaApi.value?.scrollTo(index);
};
</script>

<template>
  <section
    class="section modules-swiper group relative h-120 sm:h-135 md:h-150 overflow-hidden bg-gray-900 select-none"
  >
    <!-- Embla Viewport 视口容器 -->
    <div ref="emblaRef" class="h-full overflow-hidden">
      <!-- Embla Container 轨道容器 -->
      <div class="flex h-full">
        <!-- Embla Slide 单项 -->
        <div
          v-for="(slide, idx) in slides"
          :key="idx"
          class="flex-[0_0_100%] min-w-0 h-full relative"
        >
          <!-- 背景图片 -->
          <img
            :src="slide.img"
            :alt="slide.title"
            class="w-full h-full object-cover"
            loading="eager"
          />
          <!-- 遮罩渐变 -->
          <div class="absolute inset-0 bg-linear-to-r from-gray-950/85 via-gray-900/60 to-gray-950/85"></div>

          <!-- 轮播图文内容 -->
          <div class="absolute inset-0 flex items-center">
            <div class="max-w-[1200px] mx-auto px-5 w-full">
              <div class="max-w-2xl text-left space-y-4">
                <span
                  class="inline-block px-3 py-1 bg-[#206be7]/30 border border-[#206be7]/60 text-white text-xs font-semibold rounded-xs"
                >
                  {{ slide.desc }}
                </span>
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  {{ slide.title }}
                </h2>
                <p class="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  {{ slide.subdesc }}
                </p>
                <div class="pt-3">
                  <NuxtLink
                    :to="slide.btnLink"
                    class="inline-flex items-center justify-center gap-2 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-[15px] font-medium px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span>{{ slide.btnText }}</span>
                    <i class="fa-solid fa-arrow-right text-xs group-hover/btn:translate-x-0.75 transition-transform duration-200"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 轮播指示点 -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
      <button
        v-for="(_, idx) in slides"
        :key="idx"
        type="button"
        class="h-2 rounded-full transition-all cursor-pointer"
        :class="selectedIndex === idx ? 'w-8 bg-[#206be7]' : 'w-2 bg-white/50 hover:bg-white'"
        :aria-label="`切换到第 ${idx + 1} 张轮播`"
        @click="scrollTo(idx)"
      ></button>
    </div>

    <!-- 轮播左右切换箭头 (悬停时平滑显现) -->
    <button
      type="button"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#206be7] text-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 cursor-pointer backdrop-blur-xs"
      aria-label="上一张"
      @click="scrollPrev"
    >
      <i class="fa-solid fa-angle-left text-lg"></i>
    </button>
    <button
      type="button"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#206be7] text-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 cursor-pointer backdrop-blur-xs"
      aria-label="下一张"
      @click="scrollNext"
    >
      <i class="fa-solid fa-angle-right text-lg"></i>
    </button>
  </section>
</template>
