<script setup lang="ts">
import AppSection from '@/common/components/AppSection.vue';
import { useGlobalStore } from '@/common/stores/global';
import Contact from '../components/Contact.vue';
import Banner from '../components/Banner.vue';
import AppFooter from '@/common/components/AppFooter.vue';
import Map from '../components/Map.vue';
import Amenities from '../components/Amenities.vue';
import Slider from '../components/partials/Slider.vue';
import RoomTypes from '../components/RoomTypes.vue';
import VideoBanner from '../components/VideoBanner.vue';
import Discover from '../components/Discover.vue';
import FeaturedAmenities from '../components/FeaturedAmenities.vue';
const globalStore = useGlobalStore()
const { bannerImage, featuredAmenitiesImage } = globalStore.websiteFindResponse.website

</script>
<template>
	<VideoBanner />
	<AppSection id="about" title="About Us">

		<Slider></Slider>
		<div class="separator my-5"></div>
		<h3 class="text-center animate-on-scroll fade-up text-base md:text-lg px-1 md:px-5 md:py-3 ">{{
			globalStore.websiteFindResponse.property.propertyDescription }}</h3>
	</AppSection>
	<Banner class :bannerImage="bannerImage!">
		<div class="container">
			<div class="text-white px-2 w-full">
				<h1 class="text-white">
					Live the Stay, Love the Location
				</h1>
				<h3>
					Enjoy your stay at Rhactus House San Stefano
				</h3>
			</div>
		</div>
	</Banner>
	<div id="amenities" class="py-8 darker">
		<div class="wrapper">
			<h2 class="reveal">Amenities</h2>
			<hr class="short">
		</div>
		<Amenities></Amenities>
	</div>
	<AppSection id="rooms" title="Apartment Types">
		<RoomTypes></RoomTypes>
	</AppSection>
	<Banner class="amenities-banner" :bannerImage="featuredAmenitiesImage!">
		<FeaturedAmenities />
	</Banner>
	<AppSection id="location" title="Our Location">
		<Map class="scale w-full animate-on-scroll" />
	</AppSection>
	<AppSection id="contact" dark title="Contact Us">
		<Contact />
	</AppSection>
	<AppSection id="discover_more" title="Discover More About Rhactus Hotels">
		<Discover />
	</AppSection>
	<AppFooter />
</template>

<style>
#about {
	background-color: var(--p-color-background);
}

.amenities-banner.banner {
	padding: var(--p-larg-gap);
	height: 500px !important;
	background-size: cover;

	@media (max-width:400px) {
		height: 600px !important;
	}
}

.amenities {
	display: grid;
	grid-auto-flow: column;
	gap: 10px;



	.amenity {
		width: 100%;
	}

	@media(max-width: 750px) {
		grid-template-columns: repeat(2, 1fr);
		grid-auto-flow: row;
	}
}
</style>
