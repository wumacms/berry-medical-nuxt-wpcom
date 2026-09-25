<script setup lang="ts">
import { companyContact } from "~/data/navigation";

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

const accordionItems = [
  {
    title: "公司地址",
    icon: "fa-solid fa-location-dot",
    content: companyContact.address,
    desc: "乘车路线：郑州地铁1号线或高新技术开发区快速公交均可便捷到达。",
  },
  {
    title: "联系电话",
    icon: "fa-solid fa-phone",
    content: `${companyContact.phone} / ${companyContact.phoneSecondary}`,
    desc: "工作时段：周一至周日 8:30 - 18:30，节假日正常接待。",
  },
  {
    title: "电子邮箱",
    icon: "fa-regular fa-envelope",
    content: companyContact.email,
    desc: "欢迎发送项目图纸或招标文件至邮箱，我们将于24小时内反馈技术方案建议。",
  },
  {
    title: "商务合作与技术咨询",
    icon: "fa-solid fa-handshake",
    content: "新建核医学科规划 · 辐射防护工程实施 · 衰变池系统 · 环评卫评药监验收",
    desc: "技术团队拥有15+年核技术应用与屏蔽设计实战经验，覆盖全国主要省份。",
  },
];

// 使用 composable 统一表单逻辑
const { form: contactForm, isSubmitting, submitSuccess, submitForm: handleSubmit } = useContactForm();

// FAQ items
const faqs = [
  {
    q: "核医学场所建设一般需要多长时间？",
    a: "项目周期因场所规模、改造难度及审批流程而异，通常为3-12个月不等。我们会在方案设计阶段提供详细的时间规划与工期倒排表。",
  },
  {
    q: "是否提供环评、卫评及药监验收支持？",
    a: "是的，我们提供从环境影响评价、职业病危害放射防护预评价/控制效果评价到药监放射性药品使用许可证（第四类）的全流程技术咨询与专家指导服务。",
  },
  {
    q: "有限空间的场地改造能否承接？",
    a: "可以。实施难度大、既有院区空间受限的场地改造服务是我们的专长，团队拥有成熟的重载楼面强化、精密屏蔽测算与空间极致利用经验。",
  },
];
</script>

<template>
  <div class="page-contact">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner title="联系我们" description="期待与您携手“核”作，共筑安全合规的现代智慧核医学诊疗空间"
      bg-image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
      :breadcrumbs="[{ label: '联系我们' }]" />

    <div class="wpcom-container mb-16">
      <!-- 1. 上半部分：微信二维码卡片 + 手风琴信息列表 (WPCOM modules-grid) -->
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

        <!-- 右侧手风琴列表 (col-md-8) (WPCOM modules-accordion) -->
        <div class="md:col-span-8 space-y-3">
          <div v-for="(item, idx) in accordionItems" :key="idx"
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

      <!-- 2. 下半部分：联系我们表单区块 (WPCOM modules-my-module) -->
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
              <button type="submit" class="wpcom-btn btn-primary w-full py-2.5 text-xs font-medium"
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
          <div v-for="(faq, idx) in faqs" :key="idx" class="p-4 bg-white border border-gray-200 rounded-sm">
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
