<script setup lang="ts">
import SectionHeader from "~/components/common/SectionHeader.vue";
import { caseList } from "~/data/cases";
import { newsList, newsCategories } from "~/data/news";
import { companyContact } from "~/data/navigation";

const { setOrganizationSchema, setCanonical, SITE_URL } = useJsonLd();
setOrganizationSchema();
setCanonical("/");

useSeoMeta({
  title: "贝瑞医疗 - 核医学场所建设一站式服务商",
  description: "从选址规划、设计施工到环评验收、设备供应及7×24小时运维，贝瑞医疗为您提供核医学场所建设全生命周期闭环解决方案。",
  ogTitle: "贝瑞医疗 - 核医学场所建设一站式服务商",
  ogDescription: "专注核医学场所建设全生命周期闭环解决方案，从选址规划、设计施工到环评验收与运维保障。",
  ogImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=crop",
  ogUrl: `${SITE_URL}/`,
});

// Slider state
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

let slideTimer: any = null;
onMounted(() => {
  slideTimer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % slides.length;
  }, 5500);
});

onUnmounted(() => {
  if (slideTimer) clearInterval(slideTimer);
});

// Product slider index
const productSliderIndex = ref(0);
const productsPerView = 4;
const totalProducts = computed(() => caseList.length);
const maxProductIndex = computed(() => Math.max(0, totalProducts.value - productsPerView));

const prevProduct = () => {
  productSliderIndex.value = Math.max(0, productSliderIndex.value - 1);
};
const nextProduct = () => {
  productSliderIndex.value = Math.min(maxProductIndex.value, productSliderIndex.value + 1);
};

// News Tab state
const activeNewsTab = ref("all");
const filteredNews = computed(() => {
  if (activeNewsTab.value === "all") {
    return newsList.slice(0, 8);
  }
  return newsList.filter((item) => item.category === activeNewsTab.value).slice(0, 8);
});

// Contact Form state
const contactForm = reactive({
  name: "",
  phone: "",
  message: "",
});
const formSubmitted = ref(false);
const submitting = ref(false);

const handleContactSubmit = () => {
  if (!contactForm.name || !contactForm.phone) {
    alert("请填写您的姓名和联系电话");
    return;
  }
  submitting.value = true;
  setTimeout(() => {
    submitting.value = false;
    formSubmitted.value = true;
    contactForm.name = "";
    contactForm.phone = "";
    contactForm.message = "";
    setTimeout(() => {
      formSubmitted.value = false;
    }, 4000);
  }, 600);
};
</script>

