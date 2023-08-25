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

  <el-form v-if="false">
    <el-form-item></el-form-item>
    <el-input />
    <el-input-number />
    <el-autocomplete />
    <el-cascader />
    <el-date-picker />
    <el-switch />

    <el-checkbox />
    <el-select>
      <el-option />
    </el-select>
    <el-radio />
  </el-form>
</template>

<script setup lang="ts">
  import SchemaForm from '@vue3-form/core/components/SchemaForm/SchemaForm.vue'
  import type { Vue3FormProps } from '@vue3-form/core/types'

  const schema = ref<Vue3FormProps>({
    classList: [],
    schema: [
      {
        field: 'name',
        ctl: false,
        label: '名称',
        defaultValue: 'hqh',
        rule: { required: true, message: '请输入名称', trigger: ['blur'] },
        component: {
          comp: 'input',
          attrs: {
            maxlength: 100,
            disabled: false,
            clearable: true
          }
        }
      },
      { field: 'age', label: '年龄', component: { comp: 'input-number' } },
      {
        field: 'class',
        label: '班级',
        component: {
          comp: 'select',
          props: {
            placeholder: '请选择班级',
            options: [{ label: '1班', value: '1' }]
          }
        }
      },
      {
        field: 'male',
        label: '性别',
        component: { comp: 'radio', prop: { label: '男' } }
      }
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
