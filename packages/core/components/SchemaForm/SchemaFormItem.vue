<template>
  <template
    v-for="(item, index) in schema"
    :key="`${item.field}-${index}`"
  >
    <el-form-item
      :prop="item.field"
      :label="item.label"
      :label-width="item.labelWidth"
    >
      <component :is="insertComponent(item)" />
    </el-form-item>
  </template>
</template>

<script lang="ts" setup>
  import { ElFormItem } from 'element-plus'
  import { useComponents } from '../../hooks'
  import type { Vue3FormItem } from '../../types'

  interface Props {
    schema: Vue3FormItem[]
  }
  const $props = defineProps<Props>()

  const { get: getComponent } = useComponents()

  function insertComponent(item: Vue3FormItem) {
    const isCustom = item.component.comp === 'custom'
    return isCustom ? item.component.component : getComponent(item.component.comp)
  }
</script>

<style lang="scss" scoped></style>
