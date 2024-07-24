<script setup>
import automation from '@images/vector/automation.png';
import { ref } from 'vue';
</script>
<template>
    <section class="py-20 bg-[#F7F8FA]">
        <div class="container">
            <section class="">
                <div class="mb-14 text-center mx-auto">
                  <h3 class="mb-3 text-[42px] font-medium leading-[50px] text-codgray-950">Intuitive toolbox for automations</h3>
                  <p class="text-[18px] leading-[28px] font-normal text-codgray-950 max-w-[600px] mx-auto">
                    Create intuitive automations and authentic chatbots to deliver outstanding customer experiences via chat.
                  </p>
                </div>
                <div class="flex items-start justify-between gap-4">
                  <div class="flex flex-col items-start justify-center gap-5">
                    <!-- accordion -->
                    <div class="bg-white p-6 flex gap-5 accordion">
                      <span
                        class="w-6 h-6 justify-center before-obj gap-2 accordion-icon"
                      ></span>
                      <div>
                        <h5 class="text-[20px] leading-[26px] font-medium">
                          Sales support around the clock
                        </h5>
                        <div class="accordion-content">
                          <div class="relative z-10 accordion-inner">
                            <div class="">
                              <p class="text-[16px] font-normal leading-[24px] text-codgray-950 mb-7">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Dicta non ad natus nam minima deleniti enim accusantium
                                perspiciatis rerum nulla!
                              </p>
                              <button class="btn btn--outlined font-semibold text-[15px] leading-[24px] font-Inter">
                                Learn more
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- accordion -->
                    <div class="bg-white p-6 flex gap-5 accordion">
                      <span
                        class="w-6 h-6 justify-center before-obj gap-2 accordion-icon"
                      ></span>
                      <div>
                        <h5 class="text-[20px] leading-[26px] font-medium">
                          Sales support around the clock
                        </h5>
                        <div class="accordion-content">
                          <div class="relative z-10 accordion-inner">
                            <div class="">
                              <p class="text-[16px] font-normal leading-[24px] text-codgray-950 mb-7">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Dicta non ad natus nam minima deleniti enim accusantium
                                perspiciatis rerum nulla!
                              </p>
                              <button class="btn btn--outlined font-semibold text-[15px] leading-[24px] font-Inter">
                                Learn more
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- accordion -->
                    <div class="bg-white p-6 flex gap-5 accordion">
                      <span
                        class="w-6 h-6 justify-center before-obj gap-2 accordion-icon"
                      ></span>
                      <div>
                        <h5 class="text-[20px] leading-[26px] font-medium">
                          Sales support around the clock
                        </h5>
                        <div class="accordion-content">
                          <div class="relative z-10 accordion-inner">
                            <div class="">
                              <p class="text-[16px] font-normal leading-[24px] text-codgray-950 mb-7">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Dicta non ad natus nam minima deleniti enim accusantium
                                perspiciatis rerum nulla!
                              </p>
                              <button class="btn btn--outlined font-semibold text-[15px] leading-[24px] font-Inter">
                                Learn more
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- accordion -->
                    <div class="bg-white p-6 flex gap-5 accordion">
                      <span
                        class="w-6 h-6 justify-center before-obj gap-2 accordion-icon"
                      ></span>
                      <div>
                        <h5 class="text-[20px] leading-[26px] font-medium">
                          Sales support around the clock
                        </h5>
                        <div class="accordion-content">
                          <div class="relative z-10 accordion-inner">
                            <div class="">
                              <p class="text-[16px] font-normal leading-[24px] text-codgray-950 mb-7">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Dicta non ad natus nam minima deleniti enim accusantium
                                perspiciatis rerum nulla!
                              </p>
                              <button class="btn btn--outlined font-semibold text-[15px] leading-[24px] font-Inter">
                                Learn more
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="@images/vector/automation.png"
                      alt="identity"
                    />
                  </div>
                </div>
            </section>
        </div>
    </section>
 >
</template>
<style lang="scss" scoped>
.accordion {
  h5{
    color: #7d7d8a;
  }
  .accordion-icon {
    &::before {
      content: url('@images/icons/expansion-closed.svg');
    }
  }
  &:hover {
    border-radius: 12px;
    h5{
      color: #020210;
    }
    .accordion-icon {
      &::before {
        content: url('@images/icons/expansion-opened.svg');
      }
    }
    .accordion-content {
      max-height: 300px;
    }
  }
}

.accordion-content {
  -webkit-transition: max-height 1s;
  -moz-transition: max-height 1s;
  -ms-transition: max-height 1s;
  -o-transition: max-height 1s;
  transition: max-height 1s;
  overflow: hidden;
  max-height: 0;
}

.accordion-inner {
  margin-top: 8px;
}

.accordion-toggle {
  -webkit-transition: background 0.1s ease-in;
  -moz-transition: background 0.1s ease-in;
  -ms-transition: background 0.1s ease-in;
  -o-transition: background 0.1s ease-in;
  transition: background 0.1s ease-in;
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
