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
import type { Component, VNode } from 'vue'
import type { CompPropsLimit } from './Utils'

type AutoCompleteConfig = {
  comp: 'auto-complete'
  props?: CompPropsLimit<AutocompleteProps>
  action?: Partial<AutocompleteEmits>
}

type CascaderConfig = {
  comp: 'cascader'
  props?: CompPropsLimit<CascaderProps>
  action?: Partial<CascaderEmits>
}

type CheckboxConfig = {
  comp: 'checkbox'
  props?: CompPropsLimit<CheckboxProps>
  action?: Partial<CheckboxEmits>
}

type DatePickerConfig = {
  comp: 'date-picker'
  props?: CompPropsLimit<DatePickerProps>
  action?: Partial<DatePickerEmits>
}

type InputConfig = {
  comp: 'input'
  props?: CompPropsLimit<InputProps>
  action?: Partial<InputEmits>
}

type InputNumberConfig = {
  comp: 'input-number'
  props?: CompPropsLimit<InputNumberProps>
  action?: Partial<InputNumberEmits>
}

type RadioConfig = {
  comp: 'radio'
  props?: CompPropsLimit<RadioProps>
  action?: Partial<RadioEmits>
}

type SelectConfig = {
  comp: 'select'
  props?: SelectProps
  action?: SelectEmits
}

type SwitchConfig = {
  comp: 'switch'
  props?: CompPropsLimit<SwitchProps>
  action?: SwitchEmits
}

type CustomConfig = {
  comp: 'custom'
  components: Component
  action?: { [key: string]: (...vars: any[]) => void }
}

type FormItemComponents =
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

const config: FormItemComponents[] = [{ comp: 'input', props: {} }]
