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
import Amenity from '../components/partials/Amenity.vue';
const globalStore = useGlobalStore()
const { bannerImage, featuredAmenitiesText, featuredAmenitiesImage, featuredAmenitiesTitle } = globalStore.websiteFindResponse.website

</script>
<template>
	<VideoBanner />
	<AppSection id="about" :title="`About`">

		<Slider></Slider>
		<div class="separator my-5"></div>
		<h3 class="text-center animate-on-scroll fade-up text-base md:text-lg px-1 md:px-5 md:py-3 ">{{
			globalStore.websiteFindResponse.property.propertyDescription }}</h3>
	</AppSection>
	<Banner class :bannerImage="bannerImage!">
		<div class="container">
			<div class="text-white px-2 w-full">
				<h1 class="text-white">
					Experience Comfort, <br /> Embrace Elegance
				</h1>
				<h3>
					Experience Comfort, Embrace Elegance
				</h3>
				<span class="text-xs md:text-sm font-light">Stay with Rhactus House in
					Alexandria.</span>

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
	<AppSection id="rooms" title="Room Types">
		<RoomTypes></RoomTypes>
	</AppSection>
	<Banner class="amenities-banner"  :bannerImage="featuredAmenitiesImage!">
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

	</Banner>
	<AppSection id="location" title="Our Location">
		<Map class="scale w-full animate-on-scroll"></Map>
	</AppSection>
	<AppSection id="contact" dark title="Get In Touch">
		<Contact />
	</AppSection>
	<AppSection id="discover_more" title="Discover More About Rhactus">
		<Discover></Discover>
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
	@media (max-width:400px){
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

@media screen and (max-width : 400px) {
	.featured-amenities{
		 
	}
	.featured-amenities .amenity{
		height: 140px;
	}
}
</style>
