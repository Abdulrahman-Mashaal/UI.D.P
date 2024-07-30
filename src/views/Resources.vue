<script setup>
</script>
<template>
    <section class="py-[152px] bg-white">
        <div class="container">
            <div class="flex flex-col items-center justify-center mb-5">
                <p class="w-fit rounded-[100px] px-4 py-[3px] text-sm bg-white border border-mercury-200 capitalize">our blog</p>
                <h2 class="mt-1 capitalize">articles &amp; resources</h2>
            </div>
            <div class="grid grid-cols-3 gap-[25px]">
                <div class="col-start-1 col-end-3">
                    <img src="@images/vector/resources.jpg" alt="resources" class="mb-3">
                    <div class="max-w-[786px]">
                        <p class="mb-[10px] text-base text-mineShaft-900 font-semibold"><span>Feb 13, 2024</span> - <span>Marketing Strategy</span></p>
                        <h3>Explore the transformative impact of artificial intelligence on modern marketing strategies.</h3>
                    </div>
                </div>
                <div class="col-start-3 col-end-4">
                    <div class="grid grid-cols-3 gap-5 mb-[61px]">
                        <div class="col-start-1 col-end-2">
                            <img src="@images/vector/resource01.jpg" alt="resource-1" class="">
                        </div>
                        <div class="col-start-2 col-end-4">
                            <p class="mb-[10px] text-sm text-mineShaft-900 font-semibold"><span>Feb 13, 2024</span> - <span>Development</span></p>
                        <h5>The evolution of design thinking in development</h5>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-5 mb-[61px]">
                        <div class="col-start-1 col-end-2">
                            <img src="@images/vector/resource01.jpg" alt="resource-1" class="">
                        </div>
                        <div class="col-start-2 col-end-4">
                            <p class="mb-[10px] text-sm text-mineShaft-900 font-semibold"><span>Feb 13, 2024</span> - <span>Development</span></p>
                        <h5>The evolution of design thinking in development</h5>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-5 mb-[61px]">
                        <div class="col-start-1 col-end-2">
                            <img src="@images/vector/resource01.jpg" alt="resource-1" class="">
                        </div>
                        <div class="col-start-2 col-end-4">
                            <p class="mb-[10px] text-sm text-mineShaft-900 font-semibold"><span>Feb 13, 2024</span> - <span>Development</span></p>
                        <h5>The evolution of design thinking in development</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center mt-7">
                <button class="btn btn--lg btn--outlined w-fit px-6 after-obj gap-3 after:content-[url('@images/icons/right-arrow.svg')]">view all blog</button>
            </div>
        </div>
    </section>
</template>
<style scoped>
</style>