<template>
  <div un-h-full>
    <SchemaForm
      ref="schemaFormRef"
      :config="schema"
    />
    <el-button
      type="primary"
      @click="handleValidate"
    >
      validate
    </el-button>
  </div>
</template>

<script setup lang="ts">
  import { SchemaForm } from '@vue3-form/core'
  import { ElButton } from 'element-plus'
  import type { Vue3FormProps } from '@vue3-form/core/types'

  const schema = ref<Vue3FormProps>({
    classList: [],
    schema: [
      {
        field: 'name',
        label: '名称',
        defaultValue: 'hqh',
        rule: { required: true, message: '请输入名称', trigger: ['blur'] },
        component: {
          comp: 'input',
          props: { type: 'textarea', maxlength: 100, disabled: false }
        }
      },
      { field: 'age', label: '年龄', component: { comp: 'input-number' } }
    ]
  })

  const schemaFormRef = ref<InstanceType<typeof SchemaForm>>()

  async function handleValidate() {
    if (!schemaFormRef.value) return

    const [, error] = await schemaFormRef.value.validate()
    if (error) return

    console.log('pass')
  }
</script>

<style lang="scss" scoped></style>
