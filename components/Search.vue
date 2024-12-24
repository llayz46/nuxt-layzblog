<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { FileText } from 'lucide-vue-next';
import {
    Combobox,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import MiniSearch from 'minisearch'

defineProps({
    open: Boolean,
})

defineEmits(['close'])

const query = ref('')
const { data } = await useAsyncData('search', () => queryCollectionSearchSections('articles'))

const { data: navigation } = await useAsyncData('navigation', () => {
    return queryCollectionNavigation('articles', ['body']).then(articles => {
        articles[0].children.forEach(article => {
            article.body.toc.links.forEach(link => {
                const contentArray = article.body.value;
                const headingIndex = contentArray.findIndex(
                    block => block[0] === 'h2' && block[1].id === link.id
                );

                if (headingIndex >= 0) {
                    for (let i = headingIndex + 1; i < contentArray.length; i++) {
                        if (contentArray[i][0] === 'p') {
                            link.previewText = contentArray[i][2];
                            break;
                        }
                    }
                }
            });
        });
        return articles;
    });
});

const miniSearch = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'content'],
    searchOptions: {
        prefix: true,
        fuzzy: 0.2,
    },
})

miniSearch.addAll(toValue(data.value))

const highlightTerms = (results) => {
    return results.map(res => {
        let highlightedContent = res.content

        res.terms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi')
            highlightedContent = highlightedContent.replace(regex, '<span class="highlightedResult">$1</span>')
        })

        return { ...res, highlightedContent }
    });
};

const highlightedResults = computed(() => {
    const rawResults = miniSearch.search(toValue(query))
    return highlightTerms(rawResults)
});
</script>

<template>
    <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
        <Dialog as="div" class="relative z-10" @close="$emit('close')">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                             leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-800/40 transition-opacity"/>
            </TransitionChild>

            <div class="fixed max-md:top-14 inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95"
                                 enter-to="opacity-100 scale-100" leave="ease-in duration-200"
                                 leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                    <DialogPanel class="mx-auto max-w-2xl transform divide-y divide-white/10 overflow-hidden rounded-xl bg-my-background shadow-2xl transition-all">
                        <Combobox>
                            <div class="relative">
                                <MagnifyingGlassIcon
                                    class="pointer-events-none absolute left-4 top-3.5 size-5 text-gray-500"
                                    aria-hidden="true"/>
                                <input type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white focus:ring-0 sm:text-sm"
                                    v-model="query" placeholder="Rechercher...">
                            </div>

                            <ComboboxOptions static class="max-h-80 scroll-py-2 divide-y divide-white/10 overflow-y-auto scrollbar">
                                <template v-if="!query" v-for="article in navigation[0].children">
                                    <li class="p-1 isolate" v-if="article.body.toc.links.length !== 0">
                                        <h2 class="px-2 py-1.5 text-xs font-semibold text-white">{{ article.title }}</h2>
                                        <NuxtLink :to="`${article.path}#${heading.id}`" v-for="heading in article.body.toc.links" @click="$emit('close')"
                                                  role="option" class="group relative w-full flex items-center gap-2 px-2 py-1.5 text-sm select-none outline-none hover:bg-[#1A1C1E] rounded">
                                            <FileText class="size-5 shrink-0 text-slate-500"/>
                                            <span class="truncate space-x-1 rtl:space-x-reverse text-slate-500">
                                                <span class="text-white">{{ heading.text }}</span>
                                                <span class="font-light">{{ heading.previewText }}</span>
                                            </span>
                                        </NuxtLink>
                                    </li>
                                </template>

                                <li v-if="query && highlightedResults.length !== 0" class="p-1 isolate" @click="$emit('close')">
                                    <ComboboxOption v-for="link in highlightedResults" :key="link.id" :value="link" as="template">
                                        <NuxtLink :to="link.id" role="option"
                                            class="group relative w-full flex items-center gap-2 px-2 py-1.5 text-sm select-none outline-none hover:bg-[#1A1C1E] rounded">
                                            <FileText class="size-5 shrink-0 text-slate-500"/>
                                            <span class="truncate space-x-1 rtl:space-x-reverse text-slate-500">
                                                <span v-if="link.title" v-html="link.title" class="text-white"></span>
                                                <span v-if="link.highlightedContent" v-html="link.highlightedContent" class="font-light"></span>
                                            </span>
                                        </NuxtLink>
                                    </ComboboxOption>
                                </li>

                                <li v-if="query !== '' && highlightedResults.length === 0" class="px-6 py-14 text-center sm:px-14 flex items-center justify-center gap-2">
                                    <FileText class="size-5 shrink-0 text-slate-500"/>
                                    <p class="text-sm text-white">Nous n'avons rien trouvé correspondant à votre recherche</p>
                                </li>
                            </ComboboxOptions>
                        </Combobox>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>