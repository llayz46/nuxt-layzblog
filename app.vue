<template>
    <div class="bg-noisy"></div>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    background-color: #040405;
    color: rgba(255, 255, 255, 0.75);
    font-family: 'Space Grotesk', sans-serif;
}

body::before {
    content: '';
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -1;
    background: radial-gradient(75.5% 75.5% at 50% 24.5%, rgba(37, 93, 235, 0.2) 0%, rgba(203, 113, 14, 0.02) 100%);
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

@keyframes noisy {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 100%;
    }
}
</style>