<script setup>
import navBtn from '@images/nav-btn.svg';
import downArrow from '@images/down-arrow.svg';
</script>
<template>
  <nav class="px-24 flex items-center justify-between h-[72px] border">
    <div>
      <router-link to="/home" class="flex items-center gap-1">
        <img :src="navBtn" alt="nav logo" />
        <span class="text-lg"> Hala_Lab </span>
      </router-link>
    </div>
      <div class="flex items-center gap-10">
        <button
          class="nav-link relative inline-flex items-center gap-1 after:inline-flex after:items-center after:justify-center after:w-5 after:h-5 after:leading-[0] after:content-[url('@images/down-arrow.svg')] after:transition-rotate after:duration-300 hover:after:-rotate-180"
        >
          Cards
        </button>
        <router-link to="/link" class="nav-link">About</router-link>
        <router-link to="/link" class="nav-link">App</router-link>
      </div>
      <div class="flex items-center gap-10">
        <router-link to="/link">Login</router-link>
        <button>applyNow</button>
      </div>
  </nav>
</template>
<style lang="scss" scoped></style>

