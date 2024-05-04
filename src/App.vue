<script setup lang="ts">
// @ts-ignore
import { SpeedInsights } from '@vercel/speed-insights/vue';
import SocialList from './components/SocialList.vue';
import { RESUME } from './constants';
</script>

<template>
  <speed-insights />

  <main
    class="min-h-dvh bg-slate-900 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(119,198,196,0.3),rgba(255,255,255,0))] text-gray-50">
    <div class="mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center py-16 px-6">
      <div class="mb-14 flex flex-wrap items-center justify-center gap-10 sm:mb-20 sm:gap-20">
        <img src="/images/avatar.jpeg" alt="Chi Thanh Dang" class="size-32 rounded-xl sm:size-40" />
        <div class="group">
          <div class="mb-2 text-xl transition-all group-hover:-translate-x-1 sm:text-2xl">
            <span class="me-2 font-light animate-bounce">Hi,</span>
            <span class="font-bold">I'm</span>
          </div>
          <h2 class="text-[2.75rem] font-black transition-all group-hover:translate-x-1 sm:text-7xl">
            {{ RESUME.fullname }} <span class="text-3xl">(tist)</span>
          </h2>
        </div>
      </div>

      <div class="mb-32 sm:text-center">
        <h2 class="mb-6 text-3xl font-bold sm:mb-8 sm:text-2xl">
          Full Stack Engineer focused on building products with
          <span class="text-blue-300 underline underline-offset-8">
            "extra attention to detail"
          </span>
        </h2>

        <div class="mb-6 text-base font-light leading-loose text-gray-300 lg:text-lg">
          <div class="font-bold flex flex-wrap gap-1">
            Technologies:
            <span v-for="(tech, index) in RESUME.technologies" :key="index" class="technology">
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="text-base font-light leading-loose text-gray-300 lg:text-lg">
          <p>
            {{ RESUME.description }}
          </p>
        </div>
      </div>

      <div>
        <social-list />
      </div>
    </div>
  </main>
</template>

<style scoped>
.technology {
  display: inline-block;
  margin-right: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0.5px 12px;
  border-radius: 6px;
  color: #0f172a
}
</style>
