<template>
    <div class="flex items-center gap-2 px-6 py-3 bg-my-background/50 border-b border-white/5 rounded-t-md">
<!--        <span class="block size-3 rounded-full bg-[#FF5D62C7]"></span>-->
<!--        <span class="block size-3 rounded-full bg-[#E6C384C7]"></span>-->
<!--        <span class="block size-3 rounded-full bg-[#98BB6CC7]"></span>-->
        <p class="!text-sm !my-0 !font-light !text-white/50 !ml-1">{{ filename }}</p>
        <p class="!text-sm !my-0 !font-light !text-white/50 !ml-auto">{{ language }}</p>
    </div>
    <pre :class="$props.class" class="!bg-my-background/50 !rounded-none !rounded-b-md !mt-0 selection:text-[#E6C384] selection:bg-[#957fb8a6]"><slot /></pre>
</template>

<script setup lang="ts">
defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})
</script>

<style>
pre code .line {
    display: block;
}

pre code .highlight {
    border-left: 3px solid #957FB8;
    background-color: rgba(149, 127, 184, 0.25) !important;
}
</style>