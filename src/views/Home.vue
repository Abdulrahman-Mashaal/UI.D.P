<script setup>
import identityImg from '@images/vector/identity.png'
</script>
<template>
    <div class="">
        <!-- Section 01 -->
         <section class="flex items-center justify-between py-20 px-24 bg-[url('@images/background/identity.png')] bg-cover bg-center">
            <div class="flex flex-col items-start justify-center max-w-[500px]">
                <h1 class="text-white-700 mb-6">Start with your identity</h1>
                <p class="mb-10 text-white-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a consequatur voluptate voluptas officia minima illo dicta</p>
                <div class="flex items-center gap-6">
                    <button class="btn-default btn-reversed-flat rounded-3xl">Free trial</button>
                    <button class="btn-default btn-outlined rounded-3xl">Talk to us</button>
                </div>
            </div>
            <div class="max-w-[587px]">
                <img :src="identityImg" alt="identity" class="w-full h-auto">
            </div>
         </section>
    </div>
</template>
<style scoped>
</style>