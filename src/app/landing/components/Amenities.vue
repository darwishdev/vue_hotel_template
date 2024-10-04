<script setup lang="ts">
import autoAnimate from "@formkit/auto-animate"
import { useGlobalStore } from '@/common/stores/global';
import Amenity from "./partials/Amenity.vue";
import { onMounted, ref } from 'vue';
import observer from "@/common/utilites/animation";
const globalStore = useGlobalStore()
const amenitiesContainer = ref()
const amenitiesParentContainer = ref()
const showAll = ref(false)
const allAmenities = ref(globalStore.normalAmenities)
const innerWidth = window.innerWidth
onMounted(() => {
    if (innerWidth > 800) {
        showAll.value = true
    }
    autoAnimate(amenitiesContainer.value, {
        easing: 'ease-in-out'
    })
    observer.observe(amenitiesParentContainer.value!)
})

</script>

<template>
    <div ref="amenitiesParentContainer">
        <div class="amenities_wrapper">
            <Amenity v-for="amenity in allAmenities" :key="amenity.amenityId" :amenity="amenity" />
        </div>
    </div>
</template>
<style>
.desktop-wrapper {
    animation: fade-up;
    animation-timeline: view();
}

.amenities_wrapper {
    display: grid;
    gap: var(--p-small-gap);
    grid-auto-flow: column;

    @media (max-width:1025px) {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-flow: row;
    }

    @media (max-width:725px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width:500px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 350px) {
        grid-template-columns: 1fr;
    }


}
</style>
