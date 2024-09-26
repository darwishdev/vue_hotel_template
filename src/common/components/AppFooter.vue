<script lang="ts" setup>
import AppNav from './AppNav.vue';
import { useGlobalStore } from '../stores/global';
const globalStore = useGlobalStore()
const { logo, email, phone, footerParagraph } = globalStore.websiteFindResponse.website
const { addressLine } = globalStore.websiteFindResponse.property
</script>
<template>
	<footer class="app-footer darker">
		<div class="wrapper">
			<div class="show-desktop mb-4">
				<div class="grid">
					<div class="logo">
						<app-image :src="logo" />
						<p v-t="footerParagraph" class="mt-6" />
					</div>
					<div class="nav">
						<h3 v-t="'comppany'" class="mb-4" />
						<AppNav class="flex-column" />
					</div>
					<div class="contact">
						<h3 v-t="'contacts'" class="mb-4" />
						<p>
							<span v-t="'phone'"></span>: {{ phone }}
						</p>
						<p>
							<span v-t="'email'"></span>: {{ email }}
						</p>
						<p>
							<span v-t="'location'"></span>: {{
								addressLine }}
						</p>
					</div>

				</div>
			</div>
			<p class="text-center copyright" v-t="'copyright'" />
		</div>
	</footer>
</template>
<style lang="scss">
.app-footer {

	.container {
		@media(min-width: 1025px) {
			padding-top: 5rem;
		}
	}

	.app-nav {
		flex-direction: column;
	}

	.copyright {
		padding-block: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5rem;
	}
}
</style>
