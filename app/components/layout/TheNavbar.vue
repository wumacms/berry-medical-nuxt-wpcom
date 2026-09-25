<script setup lang="ts">
import AppLogo from "~/components/common/AppLogo.vue";

const route = useRoute();
const router = useRouter();

const mobileMenuOpen = ref(false);
const searchOpen = ref(false);
const searchQuery = ref("");
const searchInputRef = ref<HTMLInputElement | null>(null);

const toggleSearch = () => {
  searchOpen.value = !searchOpen.value;
  if (searchOpen.value) {
    nextTick(() => {
      searchInputRef.value?.focus();
    });
  }
};

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: "/search",
      query: { s: searchQuery.value.trim() },
    });
    searchOpen.value = false;
  }
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// Submenu dropdown toggles for mobile
const mobileSubmenuOpen = ref<Record<string, boolean>>({
  templates: false,
  services: false,
});

const toggleMobileSubmenu = (key: string) => {
  mobileSubmenuOpen.value[key] = !mobileSubmenuOpen.value[key];
};

watch(() => route.fullPath, () => {
  closeMobileMenu();
  searchOpen.value = false;
});
</script>

<template>
  <header class="header bg-white sticky top-0 left-0 w-full z-50 border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
    <div class="wpcom-container h-[72px] flex items-center justify-between gap-6">
      <!-- 网站 Logo -->
      <NuxtLink to="/" class="shrink-0 group flex items-center" rel="home">
        <AppLogo />
      </NuxtLink>

      <!-- 桌面端导航菜单 (WPCOM Module 7 Style) -->
      <nav class="hidden lg:flex items-center space-x-1 h-full">
        <!-- 首页 -->
        <NuxtLink
          to="/"
          class="nav-item h-full flex items-center px-3.5 text-sm font-medium text-gray-800 transition-colors relative hover:text-[#206be7]"
          :class="{ 'text-[#206be7] font-semibold active-nav': route.path === '/' }"
        >
          首页
          <span v-if="route.path === '/'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#206be7]"></span>
        </NuxtLink>

        <!-- 产品列表 -->
        <NuxtLink
          to="/cases"
          class="nav-item h-full flex items-center px-3.5 text-sm font-medium text-gray-800 transition-colors relative hover:text-[#206be7]"
          :class="{ 'text-[#206be7] font-semibold active-nav': route.path === '/cases' || route.path.startsWith('/cases/') }"
        >
          产品列表
          <span v-if="route.path === '/cases' || route.path.startsWith('/cases/')" class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#206be7]"></span>
        </NuxtLink>

        <!-- 列表模板 下拉菜单 -->
        <div class="relative group h-full flex items-center">
          <button
            class="nav-item h-full flex items-center gap-1 px-3.5 text-sm font-medium text-gray-800 hover:text-[#206be7] transition-colors cursor-pointer"
            :class="{ 'text-[#206be7] font-semibold': route.path.startsWith('/news') }"
          >
            列表模板
            <i class="fa-solid fa-angle-down text-[10px] text-gray-400 group-hover:text-[#206be7] transition-transform group-hover:rotate-180"></i>
          </button>

          <!-- 下拉子菜单 -->
          <div class="dropdown-menu absolute top-full left-0 w-44 bg-white border border-gray-100 shadow-xl rounded-b-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
            <NuxtLink
              to="/news"
              class="block px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50/80 hover:text-[#206be7] transition"
            >
              默认列表 (全部动态)
            </NuxtLink>
            <NuxtLink
              to="/cases"
              class="block px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50/80 hover:text-[#206be7] transition"
            >
              产品列表 (网格卡片)
            </NuxtLink>
            <NuxtLink
              to="/news?category=industry"
              class="block px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50/80 hover:text-[#206be7] transition"
            >
              图文列表 (行业动态)
            </NuxtLink>
            <NuxtLink
              to="/news?category=company"
              class="block px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50/80 hover:text-[#206be7] transition"
            >
              文章列表 (公司新闻)
            </NuxtLink>
          </div>
        </div>

        <!-- 服务方案 (图文高级下拉菜单 WPCOM Advanced Menu) -->
        <div class="relative group h-full flex items-center">
          <NuxtLink
            to="/services"
            class="nav-item h-full flex items-center gap-1 px-3.5 text-sm font-medium text-gray-800 hover:text-[#206be7] transition-colors"
            :class="{ 'text-[#206be7] font-semibold active-nav': route.path === '/services' }"
          >
            服务体系
            <i class="fa-solid fa-angle-down text-[10px] text-gray-400 group-hover:text-[#206be7] transition-transform group-hover:rotate-180"></i>
            <span v-if="route.path === '/services'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#206be7]"></span>
          </NuxtLink>

          <!-- 高级图文菜单 -->
          <div class="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-white border border-gray-100 shadow-2xl rounded-b-sm p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50 grid grid-cols-3 gap-3">
            <NuxtLink to="/services#design" class="block p-2 rounded-sm hover:bg-blue-50/60 transition group/sub">
              <div class="aspect-16/10 rounded-sm overflow-hidden bg-gray-100 mb-2">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=300&auto=format&fit=crop" alt="设计篇" class="w-full h-full object-cover group-hover/sub:scale-105 transition" />
              </div>
              <span class="block text-xs font-semibold text-gray-900 group-hover/sub:text-[#206be7]">设计篇 · 选址与工艺</span>
              <span class="block text-[11px] text-gray-500 truncate mt-0.5">分区规划与防护施工图</span>
            </NuxtLink>

            <NuxtLink to="/services#construction" class="block p-2 rounded-sm hover:bg-blue-50/60 transition group/sub">
              <div class="aspect-16/10 rounded-sm overflow-hidden bg-gray-100 mb-2">
                <img src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=300&auto=format&fit=crop" alt="施工篇" class="w-full h-full object-cover group-hover/sub:scale-105 transition" />
              </div>
              <span class="block text-xs font-semibold text-gray-900 group-hover/sub:text-[#206be7]">施工篇 · 辐射防护</span>
              <span class="block text-[11px] text-gray-500 truncate mt-0.5">衰变池与洁净净化工程</span>
            </NuxtLink>

            <NuxtLink to="/services#equipment" class="block p-2 rounded-sm hover:bg-blue-50/60 transition group/sub">
              <div class="aspect-16/10 rounded-sm overflow-hidden bg-gray-100 mb-2">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=300&auto=format&fit=crop" alt="设备与运维" class="w-full h-full object-cover group-hover/sub:scale-105 transition" />
              </div>
              <span class="block text-xs font-semibold text-gray-900 group-hover/sub:text-[#206be7]">运维篇 · 数字孪生</span>
              <span class="block text-[11px] text-gray-500 truncate mt-0.5">瑞核V1.0态势感知平台</span>
            </NuxtLink>
          </div>
        </div>

        <!-- 专业优势 -->
        <NuxtLink
          to="/advantages"
          class="nav-item h-full flex items-center px-3.5 text-sm font-medium text-gray-800 transition-colors relative hover:text-[#206be7]"
          :class="{ 'text-[#206be7] font-semibold active-nav': route.path === '/advantages' }"
        >
          专业优势
          <span v-if="route.path === '/advantages'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#206be7]"></span>
        </NuxtLink>

        <!-- 关于我们 -->
        <NuxtLink
          to="/about"
          class="nav-item h-full flex items-center px-3.5 text-sm font-medium text-gray-800 transition-colors relative hover:text-[#206be7]"
          :class="{ 'text-[#206be7] font-semibold active-nav': route.path === '/about' || route.path === '/company' }"
        >
          关于我们
          <span v-if="route.path === '/about' || route.path === '/company'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#206be7]"></span>
        </NuxtLink>

        <!-- 联系我们 -->
        <NuxtLink
          to="/contact"
          class="nav-item h-full flex items-center px-3.5 text-sm font-medium text-gray-800 transition-colors relative hover:text-[#206be7]"
          :class="{ 'text-[#206be7] font-semibold active-nav': route.path === '/contact' }"
        >
          联系我们
          <span v-if="route.path === '/contact'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#206be7]"></span>
        </NuxtLink>
      </nav>

      <!-- 头部右侧操作区 (搜索 + 咨询按钮 + 移动端折叠) -->
      <div class="flex items-center gap-3">
        <!-- 搜索触发器 -->
        <div class="relative">
          <button
            type="button"
            class="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:text-[#206be7] hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="搜索"
            @click="toggleSearch"
          >
            <i class="fa-solid fa-magnifying-glass text-sm"></i>
          </button>

          <!-- 搜索下拉展开窗 (WPCOM Search Index Form) -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 scale-95 -translate-y-2"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 -translate-y-2"
          >
            <div
              v-if="searchOpen"
              class="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white border border-gray-200 shadow-2xl rounded-sm p-3 z-50"
            >
              <form @submit.prevent="handleSearch" class="flex items-center gap-2">
                <input
                  ref="searchInputRef"
                  v-model="searchQuery"
                  type="text"
                  placeholder="输入关键词搜索..."
                  class="flex-1 text-xs border border-gray-300 rounded-sm px-3 py-2 outline-none focus:border-[#206be7] transition"
                />
                <button
                  type="submit"
                  class="wpcom-btn btn-primary !py-2 !px-3 text-xs"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </transition>
        </div>

        <!-- 方案对接 CTA -->
        <NuxtLink
          to="/contact"
          class="hidden sm:inline-flex wpcom-btn btn-primary !text-xs !py-2 !px-4"
        >
          咨询方案 <i class="fa-solid fa-arrow-right"></i>
        </NuxtLink>

        <!-- 移动端汉堡菜单按钮 -->
        <button
          class="lg:hidden w-9 h-9 flex items-center justify-center text-gray-700 hover:text-[#206be7] text-lg cursor-pointer"
          aria-label="切换菜单"
          @click="toggleMobileMenu"
        >
          <i :class="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>
    </div>

    <!-- 移动端侧滑抽屉 (WPCOM Mobile Drawer) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black/50 z-50 lg:hidden"
        @click="closeMobileMenu"
      >
        <div
          class="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 overflow-y-auto flex flex-col justify-between"
          @click.stop
        >
          <!-- 抽屉头部 -->
          <div>
            <div class="h-16 px-5 border-b border-gray-100 flex items-center justify-between">
              <AppLogo size="sm" />
              <button
                class="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900"
                @click="closeMobileMenu"
              >
                <i class="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            <!-- 抽屉搜索 -->
            <div class="p-4 border-b border-gray-100 bg-gray-50/50">
              <form @submit.prevent="handleSearch" class="flex gap-2">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="搜索本站内容..."
                  class="flex-1 text-xs bg-white border border-gray-200 rounded-sm px-3 py-2 outline-none focus:border-[#206be7]"
                />
                <button type="submit" class="wpcom-btn btn-primary !py-2 !px-3 text-xs">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            <!-- 抽屉导航链接 -->
            <div class="py-2 px-3 space-y-1 text-sm font-medium">
              <NuxtLink
                to="/"
                class="block px-3 py-2.5 rounded-sm hover:bg-blue-50/60 hover:text-[#206be7] transition"
                :class="{ 'bg-blue-50 text-[#206be7] font-semibold': route.path === '/' }"
                @click="closeMobileMenu"
              >
                首页
              </NuxtLink>

              <NuxtLink
                to="/cases"
                class="block px-3 py-2.5 rounded-sm hover:bg-blue-50/60 hover:text-[#206be7] transition"
                :class="{ 'bg-blue-50 text-[#206be7] font-semibold': route.path === '/cases' }"
                @click="closeMobileMenu"
              >
                产品列表
              </NuxtLink>

              <!-- 模板下拉折叠 -->
              <div>
                <button
                  class="w-full flex items-center justify-between px-3 py-2.5 rounded-sm hover:bg-blue-50/60 text-left transition"
                  @click="toggleMobileSubmenu('templates')"
                >
                  <span>列表模板</span>
                  <i class="fa-solid fa-angle-down text-xs transition-transform" :class="{ 'rotate-180': mobileSubmenuOpen.templates }"></i>
                </button>
                <div v-if="mobileSubmenuOpen.templates" class="pl-4 pr-2 py-1 space-y-1 bg-gray-50/60 rounded-sm text-xs">
                  <NuxtLink to="/news" class="block py-2 px-2 text-gray-600 hover:text-[#206be7]" @click="closeMobileMenu">全部动态</NuxtLink>
                  <NuxtLink to="/cases" class="block py-2 px-2 text-gray-600 hover:text-[#206be7]" @click="closeMobileMenu">产品列表</NuxtLink>
                  <NuxtLink to="/news?category=industry" class="block py-2 px-2 text-gray-600 hover:text-[#206be7]" @click="closeMobileMenu">图文列表 (行业动态)</NuxtLink>
                  <NuxtLink to="/news?category=company" class="block py-2 px-2 text-gray-600 hover:text-[#206be7]" @click="closeMobileMenu">文章列表 (公司新闻)</NuxtLink>
                </div>
              </div>

              <NuxtLink
                to="/services"
                class="block px-3 py-2.5 rounded-sm hover:bg-blue-50/60 hover:text-[#206be7] transition"
                :class="{ 'bg-blue-50 text-[#206be7] font-semibold': route.path === '/services' }"
                @click="closeMobileMenu"
              >
                服务体系
              </NuxtLink>

              <NuxtLink
                to="/advantages"
                class="block px-3 py-2.5 rounded-sm hover:bg-blue-50/60 hover:text-[#206be7] transition"
                :class="{ 'bg-blue-50 text-[#206be7] font-semibold': route.path === '/advantages' }"
                @click="closeMobileMenu"
              >
                专业优势
              </NuxtLink>

              <NuxtLink
                to="/about"
                class="block px-3 py-2.5 rounded-sm hover:bg-blue-50/60 hover:text-[#206be7] transition"
                :class="{ 'bg-blue-50 text-[#206be7] font-semibold': route.path === '/about' }"
                @click="closeMobileMenu"
              >
                关于我们
              </NuxtLink>

              <NuxtLink
                to="/contact"
                class="block px-3 py-2.5 rounded-sm hover:bg-blue-50/60 hover:text-[#206be7] transition"
                :class="{ 'bg-blue-50 text-[#206be7] font-semibold': route.path === '/contact' }"
                @click="closeMobileMenu"
              >
                联系我们
              </NuxtLink>
            </div>
          </div>

          <!-- 抽屉底部热线 -->
          <div class="p-4 border-t border-gray-100 bg-gray-50 text-xs text-gray-600">
            <span class="block text-gray-400">服务热线</span>
            <span class="block text-base font-bold text-[#206be7] mt-1">185-0387-8846</span>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
