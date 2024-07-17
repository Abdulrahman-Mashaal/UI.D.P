<script setup>
import automation from '@images/vector/automation.png'
import { ref } from 'vue'
</script>
<template>
    <section class="py-20 px-24 bg-[#F7F8FA]">
        <div class="mb-14 text-center max-w-[580px] mx-auto">
            <h3 class="mb-3">Intuitive toolbox for automations</h3>
            <p class="text-sm text-[#ABACB2]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eum corrupti autem natus officiis quaerat fugiat in quidem quod, at impedit voluptas ipsum. Quasi excepturi, officiis dolore aut cupiditate magnam.</p>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex flex-col items-start justify-center gap-5 max-w-[500px]">
                <!-- accordion -->
                <div class="bg-white-700 p-6 flex gap-5 rounded-xl border accordion">
                    <span class="w-6 h-6 justify-center before-obj gap-2 accordion-icon"></span>
                    <div>
                        <h5 class="text-base font-semibold">Sales support around the clock</h5>
                        <div class="accordion-content">
                            <div class="relative z-10 accordion-inner">
                                <div class="">
                                    <p class="text-sm text-[#ABACB2] mb-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta non ad natus nam minima deleniti enim accusantium perspiciatis rerum nulla!</p>
                                    <button class="btn btn--outlined font-semibold">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- accordion -->
                <div class="bg-white-700 p-6 flex gap-5 rounded-xl cursor-pointer border accordion">
                    <span class="w-6 h-6 justify-center before-obj gap-2 accordion-icon"></span>
                    <div>
                        <h5 class="text-base font-semibold">Sales support around the clock</h5>
                        <div class="accordion-content">
                            <div class="relative z-10 accordion-inner">
                                <div class="">
                                    <p class="text-sm text-[#ABACB2] mb-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta non ad natus nam minima deleniti enim accusantium perspiciatis rerum nulla!</p>
                                    <button class="btn btn--outlined font-semibold">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- accordion -->
                <div class="bg-white-700 p-6 flex gap-5 rounded-xl cursor-pointer border accordion">
                    <span class="w-6 h-6 justify-center before-obj gap-2 accordion-icon"></span>
                    <div>
                        <h5 class="text-base font-semibold">Sales support around the clock</h5>
                        <div class="accordion-content">
                            <div class="relative z-10 accordion-inner">
                                <div class="">
                                    <p class="text-sm text-[#ABACB2] mb-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta non ad natus nam minima deleniti enim accusantium perspiciatis rerum nulla!</p>
                                    <button class="btn btn--outlined font-semibold">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- accordion -->
                <div class="bg-white-700 p-6 flex gap-5 rounded-xl cursor-pointer border accordion">
                    <span class="w-6 h-6 justify-center before-obj gap-2 accordion-icon"></span>
                    <div>
                        <h5 class="text-base font-semibold">Sales support around the clock</h5>
                        <div class="accordion-content">
                            <div class="relative z-10 accordion-inner">
                                <div class="">
                                    <p class="text-sm text-[#ABACB2] mb-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta non ad natus nam minima deleniti enim accusantium perspiciatis rerum nulla!</p>
                                    <button class="btn btn--outlined font-semibold">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-[587px] self-start">
                <img :src="automation" alt="identity" class="w-full h-auto">
            </div>
        </div>
     </section>
</template>
<style lang="scss" scoped>
  .accordion{ 
    .accordion-icon{
        &::before{
            content: url('@images/icons/expansion-opened.svg');
        }
    }
    &:hover{
        .accordion-icon{
            &::before{
                content: url('@images/icons/expansion-closed.svg')
            }
        }
      .accordion-content{
        max-height: 300px;
      }
    }
  }
  
  .accordion-content{
    -webkit-transition: max-height 1s; 
    -moz-transition: max-height 1s; 
    -ms-transition: max-height 1s; 
    -o-transition: max-height 1s; 
    transition: max-height 1s;  
    overflow: hidden;
    max-height: 0;
  }
  
  .accordion-inner{
    margin-top: 8px;
  }
  
  .accordion-toggle{
    -webkit-transition: background .1s ease-in;   
    -moz-transition: background .1s ease-in;   
    -ms-transition: background .1s ease-in;   
    -o-transition: background .1s ease-in;   
    transition: background .1s ease-in;   
    border-radius: 3px;
    color: #fff;
    display: block;
    font-size: 30px;
    margin: 0 0 10px;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    
  }
  
  
</style>