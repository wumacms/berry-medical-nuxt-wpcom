<script setup lang="ts">
import { companyContact } from "~/data/navigation";
import { aboutData } from "~/data/about";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/about");

useSeoMeta({
  title: "关于我们 - 贝瑞医疗 · 专注核医学场所建设一站式服务",
  description: "贝瑞医疗科技（郑州）有限公司专注核医学场所建设全生命周期闭环解决方案，汇聚十五年以上行业经验团队，赋能医疗机构高质量建设。",
  ogUrl: `${SITE_URL}/about`,
});
</script>

<template>
  <div class="page-about">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner
      :title="aboutData.banner.title"
      :description="aboutData.banner.description"
      :breadcrumbs="[{ label: aboutData.banner.title }]"
    />

    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex flex-col lg:flex-row gap-9 items-start mb-15">
        <!-- 左侧主体正文 -->
        <main class="flex-1 min-w-0">
          <div class="bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-xs">
            <div class="space-y-6 text-[15px] text-[#333333] leading-[1.85]">
              <p class="text-base text-gray-700 leading-relaxed font-normal">
                <strong class="text-gray-900 font-semibold">{{ companyContact.name }}</strong>
                {{ aboutData.intro.paragraphs[0] }}
              </p>
              <p v-for="(paragraph, index) in aboutData.intro.paragraphs.slice(1)" :key="index">
                {{ paragraph }}
              </p>

              <h2 class="text-[22px] font-semibold text-[#262626] mt-8 mb-4 pl-3 border-l-4 border-[#206be7] leading-snug">
                {{ aboutData.overview.title }}
              </h2>
              <p>
                {{ aboutData.overview.description }}
              </p>

              <figure class="my-6 rounded-sm overflow-hidden border border-gray-100">
                <img :src="aboutData.overview.image.url"
                  :alt="aboutData.overview.image.caption" class="w-full h-auto rounded-sm object-cover" />
                <figcaption class="text-xs text-gray-400 text-center mt-2.5">{{ aboutData.overview.image.caption }}</figcaption>
              </figure>

              <h2 class="text-[22px] font-semibold text-[#262626] mt-8 mb-4 pl-3 border-l-4 border-[#206be7] leading-snug">
                {{ aboutData.advantages.title }}
              </h2>

              <template v-for="item in aboutData.advantages.items" :key="item.number">
                <p><strong class="text-gray-900 font-semibold">{{ item.number }}、{{ item.title }}</strong></p>
                <p>{{ item.description }}</p>
              </template>

              <h2 class="text-[22px] font-semibold text-[#262626] mt-8 mb-4 pl-3 border-l-4 border-[#206be7] leading-snug">
                {{ aboutData.vision.title }}
              </h2>
              <blockquote class="border-l-4 border-[#206be7] bg-slate-50 px-5 py-4 my-6 rounded-r-sm italic text-slate-600 leading-relaxed font-normal">
                {{ aboutData.vision.quote }}
              </blockquote>
              <p>
                {{ aboutData.vision.description }}
              </p>
            </div>

            <!-- 底部咨询横幅 -->
            <div
              class="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/70 p-6 rounded-sm">
              <div>
                <h4 class="text-base font-semibold text-gray-900">{{ aboutData.cta.title }}</h4>
                <p class="text-xs text-gray-500 mt-1">{{ aboutData.cta.description }}</p>
              </div>
              <NuxtLink :to="aboutData.cta.buttonLink" class="inline-flex items-center justify-center gap-2 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-sm font-medium px-6 py-2.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer shrink-0 group">
                <span>{{ aboutData.cta.buttonText }}</span>
                <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.75 transition-transform duration-200"></i>
              </NuxtLink>
            </div>
          </div>
        </main>

        <!-- 右侧边栏 -->
        <div class="w-full lg:w-[300px] shrink-0">
          <SidebarWidget active-path="/about" />
        </div>
      </div>
    </div>
  </div>
</template>
