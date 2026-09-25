<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

useSeoMeta({
  title: "404 - 页面未找到 · 贝瑞医疗",
  description: "抱歉，您访问的页面不存在或已被移除。您可以返回贝瑞医疗官网首页或浏览我们的核心服务。",
  robots: "noindex, nofollow",
});

const handleError = () => {
  clearError({ redirect: "/" });
};
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-dark font-sans selection:bg-primary/20 selection:text-primary">
    <!-- 简易头部导航 -->
    <header class="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div
            class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-radiation text-lg"></i>
          </div>
          <div class="leading-tight">
            <span class="block text-lg font-bold tracking-tight text-dark">贝瑞医疗</span>
            <span class="block text-[10px] text-gray-400 tracking-wider">BERRY MEDICAL</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/"
          class="text-sm font-medium text-dark/70 hover:text-primary transition flex items-center gap-1.5">
          <i class="fa-solid fa-house text-xs"></i> 官网首页
        </NuxtLink>
      </div>
    </header>

    <!-- 404 主体 -->
    <main class="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-xl w-full text-center">
        <!-- 404 标志图标 -->
        <div class="relative inline-block mb-8">
          <div class="text-8xl sm:text-9xl font-black text-gray-100 tracking-tighter select-none">
            {{ error.statusCode || 404 }}
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div
              class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl shadow-inner">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
          </div>
        </div>

        <h1 class="text-2xl sm:text-3xl font-bold text-dark mb-4 tracking-tight">
          {{ error.statusCode === 404 ? "抱歉，您访问的页面不存在" : "服务暂时不可用" }}
        </h1>
        <p class="text-sm sm:text-base text-dark/60 leading-relaxed max-w-md mx-auto mb-8">
          该页面可能已更名、下线或输入的网址有误。请检查网址拼写，或点击下方按钮返回核心栏目。
        </p>

        <!-- 操作按钮 -->
        <div class="flex flex-wrap items-center justify-center gap-4">
          <button @click="handleError"
            class="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary/90 transition shadow-lg shadow-primary/20 cursor-pointer">
            <i class="fa-solid fa-house text-xs"></i> 返回官网首页
          </button>
          <NuxtLink to="/services"
            class="inline-flex items-center gap-2 bg-light text-dark font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-200 transition border border-gray-200">
            <i class="fa-solid fa-layer-group text-xs text-primary"></i> 了解服务内容
          </NuxtLink>
          <NuxtLink to="/contact"
            class="inline-flex items-center gap-2 bg-light text-dark font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-200 transition border border-gray-200">
            <i class="fa-solid fa-phone text-xs text-primary"></i> 联系技术顾问
          </NuxtLink>
        </div>

        <!-- 快速导航推荐 -->
        <div class="mt-14 pt-8 border-t border-gray-100">
          <p class="text-xs text-dark/40 font-medium mb-3">您可能想要寻找：</p>
          <div class="flex flex-wrap justify-center gap-4 text-xs font-medium text-dark/70">
            <NuxtLink to="/cases" class="hover:text-primary transition">业绩介绍</NuxtLink>
            <span class="text-gray-300">·</span>
            <NuxtLink to="/advantages" class="hover:text-primary transition">专业优势</NuxtLink>
            <span class="text-gray-300">·</span>
            <NuxtLink to="/about" class="hover:text-primary transition">企业简介</NuxtLink>
            <span class="text-gray-300">·</span>
            <NuxtLink to="/news" class="hover:text-primary transition">新闻动态</NuxtLink>
          </div>
        </div>
      </div>
    </main>

    <!-- 简易页脚 -->
    <footer class="border-t border-gray-100 py-6 text-center text-xs text-dark/40">
      <p>© {{ new Date().getFullYear() }} 贝瑞医疗科技（郑州）有限公司 · 版权所有</p>
    </footer>
  </div>
</template>
