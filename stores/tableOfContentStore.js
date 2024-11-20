export const useTableOfContentStore = defineStore('table-of-content', () => {
    const open = ref(false)

    const toggle = () => {
        open.value = !open.value
    }

    return { open, toggle }
},
{
    persist: {
        storage: piniaPluginPersistedstate.localStorage(),
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTableOfContentStore, import.meta.hot))
}