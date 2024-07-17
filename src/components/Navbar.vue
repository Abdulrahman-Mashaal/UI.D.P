<script setup>
import logo from '@images/logo.svg';
import rightArrow from '@images/icons/right-arrow.svg';
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
        class="nav-link after-obj gap-1 font-helvetica after:content-[url('@images/icons/down-arrow.svg')] transition-after-base hover:after:-rotate-180"
      >
        Cards
      </button>
      <router-link to="/link" class="nav-link">About</router-link>
      <router-link to="/link" class="nav-link">App</router-link>
    </div>
    <div class="flex items-center gap-10">
      <a href="#" class="btn btn--text text-base font-normal">Login</a>
      <button
        class="btn btn--sm btn--primary text-base"
      >
        Apply now
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.50004 11L6.5 6L1.5 1" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16"/>
          </svg>
          
      </button>
    </div>
  </nav>
</template>
<style lang="scss" scoped></style>
