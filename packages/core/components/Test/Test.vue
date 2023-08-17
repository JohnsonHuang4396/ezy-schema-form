<template>
  <div class="test-btn">test div {{ age }}</div>
  <el-button
    type="primary"
    size="default"
  >
    test
  </el-button>
</template>

<script lang="ts" setup>
  import { ElButton } from 'element-plus'

  import './style/index.scss'

  interface Props {
    age: number
  }
  const $props = defineProps<Props>()
</script>
