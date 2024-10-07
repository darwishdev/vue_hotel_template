<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import Amenity from './partials/Amenity.vue';
const globalStore = useGlobalStore()

const { featuredAmenitiesTitle } = globalStore.websiteFindResponse.website
</script>
<template>
    <h2 class="reveal">{{ featuredAmenitiesTitle }}</h2>
    <div class="featured-amenities amenities_wrapper gap-1 md:gap-3">
        <Amenity v-for="amenity in globalStore.featuredAmenities" :key="amenity.amenityId" :amenity="amenity" />
    </div>
</template>

<style></style>
