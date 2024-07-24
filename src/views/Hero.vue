<script setup>
// import identityImg from '@images/vector/identity.png';
</script>
<template>
  <section
    class="bg-[url('@images/background/identity.png')] bg-cover bg-center py-20"
  >
    <div class="container">
      <section class="flex items-center justify-between gap-4">
        <div class="flex flex-col items-start justify-center max-w-[500px]">
          <h1 class="text-white mb-6 text-[64px] leading-[72px] font-medium tracking-maxtight">Start with your identity</h1>
          <p class="mb-10 text-white text-[22px] leading-[32px] font-normal">
            With Identity, you can improve customer sign-ups, employee productivity, and get apps to market faster.
          </p>
          <div class="flex items-center gap-6">
            <button class="btn btn--lg btn--white">Free trial</button>
            <button class="btn btn--lg btn--outlined-white">talk to us</button>
          </div>
        </div>
        <div>
          <img
            src="@images/vector/identity.png"
            alt="identity"
          />
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped></style>
