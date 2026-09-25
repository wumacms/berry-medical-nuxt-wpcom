<script setup lang="ts">
// /company → /about 永久重定向
// 同时在 nuxt.config.ts 的 routeRules 中也有对应的服务端配置
// 这里作为客户端 fallback，保证 SPA 跳转也能正确重定向
navigateTo("/about", { redirectCode: 301 });
</script>

<template>
  <div />
</template>
