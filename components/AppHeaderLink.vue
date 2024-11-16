<script setup>
    defineProps({
        route: String
    });
</script>

<template>
    <RouterLink :to="route" class="font-sans text-sm font-normal">
        <slot/>
    </RouterLink>
</template>