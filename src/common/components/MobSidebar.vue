<script setup lang="ts">
import Button from 'primevue/button';
const emits = defineEmits(['clicked'])
const items = [
    {
        label: 'about',
        to: '#about',
        icon: 'pi pi-align-left'
    },
    {
        label: 'amenities',
        to: '#amenities',
        icon: 'pi pi-building-columns'
    },
    {
        label: 'types',
        to: '#rooms',
        icon: 'pi pi-building'
    },
    {
        label: 'location',
        to: '#location',
        icon: 'pi pi-map'
    },
    {
        label: 'contact',
        to: '#contact',
        icon: 'pi pi-phone'
    },
];

function scrollToSection(sectionId: string) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        emits('clicked')
    }
}

</script>

<template>
    <div class="relative navbar-drawer h-full">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <nav class="py-4 flex justify-content-start align-items-start flex-column gap-6">
            <Button class="nav-item  text-left text-xl" :icon="item.icon" @click="scrollToSection(item.to)"
                icon-class="pr-3 text-2xl" v-for="(item, index) in items" :key="index" :label="$t(item.label)" plain
                text />
        </nav>
        <i class="text-4xl mx-2 mt-7 pi pi-facebook"></i>
        <i class="text-4xl mx-2 mt-7 pi pi-instagram"></i>
    </div>
</template>

<style>
.nav-item {}

.circle {
    position: absolute;
    background-color: rgba(183, 157, 112, 0.2);
    /* Transparent gold */
    border-radius: 50%;
    transform: scale(0);
    /* Start with scale 0 */
    opacity: 0;
    /* Start fully transparent */
    animation: scaleFade 1s ease-in-out forwards;
    /* Apply animation */
}

.p-drawer-content {
    animation: colorChange .4s ease-in-out forwards;
    /* Apply animation */
    animation-delay: 1.2s;
}

@keyframes colorChange {
    0% {
        background-color: inherit;
    }

    100% {
        background-color: rgba(183, 157, 112, 0.1);
        /* Transparent gold */
    }
}

@keyframes scaleFade {
    0% {
        transform: scale(0);
        /* Start at 0 size */
        opacity: 0;
        /* Start fully transparent */
    }

    100% {
        transform: scale(1);
        /* Scale to full size */
        opacity: 1;
        /* Fade to fully visible */
    }
}

/* First Circle */
.circle1 {
    width: 200px;
    height: 200px;
    top: -50px;
    left: -50px;
    background-color: rgba(183, 157, 112, 0.3);
    /* Slightly darker */
}

/* Second Circle */
.circle2 {
    width: 290px;
    height: 290px;
    top: -80px;
    left: -80px;
    background-color: rgba(183, 157, 112, 0.2);
    /* Lighter */
    animation-delay: 0.4s;
}

/* Third Circle */
.circle3 {
    width: 380px;
    height: 380px;
    top: -110px;
    left: -110px;
    background-color: rgba(183, 157, 112, 0.1);
    /* Lightest */
    animation-delay: .8s;
}
</style>
