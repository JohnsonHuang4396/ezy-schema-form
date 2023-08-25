import type { FormItemProp, FormProps } from 'element-plus'
import type { Vue3FormItem } from './FormItem'
import type { FormCompPropsAntEmits } from './'

export interface Vue3FormProps extends FormCompPropsAntEmits<FormProps> {
  classList?: string | string[]
  schema: Vue3FormItem[]
}

export interface Vue3FormConfig {
  config: Vue3FormProps
}

export type Vue3FormEmits = {
  onValidate: [prop: FormItemProp, isValid: boolean, message: string]
}
