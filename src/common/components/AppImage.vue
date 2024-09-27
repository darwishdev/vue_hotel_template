<script setup lang="ts">
import Image, { type ImageSlots } from 'primevue/image';
import { h, ref } from 'vue';
import { type AppImageProps, type SizeObj } from '@/common/types/types'
import { getAssetPath } from '../utilites/path';
const props = defineProps<AppImageProps>();
const slots = defineSlots<ImageSlots>();
const defaultWidth = 150
const fallBackImageUrl = import.meta.env.VITE_FALLBACK_IMG as string
const imagePath = getAssetPath(props.src)
const imageSrc = ref(imagePath)
const sizeObj: SizeObj | undefined = typeof props.size === 'number' ? { width: props.size } : props.size
const renderImage = () => {
    const imgProps = {
        src: imageSrc.value,
        key: imageSrc.value,
        width: sizeObj ? sizeObj.width : defaultWidth,
        height: sizeObj ? sizeObj.height : undefined,
        ...props.imageProps
    }
    return h(Image, { ...imgProps, style: { maxHeight: props.maxHeight, width: sizeObj ? sizeObj.width : defaultWidth }, onError: () => imageSrc.value = fallBackImageUrl }, () => slots)
}
</script>

<template>
    <component :key="props.src" :is="renderImage" />
</template>
<style>
img {
    background-color: var(--fk-bg-input);
    border-radius: 5px;
}
</style>