<template>
  <div>
    <!-- =========================================================================
         1. 首页焦点大图轮播 (WPCOM modules-swiper)
         ========================================================================= -->
    <section class="section modules-swiper relative h-120 sm:h-135 md:h-150 overflow-hidden bg-gray-900 select-none">
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

    <!-- =========================================================================
         2. 服务项目 (WPCOM modules-feature cols-4)
         ========================================================================= -->
    <section class="py-16 md:py-20 bg-white">
      <div class="wpcom-container">
        <SectionHeader title="服务项目" subtitle="我们提供的核医学场所建设全流程服务" />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 卡片 1 -->
          <NuxtLink to="/services#design"
            class="group p-8 bg-white border border-gray-200/90 rounded-sm hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center">
            <div
              class="w-16 h-16 rounded-full bg-blue-50 text-[#206be7] mx-auto flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition-colors duration-300">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#206be7] transition-colors">
              选址与工艺规划
            </h4>
            <div class="text-xs text-gray-500 leading-relaxed">
              <p>以核医学临床流程与辐射安全为核心，精确划分控制区与监督区，优化人流物流动线。</p>
            </div>
          </NuxtLink>

          <!-- 卡片 2 -->
          <NuxtLink to="/services#construction"
            class="group p-8 bg-white border border-gray-200/90 rounded-sm hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center">
            <div
              class="w-16 h-16 rounded-full bg-blue-50 text-[#206be7] mx-auto flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition-colors duration-300">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#206be7] transition-colors">
              辐射防护与施工
            </h4>
            <div class="text-xs text-gray-500 leading-relaxed">
              <p>高标铅复合屏蔽工程、电动防护铅门、防辐射铅玻璃，经济适用兼顾防护合规。</p>
            </div>
          </NuxtLink>

          <!-- 卡片 3 -->
          <NuxtLink to="/services#construction"
            class="group p-8 bg-white border border-gray-200/90 rounded-sm hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center">
            <div
              class="w-16 h-16 rounded-full bg-blue-50 text-[#206be7] mx-auto flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition-colors duration-300">
              <i class="fa-solid fa-water"></i>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#206be7] transition-colors">
              衰变池与洁净工程
            </h4>
            <div class="text-xs text-gray-500 leading-relaxed">
              <p>放射性废水多级衰变池系统、C级洁净背景与百级层流保护，保障环保安全排废。</p>
            </div>
          </NuxtLink>

          <!-- 卡片 4 -->
          <NuxtLink to="/advantages"
            class="group p-8 bg-white border border-gray-200/90 rounded-sm hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center">
            <div
              class="w-16 h-16 rounded-full bg-blue-50 text-[#206be7] mx-auto flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition-colors duration-300">
              <i class="fa-solid fa-network-wired"></i>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#206be7] transition-colors">
              数字孪生运维平台
            </h4>
            <div class="text-xs text-gray-500 leading-relaxed">
              <p>瑞核V1.0态势感知平台，实现设备运转、空间剂量与负压排风一体化智能预警。</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         3. 关于我们 (WPCOM modules-mix mc-shadow-1)
         ========================================================================= -->
    <section class="py-16 md:py-20 bg-gray-50/70 border-t border-b border-gray-200/60">
      <div class="wpcom-container">
        <SectionHeader title="关于我们" subtitle="专业的核医学场所建设全生命周期服务团队" />

        <div
          class="mc-item-wrap bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <!-- 左侧图片 -->
          <div class="lg:col-span-6 overflow-hidden rounded-sm aspect-4/3 bg-gray-100 border border-gray-100">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
              alt="贝瑞医疗核医学场所建设工程" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy" />
          </div>

          <!-- 右侧介绍文字 -->
          <div class="lg:col-span-6 space-y-5 text-left">
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
              专注核医学场所建设一站式服务
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              贝瑞医疗科技（郑州）有限公司是一家专注于核医学工作场所规划设计、辐射防护施工、放射性废水衰变池系统、环评卫评药监综合验收以及数字化孪生运维的高新技术服务企业。
            </p>
            <p class="text-sm text-gray-600 leading-relaxed">
              技术团队核心成员深耕核技术应用与辐射防护领域15年以上，累计参与全国30余家三甲医院及科研药企的核医学场所实施建设，为客户提供从概念规划到合规运营的“交钥匙”闭环工程。
            </p>

            <div class="grid grid-cols-3 gap-4 pt-3 border-t border-gray-100">
              <div class="text-center">
                <span class="block text-2xl font-bold text-[#206be7]">15+</span>
                <span class="block text-xs text-gray-500 mt-1">年专业团队经验</span>
              </div>
              <div class="text-center">
                <span class="block text-2xl font-bold text-[#206be7]">30+</span>
                <span class="block text-xs text-gray-500 mt-1">场所建设实施</span>
              </div>
              <div class="text-center">
                <span class="block text-2xl font-bold text-[#206be7]">100%</span>
                <span class="block text-xs text-gray-500 mt-1">一次性验收达标</span>
              </div>
            </div>

            <div class="pt-2">
              <NuxtLink to="/about" class="wpcom-btn btn-primary btn-lg inline-flex items-center gap-2">
                <span>深入了解贝瑞医疗</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         4. 产品与案例展示轮播 (WPCOM modules-post-slider)
         ========================================================================= -->
    <section class="py-16 md:py-20 bg-white">
      <div class="wpcom-container">
        <SectionHeader title="产品展示" subtitle="我们的代表性产品与服务案例" />

        <!-- 4列轮播区域 -->
        <div class="relative group/slider">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-500 ease-out"
              :style="{ transform: `translateX(-${productSliderIndex * (100 / productsPerView)}%)` }">
              <div v-for="c in caseList" :key="c.id" class="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3">
                <div
                  class="post-item bg-white border border-gray-200 rounded-sm overflow-hidden group hover:border-[#206be7] hover:shadow-xl transition-all duration-300">
                  <div class="post-thumb aspect-4/3 overflow-hidden bg-gray-100 relative">
                    <img :src="c.imageUrl" :alt="c.title"
                      class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      loading="lazy" />
                    <div
                      class="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                      <NuxtLink :to="`/cases/${c.id}`"
                        class="text-xs font-semibold hover:underline flex items-center gap-1.5 text-white">
                        <span>查看项目详情</span>
                        <i class="fa-solid fa-arrow-right text-[10px]"></i>
                      </NuxtLink>
                    </div>
                  </div>

                  <div class="p-4">
                    <h3
                      class="text-sm font-semibold text-gray-900 group-hover:text-[#206be7] transition-colors truncate">
                      <NuxtLink :to="`/cases/${c.id}`">{{ c.title }}</NuxtLink>
                    </h3>
                    <div class="flex items-center gap-2 mt-2 text-[11px] text-gray-500">
                      <span class="text-[#206be7] bg-blue-50 px-1.5 py-0.5 rounded-xs">
                        {{ c.categoryLabel }}
                      </span>
                      <span class="truncate">{{ c.tags.join(" · ") }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 轮播左右切换控制 -->
          <button type="button"
            class="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 text-gray-700 hover:text-white hover:bg-[#206be7] flex items-center justify-center transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer z-10"
            :disabled="productSliderIndex === 0" aria-label="前一组产品" @click="prevProduct">
            <i class="fa-solid fa-chevron-left text-sm"></i>
          </button>
          <button type="button"
            class="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 text-gray-700 hover:text-white hover:bg-[#206be7] flex items-center justify-center transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer z-10"
            :disabled="productSliderIndex >= maxProductIndex" aria-label="后一组产品" @click="nextProduct">
            <i class="fa-solid fa-chevron-right text-sm"></i>
          </button>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/cases" class="wpcom-btn btn-dark">
            查看更多产品案例 <i class="fa-solid fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         5. 新闻动态 (WPCOM modules-image-posts cols-4 with tabs)
         ========================================================================= -->
    <section class="py-16 md:py-20 bg-gray-50/70 border-t border-gray-200/60">
      <div class="wpcom-container">
        <SectionHeader title="新闻动态" subtitle="聚焦核医学科前沿技术与公司最新动态" />

        <!-- 分类切换标签 (WPCOM Module Tab) -->
        <div class="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          <button v-for="cat in newsCategories" :key="cat.key" type="button"
            class="px-5 py-2 text-xs sm:text-sm rounded-xs border transition-all cursor-pointer" :class="activeNewsTab === cat.key
              ? 'bg-[#206be7] text-white border-[#206be7] font-medium shadow-sm'
              : 'bg-white text-gray-700 border-gray-200 hover:border-[#206be7] hover:text-[#206be7]'
              " @click="activeNewsTab = cat.key">
            {{ cat.label }}
          </button>
        </div>

        <!-- 4列图文列表网格 (.post-loop.post-loop-image-news.cols-4) -->
        <ul class="post-loop post-loop-image-news cols-4">
          <li v-for="news in filteredNews" :key="news.id" class="post-item">
            <div class="post-item-inner">
              <NuxtLink :to="`/news/${news.id}`" class="post-thumb">
                <img :src="news.imageUrl" :alt="news.title" loading="lazy" />
              </NuxtLink>
              <div class="post-body">
                <h3 class="item-title">
                  <NuxtLink :to="`/news/${news.id}`" :title="news.title">{{ news.title }}</NuxtLink>
                </h3>
                <div class="item-excerpt">
                  <p>{{ news.summary }}</p>
                </div>
                <div class="item-meta">
                  <span class="item-cat">{{ news.categoryLabel }}</span>
                  <span class="item-date">{{ news.date }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="text-center mt-8">
          <NuxtLink to="/news" class="wpcom-btn btn-dark">
            查看更多动态 <i class="fa-solid fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         6. 联系我们 (WPCOM modules-my-module / modules-grid)
         ========================================================================= -->
    <section class="py-16 md:py-20 bg-white border-t border-gray-200">
      <div class="wpcom-container">
        <SectionHeader title="联系我们" subtitle="与我们的核医学技术团队取得联系" />

        <div
          class="max-w-4xl mx-auto bg-white border border-gray-200 rounded-sm shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          <!-- 左侧快捷联络卡片 -->
          <div
            class="md:col-span-5 bg-linear-to-br from-[#162132] to-[#0f172a] text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span class="text-xs uppercase tracking-wider text-[#206be7] font-semibold">GET IN TOUCH</span>
              <h3 class="text-xl font-bold mt-2 mb-6">咨询核医学建设方案</h3>
              <div class="space-y-4 text-xs text-gray-300">
                <div class="flex items-start gap-3">
                  <i class="fa-solid fa-phone text-[#206be7] mt-1 text-sm"></i>
                  <div>
                    <span class="block text-gray-400">服务专线</span>
                    <span class="text-sm font-bold text-white">{{ companyContact.phone }}</span>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fa-regular fa-envelope text-[#206be7] mt-1 text-sm"></i>
                  <div>
                    <span class="block text-gray-400">电子邮箱</span>
                    <span class="text-white">{{ companyContact.email }}</span>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fa-solid fa-location-dot text-[#206be7] mt-1 text-sm"></i>
                  <div>
                    <span class="block text-gray-400">公司地址</span>
                    <span class="text-white leading-relaxed">{{ companyContact.address }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-gray-800 text-[11px] text-gray-400">
              我们将在收到留言后 2 小时内安排专属项目工程师与您深度对接。
            </div>
          </div>

          <!-- 右侧留言表单 (WPCOM Form) -->
          <div class="md:col-span-7 p-8 sm:p-10 bg-white">
            <div v-if="formSubmitted" class="p-6 text-center bg-blue-50 border border-blue-200 rounded-sm space-y-2">
              <i class="fa-solid fa-circle-check text-3xl text-[#206be7]"></i>
              <h4 class="text-base font-semibold text-gray-900">留言提交成功！</h4>
              <p class="text-xs text-gray-600">感谢您的信任，我们的项目总工将在短时间内与您取得电话联系。</p>
            </div>

            <form v-else @submit.prevent="handleContactSubmit" class="space-y-4">
              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1.5">您的名字 *</label>
                <input v-model="contactForm.name" type="text" required placeholder="请填写您的姓名 / 职务"
                  class="w-full text-xs border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition" />
              </div>

              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1.5">联系电话 *</label>
                <input v-model="contactForm.phone" type="tel" required placeholder="请填写您的手机号码"
                  class="w-full text-xs border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition" />
              </div>

              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1.5">留言内容</label>
                <textarea v-model="contactForm.message" rows="4" placeholder="请简要描述您的科室场所建设需求、项目阶段或面积..."
                  class="w-full text-xs border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition resize-none"></textarea>
              </div>

              <button type="submit" class="wpcom-btn btn-primary w-full py-2.5 text-xs font-semibold"
                :disabled="submitting">
                <i v-if="submitting" class="fa-solid fa-spinner fa-spin"></i>
                <span>{{ submitting ? '正在发送...' : '发送留言' }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
