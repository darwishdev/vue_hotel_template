<script setup lang="ts">
import autoAnimate from "@formkit/auto-animate"
import { useGlobalStore } from '@/common/stores/global';
import AppIcon from '@/common/components/AppIcon.vue';
import Button from 'primevue/button';
import { onMounted, ref } from 'vue';
const globalStore = useGlobalStore()
const amenitiesContainer = ref()
const showAll = ref(false)
const allAmenities = ref(globalStore.websiteFindResponse.property.amenities)
onMounted(() => {
    autoAnimate(amenitiesContainer.value, {
        easing: 'ease-in-out'
    })
})

const showLess = () => {
    allAmenities.value = []
    setTimeout(() => {
        showAll.value = false
        allAmenities.value = globalStore.websiteFindResponse.property.amenities
    }, 250);
}
</script>

<template>
    <div v-show="showAll" class="fadeinup animation-duration-300">
        <div ref="amenitiesContainer" class="flex flex-wrap gap-3 mb-3">
            <div class="w-8rem md:w-21rem mx-2 my-2 gap-2 flex align-items-center" :key="amenity.amenityId"
             v-for="amenity in allAmenities">
                <AppIcon :icon="amenity.amenityIcon"></AppIcon>
                <h4 class="font-light">{{ amenity.amenityName }}</h4>
            </div>
        </div>
    </div>
    <div v-show="!showAll" class="fadein animation-duration-300">
        <div class="flex  amenities_wrapper  gap-3 mb-3">
            <div class="flex align-items-center" :key="amenity.amenityId"
                v-for="amenity in globalStore.websiteFindResponse.property.amenities.slice(0, showAll ? globalStore.websiteFindResponse.property.amenities.length : 12)">
                <div class="amenity_wrapper glass">
    
                    <AppIcon :icon="amenity.amenityIcon"></AppIcon>
                    <h4 class="font-light">{{ amenity.amenityName }}</h4>
                </div>
    
            </div>
            <div class="flex align-items-center" :key="amenity.amenityId"
                v-for="amenity in globalStore.websiteFindResponse.property.amenities.slice(0, showAll ? globalStore.websiteFindResponse.property.amenities.length : 12)">
                <div class="amenity_wrapper glass">
    
                    <AppIcon :icon="amenity.amenityIcon"></AppIcon>
                    <h4 class="font-light">{{ amenity.amenityName }}</h4>
                </div>
            </div>
    
    
        </div>
        <div class="flex reverse amenities_wrapper  gap-3 mb-3">
            <div class="flex align-items-center" :key="amenity.amenityId"
                v-for="amenity in globalStore.websiteFindResponse.property.amenities.slice(0, showAll ? globalStore.websiteFindResponse.property.amenities.length : 12)">
                <div class="amenity_wrapper glass">
    
                    <AppIcon :icon="amenity.amenityIcon"></AppIcon>
                    <h4 class="font-light">{{ amenity.amenityName }}</h4>
                </div>
            </div>
            <div class="flex align-items-center" :key="amenity.amenityId"
                v-for="amenity in globalStore.websiteFindResponse.property.amenities.slice(0, showAll ? globalStore.websiteFindResponse.property.amenities.length : 12)">
                <div class="amenity_wrapper glass">
    
                    <AppIcon :icon="amenity.amenityIcon"></AppIcon>
                    <h4 class="font-light">{{ amenity.amenityName }}</h4>
                </div>
            </div>
    
        </div>
    </div>
    <Button severity="contrast" class="px-4" v-if="!showAll" @click="showAll = true" :label="`Show All ${globalStore.websiteFindResponse.property.amenities.length} Amenities`"></Button>
    <Button severity="contrast" outlined v-else @click="showLess" :label="`Show Less`"></Button>
</template>
<style lang="scss">
@keyframes scrolling {

    to {
        transform: translate(calc(-50% - 0.5rem));
    }

}

@keyframes scrolling-reverse {

    to {
        transform: translate(calc(50% - 0.5rem));
    }

}

.hd {
    // overflow: scroll;
}

.amenities_wrapper {
    display: flex;
    flex-wrap: nowrap;
    animation: scrolling linear;
    flex-wrap: no-wrap;
    animation-timeline: view();
    animation-range: exit -80vh;

    &.reverse {
        animation-direction: reverse
    }


}

.amenity_wrapper {
    padding: 1rem;
    border-radius: var(--p-border-radius-lg);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 7rem;
    height: 7rem;
    gap: 1rem;
    text-align: center;

}
</style>
