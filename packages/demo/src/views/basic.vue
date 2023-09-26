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
  import { ElMessage } from 'element-plus'
  import { SchemaForm } from '@ezy-schema-form/core'
  import type { Vue3FormProps } from '@ezy-schema-form/core/types'

  const formModel = ref({ name: 'jxy' })

  interface LinkItem {
    value: string
    link: string
  }
  const links = ref<LinkItem[]>([])

  const loadAll = () => {
    return [
      { value: 'vue', link: 'https://github.com/vuejs/vue' },
      { value: 'element', link: 'https://github.com/ElemeFE/element' },
      { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
      { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
      { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
      { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
      { value: 'babel', link: 'https://github.com/babel/babel' }
    ]
  }

  let timeout: ReturnType<typeof setTimeout>

  const createFilter = (queryString: string) => {
    return (restaurant: LinkItem) => {
      return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      )
    }
  }

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
          comp: 'auto-complete',
          attrs: {
            fetchSuggestions(queryString: string, cb: (arg: any) => void) {
              const results = queryString
                ? links.value.filter(createFilter(queryString))
                : links.value

              clearTimeout(timeout)
              timeout = setTimeout(() => {
                cb(results)
              }, 3000 * Math.random())
            }
          }
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
        component: {
          comp: 'radio',
          type: 'button',
          options: [{ label: '男', name: 'male' }]
        }
      },
      {
        field: 'food',
        label: '想吃的',
        component: {
          comp: 'checkbox',
          options: [
            { label: '苹果', name: 'apple' },
            { label: '凤梨', name: 'pineapple' }
          ]
        }
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

    ElMessage.success('校验成功!')
  }

  onMounted(() => {
    links.value = loadAll()
  })
</script>

<style lang="scss" scoped></style>
