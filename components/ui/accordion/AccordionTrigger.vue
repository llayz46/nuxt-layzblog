<script setup lang="ts">
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeader class="flex !mb-0 !mt-0 w-full">
    <AccordionTrigger
      v-bind="delegatedProps"
      class="w-full py-4"
    >
      <slot />
    </AccordionTrigger>
  </AccordionHeader>
</template>
