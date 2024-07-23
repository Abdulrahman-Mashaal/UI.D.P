<script setup>
import FooterLogoSVG from '@images/footer-logo.svg?component'
</script>
<template>
  <div class="sm-container">
    <footer class="flex justify-between pb-[72px] px-24 border-b border-[#DDE5EC]">
      <div class="self-center">
        <!-- title -->
        <FooterLogoSVG alt="footer logo" class="mb-5"/>
        <p class="mb-10 footer-info max-w-[330px] text-wrap">There are many variations of passages Lorem the ipsum available it majority</p>
        <div class="grid grid-cols-5 grid-row-1 items-center mt-4 max-w-[330px]">
          <input
          type="text"
          class="col-start-1 col-end-6 row-start-1 border border-[#D6D6D7] row-end-2 bg-[#fff] rounded-[10px] w-full pl-3 py-2 placeholder-[#868C98] h-[59px]"
          placeholder="enter-your-email"
          />
          <a href="javascript:void(0)" class="me-1 col-start-5 col-end-6 row-start-1 row-end-2 justify-self-end items-self-stretch flex items-center w-fit justify-end bg-algae-green-300 rounded-[10px] h-12 px-6"><p class=" font-InterSemiBold text-sm  whitespace-nowrap ">Subscribe</p></a>
        </div>
      </div>
      <div>
        <p class="mb-4 text-base font-InterSemiBold">Services</p>
        <div class="flex flex-col gap-3">
          <p class="footer-info">WhatsApp Newsletter</p>
          <p class="footer-info">Automation</p>
          <p class="footer-info">Integration</p>
          <p class="footer-info">Universal inbox</p>
          <p class="footer-info">Webchat</p>
        </div>
      </div>
      <div>
        <p class="mb-4 text-base font-InterSemiBold">Contact us</p>
        <div class="flex flex-col gap-3">
          <p class="footer-info">The goods</p>
          <p class="footer-info">Carrers</p>
          <p class="footer-info">Integrations</p>
          <p class="footer-info">Universal inbox</p>
          <p class="footer-info">Webchat</p>
        </div>
      </div>
      <div>
        <p class="mb-4 text-base font-InterSemiBold">About Info</p>
        <div class="flex flex-col gap-3 max-w-[222px]">
          <p class="footer-info text-wrap">44 West Orchard Street Kings Mountain, NC 280887</p>
          <a href="tel:+201008760241" target="_blank" class="footer-link font-helvetica before-obj gap-3 before:content-[url('@images/icons/phone.svg')]">+20 100 876 0241</a>
          <a href="mailto:amashaal009@gmail.com" target="_blank" class="footer-link font-helvetica before-obj gap-3 before:content-[url('@images/icons/mail.svg')]">amashaal009@gmail.com</a>
        </div>
      </div>
    </footer>
  </div>
  <div class="text-center py-7">
    <p class="footer-info">&copy; 2024 Sark All Rights Reseved</p>
  </div>
</template>
<style scoped>
</style>