<template>
    <div>
        <div class="flex items-center gap-2 px-6 py-3 bg-my-background/50 border-b border-white/5 rounded-t-md">
            <template v-if="!filename">
                <span class="block size-3 rounded-full bg-[#FF5D62C7]"></span>
                <span class="block size-3 rounded-full bg-[#E6C384C7]"></span>
                <span class="block size-3 rounded-full bg-[#98BB6CC7]"></span>
            </template>
            <p class="!text-sm !my-0 !font-light !text-white/50 !ml-1">{{ filename }}</p>
            <p class="!text-sm !my-0 !font-light !text-white/50 !ml-auto">{{ language }}</p>
        </div>
        <pre :class="$props.class" ref="preBlock" class="!bg-my-background/50 !rounded-none !rounded-b-md !mt-0 selection:text-[#E6C384] selection:bg-[#957fb8a6] text-wrap flex justify-between items-start"><slot /><button @click="handleCopy"><Square2StackIcon class="size-5 text-white/50 hover:text-white transition-colors"/></button></pre>
    </div>
</template>

<script setup lang="ts">
import { Square2StackIcon } from "@heroicons/vue/24/outline";
import {useClipboard} from "@vueuse/core";
import { toast } from 'vue-sonner'

const pre = useTemplateRef('preBlock')

const { copy, copied } = useClipboard()
const handleCopy = () => {
    copy(pre.value.textContent)

    if (copied) {
        toast('Texte copié !', {
            description: 'Texte copié dans le presse-papier',
            action: {
                label: 'Fermer',
            },
        })
    }
}

defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})
</script>

<style>
pre code .line {
    display: block;
}

pre code .highlight {
    border-left: 3px solid #957FB8;
    background-color: rgba(149, 127, 184, 0.25) !important;
}
</style>