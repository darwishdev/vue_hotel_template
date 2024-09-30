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
import AppGallery from "@/common/components/AppGallery.vue";
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
        <div class="mx-auto propertyGallery w-full justify-content-center align-items-center flex px-2 mb-0">
            <AppGallery class="pb-0" :images="reservableUnit.reservableUnitImages.split(',')" />
        </div>
      <p class="text-center text-base p-2 px-3">
          {{ reservableUnit.reservableUnitDescription }}
      </p>
    </div>
    <div v-else class="zoomin animation-duration-100 justify-content-center flex align-items-center w-full h-30rem">
        <Loading></Loading>
    </div>
</template>

<style>
@media screen and (min-width : 600px) {
    .propertyGallery {
        max-width: 700px !important;
    }
}

@media screen and (min-width : 1600px) {
    .propertyGallery {
        max-width: 1000px !important;
    }
}
</style>
