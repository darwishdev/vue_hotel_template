<script setup lang="ts">
import { AmenityPartialProps } from '@/common/types/types';
const props = defineProps<AmenityPartialProps>()

</script>
<template>
	<div class="amenity glass">
		<app-icon :icon="props.amenity.amenityIcon"></app-icon>
		<h4 class="font-light">{{ props.amenity.amenityName }}</h4>
		<span class="font-light" v-if="props.amenity.amenityValue != 'true'">{{ props.amenity.amenityValue
			}}</span>
	</div>

</template>
<style>
.amenity {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: var(--p-small-gap);
	flex-direction: column;
	gap: var(--p-small-gap);
	border-radius: var(--p-border-radius-lg);
	text-align: center;
	width: max-content;
	height: 150px;
	width: 100%;

	span {
		line-height: .2;
	}
}
</style>
