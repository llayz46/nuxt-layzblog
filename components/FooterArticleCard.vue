<script lang="ts" setup>
defineProps<{
    path: string
    slug: string
    date: date
    description: string
    tags: string[]
}>()
</script>

<template>
    <NuxtLink :to="path" class="relative w-full !text-white/75 duration-150 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] lg:w-[32%] lg:min-w-[128px] mt-4">
        <div class="flex h-24 flex-col justify-between gap-1 overflow-hidden rounded-lg border-t-2 border-[#1e242f40] bg-[#1e242f40] px-4 py-2 shadow-md duration-150 hover:border-t-2 hover:border-my-primary-900/75 hover:bg-[#1e242f80]">
            <div class="flex flex-row items-center justify-between gap-5">
                <h2 class="z-10 truncate font-bold drop-shadow-md">{{ slug }}</h2>
                <p class="text-xs text-white/50 capitalize"><NuxtTime :datetime="date as string" month="long" locale="fr"/></p>
            </div>
            <p class="overflow-hidden truncate text-sm text-white/70">{{ description }}</p>
            <div class="flex h-5 gap-2">
                <template v-if="tags" v-for="tag in tags">
                    <span class="max-w-[64px] truncate text-xs text-white/30"><span class="text-my-primary-700/45 font-medium">#</span>{{ tag }}</span>
                </template>
            </div>
        </div>
    </NuxtLink>
</template>