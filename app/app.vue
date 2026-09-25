<script setup lang="ts">
useHead({
  titleTemplate: (title) =>
    title
      ? title.includes("贝瑞医疗")
        ? title
        : `${title} · 贝瑞医疗`
      : "贝瑞医疗 · 核医学场所建设一站式服务",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
