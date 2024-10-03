<script setup lang="ts">
const items = [
	{
		label: 'About Us',
		to: '#about'
	},
	{
		label: 'amenities',
		to: '#amenities'
	},
	{
		label: 'types',
		to: '#rooms'
	},
	{
		label: 'location',
		to: '#location'
	},
	{
		label: 'contact',
		to: '#contact'
	},
];

</script>

<template>
	<nav class="navigation-links">
		<ul class="flex-mobile-column">
			<li v-for="(item, index) in items" :key="index">
				<a :href="item.to">
					{{ $t(item.label) }}
				</a>
			</li>
		</ul>
	</nav>
</template>
