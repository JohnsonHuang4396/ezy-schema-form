import type { Ref } from 'vue'
import type { FormItemInstance, FormItemProps, FormItemRule } from 'element-plus'
import type { GetInstance, FormItemComponents } from './'
import type { Arrayable } from 'element-plus/es/utils'

type FormItemFiled = string

export type Vue3FormItem = {
  field: FormItemFiled
  refField?: Ref<any>
  component: FormItemComponents
  rule?: Arrayable<FormItemRule>
} & Partial<FormItemProps> &
  GetInstance<FormItemInstance>
