import type { Ref } from 'vue'
import type { FormItemInstance, FormItemProps } from 'element-plus'
import type { GetInstance, FormItemComponents } from './'

type FormItemFiled = string | Ref<any>

export type Vue3FormItem = {
  field: FormItemFiled
  component: FormItemComponents
} & Partial<FormItemProps> &
  GetInstance<FormItemInstance>
