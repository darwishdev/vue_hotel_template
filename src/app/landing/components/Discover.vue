<script setup lang="ts" >
import AppImage from '@/common/components/AppImage.vue';
import { useGlobalStore } from '@/common/stores/global';

const globalStore = useGlobalStore()
</script>

<template>
    <article class="grid gap-2">
        <div class="col-12 md:col-6 text-justify">
            <p class="mb-3">Nestled along the stunning coastline of Alexandria, Rhactus Hotel offers an exceptional experience for travelers seeking both comfort and adventure. With breathtaking views of the Mediterranean Sea and a prime location close to the city’s rich history, the hotel is a haven for relaxation and exploration. Whether you want to immerse yourself in Alexandria’s ancient wonders or unwind in our luxurious accommodations, Rhactus provides the perfect balance of elegance and convenience.</p>
            <p>Indulge in our world-class amenities, savor delectable cuisine at our in-house restaurants, and soak in the vibrant atmosphere of Alexandria’s cultural heart. At Rhactus, your stay is not just a visit—it's a journey. Discover the beauty, heritage, and warmth that only Rhactus Hotel can offer. Book your escape today!
            </p>
        </div>
        <div class="col discover-more-section">
            <AppImage :size="{width : '100%'}" class="mb-2" :src="globalStore.websiteFindResponse.property.images[Math.floor(Math.random() * globalStore.websiteFindResponse.property.images.length)]" ></AppImage>
            <AppImage :size="{width : '100%'}" :src="globalStore.websiteFindResponse.property.images[Math.floor(Math.random() * globalStore.websiteFindResponse.property.images.length)]" ></AppImage>
        </div>
    </article>
</template>

<style>
.discover-more-section span{
	display: flex;
	height: 160px;
}
.discover-more-section img{
	width: 100%;
	height: 100%;
	object-fit: cover;
}
@keyframes fade-up {
    from {
        opacity: 0;
        transform: translateY(300px)
    }

    50%,
    100% {
        opacity: 1;
        transform: translateY(0)
    }
}
article img{
    animation: fade-up;
    animation-timeline: view();
}
</style>