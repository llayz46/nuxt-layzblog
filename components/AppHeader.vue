<template>
    <nav class="py-3 backdrop-blur-md bg-my-background/10 border-b border-white/10 fixed top-0 w-full z-50">
        <div class="flex justify-between mx-auto max-w-7xl">
            <div>
                <NuxtLink to="/">
                    <AppLogo />
                </NuxtLink>
            </div>
            <div class="flex items-center gap-5">
                <AppHeaderLink route="/">Projets</AppHeaderLink>
                <AppHeaderLink route="/blog">Blog</AppHeaderLink>
<!--                lang-->
<!--                darkmode-->
            </div>
        </div>
    </nav>
</template>