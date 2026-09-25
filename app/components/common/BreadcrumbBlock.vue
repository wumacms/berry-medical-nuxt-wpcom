<script setup lang="ts">
import type { BreadcrumbItem } from "~/types/blocks";

withDefaults(
  defineProps<{
    items?: BreadcrumbItem[];
    showHome?: boolean;
    spacing?: "default" | "none";
  }>(),
  {
    items: () => [],
    showHome: true,
    spacing: "default",
  }
);
</script>

<template>
  <nav
    v-if="(items && items.length > 0) || showHome"
    aria-label="面包屑导航"
    class="bg-white border-b border-gray-200 py-3.5"
    :class="{ 'mb-8': spacing === 'default' }"
  >
    <div class="max-w-[1200px] mx-auto px-5">
      <ol
        class="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-500 m-0 p-0 list-none"
        itemscope
        itemtype="https://schema.org/BreadcrumbList"
      >
        <!-- 首页项 -->
        <li
          v-if="showHome"
          class="flex items-center gap-1.5"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <i class="fa-solid fa-house text-xs text-gray-400" aria-hidden="true"></i>
          <NuxtLink to="/" itemprop="item" class="text-gray-500 hover:text-[#206be7] transition">
            <span itemprop="name">首页</span>
          </NuxtLink>
          <meta itemprop="position" content="1" />
        </li>

        <!-- 层级路径项 -->
        <template v-for="(item, idx) in items" :key="idx">
          <li class="text-gray-300 text-[10px]" aria-hidden="true">
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li
            class="flex items-center"
            :class="{ 'text-gray-900 font-medium': !item.to || idx === items.length - 1 }"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <NuxtLink
              v-if="item.to && idx !== items.length - 1"
              :to="item.to"
              itemprop="item"
              class="text-gray-500 hover:text-[#206be7] transition"
            >
              <span itemprop="name">{{ item.label }}</span>
            </NuxtLink>
            <span v-else itemprop="name">{{ item.label }}</span>
            <meta itemprop="position" :content="showHome ? (idx + 2).toString() : (idx + 1).toString()" />
          </li>
        </template>
      </ol>
    </div>
  </nav>
</template>
