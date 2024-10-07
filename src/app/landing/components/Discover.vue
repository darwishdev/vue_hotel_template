<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
const globalStore = useGlobalStore()
const { article, images } = globalStore.websiteFindResponse.website.propertyDiscoverMore
</script>
<template>
    <article class="discover-wrapper">
        <div class="">
            <p v-html="article" class="mb-3 text-left"></p>
        </div>
        <div class="images-wrapper">
            <app-image :size="{ width: '100%' }" v-for="image in images" :key="image" :src="image" class="mb-2">
            </app-image>
        </div>
    </article>
</template>

<style>
.discover-wrapper {
    display: grid;
    grid-template-columns: 45% 55%;
    gap: var(--p-small-gap);

    @media (max-width : 1025px) {
        grid-template-columns: 1fr;
    }

    p {
        font-size: .9rem;
    }

    .images-wrapper {
        display: flex;
        gap: var(--p-small-gap);

        @media (max-width : 1025px) {
            flex-direction: column;
        }


        img {
            width: 100%
        }
    }

}
</style>
