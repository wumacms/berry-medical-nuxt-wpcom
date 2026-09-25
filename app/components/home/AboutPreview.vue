<template>
  <section class="py-16 md:py-20 bg-gray-50/70 border-t border-b border-gray-200/60">
    <div class="wpcom-container">
      <SectionHeader title="关于我们" subtitle="专业的核医学场所建设全生命周期服务团队" />

      <div
        class="mc-item-wrap bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- 左侧图片 -->
        <div class="lg:col-span-6 overflow-hidden rounded-sm aspect-4/3 bg-gray-100 border border-gray-100">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
            alt="贝瑞医疗核医学场所建设工程" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy" />
        </div>

        <!-- 右侧介绍文字 -->
        <div class="lg:col-span-6 space-y-5 text-left">
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
            专注核医学场所建设一站式服务
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            贝瑞医疗科技（郑州）有限公司是一家专注于核医学工作场所规划设计、辐射防护施工、放射性废水衰变池系统、环评卫评药监综合验收以及数字化孪生运维的高新技术服务企业。
          </p>
          <p class="text-sm text-gray-600 leading-relaxed">
            技术团队核心成员深耕核技术应用与辐射防护领域15年以上，累计参与全国30余家三甲医院及科研药企的核医学场所实施建设，为客户提供从概念规划到合规运营的"交钥匙"闭环工程。
          </p>

          <div class="grid grid-cols-3 gap-4 pt-3 border-t border-gray-100">
            <div class="text-center">
              <span class="block text-2xl font-bold text-[#206be7]">15+</span>
              <span class="block text-xs text-gray-500 mt-1">年专业团队经验</span>
            </div>
            <div class="text-center">
              <span class="block text-2xl font-bold text-[#206be7]">30+</span>
              <span class="block text-xs text-gray-500 mt-1">场所建设实施</span>
            </div>
            <div class="text-center">
              <span class="block text-2xl font-bold text-[#206be7]">100%</span>
              <span class="block text-xs text-gray-500 mt-1">一次性验收达标</span>
            </div>
          </div>

          <div class="pt-2">
            <NuxtLink to="/about" class="wpcom-btn btn-primary btn-lg inline-flex items-center gap-2">
              <span>深入了解贝瑞医疗</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
