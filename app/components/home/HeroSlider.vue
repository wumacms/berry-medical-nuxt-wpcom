<script setup lang="ts">
const activeSlide = ref(0);
const slides = [
  {
    title: "专业的核医学场所建设全生命周期服务商",
    desc: "专注选址规划 · 辐射防护施工 · 环评卫评验收 · 数字孪生运维",
    subdesc: "致力于为国内各类医疗机构提供高质量核医学场所建设与综合防护工程服务",
    btnText: "了解服务体系",
    btnLink: "/services",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "瑞核V1.0数字孪生态势感知平台",
    desc: "三维微仿真 · 辐射剂量监测 · 负压通风状态 · 设备智能预警",
    subdesc: "运用高精3D空间模拟与IoT物联传感技术，打造可视化的现代智慧核医学科室",
    btnText: "探索数字孪生",
    btnLink: "/advantages",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "放射性药物制备与高标净化场所建设",
    desc: "C级背景局部A级 · 衰变池工程 · GMP取证全流程保障",
    subdesc: "严格遵循国家放射性同位素与射线装置安全标准，助力客户一次性通过官方核查",
    btnText: "立即咨询对接",
    btnLink: "/contact",
    img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1600&auto=format&fit=crop",
  },
];

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
        <div class="wpcom-container w-full">
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
              <NuxtLink :to="slide.btnLink" class="wpcom-btn btn-primary btn-lg inline-flex items-center gap-2">
                <span>{{ slide.btnText }}</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
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
