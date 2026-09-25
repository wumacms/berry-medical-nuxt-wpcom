<script setup lang="ts">
import { useAsset } from "~/composables/useAsset";

const { withBase } = useAsset();

defineProps<{
  wechat: {
    qrImage: string;
    title: string;
    description: string;
  };
  accordions: {
    icon: string;
    title: string;
    content: string;
    desc: string;
  }[];
}>();

const activeAccordion = ref<number | null>(0);
const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};
</script>

<template>
  <!-- 联系信息区块：微信二维码卡片 + 手风琴信息列表 -->
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
    <!-- 左侧微信二维码 (col-md-4) -->
    <div class="md:col-span-4 bg-white border border-gray-200 rounded-sm p-6 text-center shadow-xs">
      <div
        class="w-48 h-48 mx-auto bg-gray-50 border border-gray-100 rounded-sm overflow-hidden p-2 flex items-center justify-center"
      >
        <img
          :src="withBase(wechat.qrImage)"
          :alt="wechat.title"
          class="w-full h-full object-contain"
        />
      </div>
      <h4 class="text-sm font-semibold text-gray-900 mt-4 mb-1">{{ wechat.title }}</h4>
      <p class="text-xs text-gray-500">{{ wechat.description }}</p>
    </div>

    <!-- 右侧手风琴列表 (col-md-8) -->
    <div class="md:col-span-8 space-y-3">
      <div
        v-for="(item, idx) in accordions"
        :key="idx"
        class="border border-gray-200 rounded-sm overflow-hidden bg-white transition-all"
      >
        <button
          type="button"
          class="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer transition-colors"
          :class="activeAccordion === idx ? 'bg-blue-50/50 text-[#206be7]' : 'text-gray-800 hover:bg-gray-50'"
          @click="toggleAccordion(idx)"
        >
          <div class="flex items-center gap-3">
            <i :class="[item.icon, 'text-sm text-[#206be7]']"></i>
            <span class="text-sm font-semibold">{{ item.title }}</span>
          </div>
          <i
            class="fa-solid fa-angle-down text-xs transition-transform duration-200"
            :class="{ 'rotate-180': activeAccordion === idx }"
          ></i>
        </button>

        <div
          v-show="activeAccordion === idx"
          class="px-5 pb-5 pt-2 text-xs text-gray-600 border-t border-gray-100/80 space-y-1.5 bg-white"
        >
          <p class="font-medium text-gray-900 text-sm m-0">{{ item.content }}</p>
          <p class="text-gray-500 m-0">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
