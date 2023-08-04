<template>
  <div class="test-btn">test div</div>
  <el-button
    type="primary"
    size="default"
    @click="handleClick"
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
  defineProps<Props>()

  const $emits = defineEmits<{
    click: []
  }>()

  function handleClick() {
    $emits('click')
  }
</script>
