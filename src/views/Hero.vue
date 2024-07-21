<script setup>
import ratingSVG from "@images/vector/rating.svg";
</script>
<template>
  <div class="container">
    <div
      class="flex flex-col items-center justify-center py-[120px] text-center"
    >
      <h1 class="max-w-[978px] mb-4">
        Get your all social services form groclone
      </h1>
      <p class="font-InterRegular text-vulcan-950 mb-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
        laudantium, consectetur reprehenderit esse repellat porro ipsa nostrum
        ab eius tempore unde aliquam magnam Explicabo velit harum molestiae
        repudiandae sed.
      </p>
      <div class="flex items-center gap-6 mb-11">
        <button class="btn btn--primary btn--lg">start free trial</button>
        <button
          class="btn btn--white btn--lg items-start before-obj gap-2 font-helvetica before:content-[url('@images/icons/play.svg')]"
        >
          watch a demo
        </button>
      </div>
      <div class="flex items-center gap-2">
        <ratingSVG alt="rating image" />
        <span class="text-pickled-bluewood-800 text-sm"
          >Lorem, ipsum dolor</span
        >
      </div>
    </div>
  </div>
</template>
<style scoped></style>
