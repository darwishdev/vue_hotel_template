<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectCoverflow, Pagination, Keyboard } from 'swiper/core';

import AppImage from '@/common/components/AppImage.vue';
const globalStore = useGlobalStore()
const modules = [Keyboard, Navigation, EffectCoverflow, Pagination]
const breakpoints = {
  '640': {
    slidesPerView: 1
  },
  '760': {
    slidesPerView: 3
  },
  '1600': {
    slidesPerView: 4
  },
}
const coverflowEffects = {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: false
}
const autoPlayOptions = {
  delay: 3000,
  pauseOnMouseEnter: true,
}
</script>
<template>
  <swiper class="slide-innn" :navigation="true" :modules="modules" :pagination="true" loop :effect="'coverflow'"
    :grab-cursor="true" :keyboard="{ enabled: true }" :centered-slides="false" :slides-per-view="1"
    :breakpoints="breakpoints" :autoplay="autoPlayOptions" :coverflow-effect="coverflowEffects">
    <swiper-slide v-for="image in globalStore.websiteFindResponse.property.images">
      <AppImage :src="image" :image-props="{ preview: true }" :size="{ width: '100%' }" max-height='200px'></AppImage>
    </swiper-slide>
  </swiper>
</template>

<style \>
.p-image img {
  max-height: 270px;
}

.slide-innn {
  direction: ltr;
  animation: slide-in linear forwards;
  animation-timeline: view() !important;
  position: relative;
  margin-bottom: 1rem;
  animation-range: entry 50% cover 50% !important;

  @supports(animation-timeline: view()) {
    opacity: 0;
  }
}
</style>
