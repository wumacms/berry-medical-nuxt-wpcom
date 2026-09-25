<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BannerMeta {
  category?: string;
  categoryTo?: string;
  date?: string;
  author?: string;
  views?: number | string;
}

interface Props {
  title: string;
  description?: string;
  bgImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  meta?: BannerMeta;
}

withDefaults(defineProps<Props>(), {
  description: "",
  bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
  breadcrumbs: () => [],
});
</script>

<template>
  <div>
    <!-- Banner Area -->
    <div class="relative h-60 bg-[#162132] overflow-hidden flex items-center">
      <img
        :src="bgImage"
        :alt="title"
        class="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#111927]/90 via-[#111927]/60 to-[#111927]/90" />

      <div class="relative z-10 w-full">
        <div class="max-w-[1200px] mx-auto px-5">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight m-0 leading-tight">
            {{ title }}
          </h1>

          <!-- Meta (for article detail) -->
          <div v-if="meta" class="mt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/80">
            <span v-if="meta.category" class="inline-flex items-center gap-1.5">
              <i class="fa-regular fa-folder-open text-[#206be7]"></i>
              <NuxtLink v-if="meta.categoryTo" :to="meta.categoryTo" class="hover:underline text-white">
                {{ meta.category }}
              </NuxtLink>
              <span v-else>{{ meta.category }}</span>
            </span>

            <span v-if="meta.date" class="inline-flex items-center gap-1.5 text-white/70">
              <i class="fa-regular fa-calendar text-[#206be7]"></i>
              {{ meta.date }}
            </span>

            <span v-if="meta.author" class="inline-flex items-center gap-1.5 text-white/70">
              <i class="fa-regular fa-user text-[#206be7]"></i>
              {{ meta.author }}
            </span>

            <span v-if="meta.views" class="inline-flex items-center gap-1.5 text-white/70">
              <i class="fa-regular fa-eye text-[#206be7]"></i>
              {{ meta.views }} 阅读
            </span>
          </div>

          <p
            v-else-if="description"
            class="mt-2 text-sm text-white/75 max-w-2xl font-normal leading-relaxed m-0"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Breadcrumbs Navigation -->
    <div class="bg-white border-b border-gray-200 py-3.5 mb-8">
      <div class="max-w-[1200px] mx-auto px-5">
        <ol class="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-500 m-0 p-0 list-none">
          <li class="flex items-center gap-1.5">
            <i class="fa-solid fa-house text-xs text-gray-400"></i>
            <NuxtLink to="/" class="text-gray-500 hover:text-[#206be7] transition">首页</NuxtLink>
          </li>

          <template v-for="(item, idx) in breadcrumbs" :key="idx">
            <li class="text-gray-300 text-[10px]" aria-hidden="true">
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li :class="{ 'text-gray-900 font-medium': !item.to || idx === breadcrumbs.length - 1 }">
              <NuxtLink
                v-if="item.to && idx !== breadcrumbs.length - 1"
                :to="item.to"
                class="text-gray-500 hover:text-[#206be7] transition"
              >
                {{ item.label }}
              </NuxtLink>
              <span v-else>{{ item.label }}</span>
            </li>
          </template>
        </ol>
      </div>
    </div>
  </div>
</template>
