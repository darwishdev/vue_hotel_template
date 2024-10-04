<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
const globalStore = useGlobalStore()
</script>

<template>
    <a target="_blank" :href="globalStore.websiteFindResponse.property.locationUrl">
        <img src="/map.png" class="map-img" alt="Hotel Map Location" width="100%">
    </a>
</template>

<style>
.my-app-dark iframe {
    filter: invert(90%)
}

.map-img {
    cursor: pointer;
    animation: fade-up;
    animation-timeline: view();
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
