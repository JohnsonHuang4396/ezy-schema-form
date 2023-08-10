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
        @click="handleCollapsedMenu"
      >
        <CollapseCategories />
      </el-icon>
      <div
        un-text="26px"
        un-font-bold
        class="header-title"
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
  import { isDark, toggleTheme } from '@/composables/global'
  import { Sunny, Moon } from '@element-plus/icons-vue'
  import { CollapseCategories } from '@vicons/carbon'
  import { LogoGithub } from '@vicons/carbon'

  function handleJumpToSourceCode() {
    window.open(
      'https://github.com/JohnsonHuang4396/vue3-form/tree/main/packages/demo',
      '__blank'
    )
  }

  function handleCollapsedMenu() {
    isCollapsed.value = !isCollapsed.value
  }

  const menuStyle = computed(() => ({
    transform: `rotate(${isCollapsed.value ? '0deg' : '180deg'})`
  }))
</script>

<style lang="scss" scoped>
  .header-title {
    filter: drop-shadow(2px 2px 6px #409eff);
  }
</style>
