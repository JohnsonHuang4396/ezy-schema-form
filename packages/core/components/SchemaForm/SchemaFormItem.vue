<template>
  <template
    v-for="(item, index) in schema"
    :key="`${item.field}-${index}`"
  >
    <el-form-item
      class="vue3-form-item"
      :prop="item.field"
      :label="item.label"
      :label-width="item.labelWidth"
    >
      <component
        class="vue3-form-item__component"
        v-model="formModel[item.field]"
        v-bind="item.component.props"
        :is="insertComponent(item)"
      />
    </el-form-item>
  </template>
</template>

<script lang="ts" setup>
  import { inject } from 'vue'
  import { ElFormItem } from 'element-plus'
  import { useComponents } from '../../hooks'
  import { useContext } from '../../hooks/useContext'
  import { VUE3_FORM_PROVIDE_KEY } from '../../constant'
  import type { Vue3FormItem } from '../../types'
  import type { Ref } from 'vue'

  import './style/index.scss'

  interface Props {
    schema: Vue3FormItem[]
  }
  const $props = defineProps<Props>()

  const { get: getComponent } = useComponents()

  const { get } = useContext()

  const formModel = inject(get(VUE3_FORM_PROVIDE_KEY)) as Ref<any>

  function insertComponent(item: Vue3FormItem) {
    const isCustom = item.component.comp === 'custom'
    return isCustom ? item.component.component : getComponent(item.component.comp)
  }
</script>

<style lang="scss" scoped></style>
