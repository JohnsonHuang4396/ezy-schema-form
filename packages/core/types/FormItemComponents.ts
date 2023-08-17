import {
  CascaderPanelInstance,
  CheckboxGroupInstance,
  CheckboxGroupProps,
  ElDatePicker,
  ElSelect
} from 'element-plus'
import type {
  DatePickerEmits,
  GetInstance,
  SelectEmits,
  SelectOptionsGroupProps,
  SelectOptionsProps,
  SelectProps
} from './ElementExtra'
import type {
  AutocompleteEmits,
  AutocompleteInstance,
  AutocompleteProps,
  CascaderEmits,
  CascaderInstance,
  CascaderProps,
  CheckboxEmits,
  CheckboxInstance,
  CheckboxProps,
  DatePickerProps,
  InputEmits,
  InputInstance,
  InputNumberEmits,
  InputNumberInstance,
  InputNumberProps,
  InputProps,
  RadioEmits,
  RadioInstance,
  RadioProps,
  SwitchEmits,
  SwitchInstance,
  SwitchProps
} from 'element-plus'
import type { Component } from 'vue'
import type { CompPropsLimit } from './Utils'

export interface FormCustomComponent<T = Component> {
  component?: T
}

export type FormCompPropsAntEmits<Props = object, Actions = never> = {
  props?: CompPropsLimit<Props>
  actions?: Partial<Actions>
}

export type AutoCompleteConfig = {
  comp: 'auto-complete'
} & FormCompPropsAntEmits<AutocompleteProps, AutocompleteEmits> &
  FormCustomComponent &
  GetInstance<AutocompleteInstance>

export type CascaderConfig = {
  comp: 'cascader'
} & FormCompPropsAntEmits<CascaderProps, CascaderEmits> &
  FormCustomComponent &
  GetInstance<CascaderInstance>

export type CheckboxGroupConfig = {
  comp: 'checkbox-group'
  children: Omit<CheckboxConfig, 'comp'>[]
} & FormCompPropsAntEmits<CheckboxGroupProps, CheckboxEmits> &
  FormCustomComponent &
  GetInstance<CheckboxGroupInstance>

export type CheckboxConfig = {
  comp: 'checkbox'
} & FormCompPropsAntEmits<CheckboxProps, CheckboxEmits> &
  FormCustomComponent &
  GetInstance<CheckboxInstance>

export type DatePickerConfig = {
  comp: 'date-picker'
} & FormCompPropsAntEmits<DatePickerProps, DatePickerEmits> &
  FormCustomComponent &
  GetInstance<InstanceType<typeof ElDatePicker>>

export type InputConfig = {
  comp: 'input'
} & FormCompPropsAntEmits<InputProps, InputEmits> &
  FormCustomComponent &
  GetInstance<InputInstance>

export type InputNumberConfig = {
  comp: 'input-number'
} & FormCompPropsAntEmits<InputNumberProps, InputNumberEmits> &
  FormCustomComponent &
  GetInstance<InputNumberInstance>

export type RadioConfig = {
  comp: 'radio'
} & FormCompPropsAntEmits<RadioProps, RadioEmits> &
  FormCustomComponent &
  GetInstance<RadioInstance>

export type SelectConfig = {
  comp: 'select'
  options: SelectOptionsProps[]
} & FormCompPropsAntEmits<SelectProps, SelectEmits> &
  FormCustomComponent &
  GetInstance<typeof ElSelect>

export type SwitchConfig = {
  comp: 'switch'
} & FormCompPropsAntEmits<SwitchProps, SwitchEmits> &
  FormCustomComponent &
  GetInstance<SwitchInstance>

export type CustomConfig = {
  comp: 'custom'
} & FormCompPropsAntEmits<Record<string, any>, Record<string, (...vars: any[]) => void>> &
  FormCustomComponent &
  GetInstance

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
