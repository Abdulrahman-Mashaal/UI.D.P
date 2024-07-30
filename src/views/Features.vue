<script setup>
</script>
<template>
    <section class="bg-wildSand-50 pt-[112px]">
        <div class="container">
            <div class="flex flex-col items-center justify-center">
                <p class="w-fit rounded-[100px] px-4 py-[3px] text-sm bg-white border border-mercury-200 capitalize">Features</p>
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

            <div class="grid grid-cols-2 gap-24 mt-[130px]">
                <aside class="flex flex-col justify-center">
                    <h3 class="mb-[14px]">Smarter management for your business</h3>
                    <p class="mb-[26px]">Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, &amp; achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent &amp; effective business management.</p>
                    <ul class="flex flex-col spacer-y-4 mb-[42px]">
                        <li class="before-obj gap-[10px] before:content-[url('@images/icons/checked-icon.svg')]">
                        <span>Intuitive Task Organization</span>
                        </li>
                        <li class="before-obj gap-[10px] before:content-[url('@images/icons/checked-icon.svg')]">
                        <span>Customizable Dashboards</span>
                        </li>
                        <li class="before-obj gap-[10px] before:content-[url('@images/icons/checked-icon.svg')]">
                        <span>User Training and Support</span>
                        </li>
                    </ul>
                    <button class="btn btn--lg btn--outlined w-fit px-6 after-obj gap-3 after:content-[url('@images/icons/right-arrow.svg')]">explore more</button>
                </aside>
                <img src="@images/vector/feature03.png" alt="feature three">
            </div>
            
            <div class="grid grid-cols-2 gap-24 mt-[130px]">
                <img src="@images/vector/feature04.png" alt="feature four">
                <aside class="flex flex-col justify-center">
                    <h3 class="mb-[14px]">Innovation &amp; dynamic solutions to empower</h3>
                    <p class="mb-5">Zenify Empower is dedicated to revolutionizing your business by empowering it
                        through innovation and dynamic solutions. Our commitment to cutting-edge
                        technology ensures that your organization stays ahead in a rapidly evolving
                        landscape.</p>
                        <p>
                            With a focus on forward-thinking solutions, we empower your team to embrace
change, foster creativity, and drive unprecedented success.
                        </p>
                   
                    <button class="btn btn--lg btn--outlined w-fit px-6 after-obj gap-3 after:content-[url('@images/icons/right-arrow.svg')] mt-[42px]">discover now</button>
                </aside>
            </div>
        </div>
    </section>
</template>
<style scoped>
</style>