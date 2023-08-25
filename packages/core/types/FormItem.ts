import type { FormItemInstance, FormItemProps, FormItemRule } from 'element-plus'
import type { Arrayable } from 'element-plus/es/utils'
import type { GetInstance, FormItemComponents } from './'

type FormItemFiled = string

export type Vue3FormItem = {
  field: FormItemFiled
  ctl?: boolean
  defaultValue?: any
  component: FormItemComponents
  rule?: Arrayable<FormItemRule>
} & Partial<FormItemProps> &
  GetInstance<FormItemInstance>
