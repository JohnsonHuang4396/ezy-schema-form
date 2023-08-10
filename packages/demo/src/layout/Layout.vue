<template>
  <el-container
    un-h-full
    un-select-none
  >
    <Aside />
    <el-container
      class="content-box"
      :class="{ 'content-collapse': isCollapsed }"
    >
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <RouterView v-slot="{ Component }">
          <Transition
            name="move"
            mode="out-in"
          >
            <KeepAlive>
              <component :is="Component" />
            </KeepAlive>
          </Transition>
        </RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
  import Header from '@/layout/Header.vue'
  import Aside from '@/layout/Aside.vue'
</script>

<style lang="scss">
  .el-aside {
    width: unset;
  }
  .content-box {
    position: absolute;
    left: 180px;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-transition: left 0.3s ease-in-out;
    transition: left 0.3s ease-in-out;
  }
  .content-collapse {
    left: 65px;
  }
</style>
