import type { FormItemInstance, FormItemProps, FormItemRule } from 'element-plus'
import type { Arrayable } from 'element-plus/es/utils'
import type { GetInstance, FormItemComponents, CtlModelValue } from './'

export type Vue3FormItem = {
  field: string
  defaultValue?: any
  component: FormItemComponents
  rule?: Arrayable<FormItemRule>
} & CtlModelValue &
  Partial<FormItemProps> &
  GetInstance<FormItemInstance>
