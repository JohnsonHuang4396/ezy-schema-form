import { CheckboxGroupEmits, CheckboxGroupProps, ElDatePicker, ElSelect } from 'element-plus'
import type {
  AutocompleteEmits,
  AutocompleteProps,
  AutocompleteInstance,
  CascaderProps,
  CascaderEmits,
  CascaderInstance,
  CheckboxProps,
  CheckboxInstance,
  DatePickerProps,
  InputProps,
  InputEmits,
  InputInstance,
  InputNumberProps,
  InputNumberEmits,
  InputNumberInstance,
  RadioProps,
  RadioGroupProps,
  RadioGroupEmits,
  RadioGroupInstance,
  SwitchProps,
  SwitchEmits,
  SwitchInstance
} from 'element-plus'
import type {
  DatePickerEmits,
  FormCompPropsAntEmits,
  GetInstance,
  SelectOptionsProps,
  SelectProps,
  SelectEmits,
  SelectOptionsGroupProps
} from 'types'
import type { CSSProperties } from 'vue'

export type AutoCompleteConfig = {
  comp: 'auto-complete'
} & FormCompPropsAntEmits<AutocompleteProps, AutocompleteEmits> &
  GetInstance<AutocompleteInstance>

export type CascaderConfig = {
  comp: 'cascader'
} & FormCompPropsAntEmits<CascaderProps, CascaderEmits> &
  GetInstance<CascaderInstance>

export type CheckboxOptions =
  | { type?: 'default'; options?: Omit<CheckboxProps, 'modelValue'>[] }
  | { type?: 'button'; options?: Omit<CheckboxProps, 'modelValue'>[] }

export type CheckboxConfig = {
  comp: 'checkbox'
} & CheckboxOptions &
  FormCompPropsAntEmits<CheckboxGroupProps, CheckboxGroupEmits> &
  GetInstance<CheckboxInstance>

export type DatePickerConfig = {
  comp: 'date-picker'
} & FormCompPropsAntEmits<DatePickerProps, DatePickerEmits> &
  GetInstance<InstanceType<typeof ElDatePicker>>

export interface InputExtendProps extends Omit<InputProps, 'inputStyle'> {
  inputStyle: CSSProperties | CSSProperties[] | string[]
}

export type InputConfig = {
  comp: 'input'
} & FormCompPropsAntEmits<InputExtendProps, InputEmits> &
  GetInstance<InputInstance>

export type InputNumberConfig = {
  comp: 'input-number'
} & FormCompPropsAntEmits<InputNumberProps, InputNumberEmits> &
  GetInstance<InputNumberInstance>

export type RadioOptions = { type?: 'default'; options?: RadioProps[] } | { type?: 'button'; options?: RadioProps[] }

export type RadioConfig = {
  comp: 'radio'
} & RadioOptions &
  FormCompPropsAntEmits<RadioGroupProps, RadioGroupEmits> &
  GetInstance<RadioGroupInstance>

export type SelectOptionType =
  | { type?: 'default'; options: SelectOptionsProps[] }
  | { type?: 'options'; options: SelectOptionsGroupProps[] }

export type SelectConfig = {
  comp: 'select'
} & SelectOptionType &
  FormCompPropsAntEmits<SelectProps, SelectEmits> &
  GetInstance<typeof ElSelect>

export type SwitchConfig = {
  comp: 'switch'
} & FormCompPropsAntEmits<SwitchProps, SwitchEmits> &
  GetInstance<SwitchInstance>

export type CustomConfig = {
  comp: 'custom'
} & FormCompPropsAntEmits<Record<string, any>, Record<string, (...vars: any[]) => void>> &
  GetInstance
