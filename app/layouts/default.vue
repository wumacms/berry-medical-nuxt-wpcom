<template>
  <div class="min-h-screen flex flex-col bg-white text-dark font-sans selection:bg-primary/20 selection:text-primary pb-14 lg:pb-0">
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
