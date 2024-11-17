<template>
    <nav class="py-3 backdrop-blur-md bg-my-background/10 border-b border-white/10 fixed top-0 w-full">
        <div class="flex justify-between mx-auto px-4 max-w-7xl">
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
<!--                todo: sticky-->
            </div>
        </div>
    </nav>
</template>