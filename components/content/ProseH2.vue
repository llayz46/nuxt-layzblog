<template>
    <h2 :id="props.id" class="group relative text-white">
        <a class="duration-150 group-hover:pl-8"
            v-if="props.id && generate"
            :href="`#${props.id}`"
        >
            <span class="absolute left-0 duration-150 px-0 overflow-hidden opacity-0 max-w-0 group-hover:max-w-[2.5rem] group-hover:pr-3 group-hover:opacity-100 hover:underline text-my-primary-500">#</span>
            <slot />
        </a>
        <slot v-else />
    </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>