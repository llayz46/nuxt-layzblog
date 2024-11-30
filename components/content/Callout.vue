<script setup lang="ts">
import { FireIcon, ExclamationCircleIcon, InformationCircleIcon, ChevronRightIcon, ExclamationTriangleIcon, SparklesIcon, CodeBracketIcon } from "@heroicons/vue/24/outline";

defineProps<{
    type: keyof typeof typeClasses.value
    dropdown?: boolean
    title?: string
    italic?: boolean
    flex?: boolean
}>()

interface StyleClasses {
    border: string;
    background: string;
    text: string;
    selection: string;
    blockquote: string;
}

const typeClasses = ref<Record<string, StyleClasses>>({
    astuce: {
        border: 'border-[#9133ea]',
        background: 'bg-[#9133ea1A]',
        text: 'text-[#9133ea]',
        selection: 'selection:bg-[#9133ea33]',
        blockquote: 'prose-blockquote:!border-[#9133ea4D]'
    },
    important: {
        border: 'border-[#cb3e37]',
        background: 'bg-[#cb3e371A]',
        text: 'text-[#cb3e37]',
        selection: 'selection:bg-[#cb3e3733]',
        blockquote: 'prose-blockquote:!border-[#cb3e374D]'
    },
    note: {
        border: 'border-my-primary-700',
        background: 'bg-my-primary-700/10',
        text: 'text-my-primary-700',
        selection: 'selection:bg-my-primary-700/20',
        blockquote: 'prose-blockquote:!border-my-primary-700/30'
    },
    idea: {
        border: 'border-[#f59e0b]',
        background: 'bg-[#f59e0b1A]',
        text: 'text-[#f59e0b]',
        selection: 'selection:bg-[#f59e0b33]',
        blockquote: 'prose-blockquote:!border-[#f59e0b4D]'
    },
    code: {
        border: 'border-[#CB37AB]',
        background: 'bg-[#CB37AB1A]',
        text: 'text-[#CB37AB]',
        selection: 'selection:bg-[#CB37AB33]',
        blockquote: 'prose-blockquote:!border-[#CB37AB4D]'
    }
});

interface IconMap {
    [key: string]: any;
}

const iconMap = ref<IconMap>({
    astuce: FireIcon,
    important: ExclamationCircleIcon,
    note: InformationCircleIcon,
    attention: ExclamationTriangleIcon,
    idea: SparklesIcon,
    code: CodeBracketIcon
});

const isOpen = ref(false)
</script>

<template>
    <Collapsible v-if="dropdown" v-model:open="isOpen" class="callout border-s-4 pl-5 my-8 text-base font-medium italic rounded-e-md"
                 :class="[typeClasses[type]?.border, typeClasses[type]?.background, typeClasses[type]?.selection, typeClasses[type]?.blockquote]">
        <CollapsibleTrigger class="w-full">
            <div class="flex gap-1 items-center py-4" :class="typeClasses[type]?.text">
                <component :is="iconMap[type]" class="size-6"></component>

                <span class="text-base leading-none font-semibold italic pr-1 max-sm:hidden">
                    {{ title }}
                </span>
                <span class="text-base leading-none font-semibold italic pr-1 capitalize sm:hidden">
                    {{ title.length < 15 ? title : type }}
                </span>

                <ChevronRightIcon class="size-4 transition-transform duration-300" :class="{ 'rotate-90': isOpen }" />
            </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
            <template v-if="title && title.toLowerCase() !== type.toLowerCase() && title.length > 15">
                <p class="sm:hidden !mt-0">{{ title }}</p>
            </template>

            <p class="!my-0 !mt-0 prose-p:!mt-0 prose-ul:!mt-0 prose-blockquote:!mt-2 prose-code:!text-sm !pr-5" :class="{ 'not-italic': !italic }">
                <MDCSlot />
            </p>
        </CollapsibleContent>
    </Collapsible>

    <div v-if="!dropdown" class="callout border-s-4 pl-5 py-4 my-8 text-base font-medium italic rounded-e-md"
         :class="[typeClasses[type]?.border, typeClasses[type]?.background, typeClasses[type]?.selection, typeClasses[type]?.blockquote]">
        <div class="flex gap-1 items-center" :class="typeClasses[type]?.text">
            <component :is="iconMap[type]" class="size-6"></component>
            <span v-if="title" class="text-base leading-none font-semibold italic">
                {{ title }}
            </span>
            <span v-else class="text-base leading-none font-semibold italic capitalize">
                {{ type === 'idea' ? 'idée' : type }} :
            </span>
        </div>

        <p class="!my-0 !mt-3 !pr-5 prose-blockquote:!mb-0 prose-pre:!mb-3 prose-code:!text-sm" :class="{ 'flex flex-col gap-4': flex }">
            <MDCSlot unwrap="p" />
        </p>
    </div>
</template>