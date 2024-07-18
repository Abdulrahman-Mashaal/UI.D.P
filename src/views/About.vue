<script setup>
import aboutSales from '@images/vector/about-sales.png'
import aboutMarketing from '@images/vector/about-marketing.png'
import aboutSupport from '@images/vector/about-support.png'
import RightArrowSVG from '@images/icons/right-arrow-gray.svg?component'
import LeftArrowSVG from '@images/icons/left-arrow-gray.svg?component'
</script>
<template>
    <section class="py-20 px-24">
        <div class="flex items-center justify-between mb-12">
            <h3>About us</h3>
            <div class="flex items-center gap-4">
             <button class="flex items-center justify-center w-8 h-8 rounded-full border border-[#5B5B5B]">
                <LeftArrowSVG alt="left arrow"/>
             </button>   
             <button class="flex items-center justify-center w-8 h-8 rounded-full border border-[#5B5B5B]">
                <RightArrowSVG alt="right arrow"/>
             </button>   
            </div>
        </div>
        <div class="overflow-hidden flex items-stretch gap-6">
            <div class="p-4 pb-8 bg-[#F7F8FA] rounded-xl max-w-[400px] border border-[#EAEBEF]">
                <div class="mb-6 h-9/12">
                    <img :src="aboutSales" alt="about sales" class="w-full h-auto">
                </div>
                <div>
                    <h5>Sales</h5>
                    <p class="text-sm text-[#ABACB2] ml-1 mr-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non, perspiciatis dolor ab repellendus et!</p>
                </div>
            </div>
            <div class="p-4 pb-8 bg-[#F7F8FA] rounded-xl max-w-[400px] border border-[#EAEBEF]">
                <div class="mb-6 h-9/12">
                    <img :src="aboutMarketing" alt="about marketing" class="w-full h-auto">
                </div>
                <div>
                    <h5>Marketing</h5>
                    <p class="text-sm text-[#ABACB2] ml-1 mr-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non, perspiciatis dolor ab repellendus et!</p>
                </div>
            </div>
            <div class="p-4 pb-8 bg-[#F7F8FA] rounded-xl max-w-[400px] border border-[#EAEBEF]">
                <div class="mb-6 h-9/12">
                    <img :src="aboutSupport" alt="about support" class="w-full h-auto">
                </div>
                <div>
                    <h5>Support</h5>
                    <p class="text-sm text-[#ABACB2] ml-1 mr-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non, perspiciatis dolor ab repellendus et!</p>
                </div>
            </div>
        </div>
      </section>
</template>
<style scoped>
</style>