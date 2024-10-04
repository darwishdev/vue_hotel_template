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

    <div class="amenities_wrapper">
        <Amenity v-for="amenity in globalStore.featuredAmenities" :key="amenity.amenityId" :amenity="amenity" />
    </div>
</template>

<style>
@media screen and (max-width : 400px) {
    .featured-amenities .amenity {
        height: 140px;

        @media (max-width: 350px) {
            height: 160px;
        }
    }
}
</style>
