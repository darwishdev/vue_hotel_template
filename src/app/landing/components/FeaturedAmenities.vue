<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import Amenity from './partials/Amenity.vue';
const globalStore = useGlobalStore()

const { featuredAmenitiesText, featuredAmenitiesTitle } = globalStore.websiteFindResponse.website
</script>
<template>
    <div class="wrapper">
        <div class="text-white w-full px-4">
            <h2>{{ featuredAmenitiesTitle }}
                <br>
                <p class="font-light">{{ featuredAmenitiesText }}</p>
            </h2>

        </div>
    </div>
    <div class="featured-amenities amenities px-3 mt-4">
        <Amenity v-for="amenity in globalStore.featuredAmenities" :key="amenity.amenityId"
            :amenity="amenity" />
    </div>
</template>

<style>
@media screen and (max-width : 400px) {
	.featured-amenities .amenity{
		height: 140px;
	}
}
</style>