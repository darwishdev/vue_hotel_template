<script setup lang="ts">
import { getAssetPath } from '@/common/utilites/path';
import { ref } from 'vue';

const props = defineProps<{
    bannerImage: string
    overlayOpacity?: number
}>()

const opacity = ref(props.overlayOpacity && props.overlayOpacity > 0 && props.overlayOpacity <= 1 ? props.overlayOpacity : 0.4)
const bannerImageSrc = getAssetPath(props.bannerImage || " ")
</script>

<template>

    <div class="banner" :style="`background-image: url(${bannerImageSrc}); background-size: cover`">
        <div class="banner-overlay" :style="`background-color: rgba(0, 0, 0, ${opacity});`">
            <slot></slot>
        </div>
    </div>

</template>

<style>
.banner {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 5px;
    animation: scale;
    animation-timeline: view();
    animation-range: exit -400px;
    background-repeat: no-repeat;
    background-position: bottom;

}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner-overlay {
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.banner-slogan {
    color: white;
    font-size: 2rem;
    text-align: center;
    padding: 0 20px;
}

@media screen and (max-width : 500px) {
    .banner {
        position: relative;
        width: 100%;
        overflow: hidden;
        border-radius: 5px;
    }
}
</style>
