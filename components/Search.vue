<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { WindowIcon } from '@heroicons/vue/24/outline'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'

defineProps({
    open: Boolean,
})

defineEmits(['close'])

const { data: sections } = await useAsyncData('search-sections', () => {
    return queryCollectionSearchSections('articles', {
        ignoredTags: ['code'],
    })
})

const sectionsMerge = sections.value.map((section) => {
    return {
        id: section.id,
        title: section.title,
        titles: section.titles,
        content: section.content,
        searchable: [section.title, section.content],
    }
})

const baseProjects = sectionsMerge.slice(0, 20);

const query = ref('')
const filteredProjects = computed(() =>
    query.value === ''
        ? []
        : sectionsMerge.filter((project) => {
            return project.searchable.some((searchable) => searchable.toLowerCase().includes(query.value.toLowerCase()))
        })
)

function onSelect(item) {
    window.location = `blog${item.id}`
}
</script>

<template>
    <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
        <Dialog as="div" class="relative z-10" @close="$emit('close')">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                             leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-800/40 transition-opacity"/>
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95"
                                 enter-to="opacity-100 scale-100" leave="ease-in duration-200"
                                 leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                    <DialogPanel
                        class="mx-auto max-w-2xl transform divide-y divide-white/10 overflow-hidden rounded-xl bg-my-background shadow-2xl transition-all">
                        <Combobox @update:modelValue="onSelect">
                            <div class="relative">
                                <MagnifyingGlassIcon
                                    class="pointer-events-none absolute left-4 top-3.5 size-5 text-gray-500"
                                    aria-hidden="true"/>
                                <ComboboxInput
                                    class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white focus:ring-0 sm:text-sm"
                                    placeholder="Rechercher..." @change="query = $event.target.value"/>
                            </div>

                            <ComboboxOptions v-if="query === '' || filteredProjects.length > 0" static
                                             class="max-h-80 scroll-py-2 divide-y divide-white/10 overflow-y-auto scrollbar">
                                <li class="p-2">
                                    <h2 v-if="query === ''" class="mb-2 mt-4 px-3 text-xs font-semibold text-gray-200">
                                        Recherche</h2>
                                    <ul class="text-sm text-gray-400">
                                        <ComboboxOption v-for="project in query === '' ? baseProjects : filteredProjects"
                                                        :key="project.id" :value="project" as="template"
                                                        v-slot="{ active }">
                                            <li :class="['flex cursor-default select-none items-center rounded-md px-3 py-2', active && 'bg-gray-800/50 text-white']">
                                                <WindowIcon
                                                    :class="['h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-500']"
                                                    aria-hidden="true"/>
                                                <span class="ml-3 flex-auto truncate">
                                                    <template v-if="project.titles" v-for="(title, index) in project.titles" :key="index">
                                                        <span class="font-medium text-white/75" v-if="title"
                                                              :class="index === project.titles.length - 1 ? 'text-white/85' : '',
                                                                      project.titles.length === 1 ? 'text-white/85' : ''">
                                                            {{ title }}
                                                            <span v-if="index !== project.titles.length - 1"> > </span>
                                                        </span>
                                                        {{ project.content }}
                                                    </template>
                                                    {{ project.title ? project.title : project.content }}
                                                </span>
                                                <span v-if="active"
                                                      class="ml-3 flex-none text-gray-400">Aller voir..</span>
                                            </li>
                                        </ComboboxOption>
                                    </ul>
                                </li>
                            </ComboboxOptions>

                            <div v-if="query !== '' && filteredProjects.length === 0"
                                 class="px-6 py-14 text-center sm:px-14">
                                <WindowIcon class="mx-auto h-6 w-6 text-gray-500" aria-hidden="true"/>
                                <p class="mt-4 text-sm text-gray-200">Nous n'avons rien trouvé correspondant à votre recherche</p>
                            </div>
                        </Combobox>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>