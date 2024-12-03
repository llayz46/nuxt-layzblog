<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

const showSearchModal = ref(false);
</script>

<template>
    <nav class="py-3 px-4 backdrop-blur-md bg-my-background/10 border-b border-white/10 fixed top-0 w-full z-50">
        <div class="flex justify-between mx-auto max-w-7xl">
            <div>
                <NuxtLink to="/">
                    <AppLogo />
                </NuxtLink>
            </div>
            <div class="flex items-center gap-5">
                <AppHeaderLink route="/projects">Projets</AppHeaderLink>
                <AppHeaderLink route="/blog" >Blog</AppHeaderLink>
                <MagnifyingGlassIcon class="size-4 hover:text-white transition-colors cursor-pointer" @click.prevent="showSearchModal = true"/>
            </div>
        </div>
    </nav>

    <Search :open="showSearchModal" @close="showSearchModal = false" />
</template>