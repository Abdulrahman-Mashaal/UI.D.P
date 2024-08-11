<script setup>
import greenCheckedSVG from '@images/icons/green-checked.svg'
</script>
<template>
    <section class="py-5 lg:py-[107px] pt-9 pb-8 bg-porcelain-100">
        <div class="container">
            <div class="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between lg:px-4">
                <div class="lg:w-5/12">
                    <img src="@images/vector/insight.png" alt="insight">
                </div>
                <div class="lg:w-5/12 lg:mt-14">
                 <h1 class="text-center md:text-left text-plantation-800 mt-5 lg:mt-0 font-normal font-Hind text-2xl lg:text-4xl">What is weekly insight calls?</h1>   
                 <p class="mt-2 text-xs md:text-base text-plantation-800">You can get a tactical edge by listening to our weekly insight calls.</p>
                 <ul class="flex flex-col gap-4 mt-12 lg:mt-0">
                    <li class="inline-flex md:items-center gap-5 ">
                        <span class="w-[24px] h-[24px] rounded-full bg-white">
                            <greenCheckedSVG/>
                        </span>
                        <p class="text-plantation-800 text-xs font-normal xl:text-base "><span class="font-medium">Expert Advice:</span> Find Clients, Boost Your Visibility, Grow Your Audience</p>
                    </li>
                    <li class="inline-flex md:items-center gap-5 ">
                        <span class="w-[24px] h-[24px] rounded-full bg-white">
                            <greenCheckedSVG/>
                        </span>
                        <p class="text-plantation-800 text-xs font-normal xl:text-base "><span class="font-medium">Cutting-Edge Insights:</span> Latest Tests on Content, Ads, and Conversions</p>
                    </li>
                   
                 </ul>
                 <div class="mt-12 lg:mt-[92px] flex items-center justify-center lg:justify-start">
                    <button class="btn btn--white text-base text-plantation-800 border-[#C5D4CC] bg-[#F0FDF6] w-fit mt-5 after-obj gap-1 after:content-[url('@images/icons/right-plantation-arrow.svg')]">scheduled a call</button>
                 </div>
                </div>
                
            </div>
        </div>
    </section>
</template>
<style scoped>
</style>