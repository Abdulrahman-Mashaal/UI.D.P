<script setup>
import logo from '@images/logo.svg';
</script>
<template>
  <nav class="px-24 flex items-center justify-between h-16">
    <div>
      <router-link to="/home" class="flex items-center gap-1">
        <img :src="logo" alt="nav logo" />
      </router-link>
    </div>
      <div class="flex items-center gap-10">
        <button
          class="nav-link after-obj gap-1 after:content-[url('@images/down-arrow.svg')] transition-after-base hover:after:-rotate-180"
        >
          Cards
        </button>
        <router-link to="/link" class="nav-link">About</router-link>
        <router-link to="/link" class="nav-link">App</router-link>
      </div>
      <div class="flex items-center gap-10">
        <router-link to="/link">Login</router-link>
        <button class="btn-compact btn-flat rounded-3xl after-obj gap-2 after:content-[url('@images/right-arrow.svg')] transition-after-base hover:after:translate-x-1">Apply now</button>
      </div>
  </nav>
</template>
<style lang="scss" scoped></style>

