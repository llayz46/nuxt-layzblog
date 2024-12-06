<script setup>
import {
    Combobox,
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
</script>

<template>
    <TransitionRoot :show="open" as="template" appear>
        <Dialog as="div" class="relative z-10" @close="$emit('close')">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                             leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-800/40 transition-opacity"/>
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95"
                                 enter-to="opacity-100 scale-100" leave="ease-in duration-200"
                                 leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                    <DialogPanel class="mx-auto max-w-2xl transform divide-y divide-white/10 overflow-hidden rounded-xl bg-my-background shadow-2xl transition-all">
                        <Combobox>
                            hfgghfgfhghf
                        </Combobox>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>