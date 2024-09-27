<script setup lang="ts">
import autoAnimate from "@formkit/auto-animate"
import { useGlobalStore } from '@/common/stores/global';
import Amenity from "./partials/Amenity.vue";
import Button from 'primevue/button';
import { onMounted, ref } from 'vue';
const globalStore = useGlobalStore()
const amenitiesContainer = ref()
const showAll = ref(false)
const allAmenities = ref(globalStore.normalAmenities)
onMounted(() => {
    autoAnimate(amenitiesContainer.value, {
        easing: 'ease-in-out'
    })
})
const splitArray = (arr: any[]) => {
    const middleIndex = Math.ceil(arr.length / 2); // Find the middle index
    const firstHalf = arr.slice(0, middleIndex); // Slice the first half
    const secondHalf = arr.slice(middleIndex); // Slice the second half
    return [firstHalf, secondHalf]; // Return both halves as an array of arrays
}
const [firstHalf, secondHalf] = splitArray(globalStore.normalAmenities!);
const showLess = () => {
    allAmenities.value = []
    setTimeout(() => {
        showAll.value = false
        allAmenities.value = globalStore.normalAmenities
    }, 250);
}
</script>

<template>
    <div v-show="showAll" class="fadeindown animation-duration-300">
        <div ref="amenitiesContainer" class="flex flex-wrap gap-3 mb-3">
            <Amenity v-for="amenity in allAmenities" :key="amenity.amenityId" :amenity="amenity" />
        </div>
    </div>
    <div v-show="!showAll" class="fadein animation-duration-300">
        <div class="amenities_wrapper">
            <Amenity v-for="amenity in firstHalf" :key="amenity.amenityId" :amenity="amenity" />
        </div>
        <div class=" reverse amenities_wrapper  ">
            <Amenity v-for="amenity in secondHalf" :key="amenity.amenityId" :amenity="amenity" />
        </div>
    </div>
    <div class="wrapper">
        <Button severity="contrast" class="px-4" v-if="!showAll" @click="showAll = true"
            :label="`Show All ${allAmenities.length} Amenities`"></Button>
        <Button severity="contrast" outlined v-else @click="showLess" :label="`Show Less`"></Button>

    </div>
</template>
<style lang="scss">
.hd {
    // overflow: scroll;
}

.amenities_wrapper {
    display: grid;

    animation: scrolling linear;
    animation-timeline: view();
    animation-range: exit -80vh;
    gap: var(--p-small-gap);
    grid-auto-flow: column;
    margin-bottom: var(--p-small-gap);

    &.reverse {
        animation-direction: reverse
    }


}
</style>
