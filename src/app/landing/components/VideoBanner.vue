<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import observer from '@/common/utilites/animation';
import { onMounted, ref } from 'vue';
const globalStore = useGlobalStore()
const videoElementRef = ref()
const { bannerVideo, bannerHeadline, bannerText, bannerSlogan } = globalStore.websiteFindResponse.website
onMounted(() => {
    setTimeout(() => {
        videoElementRef.value.play()
    }, 100)
    observer.observe(videoElementRef.value!)
})
</script>

<template>
    <section class="video-banner ">
        <div class="wrapper">
            <div class="banner-content">
                <h1>{{ bannerHeadline }}</h1>
                <h4> {{ bannerSlogan }}</h4>
                <p>{{ bannerText }}</p>
                <div class="actions">

                    <a class="flex justify-content-center align-items-center w-10rem app-btn primary" href="#contact">
                        <i class="pi pi-phone" />
                        {{ $t('contact') }}
                    </a>
                    <a class="flex justify-content-center align-items-center w-10rem text-white app-btn outline" href="#rooms">
                        <i class="pi pi-key" />
                        {{ $t('units') }}</a>
                </div>
            </div>
        </div>
        <video ref="videoElementRef" width="100%" class="v-scale animate-on-scroll" height="auto"
            preload="auto" muted loop playsinline autobuffer>
            <source :src="bannerVideo" type="video/webm">
        </video>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="var(--p-color-background-70)" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="var(--p-color-background-50)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="var(--p-color-background-30)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="var(--p-color-background)" />
            </g>
        </svg>
    </section>


</template>
<style  >

@keyframes v-scaling {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }

    25% {
        opacity: .5;
    }

    85%,
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@supports not (animation-timeline: view()){
    .v-scale.animating {
        -webkit-animation: v-scaling 4s ease-in-out .3s;
    }
}

.video-banner {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 4rem 0rem;
    min-height: 20rem;
    position: relative;


    video {
        min-height: 100%;
        object-fit: cover;
        inset: 0;
        transform-origin: bottom;
        position: absolute;
        opacity: .8;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
        @supports (animation-timeline: view()) {
            animation: header-video-animation linear forwards;
            animation-timeline: view();
            animation-range: exit;
        }

    }

    .banner-content {
        animation: fade-out linear;
        animation-timeline: view();
        animation-range: exit -2rem;
        z-index: 2;

         h1,
        h4,
        p {
            color: white;

        }

         .actions {
            margin-top: 3rem;
            display: flex;
            gap: 1rem;

            span {

                font-size: 1.5rem;
                color: white
            }

        }

    }
}

.waves {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    z-index: -1;
    min-height: 100px;
    background: transparent;
    max-height: 150px;
}


.parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
    .waves {
        height: 40px;
        min-height: 40px;
    }

    .content {
        height: 30vh;
    }

    h1 {
        font-size: 24px;
    }
}
</style>
