<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="max-w-[1200px] mx-auto px-5">
      <SectionHeader title="服务项目" subtitle="我们提供的核医学场所建设全流程服务" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- 卡片 1 -->
        <NuxtLink to="/services#design"
          class="group p-8 bg-white border border-gray-200/90 rounded-sm hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center">
          <div
            class="w-16 h-16 rounded-full bg-blue-50 text-[#206be7] mx-auto flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition-colors duration-300">
            <i class="fa-solid fa-compass-drafting"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#206be7] transition-colors">
            选址与工艺规划
          </h4>
          <div class="text-xs text-gray-500 leading-relaxed">
            <p>以核医学临床流程与辐射安全为核心，精确划分控制区与监督区，优化人流物流动线。</p>
          </div>
        </NuxtLink>

        <!-- 卡片 2 -->
        <NuxtLink to="/services#construction"
          class="group p-8 bg-white border border-gray-200/90 rounded-sm hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center">
          <div
            class="w-16 h-16 rounded-full bg-blue-50 text-[#206be7] mx-auto flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition-colors duration-300">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#206be7] transition-colors">
            辐射防护与施工
          </h4>
          <div class="text-xs text-gray-500 leading-relaxed">
            <p>高标铅复合屏蔽工程、电动防护铅门、防辐射铅玻璃，经济适用兼顾防护合规。</p>
          </div>
        </NuxtLink>

        <!-- 卡片 3 -->
        <NuxtLink to="/services#construction"
          class="group p-8 bg-white border border-gray-200/90 rounded-sm hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center">
          <div
            class="w-16 h-16 rounded-full bg-blue-50 text-[#206be7] mx-auto flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition-colors duration-300">
            <i class="fa-solid fa-water"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#206be7] transition-colors">
            衰变池与洁净工程
          </h4>
          <div class="text-xs text-gray-500 leading-relaxed">
            <p>放射性废水多级衰变池系统、C级洁净背景与百级层流保护，保障环保安全排废。</p>
          </div>
        </NuxtLink>

        <!-- 卡片 4 -->
        <NuxtLink to="/advantages"
          class="group p-8 bg-white border border-gray-200/90 rounded-sm hover:border-[#206be7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center">
          <div
            class="w-16 h-16 rounded-full bg-blue-50 text-[#206be7] mx-auto flex items-center justify-center text-2xl mb-6 group-hover:bg-[#206be7] group-hover:text-white transition-colors duration-300">
            <i class="fa-solid fa-network-wired"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#206be7] transition-colors">
            数字孪生运维平台
          </h4>
          <div class="text-xs text-gray-500 leading-relaxed">
            <p>瑞核V1.0态势感知平台，实现设备运转、空间剂量与负压排风一体化智能预警。</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
