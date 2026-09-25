<script setup lang="ts">
import { serviceFeatures } from "~/data/home";
</script>

<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="max-w-[1200px] mx-auto px-5">
      <SectionHeader title="服务项目" subtitle="我们提供的核医学场所建设全流程服务" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="item in serviceFeatures"
          :key="item.title"
          :to="item.link"
          class="group p-8 bg-white border border-gray-200/90 rounded-sm hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center"
        >
          <div
            class="w-16 h-16 rounded-full bg-blue-50 text-[#206be7] mx-auto flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition-colors duration-300"
          >
            <i :class="item.icon"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#206be7] transition-colors">
            {{ item.title }}
          </h4>
          <div class="text-xs text-gray-500 leading-relaxed">
            <p class="m-0">{{ item.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
