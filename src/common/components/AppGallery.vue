<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import ScrollableContainer from './ScrollableContainer.vue';
import Galleria from 'primevue/galleria';
import AppImage from './AppImage.vue';
const activeIndex = ref(0);
const props = defineProps<{ images: string[] }>()
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const displayCustom = ref(false);

onUnmounted(() => {
    displayCustom.value = false;

})
const imageClick = (index: number) => {
    console.log('image')
    activeIndex.value = index;
    displayCustom.value = true;
};
</script>
<template>
    <div class="p-4 px-1 w-full mx-auto flex justify-content-center align-items-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="width: 100%;"
            :circular="true" :autoPlay="true" :transitionInterval="4000">
            <template #item="slotProps">
                <AppImage class="gallery" :src="slotProps.item" :imageProps="{preview : true}" :key="slotProps.item" :size="{ width: '100%', height: '100%' }" />
            </template>
            <template #thumbnail="slotProps">
                <AppImage :src="slotProps.item" :key="slotProps.item" class="thumbnail-img" />
            </template>
        </Galleria>
        <!-- <Galleria v-model:active-index="activeIndex" v-model:visible="displayCustom" :value="props.images"
            :responsiveOptions="responsiveOptions" containerStyle="max-width: 850px" :circular="true" :fullScreen="true"
            :showItemNavigators="true" :show-thumbnails="true">
            <template #item="slotProps">
                {{ slotProps.item }}
                <AppImage :src="slotProps.item" :key="slotProps.item" :size="{ width: '100%', height: '100%' }" />
            </template>
        </Galleria>
        <ScrollableContainer>
            <div v-for="( image, index ) in  props.images" :key="index" class="cropped-image mr-4 my-2">
                <AppImage :image-props="{ imageStyle: { 'max-height': '90px' } }"
                    @click.prevenet="() => imageClick(index)" :src="image" class="w-full borderRound " alt="heey" />
            </div>
        </ScrollableContainer> -->
    </div>
</template>

<style>
.thumbnail-img img{
    height: 100px !important;
    object-fit: cover;
}
.p-galleria{
    width: 100%;
}
.gallery img{
    object-fit: cover;
}
</style>