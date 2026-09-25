<script setup lang="ts">
import { useScroll } from "~/composables/useScroll";
import { companyContact } from "~/data/navigation";

const { showBackToTop, scrollToTop } = useScroll(250);

const copiedToast = ref(false);

const handleShare = async () => {
  if (import.meta.client) {
    try {
      await navigator.clipboard.writeText(window.location.href);
      copiedToast.value = true;
      setTimeout(() => {
        copiedToast.value = false;
      }, 2500);
    } catch {
      // Fallback
      copiedToast.value = true;
      setTimeout(() => {
        copiedToast.value = false;
      }, 2500);
    }
  }
};
</script>

<template>
  <div>
    <!-- WPCOM Module 7 Style Floating Action Bar (.action.action-style-1) -->
    <div class="fixed right-3 bottom-24 z-50 flex flex-col gap-1.5 select-none hidden sm:flex">
      <!-- 1. 联系我们 (带悬浮卡片) -->
      <div class="relative group">
        <button
          type="button"
          class="w-11 h-11 bg-white hover:bg-[#206be7] text-gray-700 hover:text-white border border-gray-200/90 shadow-md rounded-xs flex flex-col items-center justify-center transition-all cursor-pointer group"
          aria-label="联系我们"
        >
          <i class="fa-regular fa-comment-dots text-base"></i>
          <span class="text-[9px] scale-90 mt-0.5">咨询</span>
        </button>

        <!-- 悬浮弹出的详细信息卡片 -->
        <div class="absolute right-full top-0 mr-2.5 w-64 bg-white border border-gray-200 shadow-2xl rounded-xs p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-x-1 group-hover:translate-x-0 z-50 pointer-events-none group-hover:pointer-events-auto">
          <h4 class="text-sm font-semibold text-gray-900 pb-2 border-b border-gray-100 text-center">
            联系我们
          </h4>
          <div class="text-center py-2.5">
            <span class="block text-xs text-gray-400">服务专线</span>
            <span class="text-lg font-bold text-[#206be7]">
              {{ companyContact.phone }}
            </span>
          </div>
          <div class="space-y-1.5 text-xs text-gray-600 border-t border-gray-100 pt-2">
            <p class="flex items-center gap-1.5">
              <i class="fa-regular fa-envelope text-[#206be7]"></i>
              <span class="truncate">{{ companyContact.email }}</span>
            </p>
            <p class="flex items-center gap-1.5">
              <i class="fa-regular fa-clock text-[#206be7]"></i>
              <span>周一至周日 8:30-18:30</span>
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="block mt-3 w-full py-1.5 bg-[#206be7] text-white text-center text-xs rounded-xs hover:bg-[#1162e8] transition"
          >
            在线留言对接
          </NuxtLink>
        </div>
      </div>

      <!-- 2. 关注微信 (带二维码悬浮) -->
      <div class="relative group">
        <button
          type="button"
          class="w-11 h-11 bg-white hover:bg-[#206be7] text-gray-700 hover:text-white border border-gray-200/90 shadow-md rounded-xs flex flex-col items-center justify-center transition-all cursor-pointer"
          aria-label="关注微信"
        >
          <i class="fa-brands fa-weixin text-base"></i>
          <span class="text-[9px] scale-90 mt-0.5">微信</span>
        </button>

        <!-- 微信二维码弹卡 -->
        <div class="absolute right-full top-0 mr-2.5 w-44 bg-white border border-gray-200 shadow-2xl rounded-xs p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-x-1 group-hover:translate-x-0 z-50 text-center">
          <div class="w-36 h-36 bg-gray-50 border border-gray-100 rounded-xs mx-auto overflow-hidden p-1 flex items-center justify-center">
            <img :src="withBase('/images/qrcode.png')" alt="扫码关注微信" class="w-full h-full object-contain" />
          </div>
          <span class="block text-xs font-medium text-gray-800 mt-2">微信扫一扫</span>
          <span class="block text-[11px] text-gray-500">直连技术项目经理</span>
        </div>
      </div>

      <!-- 3. 分享本页 -->
      <button
        type="button"
        class="w-11 h-11 bg-white hover:bg-[#206be7] text-gray-700 hover:text-white border border-gray-200/90 shadow-md rounded-xs flex flex-col items-center justify-center transition-all cursor-pointer"
        aria-label="分享本页"
        title="分享本页"
        @click="handleShare"
      >
        <i class="fa-solid fa-share-nodes text-sm"></i>
        <span class="text-[9px] scale-90 mt-0.5">分享</span>
      </button>

      <!-- 4. 返回顶部 (gotop) -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-2 scale-90"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 translate-y-2 scale-90"
      >
        <button
          v-if="showBackToTop"
          type="button"
          class="w-11 h-11 bg-white hover:bg-[#206be7] text-gray-700 hover:text-white border border-gray-200/90 shadow-md rounded-xs flex flex-col items-center justify-center transition-all cursor-pointer"
          aria-label="返回顶部"
          title="返回顶部"
          @click="scrollToTop"
        >
          <i class="fa-solid fa-angle-up text-base"></i>
          <span class="text-[9px] scale-90 mt-0.5">顶部</span>
        </button>
      </transition>
    </div>

    <!-- 复制分享链接成功的提示 Toast -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="copiedToast"
        class="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#262626] text-white px-5 py-2.5 rounded-sm shadow-xl flex items-center gap-2 text-sm"
      >
        <i class="fa-solid fa-circle-check text-green-400"></i>
        <span>链接已复制到剪贴板，可粘贴分享！</span>
      </div>
    </transition>
  </div>
</template>
