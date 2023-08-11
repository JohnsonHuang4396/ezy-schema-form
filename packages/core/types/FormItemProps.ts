import type {
  AutocompleteProps,
  CascaderProps,
  CheckboxProps,
  DatePickerProps,
  InputNumberProps,
  InputProps,
  RadioProps,
  SliderProps,
  SwitchProps,
  TimePickerDefaultProps,
  UploadProps,
  VirtualizedListProps
} from 'element-plus'
import type { CompPropsLimit } from './Utils'

type AutoCompleteConfig = {
  comp: 'auto-complete'
  props: CompPropsLimit<AutocompleteProps>
}

type CascaderConfig = {
  comp: 'cascader'
  props: CompPropsLimit<CascaderProps>
}

type CheckboxConfig = {
  comp: 'checkbox'
  props: CompPropsLimit<CheckboxProps>
}

type DatePickerConfig = {
  comp: 'date-picker'
  props: CompPropsLimit<DatePickerProps>
}

type InputConfig = {
  comp: 'input'
  props: CompPropsLimit<InputProps>
}

type InputNumberConfig = {
  comp: 'input-number'
  props: CompPropsLimit<InputNumberProps>
}

type RadioConfig = {
  comp: 'radio'
  props: CompPropsLimit<RadioProps>
}

type SelectConfig = {
  comp: 'select'
  props: any
}

type VirtualizedSelectConfig = {
  comp: 'virtualized-select'
  props: CompPropsLimit<VirtualizedListProps>
}

type SliderConfig = {
  comp: 'slider'
  props: CompPropsLimit<SliderProps>
}

type SwitchConfig = {
  comp: 'switch'
  props: CompPropsLimit<SwitchProps>
}

type TimePickerConfig = {
  comp: 'time-picker'
  props: CompPropsLimit<TimePickerDefaultProps>
}

type UploadConfig = {
  comp: 'upload'
  props: CompPropsLimit<UploadProps>
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
  | VirtualizedSelectConfig
  | SliderConfig
  | SwitchConfig
  | TimePickerConfig
  | UploadConfig
  | UploadConfig

const config: FormItemComponents[] = [{ comp: 'input', props: {} }]
