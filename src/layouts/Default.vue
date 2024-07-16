<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
    <div class="container flex flex-col min-h-screen">
            <Navbar/>
            <main class="grow">
                <RouterView />
            </main>
            <Footer/>

    </div>
</template>
<style scoped>
</style>