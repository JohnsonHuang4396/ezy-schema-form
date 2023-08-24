import type { Component } from 'vue'
import type { CompPropsLimit } from './Utils'
import type {
  AutoCompleteConfig,
  CascaderConfig,
  CheckboxConfig,
  CustomConfig,
  DatePickerConfig,
  InputConfig,
  InputNumberConfig,
  RadioConfig,
  SelectConfig,
  SwitchConfig
} from './components'

export interface FormCustomComponent<T = Component> {
  component?: T
}

export type FormCompPropsAntEmits<Props = object, Actions = never> = {
  props?: CompPropsLimit<Props>
  actions?: Partial<Actions>
}

export type FormItemComponents =
  | AutoCompleteConfig
  | CascaderConfig
  | CheckboxConfig
  | DatePickerConfig
  | InputConfig
  | InputNumberConfig
  | RadioConfig
  | SelectConfig
  | SwitchConfig
  | CustomConfig
