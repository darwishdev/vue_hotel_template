<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import Drawer from 'primevue/drawer';
import AppNav from './AppNav.vue';
import Loading from './Loading.vue';
import MobSidebar from './MobSidebar.vue';
import { useGlobalStore } from '../stores/global';
const globalStore = useGlobalStore()
const isMenuOpenedRef = ref(false)
await globalStore.initialCalls()

const toggleMenu = () => {
	isMenuOpenedRef.value = !isMenuOpenedRef.value
}
</script>

<template>


	<header class="top-bar glass">
		<div class="progress-bar"></div>
		<div class="wrapper">

			<div class="navigation">
				<!-- <app-image src="images/logo.webp" /> -->
				<app-image :size="{ width: '40px' }"
					:src="globalStore.websiteFindResponse.website.logo" />
				<AppNav class="show-desktop" />

				<div class="icons">
					<app-icon icon="moon" :click="globalStore.toggleDarkMode"></app-icon>

					<app-icon icon="menu" :click="toggleMenu" class="hide-desktop"></app-icon>
				</div>
				<Drawer v-model:visible="isMenuOpenedRef" position="right" header="Rhactus Hotel">
					<MobSidebar @clicked="isMenuOpenedRef = false" />
				</Drawer>


			</div>

		</div>

	</header>
	<RouterView v-slot="{ Component }">
		<template v-if="Component">
			<KeepAlive>
				<Suspense>
					<!-- main content -->
					<component :is="Component"></component>

					<!-- loading state -->
					<template #fallback>
						<div class="h-screen flex justify-content-center align-items-center">
							<Loading></Loading>
						</div>
					</template>
				</Suspense>
			</KeepAlive>
		</template>
	</RouterView>
</template>
