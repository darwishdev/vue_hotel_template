<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Autoplay, Keyboard } from 'swiper/core';
import AppImage from '@/common/components/AppImage.vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'
const modules = [Autoplay, Keyboard, EffectCoverflow, Pagination]
import { PropertyFindFilteredReservableUnit } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';
import apiClient from "@/common/api/ApiClient";
import { ReservableUnitsViewEntity } from "@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_entities_pb";
import Loading from "@/common/components/Loading.vue";
const dialogRef: any = inject('dialogRef');
const room = ref<PropertyFindFilteredReservableUnit>(dialogRef.value.data.room)
const reservableUnit = ref<ReservableUnitsViewEntity>()

onMounted(() => {
    apiClient.reservableUnitFind({recordId : room.value.reservableUnitId}).then((result) => {
        setTimeout(() => {
            reservableUnit.value = result
        }, 300);
    }).catch((err) => {
        
    });
})

</script>

<template>
    <div v-if="reservableUnit" class="zoomin animation-duration-300">
        <swiper class="slide-innn" :modules="modules" :pagination="true" :effect="'coverflow'" :grab-cursor="true"
        :keyboard="{ enabled: true }" :centered-slides="false" :slides-per-view="2" :autoplay="{
          delay : 3000,
          pauseOnMouseEnter : true,
        }" :coverflow-effect="{ rotate: 50, stretch: 0, depth: 100, modifier: 1,slideShadows: false}">
        <swiper-slide v-for="image in reservableUnit?.reservableUnitImages.split(',')">
          <AppImage :src="image" :image-props="{ preview: true }" :size="{ width: '100%' }" max-height='200px'></AppImage>
        </swiper-slide>
      </swiper>
      <p class="text-center text-base p-2 px-3">
          {{ reservableUnit.reservableUnitDescription }}
      </p>
    </div>
    <div v-else class="zoomin animation-duration-100 justify-content-center flex align-items-center w-full h-30rem">
        <Loading></Loading>
    </div>
</template>
