<template>
  <div class="test-btn">test div</div>
  <el-button
    type="primary"
    size="default"
  >
    test
  </el-button>
</template>

<script lang="ts" setup>
  import { ElButton } from 'element-plus'
  import { useTest } from '../../hooks/useTest'

  import './style/index.scss'

  const { name } = useTest()
  console.log('name :>>', name)
</script>
