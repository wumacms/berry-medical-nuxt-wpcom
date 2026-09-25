<script setup lang="ts">
// /category/product → /cases 永久重定向
// 同时在 nuxt.config.ts 的 routeRules 中有对应服务端 301 配置
navigateTo("/cases", { redirectCode: 301 });
</script>

<template>
  <div />
</template>
