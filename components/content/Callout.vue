<script setup lang="ts">
import { FireIcon, ExclamationCircleIcon, InformationCircleIcon } from "@heroicons/vue/24/outline";

defineProps<{
    type: keyof typeof typeClasses.value
}>()

interface StyleClasses {
    border: string;
    background: string;
    text: string;
    selection: string;
}

const typeClasses = ref<Record<string, StyleClasses>>({
    astuce: {
        border: 'border-[#9133ea]',
        background: 'bg-[#9133ea1A]',
        text: 'text-[#9133ea]',
        selection: 'selection:bg-[#9133ea33]'
    },
    important: {
        border: 'border-[#cb3e37]',
        background: 'bg-[#cb3e371A]',
        text: 'text-[#cb3e37]',
        selection: 'selection:bg-[#cb3e3733]'
    },
    note: {
        border: 'border-my-primary-700',
        background: 'bg-my-primary-700/10',
        text: 'text-my-primary-700',
        selection: 'selection:bg-my-primary-700/20'
    }
});

interface IconMap {
    [key: string]: any;
}

const iconMap = ref<IconMap>({
    astuce: FireIcon,
    important: ExclamationCircleIcon,
    note: InformationCircleIcon
});
</script>

<template>
    <div class="callout border-s-4 pl-5 py-4 my-8 text-base font-medium italic rounded-e-md"
         :class="[typeClasses[type]?.border, typeClasses[type]?.background, typeClasses[type]?.selection]">
        <div class="flex gap-1 items-center"
            :class="typeClasses[type]?.text">
            <component :is="iconMap[type]" class="size-6"></component>
            <span class="text-base leading-none font-semibold italic capitalize">
                {{ type }}:
            </span>
        </div>

        <p class="!my-0 !mt-3">
            <MDCSlot unwrap="p" />
        </p>
    </div>
</template>