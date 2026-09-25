<script setup lang="ts">
import { companyContact } from "~/data/navigation";

const { form, isSubmitting, submitSuccess, submitForm } = useContactForm();
</script>

<template>
  <section class="py-16 md:py-20 bg-white border-t border-gray-200">
    <div class="max-w-[1200px] mx-auto px-5">
      <SectionHeader title="联系我们" subtitle="与我们的核医学技术团队取得联系" />

      <div
        class="max-w-4xl mx-auto bg-white border border-gray-200 rounded-sm shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        <!-- 左侧快捷联络卡片 -->
        <div
          class="md:col-span-5 bg-linear-to-br from-[#162132] to-[#0f172a] text-white p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <span class="text-xs uppercase tracking-wider text-[#206be7] font-semibold">GET IN TOUCH</span>
            <h3 class="text-xl font-bold mt-2 mb-6">咨询核医学建设方案</h3>
            <div class="space-y-4 text-xs text-gray-300">
              <div class="flex items-start gap-3">
                <i class="fa-solid fa-phone text-[#206be7] mt-1 text-sm"></i>
                <div>
                  <span class="block text-gray-400">服务专线</span>
                  <span class="text-sm font-bold text-white">{{ companyContact.phone }}</span>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fa-regular fa-envelope text-[#206be7] mt-1 text-sm"></i>
                <div>
                  <span class="block text-gray-400">电子邮箱</span>
                  <span class="text-white">{{ companyContact.email }}</span>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fa-solid fa-location-dot text-[#206be7] mt-1 text-sm"></i>
                <div>
                  <span class="block text-gray-400">公司地址</span>
                  <span class="text-white leading-relaxed">{{ companyContact.address }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-gray-800 text-[11px] text-gray-400">
            我们将在收到留言后 2 小时内安排专属项目工程师与您深度对接。
          </div>
        </div>

        <!-- 右侧留言表单 -->
        <div class="md:col-span-7 p-8 sm:p-10 bg-white">
          <div v-if="submitSuccess" class="p-6 text-center bg-blue-50 border border-blue-200 rounded-sm space-y-2">
            <i class="fa-solid fa-circle-check text-3xl text-[#206be7]"></i>
            <h4 class="text-base font-semibold text-gray-900">留言提交成功！</h4>
            <p class="text-xs text-gray-600">感谢您的信任，我们的项目总工将在短时间内与您取得电话联系。</p>
          </div>

          <form v-else @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1.5">您的名字 *</label>
              <input v-model="form.name" type="text" required placeholder="请填写您的姓名 / 职务"
                class="w-full text-xs border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition" />
            </div>

            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1.5">联系电话 *</label>
              <input v-model="form.phone" type="tel" required placeholder="请填写您的手机号码"
                class="w-full text-xs border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition" />
            </div>

            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1.5">留言内容</label>
              <textarea v-model="form.message" rows="4" placeholder="请简要描述您的科室场所建设需求、项目阶段或面积..."
                class="w-full text-xs border border-gray-300 rounded-sm px-3.5 py-2.5 outline-none focus:border-[#206be7] transition resize-none"></textarea>
            </div>

            <button type="submit" class="w-full py-2.5 px-4 text-xs font-semibold rounded-sm bg-[#206be7] hover:bg-[#1162e8] text-white flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              :disabled="isSubmitting">
              <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin"></i>
              <span>{{ isSubmitting ? '正在发送...' : '发送留言' }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
