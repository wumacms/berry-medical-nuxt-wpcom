<script setup lang="ts">
import { caseList } from "~/data/cases";
import { companyContact } from "~/data/navigation";

interface Props {
  activePath?: string;
  category?: string;
}

const props = defineProps<Props>();
const route = useRoute();

const navItems = [
  { label: "产品与案例", path: "/cases" },
  { label: "公司新闻", path: "/news?category=company" },
  { label: "行业动态", path: "/news?category=industry" },
  { label: "技术分享", path: "/news?category=tech" },
  { label: "关于我们", path: "/about" },
  { label: "联系我们", path: "/contact" },
];

const isActive = (itemPath: string) => {
  if (props.activePath && props.activePath === itemPath) return true;
  if (route.fullPath === itemPath) return true;
  if (itemPath === "/cases" && (route.path === "/cases" || route.path.startsWith("/cases/"))) return true;
  if (itemPath === "/about" && (route.path === "/about" || route.path === "/company")) return true;
  if (itemPath === "/contact" && route.path === "/contact") return true;
  return false;
};

// Recent 4 cases for widget
const recentCases = computed(() => caseList.slice(0, 4));
</script>

<template>
  <aside class="sidebar space-y-6">
    <!-- 栏目导航 Widget -->
    <div class="widget widget_nav_menu bg-white p-5 rounded-sm border border-gray-200">
      <h3
        class="widget-title text-base font-semibold text-gray-900 pb-3 mb-4 border-b-2 border-[#206be7] flex items-center justify-between">
        <span>快捷导航</span>
        <i class="fa-solid fa-compass text-xs text-[#206be7]"></i>
      </h3>
      <ul class="space-y-1.5 list-none p-0 m-0">
        <li v-for="item in navItems" :key="item.path" :class="{ current: isActive(item.path) }">
          <NuxtLink :to="item.path"
            class="flex items-center justify-between px-3.5 py-2.5 rounded-sm text-sm transition-all" :class="isActive(item.path)
              ? 'bg-[#206be7] text-white font-medium shadow-sm'
              : 'text-gray-600 hover:text-[#206be7] hover:bg-blue-50/70 hover:translate-x-1'
              ">
            <span>{{ item.label }}</span>
            <i class="fa-solid fa-angle-right text-xs opacity-70"></i>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- 推荐案例 Widget -->
    <div class="widget widget_lastest_products bg-white p-5 rounded-sm border border-gray-200">
      <h3
        class="widget-title text-base font-semibold text-gray-900 pb-3 mb-4 border-b-2 border-[#206be7] flex items-center justify-between">
        <span>服务案例</span>
        <NuxtLink to="/cases" class="text-xs font-normal text-gray-400 hover:text-[#206be7]">更多 &gt;</NuxtLink>
      </h3>
      <ul class="grid grid-cols-2 gap-3 list-none p-0 m-0">
        <li v-for="c in recentCases" :key="c.id" class="p-item group">
          <div
            class="p-item-wrap border border-gray-200 rounded-sm overflow-hidden hover:border-[#206be7] transition-all bg-white hover:-translate-y-0.5">
            <NuxtLink :to="`/cases/${c.id}`" class="block aspect-3/2 overflow-hidden bg-gray-100">
              <img :src="c.imageUrl" :alt="c.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" />
            </NuxtLink>
            <h4 class="title p-2 m-0 text-xs font-normal text-center truncate">
              <NuxtLink :to="`/cases/${c.id}`" :title="c.title" class="text-gray-800 hover:text-[#206be7] transition">
                {{ c.title }}
              </NuxtLink>
            </h4>
          </div>
        </li>
      </ul>
    </div>

    <!-- 联系咨询 Widget -->
    <div class="widget bg-gradient-to-br from-blue-50/60 to-white p-5 rounded-sm border border-blue-100">
      <h3 class="widget-title text-base font-semibold text-gray-900 pb-3 mb-4 border-b-2 border-[#206be7]">
        <span>服务咨询</span>
      </h3>
      <div class="space-y-3 text-xs text-gray-600">
        <p class="leading-relaxed">
          提供从选址规划、辐射防护施工到环评卫评验收的全生命周期闭环服务。
        </p>
        <div class="pt-2 border-t border-blue-100">
          <span class="block text-gray-400 text-[11px]">全国咨询热线</span>
          <span class="block text-lg font-bold text-[#206be7] mt-0.5">
            {{ companyContact.phone }}
          </span>
        </div>
        <div class="text-[11px] text-gray-500">
          客服工作时段：周一至周日 8:30 - 18:30
        </div>
        <NuxtLink to="/contact" class="wpcom-btn btn-primary w-full text-center text-xs py-2 mt-2">
          立即提交需求 <i class="fa-solid fa-arrow-right"></i>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>
