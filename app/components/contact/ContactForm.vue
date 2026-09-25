<script setup lang="ts">
// 使用统一的 composable 取代内联表单逻辑
const { form, isSubmitting, submitSuccess, errorMessage, submitForm } = useContactForm();
</script>

<template>
  <div class="bg-light rounded-3xl p-8 lg:p-10 shadow-xs border border-gray-100">
    <!-- 提交成功提示 -->
    <div v-if="submitSuccess" class="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-3">
      <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-xl">
        <i class="fa-solid fa-circle-check"></i>
      </div>
      <h4 class="text-lg font-bold text-green-900">咨询提交成功</h4>
      <p class="text-sm text-green-700 leading-relaxed">
        感谢您的信任！我们的核医学建设顾问已收到您的需求，将在 24 小时内与您取得联系。
      </p>
      <button type="button" class="text-xs text-primary font-semibold hover:underline mt-2 cursor-pointer"
        @click="submitSuccess = false">
        再次填写新的咨询
      </button>
    </div>

    <!-- 表单本体 -->
    <form v-else class="space-y-5" @submit.prevent="submitForm">
      <!-- 错误提示 -->
      <div v-if="errorMessage"
        class="bg-red-50 text-red-600 text-xs px-4 py-3 rounded-xl border border-red-200 flex items-center gap-2">
        <i class="fa-solid fa-circle-exclamation text-sm"></i>
        <span>{{ errorMessage }}</span>
      </div>

      <!-- 姓名 -->
      <div>
        <label class="block text-sm font-semibold text-dark mb-2">
          您的姓名 <span class="text-primary">*</span>
        </label>
        <input v-model="form.name" type="text" placeholder="请输入您的姓名" required
          class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition">
      </div>

      <!-- 电话 -->
      <div>
        <label class="block text-sm font-semibold text-dark mb-2">
          联系电话 <span class="text-primary">*</span>
        </label>
        <input v-model="form.phone" type="tel" placeholder="请输入您的联系电话" required
          class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition">
      </div>

      <!-- 邮箱 -->
      <div>
        <label class="block text-sm font-semibold text-dark mb-2">电子邮箱</label>
        <input v-model="form.email" type="email" placeholder="请输入您的电子邮箱"
          class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition">
      </div>

      <!-- 咨询类型 -->
      <div>
        <label class="block text-sm font-semibold text-dark mb-2">咨询类型</label>
        <select v-model="form.type"
          class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition">
          <option value="">请选择咨询类型</option>
          <option value="design">核医学场所设计</option>
          <option value="construction">辐射防护施工</option>
          <option value="equipment">设备采购与供应</option>
          <option value="consulting">环评/卫评/药监验收咨询</option>
          <option value="other">其他咨询</option>
        </select>
      </div>

      <!-- 留言内容 -->
      <div>
        <label class="block text-sm font-semibold text-dark mb-2">需求描述</label>
        <textarea v-model="form.message" rows="4" placeholder="请简要描述您的项目需求，以便我们更好地为您服务"
          class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"></textarea>
      </div>

      <!-- 提交按钮 -->
      <button type="submit" :disabled="isSubmitting"
        class="w-full bg-primary text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition flex items-center justify-center gap-2 text-sm disabled:opacity-70 cursor-pointer">
        <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin"></i>
        <i v-else class="fa-regular fa-paper-plane"></i>
        <span>{{ isSubmitting ? "正在提交..." : "提交咨询" }}</span>
      </button>

      <!-- 隐私提示 -->
      <p class="text-xs text-dark/40 text-center">
        <i class="fa-solid fa-lock text-[10px] mr-1"></i>
        我们承诺严格保护您的个人信息，仅用于咨询服务。
      </p>
    </form>
  </div>
</template>
