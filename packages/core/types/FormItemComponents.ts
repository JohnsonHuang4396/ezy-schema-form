import type {
  AutoCompleteConfig,
  CascaderConfig,
  CheckboxConfig,
  DatePickerConfig,
  InputConfig,
  InputNumberConfig,
  RadioConfig,
  SelectConfig,
  SwitchConfig
} from './components'

type ComponentConfig =
  | AutoCompleteConfig
  | CascaderConfig
  | CheckboxConfig
  | DatePickerConfig
  | InputConfig
  | InputNumberConfig
  | RadioConfig
  | SelectConfig
  | SwitchConfig

export type FormItemComponents = ComponentConfig
