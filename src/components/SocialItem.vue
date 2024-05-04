<script setup lang="ts">
export type SocialLink = {
  title: string
  href: string
  icon: any
}
// @ts-ignore
defineProps<SocialLink>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="flex items-center gap-3 text-gray-300 transition-all hover:scale-105 hover:text-gray-50"
    :aria-label="title"
  >
    <component :is="icon" class="size-6" />
    <span class="hidden sm:block">{{ title }}</span>
  </a>
</template>
