<script lang="ts" setup>
import {Toaster as Sonner, type ToasterProps} from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
    <Sonner
        class="toaster group"
        v-bind="props"
        :toast-options="{
        classes: {
            toast: 'group toast group-[.toaster]:bg-my-background group-[.toaster]:text-white/75 group-[.toaster]:border-white/10 group-[.toaster]:shadow-lg',
            description: 'group-[.toast]:text-white/50',
            actionButton:
                'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
            cancelButton:
                'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
    }"
    />
</template>
