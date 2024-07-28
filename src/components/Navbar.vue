<script setup>
    import logoSVG from '@images/logo.svg?component'
</script>
<template>
  <div class="bg-link-water-200">
    <nav class="flex items-center h-28 justify-between container">
      <div>
        <logoSVG alt="logo" />
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
