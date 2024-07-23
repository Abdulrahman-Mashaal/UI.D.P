<script setup>
import quoteSVG from '@images/vector/quote.svg?component'
import avatar from '@images/vector/avatar.png'
</script>
<template>
    <div class="lg-container">
        <section class="bg-[#F1DFD5] py-24">
            <h2 class="text-center max-w-[416px] mb-20 mx-auto">Give our users a great experience</h2>
            <div class="px-36 grid grid-cols-3 gap-6">
                <!-- card -->
                 <div class="flex flex-col rounded-[10px] bg-white-700 p-7">
                    <quoteSVG alt="quote image" class="mb-7"/>
                    <div class="flex flex-col items-start justify-between grow">
                        <p class="font-InterSemiBold text-base mb-7">Lorem ipsum dolor sit amet.</p>
                        <div class="flex items-center gap-6">
                            <div class="w-[70px] h-[70px] rounded-full overflow-hidden">
                                <img :src="avatar" alt="quote image" class="w-full h-auto">
                            </div>
                            <div class="">
                                <h3 class="font-InterSemibold text-base">Jeow Harbert</h3>
                                <p class="font-InterRegular text-sm">Lorem, ipsum.</p>
                            </div>
                        </div>
                    </div>
                 </div>
               <!-- card -->
               <div class="flex flex-col rounded-[10px] bg-white-700 p-7">
                <quoteSVG alt="quote image" class="mb-7"/>
                <div class="flex flex-col items-start justify-between grow">
                    <p class="font-InterSemiBold text-base mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa repellendus iure sint a labore placeat maxime? Autem vero quisquam temporibus iste dolore veritatis perferendis?</p>
                    <div class="flex items-center gap-6">
                        <div class="w-[70px] h-[70px] rounded-full overflow-hidden">
                            <img :src="avatar" alt="quote image" class="w-full h-auto">
                        </div>
                        <div class="">
                            <h3 class="font-InterSemibold text-base">Jeow Harbert</h3>
                            <p class="font-InterRegular text-sm">Lorem, ipsum.</p>
                        </div>
                    </div>
                </div>
             </div>
             <!-- card -->
             <div class="flex flex-col rounded-[10px] bg-white-700 p-7">
                <quoteSVG alt="quote image" class="mb-7"/>
                <div class="flex flex-col items-start justify-between grow">
                    <p class="font-InterSemiBold text-base mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta sapiente magnam inventore deleniti, nobis iste dolorem? Dolorum, tenetur veritatis?</p>
                    <div class="flex items-center gap-6">
                        <div class="w-[70px] h-[70px] rounded-full overflow-hidden">
                            <img :src="avatar" alt="quote image" class="w-full h-auto">
                        </div>
                        <div class="">
                            <h3 class="font-InterSemibold text-base">Jeow Harbert</h3>
                            <p class="font-InterRegular text-sm">Lorem, ipsum.</p>
                        </div>
                    </div>
                </div>
             </div>
            </div>
        </section> 
    </div>
</template>
<style scoped>
</style>