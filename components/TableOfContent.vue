<script setup>
    defineProps({
        toc: Object,
    });

    const route = useRoute();

    const isActive = (id) => {
        return computed(() => route.hash === `#${id}`);
    };
</script>

<template>
    <div class="fixed top-0 right-0 mt-16 mr-5 max-w-80 backdrop-blur-md bg-my-background/10 border border-white/10 rounded-xl p-5">
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
</template>

<style scoped>

</style>