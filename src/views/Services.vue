<script setup>
    import noteSVG from '@images/vector/note.svg?component'
    import linkSVG from '@images/vector/link.svg?component'
    import searchSVG from '@images/vector/search.svg?component'
</script>
<template>
    <div class="py-32">
        <div class="flex items-center justify-between mb-[86px]">
            <h2 class="font-semibold max-w-[636px]">Take the lead in smartly social media marketing</h2>
            <p class="font-InterRegular text-base max-w-[526px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae iure numquam saepe. Impedit deleniti pariatur veniam quos, id consequatur.</p>
        </div>
        <div class="grid grid-cols-3 gap-6">
            <!-- card -->
            <div class="border border-vulcan-950 rounded-[20px] px-12 pt-12 pb-10 flex flex-col max-w-[416px]">
                <noteSVG alt="note vector" class="mb-11"/>
                <div class="flex flex-col items-start justify-between grow">
                    <div class="mb-10">
                        <h4 class="mb-5 font-InterBold text-base">Social Media Strategy</h4>
                        <p class="font-interRegular text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus possimus officiis nam earum, esse labore autem soluta deleniti eaque architecto!</p>
                    </div>
                    <button class="btn btn--text font-InterSemiBold text-sm after-obj gap-2 after:content-[url('@images/icons/right-arrow.svg')]">Discover More</button>
                </div>
            </div>
            <!-- card -->
            <div class="border border-vulcan-950 rounded-[20px] px-12 pt-12 pb-10 flex flex-col max-w-[416px]">
                <linkSVG alt="link vector" class="mb-11"/>
                <div class="flex flex-col items-start justify-between grow">
                    <div class="mb-10">
                        <h4 class="mb-5 font-InterBold  text-base">Digital Marketing Plan</h4>
                        <p class="font-interRegular text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias, nesciunt quas dolorem sapiente sint veritatis ipsum atque, voluptas, quam minus natus adipisci quibusdam aperiam ea quos voluptatum eum ut quae ad dolores vel magnam? Nulla, molestias dicta aut optio autem officia error et odio corrupti atque vitae. Eius, autem!</p>
                    </div>
                    <button class="btn btn--text font-InterSemiBold text-sm after-obj gap-2 after:content-[url('@images/icons/right-arrow.svg')]">Discover More</button>
                </div>
            </div>
            <!-- card -->
            <div class="border border-vulcan-950 rounded-[20px] px-12 pt-12 pb-10 flex flex-col max-w-[416px]">
                <searchSVG alt="search vector" class="mb-11"/>
                <div class="flex flex-col items-start justify-between grow">
                    <div class="mb-10">
                        <h4 class="mb-5 font-InterBold  text-base">Search Engine Optimization</h4>
                        <p class="font-interRegular text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus possimus officiis nam earum, esse labore autem soluta deleniti eaque architecto!</p>
                    </div>
                    <button class="btn btn--text font-InterSemiBold text-sm after-obj gap-2 after:content-[url('@images/icons/right-arrow.svg')]">Discover More</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>