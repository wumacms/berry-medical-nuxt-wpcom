<script setup lang="ts">
import { DEFAULT_PAGE_BANNER_BG } from "~/data/navigation";

const props = withDefaults(
  defineProps<{
    /** 文章标题 */
    title: string;
    /** 发布日期 */
    date?: string;
    /** 作者/发布者 */
    author?: string;
    /** 浏览次数 */
    views?: number | string;
    /** 封面/背景图 */
    bgImage?: string;
  }>(),
  {
    title: "",
    date: "",
    author: "",
    views: undefined,
    bgImage: "",
  }
);

const resolvedBgImage = computed(() => {
  return props.bgImage || DEFAULT_PAGE_BANNER_BG;
});
</script>


<template>
  <header class="article-header-block relative overflow-hidden flex items-center bg-[#162132] min-h-[200px] py-10 sm:py-12 md:py-14">
    <!-- 纯视觉修饰性背景图：aria-hidden 且不干扰读屏 -->
    <img
      :src="resolvedBgImage"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover opacity-25 scale-105 pointer-events-none select-none"
      loading="eager"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-[#111927]/95 via-[#111927]/75 to-[#111927]/95 pointer-events-none" />

    <!-- 主体内容区 -->
    <div class="relative z-10 w-full">
      <div class="max-w-[1200px] mx-auto px-5">
        <!-- 文章大标题（语义化 h1） -->
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight m-0 leading-snug max-w-4xl">
          {{ title }}
        </h1>

        <!-- 文章专属 Byline 元数据行 -->
        <div v-if="date || author || views" class="mt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-white/80">
          <!-- 发布时间 -->
          <span v-if="date" class="inline-flex items-center gap-1.5 text-white/70">
            <i class="fa-regular fa-calendar text-[#206be7]" aria-hidden="true"></i>
            <time :datetime="date">{{ date }}</time>
          </span>

          <!-- 作者 / 发布来源 -->
          <span v-if="author" class="inline-flex items-center gap-1.5 text-white/70">
            <i class="fa-regular fa-user text-[#206be7]" aria-hidden="true"></i>
            <span>{{ author }}</span>
          </span>

          <!-- 阅读量 -->
          <span v-if="views" class="inline-flex items-center gap-1.5 text-white/70">
            <i class="fa-regular fa-eye text-[#206be7]" aria-hidden="true"></i>
            <span>{{ views }} 阅读</span>
          </span>
        </div>

        <!-- 插槽：用于插入其他文章专属操作（如分享、打印、字体大小调节等） -->
        <slot name="extra" />
      </div>
    </div>
  </header>
</template>
