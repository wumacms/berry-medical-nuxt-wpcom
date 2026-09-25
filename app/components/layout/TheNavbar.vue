<script setup lang="ts">
import { mainNav, companyContact } from "~/data/navigation";

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
const mobileSubmenuOpen = ref<Record<string, boolean>>({});

const toggleMobileSubmenu = (key: string) => {
  mobileSubmenuOpen.value[key] = !mobileSubmenuOpen.value[key];
};

// Check if nav item or its children match current route
const isActiveNav = (item: (typeof mainNav)[0]) => {
  if (route.path === item.path) return true;
  if (item.path !== "/" && route.path.startsWith(item.path.split("#")[0].split("?")[0])) return true;
  if (item.children?.some((c) => route.path === c.path.split("#")[0].split("?")[0])) return true;
  // Special: /about and /company share the same page
  if (item.path === "/about" && route.path === "/company") return true;
  return false;
};

// Determine if a dropdown has images (mega-menu style) or is a simple list
const hasMegaMenu = (item: (typeof mainNav)[0]) => {
  return item.children?.some((c) => c.image);
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

      <!-- 桌面端导航菜单 (数据驱动) -->
      <nav class="hidden lg:flex items-center space-x-1 h-full">
        <template v-for="item in mainNav" :key="item.path">
          <!-- 无子菜单：普通导航链接 -->
          <NuxtLink
            v-if="!item.children"
            :to="item.path"
            class="nav-item h-full flex items-center px-3.5 text-sm font-medium text-gray-800 transition-colors relative hover:text-[#206be7]"
            :class="{ 'text-[#206be7] font-semibold active-nav': isActiveNav(item) }"
          >
            {{ item.title }}
            <span v-if="isActiveNav(item)" class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#206be7]"></span>
          </NuxtLink>

          <!-- 有子菜单：带下拉的导航项 -->
          <div v-else class="relative group h-full flex items-center">
            <NuxtLink
              :to="item.path"
              class="nav-item h-full flex items-center gap-1 px-3.5 text-sm font-medium text-gray-800 hover:text-[#206be7] transition-colors"
              :class="{ 'text-[#206be7] font-semibold active-nav': isActiveNav(item) }"
            >
              {{ item.title }}
              <i class="fa-solid fa-angle-down text-[10px] text-gray-400 group-hover:text-[#206be7] transition-transform group-hover:rotate-180"></i>
              <span v-if="isActiveNav(item)" class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#206be7]"></span>
            </NuxtLink>

            <!-- 图文高级下拉菜单 (mega-menu) -->
            <div
              v-if="hasMegaMenu(item)"
              class="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-white border border-gray-100 shadow-2xl rounded-b-sm p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50 grid grid-cols-3 gap-3"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.path"
                :to="child.path"
                class="block p-2 rounded-sm hover:bg-blue-50/60 transition group/sub"
              >
                <div class="aspect-16/10 rounded-sm overflow-hidden bg-gray-100 mb-2">
                  <img :src="child.image" :alt="child.title" class="w-full h-full object-cover group-hover/sub:scale-105 transition" />
                </div>
                <span class="block text-xs font-semibold text-gray-900 group-hover/sub:text-[#206be7]">{{ child.title }}</span>
                <span class="block text-[11px] text-gray-500 truncate mt-0.5">{{ child.description }}</span>
              </NuxtLink>
            </div>

            <!-- 普通下拉子菜单 -->
            <div
              v-else
              class="dropdown-menu absolute top-full left-0 w-44 bg-white border border-gray-100 shadow-xl rounded-b-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.path"
                :to="child.path"
                class="block px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50/80 hover:text-[#206be7] transition"
              >
                {{ child.title }}
              </NuxtLink>
            </div>
          </div>
        </template>
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

            <!-- 抽屉导航链接 (数据驱动) -->
            <div class="py-2 px-3 space-y-1 text-sm font-medium">
              <template v-for="item in mainNav" :key="item.path">
                <!-- 无子菜单 -->
                <NuxtLink
                  v-if="!item.children"
                  :to="item.path"
                  class="block px-3 py-2.5 rounded-sm hover:bg-blue-50/60 hover:text-[#206be7] transition"
                  :class="{ 'bg-blue-50 text-[#206be7] font-semibold': isActiveNav(item) }"
                  @click="closeMobileMenu"
                >
                  {{ item.title }}
                </NuxtLink>

                <!-- 有子菜单：折叠展开 -->
                <div v-else>
                  <button
                    class="w-full flex items-center justify-between px-3 py-2.5 rounded-sm hover:bg-blue-50/60 text-left transition"
                    @click="toggleMobileSubmenu(item.path)"
                  >
                    <span>{{ item.title }}</span>
                    <i class="fa-solid fa-angle-down text-xs transition-transform" :class="{ 'rotate-180': mobileSubmenuOpen[item.path] }"></i>
                  </button>
                  <div v-if="mobileSubmenuOpen[item.path]" class="pl-4 pr-2 py-1 space-y-1 bg-gray-50/60 rounded-sm text-xs">
                    <NuxtLink
                      v-for="child in item.children"
                      :key="child.path"
                      :to="child.path"
                      class="block py-2 px-2 text-gray-600 hover:text-[#206be7]"
                      @click="closeMobileMenu"
                    >
                      {{ child.title }}
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <!-- 抽屉底部热线 -->
          <div class="p-4 border-t border-gray-100 bg-gray-50 text-xs text-gray-600">
            <span class="block text-gray-400">服务热线</span>
            <span class="block text-base font-bold text-[#206be7] mt-1">{{ companyContact.phone }}</span>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
