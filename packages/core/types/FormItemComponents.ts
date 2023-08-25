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
import type { RenderComponent } from './Utils'

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
  | CustomConfig

export type FormItemComponents = RenderComponent<ComponentConfig>
