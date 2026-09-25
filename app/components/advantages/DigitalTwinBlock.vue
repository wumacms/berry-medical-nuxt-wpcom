<script setup lang="ts">
import type { SectionHeaderBlockData } from "~/types";

defineProps<{
  header: SectionHeaderBlockData;
  heading: string;
  paragraphs: string[];
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
  cta: {
    text: string;
    link: string;
  };
}>();
</script>

<template>
  <!-- 数字孪生赋能区块 -->
  <section id="digital" class="py-16 bg-white">
    <div class="max-w-[1200px] mx-auto px-5">
      <SectionHeader :title="header.title" :subtitle="header.subtitle" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
        <!-- 左侧描述 -->
        <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
          <h3 class="text-2xl font-bold text-gray-900 tracking-tight">
            {{ heading }}
          </h3>
          <p v-for="(paragraph, pIdx) in paragraphs" :key="pIdx">
            {{ paragraph }}
          </p>
          <div class="pt-2">
            <NuxtLink
              :to="cta.link"
              class="inline-flex items-center justify-center gap-2 rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white text-sm font-medium px-6 py-2.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <span>{{ cta.text }}</span>
              <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.75 transition-transform duration-200"></i>
            </NuxtLink>
          </div>
        </div>

        <!-- 右侧特性列表 -->
        <div class="space-y-3">
          <div
            v-for="(feat, idx) in features"
            :key="idx"
            class="bg-gray-50 border border-gray-200 rounded-sm p-4 hover:border-[#206be7] transition"
          >
            <div class="flex items-start gap-3">
              <div
                class="w-7 h-7 rounded-full bg-[#206be7] text-white flex items-center justify-center text-xs shrink-0 font-bold"
              >
                {{ idx + 1 }}
              </div>
              <div>
                <h4 class="text-sm font-semibold text-gray-900 mb-1">{{ feat.title }}</h4>
                <p class="text-xs text-gray-500 leading-relaxed m-0">{{ feat.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
