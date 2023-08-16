import type { DatePickerEmits, SelectEmits, SelectProps } from './ElementExtra'
import type {
  AutocompleteEmits,
  AutocompleteProps,
  CascaderEmits,
  CascaderProps,
  CheckboxEmits,
  CheckboxProps,
  DatePickerProps,
  InputEmits,
  InputNumberEmits,
  InputNumberProps,
  InputProps,
  RadioEmits,
  RadioProps,
  SwitchEmits,
  SwitchProps
} from 'element-plus'
import type { Component } from 'vue'
import type { CompPropsLimit } from './Utils'

export interface FormCustomComponent<T = Component> {
  component?: T
}

export type FormCompPropsAntEmits<Props = object, Actions = object> = {
  props?: CompPropsLimit<Props>
  actions?: Partial<Actions>
}

export type AutoCompleteConfig = {
  comp: 'auto-complete'
} & FormCompPropsAntEmits<AutocompleteProps, AutocompleteEmits> &
  FormCustomComponent

export type CascaderConfig = {
  comp: 'cascader'
} & FormCompPropsAntEmits<CascaderProps, CascaderEmits> &
  FormCustomComponent

export type CheckboxConfig = {
  comp: 'checkbox'
} & FormCompPropsAntEmits<CheckboxProps, CheckboxEmits> &
  FormCustomComponent

export type DatePickerConfig = {
  comp: 'date-picker'
} & FormCompPropsAntEmits<DatePickerProps, DatePickerEmits> &
  FormCustomComponent

export type InputConfig = {
  comp: 'input'
} & FormCompPropsAntEmits<InputProps, InputEmits> &
  FormCustomComponent

export type InputNumberConfig = {
  comp: 'input-number'
} & FormCompPropsAntEmits<InputNumberProps, InputNumberEmits> &
  FormCustomComponent

export type RadioConfig = {
  comp: 'radio'
} & FormCompPropsAntEmits<RadioProps, RadioEmits> &
  FormCustomComponent

export type SelectConfig = {
  comp: 'select'
} & FormCompPropsAntEmits<SelectProps, SelectEmits> &
  FormCustomComponent

export type SwitchConfig = {
  comp: 'switch'
} & FormCompPropsAntEmits<SwitchProps, SwitchEmits> &
  FormCustomComponent

export type CustomConfig = {
  comp: 'custom'
  action?: { [key: string]: (...vars: any[]) => void }
} & FormCustomComponent

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
