<script setup lang="ts">
import AppSection from '@/common/components/AppSection.vue';
import { useGlobalStore } from '@/common/stores/global';
import Banner from '../components/Banner.vue';
import AppFooter from '@/common/components/AppFooter.vue';
import Map from '../components/Map.vue';
import Button from 'primevue/button';
import Amenities from '../components/Amenities.vue';
import Slider from '../components/partials/Slider.vue';
import RoomTypes from '../components/RoomTypes.vue';
import VideoBanner from '../components/VideoBanner.vue';
const globalStore = useGlobalStore()
await globalStore.websiteFind()

</script>
<template>
	<VideoBanner />
	<AppSection id="about" :title="`About`" dark>

		<Slider></Slider>
		<div class="separator my-5"></div>
		<h3 class="text-center text-base md:text-lg px-1 md:px-5 md:py-3 reveal">{{
			globalStore.websiteFindResponse.property.propertyDescription }}</h3>
	</AppSection>
	<Banner class bannerImage="https://www.rhactushotel.com/images/uploads/2022319588257.jpg">
		<div class="container">
			<div class="text-white w-full">

				<h2 class="text-white">
					Experience Comfort, <br /> Embrace Elegance
					<br><span class="text-xs md:text-sm font-light">Stay with Rhactus House in
						Alexandria.</span>
				</h2>
			</div>

		</div>
	</Banner>
	<div id="amenities" class="py-8 px-8 darker">
		<h2 class="reveal">Amenities</h2>
		<hr class="short">

		<Amenities></Amenities>
	</div>
	<AppSection id="rooms" title="Room Types">
		<RoomTypes></RoomTypes>
	</AppSection>
	<Banner class bannerImage="/IMG_3583.webp">
		<div class="wrapper">
			<div class="text-white w-full px-4">
				<h2>
					Our
					Nearby Locations!
					<br>
					<p class="font-light">Stay with Rhactus House in
						Alexandria.</p>
				</h2>
				<Button label="Explore" severity="contrast" class="px-2 md:px-4"></Button>
			</div>
		</div>
	</Banner>
	<AppSection id="location" title="Our Location">
		<Map class="w-full"></Map>
	</AppSection>
	<AppSection id="contact" title="Our Location">
		<Map class="w-full"></Map>
	</AppSection>
	<AppFooter />
</template>

<style lang="scss">
.separator {
	margin: auto;
	height: 2px;
	background-color: rgba(0, 0, 0, 0.135);
	width: 75%;
}

@keyframes fade-out {
	100% {
		opacity: 0
	}
}

@keyframes header-video-animation {
	25% {
		opacity: 1
	}

	85%,
	100% {
		opacity: 0;
		scale: 3;
	}
}
</style>
