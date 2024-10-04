<script lang="ts" setup>
import AppNav from './AppNav.vue';
import { useGlobalStore } from '../stores/global';
const globalStore = useGlobalStore()
const { logo, email, phone, footerParagraph } = globalStore.websiteFindResponse.website

const { facebook, instagram, linkedin } = globalStore.websiteFindResponse.website.socialLinks
const { addressLine } = globalStore.websiteFindResponse.property
</script>
<template>
	<footer class="app-footer darker">
		<div class="wrapper">
			<div class="show-desktop mb-6">
				<div class="grid align-items-end">
					<div class="logo">
						<app-image :src="logo" :size="70" />
						<p v-t="footerParagraph" class="mt-4" />
					</div>
					<div class="nav">
						<h3 v-t="'Rhactus House'" class="mb-4" />
						<AppNav class="flex-column" />
					</div>
					<div class="contact">
						<h3 v-t="'contacts'" class="mb-4" />
						<p>
							<span v-t="'phone'"></span>: <a :href="`tel:${phone}`">{{ phone }}</a> 
						</p>
						<p>
							<span v-t="'email'"></span>: {{ email }}
						</p>
						<p>
							<span v-t="'location'"></span>: {{
								addressLine }}
						</p>
						<a target="_blank" :href="facebook"><i
								class="text-4xl mx-2 mt-7 pi pi-facebook"></i></a>
						<a target="_blank" :href="instagram"><i
								class="text-4xl mx-2 mt-7 pi pi-instagram"></i></a>
						<a target="_blank" :href="linkedin"><i
								class="text-4xl mx-2 mt-7 pi pi-linkedin"></i></a>
					</div>

				</div>
			</div>
			<p class="text-center copyright" v-t="'copyright'" />
		</div>
	</footer>
</template>
<style>
.app-footer {

	.wrapper {
		@media(min-width: 1025px) {
			padding-top: 5rem;
		}
	}

	ul {
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
