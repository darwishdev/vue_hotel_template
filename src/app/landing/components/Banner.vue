<script setup lang="ts">
import observer from '@/common/utilites/animation';
import { getAssetPath } from '@/common/utilites/path';
import { onMounted, ref } from 'vue';
const bannerRef = ref()
const props = defineProps<{
    bannerImage: string
    overlayOpacity?: number
}>()

onMounted(() => {
    setTimeout(() => {
        observer.observe(bannerRef.value)
    }, 100);
})
const bannerImageSrc = getAssetPath(props.bannerImage || " ")
</script>

<template>

    <div ref="bannerRef" class="  banner" :style="`background-image: url(${bannerImageSrc});`">
        <div class="wrapper">
            <slot></slot>
        </div>
    </div>

</template>

<style>
.banner {
    position: relative;
    width: 100%;
    padding-block: 3rem;
    overflow: hidden;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
