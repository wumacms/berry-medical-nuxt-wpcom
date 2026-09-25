<script setup lang="ts">
import { contactPageData } from "~/data/contact";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/contact");

useSeoMeta({
  title: "联系我们 - 贝瑞医疗 · 核医学场所建设专业咨询",
  description: "欢迎联系贝瑞医疗科技，获取专属核医学场所建设、辐射防护施工、环评药监验收全套定制解决方案。",
  ogUrl: `${SITE_URL}/contact`,
});
</script>

<template>
  <div class="page-contact">
    <!-- 1. 顶部横幅区块 (Banner Block) -->
    <PageBanner
      :title="contactPageData.bannerBlock.title"
      :description="contactPageData.bannerBlock.description"
      :breadcrumbs="[{ label: contactPageData.bannerBlock.title }]"
    />

    <div class="max-w-[1200px] mx-auto px-5 mb-16">
      <!-- 2. 微信二维码卡片与手风琴信息列表区块 (Info Block) -->
      <ContactInfoBlock
        :wechat="contactPageData.wechatBlock"
        :accordions="contactPageData.infoBlock.accordions"
      />

      <!-- 3. 联系我们在线留言表单区块 (Form Block) -->
      <ContactFormBlock :header="contactPageData.formBlock.header" />

      <!-- 4. 常见问题答疑 FAQ 区块 (FAQ Block) -->
      <ContactFaqBlock :faqs="contactPageData.faqBlock.faqs" />
    </div>
  </div>
</template>
