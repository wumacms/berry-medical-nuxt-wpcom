<script setup lang="ts">
const { setOrganizationSchema, setCanonical, SITE_URL } = useJsonLd();
setOrganizationSchema();
setCanonical("/");

useSeoMeta({
  title: "贝瑞医疗 - 核医学场所建设一站式服务商",
  description: "从选址规划、设计施工到环评验收、设备供应及7×24小时运维，贝瑞医疗为您提供核医学场所建设全生命周期闭环解决方案。",
  ogTitle: "贝瑞医疗 - 核医学场所建设一站式服务商",
  ogDescription: "专注核医学场所建设全生命周期闭环解决方案，从选址规划、设计施工到环评验收与运维保障。",
  ogImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=crop",
  ogUrl: `${SITE_URL}/`,
});
</script>

<template>
  <div>
    <!-- 1. 首页焦点大图轮播 -->
    <HeroSlider />

    <!-- 2. 服务项目 -->
    <ServiceFeatures />

    <!-- 3. 关于我们 -->
    <AboutPreview />

    <!-- 4. 产品与案例展示轮播 -->
    <ProductShowcase />

    <!-- 5. 新闻动态 -->
    <NewsSection />

    <!-- 6. 联系我们 -->
    <ContactSection />
  </div>
</template>
