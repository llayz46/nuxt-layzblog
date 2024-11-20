<script setup>
    defineProps({
        toc: Object,
    });

    const route = useRoute();

    const isActive = (id) => {
        return computed(() => route.hash === `#${id}`);
    };

    const show = ref(false);
</script>

<template>
    <Transition
        enter-active-class="transition ease-linear duration-150"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100">
        <div v-show="show" class="fixed top-0 right-0 mt-16 mr-3 w-80 backdrop-blur-md bg-my-background/10 border border-white/10 rounded-xl p-5">
            <button @click="show = false" class="absolute top-0 right-0 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white/50 hover:text-white transition-colors">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <ul>
                <li class="font-sans mb-2 font-medium">Dans cet article :</li>
                <template v-for="heading in toc.links">
                    <li class="flex flex-col text-white/50 py-1 gap-2 font-light text-sm font-sans">
                        <a :href="`#${heading.id}`" :class="{ 'text-my-primary-500': isActive(heading.id).value, 'hover:text-white': !isActive(heading.id).value }"
                           class="truncate  transition-colors">
                            {{ heading.text }}
                        </a>
                        <div class="flex flex-col gap-2 ml-5">
                            <template v-if="heading.children" v-for="subheading in heading.children">
                                <a :href="`#${subheading.id}`" :class="{ 'text-my-primary-500': isActive(subheading.id).value, 'hover:text-white': !isActive(subheading.id).value }"
                                   class="truncate transition-colors">
                                    {{ subheading.text }}
                                </a>
                            </template>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
    </Transition>

    <button v-show="!show" @click="show = true" class="fixed top-0 right-0 mt-16 mr-3 max-w-80 backdrop-blur-md bg-my-background/10 border border-white/10 rounded-xl p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white/50 hover:text-white transition-colors">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
        </svg>
    </button>
</template>