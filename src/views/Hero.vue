<script setup>
import identityImg from '@images/vector/identity.png'
</script>
<template>
    <section class="flex items-center justify-between py-20 px-24 bg-[url('@images/background/identity.png')] bg-cover bg-center">
        <div class="flex flex-col items-start justify-center max-w-[500px]">
            <h1 class="text-white-700 mb-6">Start with your identity</h1>
            <p class="mb-10 text-white-700 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a consequatur voluptate voluptas officia minima illo dicta</p>
            <div class="flex items-center gap-6">
                <button class="btn btn--lg btn--white">Free trial</button>
                <button class="btn btn--lg btn--outlined-white">talk to us</button>
            </div>
        </div>
        <div class="max-w-[587px]">
            <img :src="identityImg" alt="identity" class="w-full h-auto">
        </div>
     </section>
</template>
<style scoped>
</style>