<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import Amenity from "./partials/Amenity.vue";
import { onMounted, ref } from 'vue';
import observer from "@/common/utilites/animation";
const globalStore = useGlobalStore()
const amenitiesParentContainer = ref()
const showAll = ref(false)
const allAmenities = ref(globalStore.normalAmenities)
const innerWidth = window.innerWidth
onMounted(() => {
    if (innerWidth > 800) {
        showAll.value = true
    }
    observer.observe(amenitiesParentContainer.value!)
})

</script>

<template>
    <div ref="amenitiesParentContainer">
        <div class="flex flex-wrap gap-1 md:gap-4 align-items-center justify-content-center">
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
