<script setup lang="ts">
import TheNavbar from "~/components/layout/TheNavbar.vue";
import TheFooter from "~/components/layout/TheFooter.vue";
import FloatingTools from "~/components/layout/FloatingTools.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-dark font-sans selection:bg-primary/20 selection:text-primary">
    <!-- 全局导航栏 -->
    <TheNavbar />

    <!-- 页面内容插槽 -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- 全局页脚 -->
    <TheFooter />

    <!-- 浮动操作按钮 -->
    <FloatingTools />
  </div>
</template>
