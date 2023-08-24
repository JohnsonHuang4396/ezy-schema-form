<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="isCollapsed"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu
            :index="item.index"
            :key="item.index"
          >
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item
                v-else
                :index="subItem.index"
              >
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item
            :index="item.index"
            :key="item.index"
          >
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
  import {
    SkillLevelBasic,
    SkillLevelIntermediate,
    SkillLevelAdvanced
  } from '@vicons/carbon'

  const route = useRoute()

  const globalStore = useGlobalStore()

  const { isCollapsed } = storeToRefs(globalStore)

  type Icon = typeof SkillLevelBasic

  interface Menu {
    icon: string | Icon
    index: string
    title: string
    subs?: Menu[]
  }

  const items: Menu[] = [
    {
      icon: SkillLevelBasic,
      index: '/basic',
      title: '基本使用'
    },
    {
      icon: SkillLevelIntermediate,
      index: '/total',
      title: '完整表单'
    },
    {
      icon: SkillLevelAdvanced,
      index: '/advance',
      title: '进阶使用'
    }
  ]

  const onRoutes = computed(() => {
    return route.path
  })
</script>

<style lang="scss" scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 24px;
    bottom: 24px;
    overflow-y: scroll;
  }
  .sidebar::-webkit-scrollbar {
    width: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 180px;
  }
  .sidebar > ul {
    height: 100%;
  }
</style>
