<template>
  <div class="test-btn">test div {{ age }}</div>
  <el-button
    type="primary"
    size="default"
    @click="handleClick"
  >
    test
  </el-button>
</template>

<script lang="ts" setup>
  import { watch } from 'vue'
  import { ElButton } from 'element-plus'

  import './style/index.scss'

  interface Props {
    age: number
  }
  const $props = defineProps<Props>()

  const $emits = defineEmits<{
    click: []
  }>()

  watch(
    () => $props.age,
    nv => {
      console.log('nv :>>', nv)
    }
  )

  function handleClick() {
    $emits('click')
  }
</script>
