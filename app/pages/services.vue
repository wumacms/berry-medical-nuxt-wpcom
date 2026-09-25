<script setup lang="ts">
import { serviceChapters, layoutPrinciples } from "~/data/services";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/services");

useSeoMeta({
  title: "服务体系 - 贝瑞医疗 · 核医学场所建设整体解决方案",
  description: "从设计到施工，从设备到运维，贝瑞医疗提供设计篇、施工篇、设备篇核医学场所建设全生命周期一站式闭环服务，助力医疗机构合规高效建设。",
  ogTitle: "服务体系 - 贝瑞医疗 · 核医学场所建设整体解决方案",
  ogDescription: "涵盖工艺流程规划、辐射屏蔽测算、衰变池施工、智能化设备集成及环评药监验收的全流程一站式服务。",
  ogUrl: `${SITE_URL}/services`,
});
</script>

<template>
  <div class="page-services">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner
      title="服务体系"
      description="涵盖规划设计、辐射防护施工、衰变池净化工程、设备供应及数字孪生全生命周期闭环服务"
      :breadcrumbs="[{ label: '服务体系' }]"
    />

    <!-- 服务总览三大篇章导航 -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-[1200px] mx-auto px-5">
        <SectionHeader title="三大专业篇章" subtitle="设计、施工、设备三大篇章，构建核医学场所建设完整交付矩阵" />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="chap in serviceChapters" :key="chap.id"
            class="bg-white border border-gray-200 rounded-sm p-8 hover:border-[#206be7] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div
                class="w-14 h-14 rounded-full bg-blue-50 text-[#206be7] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition duration-300">
                <i :class="chap.icon"></i>
              </div>
              <span class="text-xs font-semibold text-[#206be7] tracking-wider uppercase">{{ chap.code }}</span>
              <h3 class="text-xl font-bold text-gray-900 mt-2 mb-3">
                {{ chap.title }}
              </h3>
              <p class="text-xs text-gray-500 leading-relaxed mb-6 font-normal">
                {{ chap.description }}
              </p>
            </div>
            <a :href="`#${chap.id}`"
              class="text-[#206be7] text-xs font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
              <span>查看{{ chap.title }}详情</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 篇章一：设计篇 -->
    <section id="design" class="py-16 bg-gray-50/70 border-b border-gray-200/80 scroll-mt-20">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="flex items-center gap-4 mb-10 pb-4 border-b border-gray-200">
          <div class="w-12 h-12 rounded-sm bg-[#206be7] text-white flex items-center justify-center text-xl shadow-md">
            <i class="fa-solid fa-drafting-compass"></i>
          </div>
          <div>
            <span class="text-xs font-bold text-[#206be7] tracking-wider uppercase">01 DESIGN CHAPTER</span>
            <h2 class="text-2xl font-bold text-gray-900 tracking-tight">设计篇：科学选址与专业方案深化</h2>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
          <div class="space-y-5 text-sm text-gray-600 leading-relaxed">
            <p>
              选址、方案及专项施工图设计：新建、改建项目定制方案，融合功能优化、成本控制与美学设计，严格遵循行业规范，从选址到布局确保辐射防护、制药用药安全及空间利用合理。
            </p>
            <div class="bg-white rounded-sm p-6 border border-gray-200">
              <h4 class="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fa-solid fa-circle-check text-[#206be7]"></i>
                布局总体设计原则
              </h4>
              <ul class="space-y-2 text-xs text-gray-600 list-none p-0 m-0">
                <li v-for="(p, idx) in layoutPrinciples" :key="idx" class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#206be7] mt-1.5 shrink-0"></span>
                  <span>{{ p }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="feat in serviceChapters[0]?.features" :key="feat.title"
              class="bg-white border border-gray-200 rounded-sm p-5 hover:border-[#206be7] hover:shadow-md transition">
              <i class="fa-solid fa-check text-[#206be7] text-sm mb-2 block"></i>
              <h4 class="text-sm font-semibold text-gray-900 mb-1.5">{{ feat.title }}</h4>
              <p class="text-xs text-gray-500 leading-relaxed">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 篇章二：施工篇 -->
    <section id="construction" class="py-16 bg-white border-b border-gray-200/80 scroll-mt-20">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="flex items-center gap-4 mb-10 pb-4 border-b border-gray-200">
          <div class="w-12 h-12 rounded-sm bg-[#206be7] text-white flex items-center justify-center text-xl shadow-md">
            <i class="fa-solid fa-helmet-safety"></i>
          </div>
          <div>
            <span class="text-xs font-bold text-[#206be7] tracking-wider uppercase">02 CONSTRUCTION CHAPTER</span>
            <h2 class="text-2xl font-bold text-gray-900 tracking-tight">施工篇：辐射防护施工与环保洁净工程</h2>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div v-for="feat in serviceChapters[1]?.features" :key="feat.title"
            class="bg-gray-50/70 border border-gray-200 rounded-sm p-6 hover:bg-white hover:border-[#206be7] hover:shadow-lg transition">
            <div class="w-10 h-10 rounded-sm bg-blue-50 text-[#206be7] flex items-center justify-center text-lg mb-4">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h4 class="text-base font-semibold text-gray-900 mb-2">{{ feat.title }}</h4>
            <p class="text-xs text-gray-600 leading-relaxed">{{ feat.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 篇章三：设备篇与运维 -->
    <section id="equipment" class="py-16 bg-gray-50/70 scroll-mt-20">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="flex items-center gap-4 mb-10 pb-4 border-b border-gray-200">
          <div class="w-12 h-12 rounded-sm bg-[#206be7] text-white flex items-center justify-center text-xl shadow-md">
            <i class="fa-solid fa-microchip"></i>
          </div>
          <div>
            <span class="text-xs font-bold text-[#206be7] tracking-wider uppercase">03 EQUIPMENT & OPERATION</span>
            <h2 class="text-2xl font-bold text-gray-900 tracking-tight">设备篇：全套专业设备供应与数字孪生运维</h2>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div v-for="feat in serviceChapters[2]?.features" :key="feat.title"
            class="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#206be7] hover:shadow-lg transition">
            <i class="fa-solid fa-cube text-[#206be7] text-lg mb-3 block"></i>
            <h4 class="text-sm font-semibold text-gray-900 mb-2">{{ feat.title }}</h4>
            <p class="text-xs text-gray-500 leading-relaxed">{{ feat.description }}</p>
          </div>
        </div>

        <div class="text-center pt-6">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-[15px] font-medium px-8 py-3.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group">
            <span>立即预约项目工勘与需求沟通</span>
            <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.75 transition-transform duration-200"></i>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
