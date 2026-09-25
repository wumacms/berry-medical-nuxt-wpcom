<script setup lang="ts">
import { DEFAULT_PAGE_BANNER_BG } from "~/data/navigation";

withDefaults(
  defineProps<{
    /** 栏目标题 */
    title: string;
    /** 栏目简介 / 副标题 */
    description?: string;
    /** 背景图片 */
    bgImage?: string;
  }>(),
  {
    description: "",
    bgImage: DEFAULT_PAGE_BANNER_BG,
  }
);
</script>

<template>
  <div class="page-banner-block relative overflow-hidden flex items-center bg-[#162132] h-56 sm:h-60 md:h-64">
    <!-- 纯视觉修饰性背景图：标记 aria-hidden 防止读屏干扰 -->
    <img
      :src="bgImage"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover opacity-25 scale-105 pointer-events-none select-none"
      loading="eager"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-[#111927]/90 via-[#111927]/60 to-[#111927]/90 pointer-events-none" />

    <!-- 横幅主体内容区 -->
    <div class="relative z-10 w-full">
      <div class="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="max-w-3xl">
          <!-- 栏目标题（语义化 h1） -->
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight m-0 leading-tight">
            {{ title }}
          </h1>

          <!-- 栏目描述与标语 -->
          <p
            v-if="description"
            class="mt-2.5 text-sm text-white/75 max-w-2xl font-normal leading-relaxed m-0"
          >
            {{ description }}
          </p>

          <!-- 自定义扩展插槽 -->
          <slot name="extra" />
        </div>

        <!-- 右侧动作按钮插槽 (如快捷操作、返回、分享等) -->
        <div v-if="$slots.actions" class="shrink-0 self-start md:self-auto">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>
