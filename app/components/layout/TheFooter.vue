<script setup lang="ts">
import { companyContact } from "~/data/navigation";

const currentYear = new Date().getFullYear();
const wechatPopup = ref(false);
</script>

<template>
  <footer class="footer bg-[#1a1e27] text-gray-400 pt-16 pb-12 border-t border-gray-800 text-sm">
    <div class="max-w-[1200px] mx-auto px-5">
      <!-- 4列 Widget 布局 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-800/80">
        <!-- 分类 Widget (col-span-2) -->
        <div class="lg:col-span-2">
          <h3 class="text-white text-base font-semibold mb-5 pb-2 border-b border-gray-700/60 inline-block">
            分类目录
          </h3>
          <ul class="space-y-2.5 text-xs text-gray-400 list-none p-0 m-0">
            <li>
              <NuxtLink to="/cases" class="hover:text-white hover:underline transition">产品展示</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news?category=company" class="hover:text-white hover:underline transition">公司新闻</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news?category=industry" class="hover:text-white hover:underline transition">行业动态</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news?category=tech" class="hover:text-white hover:underline transition">技术分享</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 页面 Widget (col-span-2) -->
        <div class="lg:col-span-2">
          <h3 class="text-white text-base font-semibold mb-5 pb-2 border-b border-gray-700/60 inline-block">
            快捷页面
          </h3>
          <ul class="space-y-2.5 text-xs text-gray-400 list-none p-0 m-0">
            <li>
              <NuxtLink to="/about" class="hover:text-white hover:underline transition">关于我们</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="hover:text-white hover:underline transition">服务内容</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/advantages" class="hover:text-white hover:underline transition">专业优势</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-white hover:underline transition">联系我们</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 解决方案 Widget (col-span-3) -->
        <div class="lg:col-span-3">
          <h3 class="text-white text-base font-semibold mb-5 pb-2 border-b border-gray-700/60 inline-block">
            服务体系
          </h3>
          <ul class="space-y-2.5 text-xs text-gray-400 list-none p-0 m-0">
            <li>
              <NuxtLink to="/services#design" class="hover:text-white hover:underline transition">设计篇 · 选址规划与施工图</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services#construction" class="hover:text-white hover:underline transition">施工篇 · 辐射防护与衰变池</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services#equipment" class="hover:text-white hover:underline transition">设备篇 · 数字孪生与全周期运维</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact#faq" class="hover:text-white hover:underline transition">常见问题 · 环评卫评药监答疑</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 服务热线 Widget (col-span-5) -->
        <div class="lg:col-span-5 lg:pl-4">
          <h3 class="text-white text-base font-semibold mb-5 pb-2 border-b border-gray-700/60 inline-block">
            服务热线
          </h3>
          <div class="space-y-3">
            <div class="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              {{ companyContact.phone }}
            </div>
            <p class="text-xs text-gray-400">
              客服服务时段：周一至周日 8:30 - 18:30，节假日正常接待
            </p>
            <p class="text-xs text-gray-400">
              公司地址：{{ companyContact.address }}
            </p>

            <!-- 社交关注图标 (微信带二维码弹层) -->
            <div class="flex items-center gap-3 pt-2">
              <div class="relative group">
                <button
                  type="button"
                  class="w-8 h-8 rounded-full bg-white/10 hover:bg-[#206be7] text-white flex items-center justify-center transition"
                  title="关注微信"
                  @mouseenter="wechatPopup = true"
                  @mouseleave="wechatPopup = false"
                >
                  <i class="fa-brands fa-weixin text-sm"></i>
                </button>

                <!-- 二维码卡片 -->
                <div
                  v-if="wechatPopup"
                  class="absolute bottom-full left-0 mb-3 bg-white p-3 rounded shadow-2xl z-50 text-center w-36 pointer-events-none"
                >
                  <div class="w-30 h-30 bg-gray-100 rounded overflow-hidden mx-auto flex items-center justify-center p-1">
                    <img :src="withBase('/images/qrcode.png')" alt="微信二维码" class="w-full h-full object-contain" />
                  </div>
                  <span class="block text-[11px] text-gray-700 mt-1.5 font-medium">扫码咨询工程师</span>
                </div>
              </div>

              <a
                :href="`mailto:${companyContact.email}`"
                class="w-8 h-8 rounded-full bg-white/10 hover:bg-[#206be7] text-white flex items-center justify-center transition"
                title="发送邮件"
              >
                <i class="fa-regular fa-envelope text-sm"></i>
              </a>

              <NuxtLink
                to="/contact"
                class="w-8 h-8 rounded-full bg-white/10 hover:bg-[#206be7] text-white flex items-center justify-center transition"
                title="在线留言"
              >
                <i class="fa-regular fa-comments text-sm"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- 版权栏 (WPCOM Copyright) -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p class="m-0">
          Copyright © {{ currentYear }} {{ companyContact.name }} 版权所有 
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow noopener" class="hover:text-white underline ml-1">
            {{ companyContact.icp }}
          </a>
        </p>
        <div class="flex items-center gap-4">
          <NuxtLink to="/privacy" class="hover:text-white transition">隐私条款</NuxtLink>
          <span>·</span>
          <NuxtLink to="/contact" class="hover:text-white transition">技术支持</NuxtLink>
          <span>·</span>
          <NuxtLink to="/about" class="hover:text-white transition">企业资质</NuxtLink>
        </div>
      </div>
    </div>

    <!-- 移动端底部悬浮操作栏 (WPCOM Module 7 .footer-bar) -->
    <div class="fixed bottom-0 left-0 right-0 h-14 bg-white border-t border-gray-200 shadow-lg z-40 flex lg:hidden items-center justify-around text-gray-700">
      <a :href="`tel:${companyContact.phone}`" class="flex flex-col items-center justify-center py-1 text-xs hover:text-[#206be7]">
        <i class="fa-solid fa-phone text-sm text-[#206be7]"></i>
        <span class="text-[11px] mt-0.5">电话</span>
      </a>

      <a :href="`mailto:${companyContact.email}`" class="flex flex-col items-center justify-center py-1 text-xs hover:text-[#206be7]">
        <i class="fa-regular fa-envelope text-sm text-[#206be7]"></i>
        <span class="text-[11px] mt-0.5">邮箱</span>
      </a>

      <NuxtLink to="/contact" class="flex flex-col items-center justify-center py-1 text-xs hover:text-[#206be7]">
        <i class="fa-regular fa-comment-dots text-sm text-[#206be7]"></i>
        <span class="text-[11px] mt-0.5">咨询</span>
      </NuxtLink>

      <NuxtLink to="/about" class="flex flex-col items-center justify-center py-1 text-xs hover:text-[#206be7]">
        <i class="fa-solid fa-location-dot text-sm text-[#206be7]"></i>
        <span class="text-[11px] mt-0.5">地址</span>
      </NuxtLink>
    </div>
  </footer>
</template>
