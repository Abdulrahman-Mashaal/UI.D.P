<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <div>
    <Navbar />
    <main class="bg-link-water-200">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
<style scoped></style>
