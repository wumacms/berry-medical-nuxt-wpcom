<script setup lang="ts">
import { contactAccordionItems, contactFaqs } from "~/data/contact";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/contact");

useSeoMeta({
  title: "联系我们 - 贝瑞医疗 · 核医学场所建设专业咨询",
  description: "欢迎联系贝瑞医疗科技，获取专属核医学场所建设、辐射防护施工、环评药监验收全套定制解决方案。",
  ogUrl: `${SITE_URL}/contact`,
});

// Accordion open item
const activeAccordion = ref<number | null>(0);
const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};

// 使用 composable 统一表单逻辑
const { form: contactForm, isSubmitting, submitSuccess, submitForm: handleSubmit } = useContactForm();
</script>

<template>
  <div class="page-contact">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner
      title="联系我们"
      description="期待与您携手“核”作，共筑安全合规的现代智慧核医学诊疗空间"
      :breadcrumbs="[{ label: '联系我们' }]"
    />

    <div class="max-w-[1200px] mx-auto px-5 mb-16">
      <!-- 1. 上半部分：微信二维码卡片 + 手风琴信息列表 -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
        <!-- 左侧微信二维码 (col-md-4) -->
        <div class="md:col-span-4 bg-white border border-gray-200 rounded-sm p-6 text-center shadow-xs">
          <div
            class="w-48 h-48 mx-auto bg-gray-50 border border-gray-100 rounded-sm overflow-hidden p-2 flex items-center justify-center">
            <img :src="withBase('/images/qrcode.png')"
              alt="微信扫码关注我们" class="w-full h-full object-contain" />
          </div>
          <h4 class="text-sm font-semibold text-gray-900 mt-4 mb-1">微信扫码关注我们</h4>
          <p class="text-xs text-gray-500">直连资深技术工程师，在线解答工程疑问</p>
        </div>

        <!-- 右侧手风琴列表 (col-md-8) -->
        <div class="md:col-span-8 space-y-3">
          <div v-for="(item, idx) in contactAccordionItems" :key="idx"
            class="border border-gray-200 rounded-sm overflow-hidden bg-white transition-all">
            <button type="button"
              class="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer transition-colors"
              :class="activeAccordion === idx ? 'bg-blue-50/50 text-[#206be7]' : 'text-gray-800 hover:bg-gray-50'"
              @click="toggleAccordion(idx)">
              <div class="flex items-center gap-3">
                <i :class="[item.icon, 'text-sm text-[#206be7]']"></i>
                <span class="text-sm font-semibold">{{ item.title }}</span>
              </div>
              <i class="fa-solid fa-angle-down text-xs transition-transform duration-200"
                :class="{ 'rotate-180': activeAccordion === idx }"></i>
            </button>

            <div v-show="activeAccordion === idx"
              class="px-5 pb-5 pt-2 text-xs text-gray-600 border-t border-gray-100/80 space-y-1.5 bg-white">
              <p class="font-medium text-gray-900 text-sm m-0">{{ item.content }}</p>
              <p class="text-gray-500 m-0">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. 下半部分：联系我们表单区块 -->
      <div class="bg-gray-50/70 border border-gray-200/80 rounded-sm p-8 sm:p-12 mb-16">
        <SectionHeader title="联系我们" subtitle="与我们取得联系，我们将快速响应您的需求" />

        <div class="max-w-xl mx-auto">
          <div v-if="submitSuccess" class="p-6 bg-blue-50 border border-blue-200 rounded-sm text-center space-y-2">
            <i class="fa-solid fa-circle-check text-3xl text-[#206be7]"></i>
            <h4 class="text-base font-semibold text-gray-900">信息发送成功</h4>
            <p class="text-xs text-gray-600">感谢您的来信！技术项目主管将在最短时间内与您致电沟通。</p>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1.5">您的名字 *</label>
              <input v-model="contactForm.name" type="text" required placeholder="请填写您的名字"
                class="w-full text-xs bg-white border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition" />
            </div>

            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1.5">联系电话 *</label>
              <input v-model="contactForm.phone" type="tel" required placeholder="请填写您的联系电话"
                class="w-full text-xs bg-white border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition" />
            </div>

            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1.5">留言内容</label>
              <textarea v-model="contactForm.message" rows="4" placeholder="请填写您的留言内容"
                class="w-full text-xs bg-white border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition resize-none"></textarea>
            </div>

            <div>
              <button type="submit" class="w-full py-2.5 px-4 text-xs font-medium rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                :disabled="isSubmitting">
                <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin"></i>
                <span>{{ isSubmitting ? '正在提交...' : '发送' }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- 3. 常见问题答疑 FAQ -->
      <div class="max-w-3xl mx-auto pt-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
          <i class="fa-regular fa-circle-question text-[#206be7]"></i>
          <span>常见问题解答</span>
        </h3>
        <div class="space-y-4">
          <div v-for="(faq, idx) in contactFaqs" :key="idx" class="p-4 bg-white border border-gray-200 rounded-sm">
            <h4 class="text-sm font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
              <span
                class="w-5 h-5 rounded-full bg-blue-100 text-[#206be7] text-[11px] flex items-center justify-center font-bold">问</span>
              {{ faq.q }}
            </h4>
            <p class="text-xs text-gray-600 leading-relaxed pl-7 m-0">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
