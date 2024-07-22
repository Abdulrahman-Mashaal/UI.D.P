<script setup>
    import sample1 from '@images/vector/sample1.png'
    import sample2 from '@images/vector/sample2.png'
</script>
<template>
    <div class="py-16">
        <section class="flex items-center justify-between mb-28">
            <div class="max-w-[590px]">
                <img :src="sample1" alt="first sample" class="w-full h-auto">
            </div>
            <aside class="max-w-[636px]">
                <h2 class="font-semibold mb-10">Bring your target users together on social media</h2>
                <p class="text-sm mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam et reiciendis ipsam vel illum velit eos provident temporibus cum molestiae?</p>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in quisquam non deserunt voluptas animi eius iste a quos maxime qui labore quibusdam, dicta hic ab modi odio quod! Porro?</p>
            </aside>
        </section>
        <section class="flex items-center justify-between">
            <aside class="max-w-[636px]">
                <h2 class="font-semibold mb-10">Bring your target users together on social media</h2>
                <p class="text-sm mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam et reiciendis ipsam vel illum velit eos provident temporibus cum molestiae?</p>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in quisquam non deserunt voluptas animi eius iste a quos maxime qui labore quibusdam, dicta hic ab modi odio quod! Porro?</p>
            </aside>
            <div class="max-w-[590px]">
                <img :src="sample2" alt="second sample" class="w-full h-auto">
            </div>
        </section>
    </div>
</template>
<style scoped>
</style>