<script setup>
import logo from "@images/logo.svg";
</script>
<template>
  <div class="bg-link-water-200">
    <nav class="flex items-center h-28 justify-between container">
      <div>
        <img :src="logo" alt="logo" />
      </div>
      <div class="flex items-center justify-between gap-8">
        <a href="#" class="nav-link">demos</a>
        <a href="#" class="nav-link">about</a>
        <a href="#" class="nav-link">blog</a>
        <a href="#" class="nav-link">pages</a>
        <a href="#" class="nav-link">contact</a>
      </div>
      <div class="flex items-center justify-between gap-8">
        <a href="#" class="btn btn--text">sign in</a>
        <button class="btn btn--primary">get started free</button>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
