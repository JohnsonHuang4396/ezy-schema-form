import { defineStore } from 'pinia'

export const useGlobalStore = defineStore(
  'useGlobalStore',
  () => {
    const isDark = ref<boolean>(false)

    function toggleTheme() {
      isDark.value = isDark.value ? false : true
    }

    watch(isDark, () => {
      document.documentElement.classList.toggle('dark', isDark.value)
    })

    const isCollapsed = ref<boolean>(false)

    function toggleCollapse() {
      isCollapsed.value = !isCollapsed.value
    }

    return {
      isDark,
      isCollapsed,
      toggleTheme,
      toggleCollapse
    }
  },
  {
    persist: {
      key: 'GLOBAL_VARS',
      paths: ['isDark', 'isCollapsed'],
      storage: localStorage
    }
  }
)
