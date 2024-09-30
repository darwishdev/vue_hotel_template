<script setup lang="ts">

</script>

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style>
.container{
    overflow-x: auto;
    display: flex;
    align-items: center;
}
.container::-webkit-scrollbar{
display: none;
}
</style>