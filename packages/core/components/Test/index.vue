<template>
  <div class="test-btn">test div</div>
  <el-button
    class="test-btn"
    type="primary"
    size="default"
  >
    test
  </el-button>
</template>

<script lang="ts" setup>
  import { ElButton } from 'element-plus'
  import { useTest } from '../../hooks/useTest'

  const { name } = useTest()
  console.log('name :>>', name)
</script>

<style lang="scss" scoped>
  @import url('./index.scss');
</style>
