<script setup>
import facebookSVG from '@images/icons/social-facebook.svg?component'
import twitterSVG from '@images/icons/social-twitter.svg?component'
</script>
<template>
  <footer class="bg-[#ECEFEE] pt-20">
    <div class="container">
      <div class="flex items-start justify-center lg:justify-start flex-wrap gap-16 xl:gap-[15rem] 4xl:gap-[18.75rem]">
        <div class="max-w-[270px]">
          <img src="@images/vector/footer.png" alt="logo">
        <!-- social -->
        <div class="flex items-center gap-[22px] mt-[60px]">
          <a href="#" class="social-icon">
            <facebookSVG alt="facebook icon"/>
          </a>
          <a href="#" class="social-icon">
            <twitterSVG alt="twitter icon"/>
          </a>
          <a href="#" class="social-icon">
            <facebookSVG alt="facebook icon"/>
          </a>
          <a href="#" class="social-icon">
            <twitterSVG alt="twitter icon"/>
          </a>
        </div>
        </div>
        <div class="flex items-start justify-center lg:justify-between flex-wrap gap-20 xl:gap-[5rem] 4xl:gap-[15.375rem]">
          <ul class="flex flex-col spacer-y-4">
            <li>
              <span class="footer-link">
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
              <span class="footer-link">
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
              <span class="footer-link">
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
              <span class="footer-link">
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
  </footer>
</template>
<style scoped></style>