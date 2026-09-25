<script setup lang="ts">
import type { SectionHeaderBlockData } from "~/types";

defineProps<{
  header: SectionHeaderBlockData;
}>();

const { form: contactForm, isSubmitting, submitSuccess, submitForm: handleSubmit } = useContactForm();
</script>

<template>
  <!-- 联系我们在线留言表单区块 -->
  <div class="bg-gray-50/70 border border-gray-200/80 rounded-sm p-8 sm:p-12 mb-16">
    <SectionHeader :title="header.title" :subtitle="header.subtitle" />

    <div class="max-w-xl mx-auto">
      <div v-if="submitSuccess" class="p-6 bg-blue-50 border border-blue-200 rounded-sm text-center space-y-2">
        <i class="fa-solid fa-circle-check text-3xl text-[#206be7]"></i>
        <h4 class="text-base font-semibold text-gray-900">信息发送成功</h4>
        <p class="text-xs text-gray-600">感谢您的来信！技术项目主管将在最短时间内与您致电沟通。</p>
      </div>

      <form v-else class="space-y-4" @submit.prevent="handleSubmit">
        <div>
          <label class="block text-xs font-medium text-gray-700 mb-1.5">您的名字 *</label>
          <input
            v-model="contactForm.name"
            type="text"
            required
            placeholder="请填写您的名字"
            class="w-full text-xs bg-white border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition"
          />
        </div>

        <div>
          <label class="block text-xs font-medium text-gray-700 mb-1.5">联系电话 *</label>
          <input
            v-model="contactForm.phone"
            type="tel"
            required
            placeholder="请填写您的联系电话"
            class="w-full text-xs bg-white border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition"
          />
        </div>

        <div>
          <label class="block text-xs font-medium text-gray-700 mb-1.5">留言内容</label>
          <textarea
            v-model="contactForm.message"
            rows="4"
            placeholder="请填写您的留言内容"
            class="w-full text-xs bg-white border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition resize-none"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            class="w-full py-2.5 px-4 text-xs font-medium rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            :disabled="isSubmitting"
          >
            <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin"></i>
            <span>{{ isSubmitting ? '正在提交...' : '发送' }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
