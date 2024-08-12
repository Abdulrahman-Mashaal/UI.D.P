<script setup>
import automation from '@images/vector/automation.png';
import { ref } from 'vue';
import Accordion from '@/views/Accordion.vue'
</script>
<template>
    <section class="py-20 bg-[#F7F8FA]">
        <div class="container">
            <section class="">
                <div class="mb-14 text-center mx-auto">
                  <h3 class="mb-3 text-[42px] font-medium leading-[50px] text-codgray-950">Intuitive toolbox for automations</h3>
                  <p class="text-[18px] leading-[28px] font-normal text-codgray-950 max-w-[548px] mx-auto">
                    Create intuitive automations and authentic chatbots to deliver outstanding customer experiences via chat.
                  </p>
                </div>
                <div class="flex items-start justify-between gap-1">
                  <Accordion/>
                  <div class="border border-[#EAEBEF] rounded-xl overflow-hidden w-[568px]">
                    <img
                      src="@images/vector/automation.png"
                      alt="identity"
                      class="w-full h-auto"
                    />
                  </div>
                </div>
            </section>
        </div>
    </section>
</template>

