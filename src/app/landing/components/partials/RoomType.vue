<script setup lang="ts">
import { PropertyFindFilteredReservableUnit } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';
import Button from 'primevue/button';
import { getAssetPath } from '@/common/utilites/path';

const props = defineProps<{
	unit: PropertyFindFilteredReservableUnit
}>()

const imagePath = getAssetPath(props.unit.reservableUnitImage)
</script>

<template>
	<div class="room-card " :style="{ backgroundImage: `url(${imagePath})` }">
		<div class="w-full h-full flex justify-content-center align-items-end pb-5">
			<Button :label="unit.reservableUnitName" severity="contrast"></Button>
		</div>
	</div>
</template>
<style>
@media screen and (max-width : 600px) {
	.p-dialog{
		width: 95vw !important;
	}
}
.room-overlay {
	background-color: rgba(0, 0, 0, 0.119) !important;
	padding: 1rem;
}

.room-card {
	background-size: cover;
	height: 380px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.11),
		/* Light shadow */
		0 6px 20px rgba(0, 0, 0, 0.15);
	/* Darker shadow for depth */
	background-position: center;
	border-radius: 10px;
}
</style>
