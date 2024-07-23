<script setup>
 import { ref } from 'vue'
 const isAnnual = ref(false)
</script>
<template>
    <div class="sm-container">
        <div class="py-32 ">
            <section class="">
                <div class="text-center max-w-[526px] mx-auto mb-14">
                    <h2 class="font-semibold mb-9">Choose a plan that works for you</h2>
                     <!-- Pricing toggle -->
        <div class="flex justify-center max-w-[250px] m-auto">
            <div class="relative flex w-full p-[2px] shadow-md bg-white-700 rounded-[15px]">
                <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                    <span class="absolute inset-0 w-1/2 rounded-[14px] bg-algae-green-300  shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out" :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
                </span>
                <button
                    class="relative flex-1 text-black-700 text-basic font-InterSemiBold w-[130px] h-12 px-8 "
                    @click="isAnnual = true"
                    :aria-pressed="isAnnual"
                >Yearly</button>
                <button
                    class="relative flex-1 text-black-700 text-basic font-InterSemiBold w-[130px] h-12 px-8 "
                    @click="isAnnual = false"
                    :aria-pressed="isAnnual"
                >Monthly</button>
            </div>
        </div> 
                </div>
                <!-- pricing plans -->
                <div class="grid grid-cols-3 gap-6 mb-28">
                    <!-- price plan -->
                    <div class="rounded-[20px] p-12 bg-zumthor-100">
                        <div class="border-b-2 border-[#DDE5EC] pb-7 mb-7">
                            <p class="text-base font-InterSemiBold">Starter</p>
                            <h3 class=""><span class="text-base">$</span><span class="leading-0">500</span></h3>
                            <p class="text-sm">Per Month</p>
                        </div>
                        <div class="mb-10">
                            <p class="mb-3 font-InterSemiBold before-obj gap-3 before:content-[url('@images/icons/checked.svg')]">3 Social Media Account</p>
                            <p class="mb-3 font-InterSemiBold before-obj gap-3 before:content-[url('@images/icons/checked.svg')]">Free Platform Access</p>
                            <p class="mb-3 font-InterSemiBold before-obj gap-3 before:content-[url('@images/icons/checked.svg')]">24/7 Customer Support</p>
                        </div>
                        <button class="btn btn--sm btn--outlined">Get Started</button>
                    </div>
                    <!-- price plan -->
                    <div class="rounded-[20px] p-12 bg-vulcan-950">
                        <div class="border-b-2 border-[#DDE5EC] pb-7 mb-7">
                            <p class="text-base font-InterSemiBold text-[#D0D0D2]">Basic</p>
                            <h3 class=""><span class="text-base text-white-700">$</span><span class="leading-0 text-white-700">500</span></h3>
                            <p class="text-sm text-[#AEAEB1]">Per Month</p>
                        </div>
                        <div class="mb-10 text-white-700">
                            <p class="mb-3 font-InterSemiBold before-obj gap-3 before:content-[url('@images/icons/checked.svg')]">3 Social Media Account</p>
                            <p class="mb-3 font-InterSemiBold before-obj gap-3 before:content-[url('@images/icons/checked.svg')]">Free Platform Access</p>
                            <p class="mb-3 font-InterSemiBold before-obj gap-3 before:content-[url('@images/icons/checked.svg')]">24/7 Customer Support</p>
                        </div>
                        <button class="btn btn--sm btn--white">Get Started</button>
                    </div>
                    <!-- price plan -->
                    <div class="rounded-[20px] p-12 bg-zumthor-100">
                        <div class="border-b-2 border-[#DDE5EC] pb-7 mb-7">
                            <p class="text-base font-InterSemiBold">Premium</p>
                            <h3 class=""><span class="text-base">$</span><span class="leading-0">500</span></h3>
                            <p class="text-sm">Per Month</p>
                        </div>
                        <div class="mb-10">
                            <p class="mb-3 font-InterSemiBold before-obj gap-3 before:content-[url('@images/icons/checked.svg')]">3 Social Media Account</p>
                            <p class="mb-3 font-InterSemiBold before-obj gap-3 before:content-[url('@images/icons/checked.svg')]">Free Platform Access</p>
                            <p class="mb-3 font-InterSemiBold before-obj gap-3 before:content-[url('@images/icons/checked.svg')]">24/7 Customer Support</p>
                        </div>
                        <button class="btn btn--sm btn--outlined">Get Started</button>
                    </div>
                </div>
                <div class="flex flex-wrap items-start justify-between">
                    <!-- question -->
                    <div class="mb-11 max-w-[500px]">
                        <h4 class="mb-6 font-InterSemiBold text-base">Q. What support and service package are available?</h4>
                        <p class="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta inventore error dolore, iste animi ipsum nesciunt commodi molestiae omnis ipsam doloribus qui impedit atque sequi! Optio quia quae quis itaque.</p>
                    </div>
                    <!-- question -->
                    <div class="mb-11 max-w-[500px]">
                        <h4 class="mb-6 font-InterSemiBold text-base">Q. What support and service package are available?</h4>
                        <p class="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta inventore error dolore, iste animi ipsum nesciunt commodi molestiae omnis ipsam doloribus qui impedit atque sequi! Optio quia quae quis itaque.</p>
                    </div>
                    <!-- question -->
                    <div class="mb-11 max-w-[500px]">
                        <h4 class="mb-6 font-InterSemiBold text-base">Q. What support and service package are available?</h4>
                        <p class="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta inventore error dolore, iste animi ipsum nesciunt commodi molestiae omnis ipsam doloribus qui impedit atque sequi! Optio quia quae quis itaque.</p>
                    </div>
                    <!-- question -->
                    <div class="mb-11 max-w-[500px]">
                        <h4 class="mb-6 font-InterSemiBold text-base">Q. What support and service package are available?</h4>
                        <p class="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta inventore error dolore, iste animi ipsum nesciunt commodi molestiae omnis ipsam doloribus qui impedit atque sequi! Optio quia quae quis itaque.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<style scoped>
</style>