import { ElDatePicker, ElSelect } from 'element-plus'
import type {
  AutocompleteEmits,
  AutocompleteProps,
  AutocompleteInstance,
  CascaderProps,
  CascaderEmits,
  CascaderInstance,
  CheckboxProps,
  CheckboxEmits,
  CheckboxInstance,
  DatePickerProps,
  InputProps,
  InputEmits,
  InputInstance,
  InputNumberProps,
  InputNumberEmits,
  InputNumberInstance,
  RadioEmits,
  RadioInstance,
  RadioProps,
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
  SelectEmits
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

export type CheckboxConfig = {
  comp: 'checkbox'
} & FormCompPropsAntEmits<CheckboxProps, CheckboxEmits> &
  GetInstance<CheckboxInstance>

export type DatePickerConfig = {
  comp: 'date-picker'
} & FormCompPropsAntEmits<DatePickerProps, DatePickerEmits> &
  GetInstance<InstanceType<typeof ElDatePicker>>

interface InputExtendProps extends Omit<InputProps, 'inputStyle'> {
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

export type RadioConfig = {
  comp: 'radio'
} & FormCompPropsAntEmits<RadioProps, RadioEmits> &
  GetInstance<RadioInstance>

export type SelectConfig = {
  comp: 'select'
  options: SelectOptionsProps[]
} & FormCompPropsAntEmits<SelectProps, SelectEmits> &
  GetInstance<typeof ElSelect>

export type SwitchConfig = {
  comp: 'switch'
} & FormCompPropsAntEmits<SwitchProps, SwitchEmits> &
  GetInstance<SwitchInstance>

export type CustomConfig = {
  comp: 'custom'
} & FormCompPropsAntEmits<Record<string, any>, Record<string, (...vars: any[]) => void>> &
  GetInstance
