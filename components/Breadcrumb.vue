<script setup>
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    pages: {
        type: Array,
        required: true,
    },
    directory: {
        type: String,
        default: '/blog',
    }
})

const route = useRoute()

const isLast = (index) => index === props.pages.length - 1
</script>

<template>
    <nav class="flex font-sans max-w-3xl mx-auto mt-8 overflow-hidden max-[400px]:hidden" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
            <li class="flex items-center flex-shrink-0 gap-x-1.5 text-gray-400 hover:text-my-primary-500 text-sm leading-6 min-w-0">
                <RouterLink to="/" class="flex items-center gap-x-1.5 group font-medium min-w-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 flex-shrink-0">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span class="block truncate">Accueil</span>
                </RouterLink>
            </li>
            <li v-for="(page, index) in props.pages" :key="page.name" class="flex items-center gap-x-1.5 text-gray-400 text-sm leading-6 min-w-fit">
                <RouterLink :to="isLast(index) ? '' : page.href" class="flex items-center gap-x-1.5 group min-w-0" :class="isLast(index) ? 'cursor-default' : ''" :disabled="isLast(index)">
                    <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span class="ml-4 text-sm font-medium line-clamp-2" :class="isLast(index) ? 'text-my-primary-500 cursor-default' : 'text-gray-400 hover:text-my-primary-500'">{{ page.name }}</span>
                </RouterLink>
            </li>
        </ol>
    </nav>
</template>