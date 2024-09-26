<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
const globalStore = useGlobalStore()
const baseUrl = import.meta.env.VITE_MAP_BASE_URL
</script>

<template>
    <div>
        <iframe :src="`${baseUrl}${globalStore.websiteFindResponse.property.iframeUrl}`" height="480" style="border:0;"
            allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<style>
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

.my-app-dark iframe {
    filter: invert(90%)
}

iframe {
    display: flex;
    margin: auto;
    border-radius: var(--p-border-radius-xl);
    width: 100%;
    animation: fade-up;
    animation-timeline: view();
}
</style>
