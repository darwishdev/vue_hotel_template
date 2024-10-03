<script setup lang="ts">
import autoAnimate from "@formkit/auto-animate"
import { useGlobalStore } from '@/common/stores/global';
import Amenity from "./partials/Amenity.vue";
import Button from 'primevue/button';
import { onMounted, ref } from 'vue';
import observer from "@/common/utilites/animation";
const globalStore = useGlobalStore()
const amenitiesContainer = ref()
const amenitiesParentContainer = ref()
const showAll = ref(false)
const allAmenities = ref(globalStore.normalAmenities)
const innerWidth = window.innerWidth
onMounted(() => {
    if(innerWidth > 800){
        showAll.value = true
    }
    autoAnimate(amenitiesContainer.value, {
        easing: 'ease-in-out'
    })
    observer.observe(amenitiesParentContainer.value!)
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
    <div ref="amenitiesParentContainer">
        <div v-show="true" class="desktop-wrapper fadeindown animation-duration-300">
            <div ref="amenitiesContainer" class="flex justify-content-center flex-wrap gap-3 mb-3 px-1 md:px-3">
                <Amenity class="w-10rem md:w-12rem" v-for="amenity in allAmenities" :key="amenity.amenityId" :amenity="amenity" />
            </div>
        </div>
        <!-- <div v-show="!showAll" class="fadein animation-duration-300">
            <div class="am-container">
                <div class="am-scrolling amenities_wrapper">
                    <Amenity v-for="amenity in firstHalf" :key="amenity.amenityId" :amenity="amenity" />
                </div>
            </div>
            <div class="am-container">
                <div class="am-scrolling reverse amenities_wrapper  ">
                    <Amenity class="amenity" v-for="amenity in secondHalf" :key="amenity.amenityId" :amenity="amenity" />
                </div>
            </div>
        </div> -->
        <!-- <div class="wrapper">
            <Button severity="contrast" class="flex lg:hidden px-4" v-if="!showAll" @click="showAll = true"
                :label="`Show All ${allAmenities.length} Amenities`"></Button>
            <Button severity="contrast" class="flex lg:hidden" outlined v-else @click="showLess" :label="`Show Less`"></Button>
        </div> -->
    </div>
</template>
<style >
.desktop-wrapper{
    animation: fade-up;
    animation-timeline: view();
}
@supports (animation-timeline: view()){
    .amenities_wrapper{
        animation: scrolling linear;
        animation-timeline: view();
        animation-range: exit -80vh;
    }
}
.amenities_wrapper {
    display: grid;
    gap: var(--p-small-gap);
    grid-auto-flow: column;
    margin-bottom: var(--p-small-gap);

    &.reverse {
        animation-direction: reverse
    }
}

@supports not (animation-timeline: view()){
    @keyframes amenity-scrolling {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-150%);
        }
    }
    .am-container {
        width: 100%;
        overflow-x:auto !important;
    }    
    .am-scrolling{
        gap : 30px !important;
    }
    .am-scrolling .amenity{
        width: 160px;
    }
    .animating .am-scrolling{
        -webkit-animation: amenity-scrolling 10s linear infinite;
    }
    .animating .reverse{
        -webkit-animation-direction: reverse;
    }
}

</style>
