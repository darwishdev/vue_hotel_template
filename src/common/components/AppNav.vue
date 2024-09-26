<script setup lang="ts">
const items = [
    {
        label: 'about',
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
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <a :href="item.to">
                    {{ $t(item.label) }}
                </a>
            </li>
        </ul>
    </nav>
</template>
<style>
.navigation-links {
    ul {
        display: flex;
        flex-direction: column;
        align-items: start;

        gap: var(--p-small-gap);

        @media (min-width: 1025px) {
            flex-direction: row;
        }
    }
}
</style>
