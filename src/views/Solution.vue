<script setup>
import solutionOne from '@images/vector/solution01.png'
import solutionTwo from '@images/vector/solution02.png'
</script>
<template>
    <section class="flex items-center justify-between gap-20 py-20 px-36">
        <div class="max-w-[561px]">
            <img :src="solutionOne" alt="solution one" class="w-full h-auto">
        </div>
        <div class="flex flex-col items-start justify-center max-w-[500px]">
            <p class="text-sm mb-8">The Identity solution for every industry</p>
            <div class="flex flex-col gap-8 mb-14">
                <a href="#" class="text-2xl font-medium cursor-pointer">Public Sector</a>
                <a href="#" class="text-xl font-normal text-[#939393] cursor-pointer">Retail</a>
                <a href="#" class="text-xl font-normal text-[#939393] cursor-pointer">Financial Services</a>
                <a href="#" class="text-xl font-normal text-[#939393] cursor-pointer">Healthcare</a>
                <a href="#" class="text-xl font-normal text-[#939393] cursor-pointer">Travel + Hospitality</a>
                <a href="#" class="text-xl font-normal text-[#939393] cursor-pointer">Technology</a>
                <a href="#" class="text-xl font-normal text-[#939393] cursor-pointer">Energy</a>
                <a href="#" class="text-xl font-normal text-[#939393] cursor-pointer">Nonprofit</a>
            </div>
            <p class="mb-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a consequatur voluptate voluptas officia minima illo dicta</p>
            <a href="#" class="btn-plain hover:underline">Learn more</a>
        </div>
     </section>
</template>
<style scoped>
</style>