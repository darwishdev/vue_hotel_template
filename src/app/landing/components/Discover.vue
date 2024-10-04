<script setup lang="ts">
import AppImage from '@/common/components/AppImage.vue';
import { useGlobalStore } from '@/common/stores/global';
import observer from '@/common/utilites/animation';
import { onMounted, ref } from 'vue';

const globalStore = useGlobalStore()
const { article, images } = globalStore.websiteFindResponse.website.propertyDiscoverMore
const discoverContainer = ref()

onMounted(() => {
    observer.observe(discoverContainer.value)
})
</script>

<template>
    <article ref="discoverContainer" class="discover-container grid align-items-center gap-2">
        <div class="col-12 md:col-6 text-justify">
            <p v-html="article" class="mb-3 text-left"></p>
        </div>
        <div class="col discover-more-section">
            <AppImage :size="{ width: '100%' }" v-for="image in images" :key="image" class="mb-2" :src="image">
            </AppImage>
        </div>
    </article>
</template>

<style>
.discover-more-section span {
    display: flex;
    height: 160px;
}

.discover-more-section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
