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
  <div class="sec-title sec-title-3" :class="[
    align === 'left' ? 'text-left' : 'text-center',
    dark ? 'text-white' : ''
  ]">
    <div class="sec-title-wrap">
      <h2 :class="dark ? '!text-white' : ''">{{ title }}</h2>
      <span v-if="displaySubtitle" :class="dark ? '!text-white/70' : ''">{{ displaySubtitle }}</span>
    </div>
  </div>
</template>
