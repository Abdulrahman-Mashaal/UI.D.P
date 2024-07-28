<script setup>
</script>
<template>
    <section class="bg-wildSand-50 py-[112px]">
        <div class="container">
            <div class="flex flex-col items-center justify-center">
                <p class="max-w-[90px] rounded-[100px] px-4 py-[3px] text-sm bg-white border border-mercury-200">Features</p>
                <h2 class="mt-1 capitalize">amazing features</h2>
            </div>
            <div class="grid grid-cols-2 gap-5 mt-8">
                <div class="pt-[30px] px-[30px] bg-sazerac-100 rounded">
                    <h3>Analyze your Data</h3>
                    <p>Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.</p>
                    <button class="btn btn--text text-xl mt-[14px] after-obj gap-2 after:content-[url('@images/icons/right-arrow.svg')]">read more</button>
                    <img src="@images/vector/feature01.png" alt="feature one" class="mx-auto mt-[70px]">
                </div>
                <div class="pt-[30px] px-[30px] bg-grayNurse-100 rounded">
                    <h3>Collaborate Securely</h3>
                    <p>Our platform provides a secure environment for seamless teamwork,
                        ensuring that sensitive information at every step.</p>
                    <button class="btn btn--text text-xl mt-[14px] after-obj gap-2 after:content-[url('@images/icons/right-arrow.svg')]">read more</button>
                    <img src="@images/vector/feature02.png" alt="feature two" class="mx-auto mt-[70px]">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
</style>