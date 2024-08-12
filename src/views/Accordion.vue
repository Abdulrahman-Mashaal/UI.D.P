<script setup>
const accordionItemList = [
    {
        title: 'Sales support around the clock',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta non ad natus nam minima deleniti enim accusantium perspiciatis rerum nulla!'
    },
    {
        title: 'Sales support around the clock',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta non ad natus nam minima deleniti enim accusantium perspiciatis rerum nulla!'
    },
    {
        title: 'Sales support around the clock',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta non ad natus nam minima deleniti enim accusantium perspiciatis rerum nulla!'
    },
    {
        title: 'Sales support around the clock',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta non ad natus nam minima deleniti enim accusantium perspiciatis rerum nulla!'
    },

]
function activeAccordion($event){
    // console.log('$event', $event.target.dataset.indexNumber);
    // console.log('$event', $event.srcElement.nextSibling);
    if(!$event.srcElement.nextSibling.style.maxHeight || $event.srcElement.nextSibling.style.maxHeight == '0px'){
        $event.srcElement.nextSibling.style.maxHeight = '300px'
    }else{
        $event.srcElement.nextSibling.style.maxHeight = '0px'
    }
}

</script>
<template>
    <div class="flex flex-col items-start justify-center gap-5 max-w-[568px]">
        <!-- accordion -->
        <div class="bg-white p-6 flex gap-5 accordion cursor-pointer" v-for="(item, index) in accordionItemList" :key="index" :data-index-number="`accordion-${index+1}`" @click="activeAccordion">
          <span
            class="w-6 h-6 justify-center before-obj gap-2 accordion-icon"
          ></span>
          <div class="accordion-wrapper">
            <h5 class="text-[20px] leading-[26px] font-medium">
              {{item.title}}
            </h5>
            <div class="accordion-content">
              <div class="relative z-10 accordion-inner">
                <div class="">
                  <p class="text-[16px] font-normal leading-[24px] text-codgray-950 mb-7">
                   {{ item.content }}
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
        //content: url('@images/icons/expansion-opened.svg');
      }
    }
    .accordion-content {
      //max-height: 300px;
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