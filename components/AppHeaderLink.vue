<script setup>
    const props = defineProps({
        route: String
    });

    const isCurrent = computed(() => {
        return props.route === useRoute().path;
    });
</script>

<template>
    <NuxtLink :to="route" class="font-sans text-sm font-normal" :class="{ 'hover:text-white': !isCurrent }">
        <slot/>
    </NuxtLink>
</template>