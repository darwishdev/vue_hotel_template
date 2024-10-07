<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import Amenity from "./partials/Amenity.vue";
import { ref } from 'vue';
const globalStore = useGlobalStore()
const allAmenities = ref(globalStore.normalAmenities)
</script>

<template>
    <div>
        <div class="flex flex-wrap gap-1 md:gap-4 align-items-center justify-content-center">
            <Amenity v-for="amenity in allAmenities" :key="amenity.amenityId" :amenity="amenity" />
        </div>
    </div>
</template>
<style>
@supports (animation-timeline: view()) {
    .desktop-wrapper {
        animation: fade-up;
        animation-timeline: view();
    }
}

.amenities_wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
