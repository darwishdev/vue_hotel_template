<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import observer from '@/common/utilites/animation';
import { onMounted, ref } from 'vue';
import Waves from './animations/Waves.vue';
const globalStore = useGlobalStore()
const videoElementRef = ref()
const { bannerVideo, bannerHeadline } = globalStore.websiteFindResponse.website
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
            <div class="banner-content pt-5">
                <h1 v-html="bannerHeadline"></h1>
                <!--     <h4> {{ bannerSlogan }}</h4>
                <p>{{ bannerText }}</p> -->
                <div class="actions">

                    <!-- <a class="flex justify-content-center align-items-center w-10rem app-btn primary" href="#contact">
                        <i class="pi pi-phone" />
                        {{ $t('contact') }}
                    </a>
                    <a class="flex justify-content-center align-items-center w-10rem text-white app-btn primary"
                        href="#rooms">
                        <i class="pi pi-key" />
                        {{ $t('units') }}</a> -->
                </div>
            </div>
        </div>
        <video ref="videoElementRef" width="100%" class="v-scale animate-on-scroll" height="auto" preload="auto" muted
            loop playsinline autobuffer>
            <source :src="bannerVideo" type="video/webm">
        </video>
        <Waves class="waves" />
    </section>


</template>
<style>
@supports not (animation-timeline: view()) {
    .v-scale.animating {
        animation: v-scaling 4s ease-in-out .3s;
        -webkit-animation: v-scaling 4s ease-in-out .3s;
    }
}

.video-banner {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
