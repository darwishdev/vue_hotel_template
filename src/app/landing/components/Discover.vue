<script setup lang="ts">
import AppImage from '@/common/components/AppImage.vue';
import { useGlobalStore } from '@/common/stores/global';

const globalStore = useGlobalStore()
const { article, images } = globalStore.websiteFindResponse.website.propertyDiscoverMore  
</script>

<template>
    <article class="grid gap-2">
        <div class="col-12 md:col-6 text-justify">
            <p class="mb-3">{{ article }} </p>
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

article img {
    animation: fade-up;
    animation-timeline: view();
}
</style>
