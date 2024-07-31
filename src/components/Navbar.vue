<script setup>
  import burgerSVG from '@images/icons/burger-menu.svg?component'
</script>
<template>
  <header class="min-h-[78px] bg-deepSapphir-500">
    <div class="container">
      <div>
        <div class="relative flex flex-col overflow-hidden px-4 py-4 lg:mx-auto lg:flex-row lg:items-center lg:justify-between">
          <a href="#" class="flex mt-2">
            <img src="@images/logo.png" alt="site logo">
          </a>
          <input type="checkbox" class="peer hidden" id="navbar-open" />
          <label class="absolute top-5 right-3 cursor-pointer lg:hidden" for="navbar-open">
            <burgerSVG alt="menu-icon"/>
          </label>
          <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all lg:max-h-full lg:flex-row lg:justify-center lg:mt-0">
            <ul class="flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:gap-[38px]">
              <li class="nav-link"><a href="#">services</a></li>
              <li class="nav-link"><a href="#">how to works</a></li>
              <li class="nav-link"><a href="#">about us</a></li>
              <li class="nav-link">
                <a href="#">blogs</a>
              </li>
              <li class="nav-link lg:hidden">
                <button class="btn btn--sm btn--opal after-obj gap-1 after:content-[url('@images/icons/right-arrow.svg')]">free trial</button>
              </li>
            </ul>
          </nav>
          <div class="hidden lg:block">
            <button class="btn btn--sm btn--opal whitespace-nowrap after-obj gap-1 after:content-[url('@images/icons/right-arrow.svg')]">free trial</button>
          </div>
        </div>
        </div>
    </div>
  </header>
</template>
<style scoped></style>
