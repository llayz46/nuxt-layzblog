<script setup>
    defineProps({
        route: String
    });
</script>

<template>
    <NuxtLink :to="route" class="font-sans text-sm font-normal">
        <slot/>
    </NuxtLink>
</template>