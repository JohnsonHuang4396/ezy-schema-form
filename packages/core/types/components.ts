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
  FormCustomComponent,
  GetInstance,
  SelectOptionsProps,
  SelectProps,
  SelectEmits
} from 'types'
import type { CSSProperties } from 'vue'

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

export type CheckboxConfig = {
  comp: 'checkbox'
} & FormCompPropsAntEmits<CheckboxProps, CheckboxEmits> &
  FormCustomComponent &
  GetInstance<CheckboxInstance>

export type CustomConfig = {
  comp: 'custom'
} & FormCompPropsAntEmits<Record<string, any>, Record<string, (...vars: any[]) => void>> &
  FormCustomComponent &
  GetInstance

export type DatePickerConfig = {
  comp: 'date-picker'
} & FormCompPropsAntEmits<DatePickerProps, DatePickerEmits> &
  FormCustomComponent &
  GetInstance<InstanceType<typeof ElDatePicker>>

interface InputExtendProps extends Omit<InputProps, 'inputStyle'> {
  inputStyle: CSSProperties | CSSProperties[] | string[]
}

export type InputConfig = {
  comp: 'input'
} & FormCompPropsAntEmits<InputExtendProps, InputEmits> &
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
