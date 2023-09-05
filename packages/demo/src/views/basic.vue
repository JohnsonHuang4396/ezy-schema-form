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

  const formModel = ref({ name: 'jxy' })

  const schema = ref<Vue3FormProps>({
    classList: [],
    formModel: formModel.value,
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
        },
        updateModelValue(val: string) {
          formModel.value.name = val
        }
      },

      {
        field: 'number',
        label: '学号',
        component: {
          comp: 'auto-complete'
        }
      },
      {
        field: 'grade',
        label: '年级',
        component: {
          comp: 'cascader',
          attrs: { clearable: true }
        }
      },
      {
        field: 'class',
        label: '班级',
        component: {
          comp: 'select',
          attrs: {
            placeholder: '请选择班级',
            options: [{ label: '1班', value: '1' }]
          }
        }
      },
      {
        field: 'date',
        label: '日期',
        component: {
          comp: 'date-picker',
          attrs: { format: 'YYYY-MM-DD', valueFormat: 'YYYY-MM-DD' }
        }
      },
      { field: 'age', label: '年龄', component: { comp: 'input-number' } },
      {
        field: 'male',
        label: '性别',
        component: { comp: 'radio', attrs: { label: '男' } }
      },

      {
        field: 'isHasLunch',
        label: '吃饭了',
        component: {
          comp: 'switch'
        }
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
