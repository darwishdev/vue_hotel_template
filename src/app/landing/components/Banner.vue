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
const opacity = ref(props.overlayOpacity && props.overlayOpacity > 0 && props.overlayOpacity <= 1 ? props.overlayOpacity : 0.4)
const bannerImageSrc = getAssetPath(props.bannerImage || " ")
</script>

<template>

    <div ref="bannerRef" class="  banner" :style="`background-image: url(${bannerImageSrc});`">
        <div class="banner-overlay" :style="`background-color: rgba(0, 0, 0, ${opacity});`">
            <slot></slot>
        </div>
    </div>

</template>

<style>
@keyframes mob-scale {
    0% {
        background-size: 145%;
    }

    100% {
        background-size: 230%;
    }
}

.banner {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

@supports not (animation-timeline: view()) {
    .animating.bg-scale {
        -webkit-animation: scale 1.5s ease-in-out;
        background-size: 150%;
    }

    @media screen and (max-width : 500px) {
        .animating.bg-scale {
            -webkit-animation: mob-scale 1.5s ease-in-out;
            background-size: 230%;
        }
    }
}

@supports (animation-timeline: view()) {
    .banner {
        background-size: cover;
        animation: scale;
        animation-timeline: view();
        animation-range: exit -400px;
    }

    @media screen and (max-width : 500px) {
        .banner {
            background-size: cover;
            animation: mob-scale;
            animation-timeline: view();
            animation-range: exit -400px;
        }
    }
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
