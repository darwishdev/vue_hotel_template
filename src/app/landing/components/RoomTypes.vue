<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Autoplay, Keyboard } from 'swiper/core';
import { PropertyFindFilteredReservableUnit } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';
const globalStore = useGlobalStore()
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'
import RoomType from './partials/RoomType.vue';
const modules = [Autoplay, Keyboard, EffectCoverflow, Pagination]
import RoomTypeDetails from './RoomTypeDetails.vue';
const breakpoints = {
      '640': {
        slidesPerView: 2
      },
      '760': {
        slidesPerView: 3
      },
      '1600': {
        slidesPerView: 4
      },
}
const autoPlayOptions = {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
}
const coverFlowEffect = {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
}
const openReservableUnitFindDialog = (unit : PropertyFindFilteredReservableUnit) => {
	globalStore.openDialog(RoomTypeDetails , unit.reservableUnitName , { room : unit.reservableUnitId})
}
</script>
<template>
  <swiper :modules="modules" :pagination="true" :effect="'coverflow'"  :grab-cursor="true" :keyboard="{ enabled: true }"
    :centered-slides="false" :slides-per-view="1" :breakpoints="breakpoints"
    loop :autoplay="autoPlayOptions" :coverflow-effect="coverFlowEffect">
    <swiper-slide @click="openReservableUnitFindDialog(unit as any)" v-for="unit in globalStore.websiteFindResponse.property.reservableUnits">
      <RoomType :unit="(unit as PropertyFindFilteredReservableUnit)"></RoomType>
    </swiper-slide>
  </swiper>
</template>

<style>
.p-image img {
  max-height: 270px;
}
</style>
