<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
const globalStore = useGlobalStore()
const baseUrl = import.meta.env.VITE_MAP_BASE_URL
</script>

<template>
    <iframe :src="`${baseUrl}${globalStore.websiteFindResponse.property.iframeUrl}`" height="480" style="border:0;"
        allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>

<style>
.my-app-dark iframe {
    filter: invert(90%)
}

iframe {
    display: flex;
    max-height: 20rem;
    margin: auto;
    border-radius: var(--p-border-radius-xl);
    width: 100%;
    animation: fade-up;
    animation-timeline: view();
}
</style>
