<template>
  <div un-h-full>
    <SchemaForm :config="schema" />
  </div>
</template>

<script setup lang="ts">
  import type { Vue3FormProps } from '@vue3-form/core/types'

  const schema = ref<Vue3FormProps>({
    classList: ['grid', ''],
    schema: [
      { field: 'name', label: '名称', component: { comp: 'input' } },
      { field: 'age', label: '年龄', component: { comp: 'input-number' } }
    ]
  })
</script>

<style lang="scss" scoped></style>
