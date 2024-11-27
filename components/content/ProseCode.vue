<script setup>
const active = ref(false)

const style = computed(() => {
    return active.value ? 'border-my-primary-700/50 bg-my-primary-700/10' : 'border-white/10 bg-my-background/25 hover:bg-my-background/50'
})
</script>

<template>
    <span class="border transition-colors px-2 py-1 text-sm rounded-full cursor-pointer leading-8"
          :class="style"
          @click="active = !active">
        <code class="before:!content-none after:!content-none"><slot /></code>
    </span>
</template>