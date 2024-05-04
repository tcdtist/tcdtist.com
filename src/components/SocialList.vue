<script setup lang="ts">
import SocialItem, { SocialLink } from './SocialItem.vue'
import FacebookIcon from './icons/FacebookIcon.vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'
import LinkedInIcon from './icons/LinkedInIcon.vue'
import XIcon from './icons/XIcon.vue'

import { SOCIAL_LINK } from '../constants'

const socials: SocialLink[] = [
  {
    href: SOCIAL_LINK.GITHUB,
    title: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: SOCIAL_LINK.X,
    title: 'Twitter',
    icon: XIcon,
  },
  {
    href: SOCIAL_LINK.LINKEDIN,
    title: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: SOCIAL_LINK.FACEBOOK,
    title: 'Facebook',
    icon: FacebookIcon,
  },
  {
    href: SOCIAL_LINK.INSTAGRAM,
    title: 'Instagram',
    icon: InstagramIcon,
  },
]
</script>

<template>
  <ul class="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
    <li v-for="social in socials" :key="social.title">
      <social-item
        :href="social.href"
        :title="social.title"
        :icon="social.icon"
      />
    </li>
  </ul>
</template>
