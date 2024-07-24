<script setup>
import RightArrowSVG from '@images/icons/right-arrow.svg?component';
</script>
<template>
  <header class="bg-white">
    <div class="container">
      <nav class="flex items-center justify-between h-[72px]">
        <div>
          <router-link to="/home" class="flex items-center gap-1">
            <img src="@images/logo.png" alt="nav logo" />
          </router-link>
        </div>
        <div class="flex items-center gap-10">
          <button
            class="nav-link after-obj gap-1 after:content-[url('@images/icons/down-arrow.svg')] transition-after-base hover:after:-rotate-180"
          >
            Cards
          </button>
          <router-link to="/link" class="nav-link">About</router-link>
          <router-link to="/link" class="nav-link">App</router-link>
        </div>
        <div class="flex items-center gap-10">
          <a href="#" class="btn btn--text text-[16px] leading-6 font-medium">Login</a>
          <button class="btn btn--sm btn--primary text-[16px] leading-6">
            Apply now
            <RightArrowSVG alt="right arrow" class="ml-[10px]"/>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
<style lang="scss" scoped></style>
