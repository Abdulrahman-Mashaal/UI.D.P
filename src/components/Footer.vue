<script setup>
import xSVG from '@images/icons/social-x.svg?component'
import facebookSVG from '@images/icons/social-facebook.svg?component'
import youtubeSVG from '@images/icons/social-youtube.svg?component'
import instagramSVG from '@images/icons/social-instagram.svg?component'
</script>
<template>
  <footer class="bg-blackPearl-950 pt-20">
    <div class="container">
      <div class="flex items-start justify-between gap-1">
        <div class="max-w-[270px]">
          <p class="text-base text-white font-medium mb-4">4517 Washington Ave. Manchester, Kentucky 39495</p>
          <p class="py-2 px-3 rounded-[100px] bg-elephant-950 before-obj gap-1 before:content-[url('@images/icons/green-dot.svg')] text-sm text-white">
            Systems running smoothly
        </p>
        <!-- social -->
        <div class="flex items-center gap-[10px] mt-[26px]">
          <a href="#" class="social-icon">
            <xSVG alt="x icon"/>
          </a>
          <a href="#" class="social-icon">
            <facebookSVG alt="facebook icon"/>
          </a>
          <a href="#" class="social-icon">
            <youtubeSVG alt="youtube icon"/>
          </a>
          <a href="#" class="social-icon">
            <instagramSVG alt="instagram icon"/>
          </a>
        </div>
        </div>
        <div class="flex items-start justify-between gap-[114px]">
          <ul class="flex flex-col spacer-y-4">
            <li>
              <span class="footer-link text-base font-semibold text-white">
                  product
              </span>
            </li>
            <li>
              <span class="footer-link">
                  about us
              </span>
            </li>
            <li>
              <span class="footer-link">
                  features
              </span>
            </li>
            <li>
              <span class="footer-link">
                  blogs
              </span>
            </li>
            <li>
              <span class="footer-link">
                  reviews
              </span>
            </li>
            <li>
              <span class="footer-link">
                  pricing
              </span>
            </li>
          </ul>
          <ul class="flex flex-col spacer-y-4">
            <li>
              <span class="footer-link text-base font-semibold text-white">
                  company
              </span>
            </li>
            <li>
              <span class="footer-link">
                  integrations
              </span>
            </li>
            <li>
              <span class="footer-link">
                  careers
              </span>
            </li>
            <li>
              <span class="footer-link">
                  contact us
              </span>
            </li>
            <li>
              <span class="footer-link">
                  FAQ's
              </span>
            </li>
          </ul>
          <ul class="flex flex-col spacer-y-4">
            <li>
              <span class="footer-link text-base font-semibold text-white">
                  resources
              </span>
            </li>
            <li>
              <span class="footer-link">
                  changelog
              </span>
            </li>
            <li>
              <span class="footer-link">
                  cookie policy
              </span>
            </li>
            <li>
              <span class="footer-link">
                  coming soon
              </span>
            </li>
            <li>
              <span class="footer-link">
                  error 404
              </span>
            </li>
          </ul>
          <ul class="flex flex-col spacer-y-4">
            <li>
              <span class="footer-link text-base font-semibold text-white">
                  utilities
              </span>
            </li>
            <li>
              <span class="footer-link">
                  privacy policy
              </span>
            </li>
            <li>
              <span class="footer-link">
                  licensing
              </span>
            </li>
            <li>
              <span class="footer-link">
                  terms &amp; conditions
              </span>
            </li>
            <li>
              <span class="footer-link">
                  password
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-elephant-950 py-[21px] mt-[148px]">
       <div class="container">
        <div class="flex items-center justify-between">
          <p class="text-sm text-starDust-400 ">Copyright &copy; 2024 Zenify. All rights reserved.</p>
          <p class="text-sm text-starDust-400 ">Designed by Onmix. Powered by Webflow.</p>
        </div>
       </div>
    </div>
  </footer>
</template>
<style scoped></style>
