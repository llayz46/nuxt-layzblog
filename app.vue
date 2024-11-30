<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
    <Analytics/>
    <SpeedInsights/>
    <div class="bg-noisy"></div>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
    <Toaster />
</template>

<style>
html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
}
body {
    background-color: theme('colors.my-background');
    color: rgba(255, 255, 255, 0.75);
    font-family: 'Space Grotesk', sans-serif;
    height: 100%;
}

body::before {
    content: '';
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -1;
    background: radial-gradient(75.61% 75.61% at 50% 24.39%, rgba(37, 93, 235, .2) 0, rgba(37, 93, 235, 0) 100%);
}

.bg-noisy {
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    background-repeat: repeat;
    opacity: 80%;
    user-select: none;
    mix-blend-mode: soft-light;
    pointer-events: none;
    background-position: left top;
    background-image: url("/img/noisy-texture.webp");
    animation: noisy 6s steps(10) infinite;
}

body::-webkit-scrollbar, .scrollbar::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-track, .scrollbar::-webkit-scrollbar-track {
    background: theme('colors.my-background');
}

body::-webkit-scrollbar-thumb, .scrollbar::-webkit-scrollbar-thumb {
    background-color: #343a3f;
    border-radius: 20px;
    border: 2px solid theme('colors.my-background');
}

.router-link-active {
    color: theme('colors.my-primary.500');
}

@keyframes noisy {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 100%;
    }
}
</style>