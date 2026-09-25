<script setup lang="ts">
interface Props {
  tag?: string;
  title: string;
  description?: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "",
  description: "",
  subtitle: "",
  align: "center",
  dark: false,
});

const displaySubtitle = computed(() => props.subtitle || props.description || props.tag);
</script>

<template>
  <div
    class="my-8 md:my-11"
    :class="[
      align === 'left' ? 'text-left' : 'text-center',
      dark ? 'text-white' : 'text-gray-900',
    ]"
  >
    <div class="inline-flex items-center justify-center gap-3 sm:gap-6 md:gap-8 px-2 sm:px-4">
      <!-- 左侧斜纹装饰条 (自适应深色/浅色) -->
      <svg
        class="w-8 sm:w-12 md:w-[75px] h-3 sm:h-4 md:h-[23px] shrink-0"
        :class="dark ? 'text-white/20' : 'text-gray-300/80'"
        viewBox="0 0 75 23"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M16.007 1.634c.8.594.978 1.718.4 2.53L4.366 21.104a1.756 1.756 0 0 1-2.478.392 1.83 1.83 0 0 1-.401-2.53L13.53 2.026a1.756 1.756 0 0 1 2.478-.392zm38 0c.8.594.978 1.718.4 2.53l-12.042 16.94a1.756 1.756 0 0 1-2.478.392 1.83 1.83 0 0 1-.401-2.53l12.043-16.94a1.756 1.756 0 0 1 2.478-.392m-19 0c.8.594.978 1.718.4 2.53l-12.042 16.94a1.756 1.756 0 0 1-2.478.392 1.83 1.83 0 0 1-.401-2.53l12.043-16.94a1.756 1.756 0 0 1 2.478-.392m38 0c.8.594.978 1.718.4 2.53l-12.042 16.94a1.756 1.756 0 0 1-2.478.392 1.83 1.83 0 0 1-.401-2.53l12.043-16.94a1.756 1.756 0 0 1 2.478-.392"
        />
      </svg>

      <!-- 标题文本区 -->
      <div class="text-center">
        <h2
          class="text-xl sm:text-2xl md:text-[30px] font-semibold tracking-tight m-0 leading-tight"
          :class="dark ? 'text-white' : 'text-gray-900'"
        >
          {{ title }}
        </h2>
        <span
          v-if="displaySubtitle"
          class="block text-xs sm:text-sm font-normal mt-2 tracking-wide"
          :class="dark ? 'text-white/70' : 'text-gray-500'"
        >
          {{ displaySubtitle }}
        </span>
      </div>

      <!-- 右侧斜纹装饰条 -->
      <svg
        class="w-8 sm:w-12 md:w-[75px] h-3 sm:h-4 md:h-[23px] shrink-0"
        :class="dark ? 'text-white/20' : 'text-gray-300/80'"
        viewBox="0 0 75 23"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M16.007 1.634c.8.594.978 1.718.4 2.53L4.366 21.104a1.756 1.756 0 0 1-2.478.392 1.83 1.83 0 0 1-.401-2.53L13.53 2.026a1.756 1.756 0 0 1 2.478-.392zm38 0c.8.594.978 1.718.4 2.53l-12.042 16.94a1.756 1.756 0 0 1-2.478.392 1.83 1.83 0 0 1-.401-2.53l12.043-16.94a1.756 1.756 0 0 1 2.478-.392m-19 0c.8.594.978 1.718.4 2.53l-12.042 16.94a1.756 1.756 0 0 1-2.478.392 1.83 1.83 0 0 1-.401-2.53l12.043-16.94a1.756 1.756 0 0 1 2.478-.392m38 0c.8.594.978 1.718.4 2.53l-12.042 16.94a1.756 1.756 0 0 1-2.478.392 1.83 1.83 0 0 1-.401-2.53l12.043-16.94a1.756 1.756 0 0 1 2.478-.392"
        />
      </svg>
    </div>
  </div>
</template>
