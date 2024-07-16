<script setup>
import reversedLogo from '@images/reversed-logo.svg'
</script>
<template>
  <footer class="grid grid-cols-2 bg-[#2740BF] text-white-700 py-16 px-24">
    <div class="self-center">
      <!-- title -->
      <img :src="reversedLogo" alt="reverse logo" class="mb-3">
      <p class="mb-7 footer-link">Superchat - The name says it all</p>
      <div class="flex flex-col gap-3">
        <p class="footer-link before-obj gap-3 before:content-[url('@images/icons/phone.svg')]">+44 1234 051725</p>
        <p class="footer-link before-obj gap-3 before:content-[url('@images/icons/mail.svg')]">hello@superchat.com</p>
      </div>
    </div>
    <div class="flex items-start justify-between gap-28 self-start">
      <div>
        <p class="mb-4 text-base font-normal">Product</p>
        <div class="flex flex-col gap-2">
          <a href="#" class="footer-link">WhatsApp Newsletter</a>
          <a href="#" class="footer-link">Automation</a>
          <a href="#" class="footer-link">Integration</a>
          <a href="#" class="footer-link">Universal inbox</a>
          <a href="#" class="footer-link">Webchat</a>
        </div>
      </div>
      <div>
        <p class="mb-4 text-base font-normal">About</p>
        <div class="flex flex-col gap-2">
          <a href="#" class="footer-link">The goods</a>
          <a href="#" class="footer-link">Carrers</a>
          <a href="#" class="footer-link">Integrations</a>
          <a href="#" class="footer-link">Universal inbox</a>
          <a href="#" class="footer-link">Webchat</a>
        </div>
      </div>
      <div>
        <p class="mb-4 text-base font-normal">App</p>
        <div class="flex flex-col gap-2">
          <a href="#" class="footer-link">API Documentation</a>
          <a href="#" class="footer-link">Automations</a>
          <a href="#" class="footer-link">Integrations</a>
          <a href="#" class="footer-link">Universal Inbox</a>
          <a href="#" class="footer-link">Webchat</a>
        </div>
      </div>
      </div>
  </footer>
</template>
<style scoped>
</style>