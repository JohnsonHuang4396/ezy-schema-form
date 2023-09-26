import type { Ref } from 'vue'
import type { FormItemProp, FormProps } from 'element-plus'
import type { Vue3FormItem } from './FormItem'
import type { FormCompPropsAntEmits } from './'

export interface EzySchemaFormProps extends Omit<FormProps, 'disabled'> {
  disabled: Ref<boolean> | boolean
}

export interface Vue3FormProps extends FormCompPropsAntEmits<EzySchemaFormProps> {
  classList?: string | string[]
  formModel?: Record<string, any>
  schema: Vue3FormItem[]
}

export interface Vue3FormConfig {
  config: Vue3FormProps
}

export type Vue3FormEmits = {
  onValidate: [prop: FormItemProp, isValid: boolean, message: string]
  'update:formModel': [model: Record<string, any>]
}
