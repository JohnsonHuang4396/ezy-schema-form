<template>
  <div
    un-h-full
    un-flex
    un-justify-between
    un-items-end
  >
    <div
      un-flex
      un-items-center
      un-gap="24px"
    >
      <el-icon
        un-transition
        un-cursor-pointer
        :style="menuStyle"
        :size="18"
        @click="toggleCollapse"
      >
        <CollapseCategories />
      </el-icon>
      <div
        un-text="26px"
        un-font-bold
        :class="{ 'header-title': isDark }"
      >
        Vue3-Form
      </div>
    </div>
    <div
      un-flex
      un-items-center
      un-gap="12px"
      un-justify-end
    >
      <div
        un-font-bold
        un-cursor-pointer
        :class="{ 'header-title': isHover && isDark }"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        @click="handleJumpToDoc"
      >
        详细文档
      </div>

      <el-icon
        un-cursor-pointer
        :size="24"
        @click="handleJumpToSourceCode"
      >
        <LogoGithub />
      </el-icon>

      <el-switch
        :model-value="isDark"
        :active-value="true"
        :inactive-value="false"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
        size="large"
        @change="toggleTheme"
      >
      </el-switch>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Sunny, Moon } from '@element-plus/icons-vue'
  import { CollapseCategories } from '@vicons/carbon'
  import { LogoGithub } from '@vicons/carbon'

  const globalStore = useGlobalStore()

  const { toggleTheme, toggleCollapse } = globalStore

  const { isDark, isCollapsed } = storeToRefs(globalStore)

  function handleJumpToSourceCode() {
    window.open(
      'https://github.com/JohnsonHuang4396/vue3-form/tree/main/packages/demo',
      '__blank'
    )
  }

  function handleJumpToDoc() {
    // TODO: 导航至文档
    // window.open()
  }

  const menuStyle = computed(() => ({
    transform: `rotate(${isCollapsed.value ? '0deg' : '180deg'})`
  }))

  const isHover = ref<boolean>(false)
</script>

<style lang="scss" scoped>
  .header-title {
    filter: drop-shadow(2px 2px 6px #409eff);
  }
</style>
