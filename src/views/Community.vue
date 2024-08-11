<script setup>
import checkedSVG from '@images/icons/checked.svg'
</script>
<template>
    <section class="py-5 lg:py-[120px] pt-9 pb-8 bg-white">
        <div class="container">
            <div class="max-w-[1300px] 3xl:max-w-[1517px] flex flex-col items-center justify-center text-center mx-auto px-[1px]">
                <h2 class="text-xl mb-5 lg:mb-0 lg:text-4xl font-Hind font-normal">What our community says!</h2>
                <p class="mb-[70px] text-sm lg:text-lg font-Hind font-normal">Discover the Glowing Testimonials That Tell Our Story</p>
                <div class="grid grid-cols-1 lg:grid-cols-12 w-full lg:grid-rows-2 gap-7">
                    <div class="lg:col-span-6 xl:col-span-8 rounded-[32px] overflow-hidden min-h-[555px] bg-[url('@images/vector/community01.jpg')] bg-cover bg-center bg-no-repeat p-11 relative">
                        <div class="absolute left-2 right-2 bottom-32 xl:left-11 xl:right-0 xl:bottom-11 xl:text-left">
                            <p class="text-white text-xl lg:text-2xl font-medium">
                                “I Took Advice to Help Me Succeed” 
                            </p>
                            <p class="mt-7 text-white text-sm lg:text-base font-medium">Dr. Eli Coleman, phD</p>
                        </div>
                        
                        <img src="@images/vector/play.png" alt="play" class="absolute right-11 bottom-11">
                    </div>
                    <div class="lg:col-span-6 xl:col-span-4 xl:col-start-9 xl:row-start-1 rounded-[32px] overflow-hidden min-h-[555px] bg-gulfBlue-950 py-[34px] mb:pb-0 xl:pb-[34px] px-[50px]">
                        <div class="flex flex-col items-center justify-center xl:justify-between gap-[114px] h-full ">
                            <div class="flex flex-col items-center lg:items-center w-full md:flex-row md:items-start justify-center lg:justify-start gap-5">
                                <img src="@images/vector/avatar.png" alt="avatar" class="w-[64px] h-[64px] rounded-full">
                                
                                <div class="text-white md:text-left">
                                    <p class="text-base font-medium">alex smith</p>
                                    <p class="text-sm font-normal">Coaching of Halal Lab</p>
                                </div>
                            </div>
                            <div class="text-periwinkle-200 lg:text-left">
                                <p class="text-2xl xl:text-[122px] font-normal font-Hind">89 <span class="text-base xl:text-4xl font-normal font-Hind">%</span></p>
                                <h4 class="capitalize lg:text-2xl font-medium">of customer recommend name services</h4>
                            </div>
                        </div>
                    </div>
                    <div class="xl:row-start-2 lg:col-span-6 xl:col-span-4 rounded-[32px] overflow-hidden min-h-[555px] bg-gravel-800 py-10 px-[43px]">
                        <div class="flex flex-col items-center justify-center xl:justify-between h-full ">
                            <div>
                                <div class="flex flex-col items-center lg:items-center w-full md:flex-row md:items-start justify-center lg:justify-start gap-5">
                                    <img src="@images/vector/avatar.png" alt="avatar" class="w-[64px] h-[64px] rounded-full">
                                    <div class="text-white md:text-left">
                                        <p class="text-base font-medium">alex smith</p>
                                        <p class="text-sm font-normal">Coaching of Halal Lab</p>
                                    </div>
                                </div>
                                <p class="text-white mt-[30px] text-center lg:text-left text-xl font-medium">I have improved 70% since coming to the top rhythm</p>
                            </div>
                                <img src="@images/vector/community02.jpg" alt="community 02" class="object-cover w-full aspect-[1.79] rounded-3xl mt-16 xl:mt-0">
                        </div>
                    </div>
                    <div class="xl:row-start-2 lg:col-span-6 xl:col-span-8 xl:col-start-5 rounded-[32px] overflow-hidden min-h-[555px] bg-cararra-100 py-[53px] px-[64px]">
                        <div class="flex flex-col h-full justify-between">
                            <p class="text-plantation-800 text-left text-xs lg:text-2xl font-Inter italic">“ Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures ”</p>
                            <div class="flex flex-col md:flex-row items-center md:items-start w-full justify-start gap-5 mt-16 md:mt-0">
                                <img src="@images/vector/avatar.png" alt="avatar" class="w-[64px] h-[64px] rounded-full">
                                <div class="text-plantation-800 md:text-left">
                                    <p class="text-base font-medium">alex smith</p>
                                    <p class="text-sm font-normal">Coaching of Halal Lab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
            <div class="mt-[140px]">   
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <h2 class="text-center lg:text-start text-xl lg:text-2xl xl:text-4xl font-medium font-Hind">Unlock High-Quality Appointments Effortlessly</h2>
                    <div class="p-8 bg-ebb-100 rounded-3xl lg:order-3">
                        <p class="text-plantation-800 text-center text-lg font-normal lg:text-start mb-8 lg:mb-5">If you have trouble with any of the following:</p>
                        <ul class="flex flex-col gap-3">
                            <li class="inline-flex md:items-center gap-5 text-xs font-normal xl:text-base ">
                                <span class="w-[25px] h-[25px] rounded-full bg-white">
                                    <checkedSVG/>
                                </span>
                                <p class="text-plantation-800">Grabbing and holding your audience's attention</p>
                            </li>
                            <li class="inline-flex md:items-center gap-5 text-xs font-normal xl:text-base ">
                                <span class="w-[25px] h-[25px] rounded-full bg-white">
                                    <checkedSVG/>
                                </span>
                                <p class="text-plantation-800">Turning your audience into potential sales leads</p>
                            </li>
                            <li class="inline-flex md:items-center gap-5 text-xs font-normal xl:text-base ">
                                <span class="w-[25px] h-[25px] rounded-full bg-white">
                                    <checkedSVG/>
                                </span>
                                <p class="text-plantation-800">Crafting appealing offers and services</p>
                            </li>
                            <li class="inline-flex md:items-center gap-5 text-xs font-normal xl:text-base ">
                                <span class="w-[25px] h-[25px] rounded-full bg-white">
                                    <checkedSVG/>
                                </span>
                                <p class="text-plantation-800">Selecting a niche market and building a focused audience</p>
                            </li>
                            <li class="inline-flex md:items-center gap-5 text-xs font-normal xl:text-base ">
                                <span class="w-[25px] h-[25px] rounded-full bg-white">
                                    <checkedSVG/>
                                </span>
                                <p class="text-plantation-800">Building your email subscriber list</p>
                            </li>
                            <li class="inline-flex md:items-center gap-5 text-xs font-normal xl:text-base ">
                                <span class="w-[25px] h-[25px] rounded-full bg-white">
                                    <checkedSVG/>
                                </span>
                                <p class="text-plantation-800">Enhancing your sales skills and mindset</p>
                            </li>
                            <li class="inline-flex md:items-center gap-5 text-xs font-normal xl:text-base ">
                                <span class="w-[25px] h-[25px] rounded-full bg-white">
                                    <checkedSVG/>
                                </span>
                                <p class="text-plantation-800">Employing efficient sales funnels to reduce client acquisition costs</p>
                            </li>
                            <li class="inline-flex md:items-center gap-5 text-xs font-normal xl:text-base ">
                                <span class="w-[25px] h-[25px] rounded-full bg-white">
                                    <checkedSVG/>
                                </span>
                                <p class="text-plantation-800">Reusing content across various online platforms</p>
                            </li>
                            <li class="inline-flex md:items-center gap-5 text-xs font-normal xl:text-base ">
                                <span class="w-[25px] h-[25px] rounded-full bg-white">
                                    <checkedSVG/>
                                </span>
                                <p class="text-plantation-800">Lacking scalable systems for content creation and lead generation</p>
                            </li>
                        </ul>
                    </div>
                    <p class="mt-12 lg:mt-0 lg:order-2 text-center lg:text-start text-sm md:text-base font-normal lg:self-center">Say Goodbye! to cold calls and lead hunting – discover our proven content model for coaches, consultants, and agencies.</p>
                    <div class="rounded-3xl overflow-hidden lg:order-4 lg:w-full lg:h-auto">
                        <img src="@images/vector/community03.png" alt="community" class="lg:w-full lg:h-auto">
                    </div>
                    <div class="mt-12 lg:order-5">
                        <div class="before-obj before:content-[url('@images/icons/side-line.svg')] gap-5 before:h-full inline-flex">
                            <div>
                                <p class="text-xl lg:text-2xl font-bold text-plantation-800">Don't worry!</p>
                                <p class="text-[#617975] text-xs md:text-2xl font-normal">Solve your online service business in <span class="text-plantation-800 font-bold">90 days</span>"</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center md:justify-start
                        ">
                            <button class="btn btn--white text-xs md:text-base bg-[#F0FDF6] border-[#C5D4CC] text-plantation-800 w-fit mt-[42px] md:ms-2 after-obj gap-1 after:content-[url('@images/icons/right-plantation-arrow.svg')]">Get Started For Free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
</style>