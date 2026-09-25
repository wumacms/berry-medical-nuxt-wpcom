<script setup lang="ts">
interface Props {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  theme?: "light" | "dark";
}

withDefaults(defineProps<Props>(), {
  size: "md",
  showText: true,
  theme: "light",
});
</script>

<template>
  <div class="flex items-center gap-2.5 select-none">
    <!-- 专属医疗科技矢量图标 (WPCOM 模块风徽标) -->
    <div
      class="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
      :class="{
        'w-8 h-8': size === 'sm',
        'w-10 h-10': size === 'md',
        'w-12 h-12': size === 'lg',
      }">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full drop-shadow-sm">
        <defs>
          <linearGradient id="logo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#206be7" />
          </linearGradient>
        </defs>

        <!-- 外层圆角防护徽盾 -->
        <rect x="3" y="3" width="42" height="42" rx="10" fill="url(#logo-bg)" />

        <!-- 内部微高光边框 -->
        <rect x="3.5" y="3.5" width="41" height="41" rx="9.5" stroke="white" stroke-opacity="0.3" stroke-width="1" />

        <!-- 科技微回旋轨迹 -->
        <ellipse cx="24" cy="24" rx="14" ry="6" transform="rotate(-28 24 24)" stroke="white" stroke-opacity="0.45"
          stroke-width="1.75" stroke-dasharray="2 3" />

        <!-- 医疗防护精工十字 -->
        <path
          d="M21 15C21 14.4477 21.4477 14 22 14H26C26.5523 14 27 14.4477 27 15V21H33C33.5523 21 34 21.4477 34 22V26C34 26.5523 33.5523 27 33 27H27V33C27 33.5523 26.5523 34 26 34H22C21.4477 34 21 33.5523 21 33V27H15C14.4477 27 14 26.5523 14 26V22C14 21.4477 14.4477 21 15 21H21V15Z"
          fill="white" />

        <!-- 核心能量聚焦核心点 -->
        <circle cx="24" cy="24" r="2.2" fill="#206be7" />
        <circle cx="24" cy="24" r="1.2" fill="white" />
      </svg>
    </div>

    <!-- 品牌文字标识 -->
    <div v-if="showText" class="leading-tight">
      <div class="flex items-center gap-1.5">
        <span class="font-bold tracking-tight text-lg" :class="theme === 'dark' ? 'text-white' : 'text-slate-900'">
          贝瑞医疗
        </span>
        <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-xs tracking-wider" :class="theme === 'dark'
          ? 'bg-white/10 text-white'
          : 'bg-blue-50 text-[#206be7] border border-blue-100'
          ">
          核医场所
        </span>
      </div>
      <span class="block text-[10px] tracking-wider font-medium"
        :class="theme === 'dark' ? 'text-white/40' : 'text-slate-400'">
        BERRY MEDICAL
      </span>
    </div>
  </div>
</template>
