<script setup>
import aboutSales from '@images/vector/about-sales.png';
import aboutMarketing from '@images/vector/about-marketing.png';
import aboutSupport from '@images/vector/about-support.png';
import RightArrowSVG from '@images/icons/right-arrow-gray.svg?component';
import LeftArrowSVG from '@images/icons/left-arrow-gray.svg?component';
</script>
<template>
  <section class="py-20">
    <div class="container">
      <div class="flex items-center justify-between gap-4 mb-12">
        <h3 class="text-[42px] font-medium leading-[50px] text-codgray-950 tracking-maxtight">About us</h3>
        <div class="flex items-center gap-5">
          <button
            class="flex items-center justify-center w-[26px] h-[26px] rounded-full border border-[#5B5B5B]"
          >
            <LeftArrowSVG alt="left arrow" />
          </button>
          <button
            class="flex items-center justify-center w-[26px] h-[26px] rounded-full border border-[#5B5B5B]"
          >
            <RightArrowSVG alt="right arrow" />
          </button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <div class="p-4 pb-8 bg-[#F7F8FA] rounded-xl border border-[#EAEBEF]">
          <img
            :src="aboutSales"
            alt="about sales"
            class="object-cover w-full aspect-[1.38] mb-6"
          />
          <div>
            <h5 class="line-clamp-1 mb-2 leading-[28px] text-cinder-950">Sales</h5>
            <p class="text-sm text-[#ABACB2] ml-1 mr-11 line-clamp-3">
              Boost your sales performance with Superchat. Automate processes,
              qualify your leads and
            </p>
          </div>
        </div>
        <div class="p-4 pb-8 bg-[#F7F8FA] rounded-xl border border-[#EAEBEF]">
          <img
            :src="aboutMarketing"
            alt="about marketing"
            class="object-cover w-full aspect-[1.38] mb-6"
          />
          <div>
            <h5 class="line-clamp-1 mb-2 leading-[28px] text-cinder-950">Marketing</h5>
            <p class="text-sm text-[#ABACB2] ml-1 mr-11 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non,
              perspiciatis dolor ab repellendus et!
            </p>
          </div>
        </div>
        <div class="p-4 pb-8 bg-[#F7F8FA] rounded-xl border border-[#EAEBEF]">
          <img
            :src="aboutSupport"
            alt="about support"
            class="object-cover w-full aspect-[1.38] mb-6"
          />
          <div>
            <h5 class="line-clamp-1 mb-2 leading-[28px] text-cinder-950">Support</h5>
            <p class="text-sm text-[#ABACB2] ml-1 mr-11 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non,
              perspiciatis dolor ab repellendus et!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
