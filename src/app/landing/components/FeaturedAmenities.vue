<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import Amenity from './partials/Amenity.vue';
const globalStore = useGlobalStore()

const { featuredAmenitiesText, featuredAmenitiesTitle } = globalStore.websiteFindResponse.website
</script>
<template>
    <div class="text-white w-full mb-4 px-4">
        <h1>{{ featuredAmenitiesTitle }}
            <br>
            <p class="font-light">{{ featuredAmenitiesText }}</p>
        </h1>

    </div>

    <div class="featured-amenities amenities_wrapper gap-1 md:gap-3">
        <Amenity v-for="amenity in globalStore.featuredAmenities" :key="amenity.amenityId" :amenity="amenity" />
    </div>
</template>

<style>

</style>
