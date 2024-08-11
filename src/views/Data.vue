<script setup>
import greenCheckedSVG from '@images/icons/green-checked.svg'
</script>
<template>
    <section class="py-12 bg-deepSapphir-500">
        <div class="container">
            <div class="flex flex-col items-center justify-center xl:flex-row xl:items-center xl:justify-between xl:px-4">
                <div class="xl:w-5/12">
                    <img src="@images/vector/data.png" alt="data">
                </div>
                <div class="xl:w-5/12 xl:mt-14">
                 <h1 class="text-center md:text-left text-white mt-5 lg:mt-0 font-normal font-Hind text-2xl lg:text-4xl">What is weekly insight calls?</h1>   
                 <p class="mt-[30px] text-xs md:text-base font-normal text-[#ECFFFC]">You can get a tactical edge by listening to our weekly insight calls.</p>
                 <ul class="flex flex-col gap-4 mt-[29px]">
                    <li class="inline-flex md:items-center gap-5 ">
                        <div class="min-w-8 min-h-8 flex items-center justify-center">
                            <greenCheckedSVG/>
                        </div>
                        <p class="text-[#ECFFFC] text-xs font-normal xl:text-base ">How to get high-paying clients</p>
                    </li>
                    <li class="inline-flex md:items-center gap-5 ">
                        <div class="min-w-8 min-h-8 flex items-center justify-center">
                            <greenCheckedSVG/>
                        </div>
                        <p class="text-[#ECFFFC] text-xs font-normal xl:text-base ">How to effectively use email marketing</p>
                    </li>
                    <li class="inline-flex md:items-center gap-5 ">
                        <div class="min-w-8 min-h-8 flex items-center justify-center">
                            <greenCheckedSVG/>
                        </div>
                        <p class="text-[#ECFFFC] text-xs font-normal xl:text-base ">How to turn people who follow you on social media into email subscribers and devotedclients</p>
                    </li>
                   
                 </ul>
                 <div class="mt-[52px] flex items-center justify-center lg:justify-start">
                    <button class="btn btn--white text-base text-plantation-800 border-[#C5D4CC] bg-[#F0FDF6] w-fit after-obj gap-1 after:content-[url('@images/icons/right-plantation-arrow.svg')]">scheduled a call</button>
                 </div>
                </div>
                
            </div>
        </div>
    </section>
</template>
<style scoped>
</style>