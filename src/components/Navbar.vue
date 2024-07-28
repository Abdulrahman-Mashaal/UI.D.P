<script setup>
  import logoSVG from '@images/logo.svg?component'
</script>
<template>
  <header class="border-b border-iron-300">
   <div class="container">
     <nav class="flex items-center h-[72px] px-5">
      <button class="me-[60px]">
        <logoSVG alt="logo"/>
      </button>
      <div class="flex items-center justify-between grow">
        <ul class="flex items-center justify-between gap-10">
          <li>
            <a href="#" class="nav-link">about us</a>
          </li>
          <li>
            <a href="#" class="nav-link">features</a>
          </li>
          <li>
            <a href="#" class="nav-link">pricing</a>
          </li>
          <li>
            <a href="#" class="nav-link">blog</a>
          </li>
          <li>
            <a href="#" class="nav-link">integration</a>
          </li>
          <li>
            <a href="#" class="nav-link">contact us</a>
          </li>
        </ul>
        <ul class="flex items-center justify-between gap-6">
          <li>
            <p class="nav-link">card (<span>0</span>)</p>
          </li>
          <li>
            <a href="#" class="nav-link py-2">sign in</a>
          </li>
          <li>
            <button class="btn btn--outlined">get started</button>
          </li>
        </ul>
      </div>
     </nav>
   </div> 
  </header>
</template>
<style scoped></style>
