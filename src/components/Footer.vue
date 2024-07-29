<script setup>
import xSVG from '@images/icons/social-x.svg?component'
import facebookSVG from '@images/icons/social-facebook.svg?component'
import youtubeSVG from '@images/icons/social-youtube.svg?component'
import instagramSVG from '@images/icons/social-instagram.svg?component'
</script>
<template>
  <footer class="bg-blackPearl-950 pt-20 pb-[148px]">
    <div class="container">
      <div>
        <div>
          <h4></h4>
          <p class="py-2 px-3 rounded-[100px] bg-elephant-950 before-obj gap-1 before:content-[url('@images/icons/green-dot.svg')] text-sm text-white">
            Systems running smoothly
        </p>
        <!-- social -->
        <div class="flex items-center justify-between gap-[10px]">
          <xSVG alt="x icon"/>
          <facebookSVG alt="facebook icon"/>
          <youtubeSVG alt="youtube icon"/>
          <instagramSVG alt="instagram icon"/>
        </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
