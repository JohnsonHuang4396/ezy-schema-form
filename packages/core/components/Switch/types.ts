import type { SwitchProps, SwitchEmits, SwitchInstance } from 'element-plus'
import type { FormCompPropsAntEmits, FormCustomComponent, GetInstance } from 'types'

export type SwitchConfig = {
  comp: 'switch'
} & FormCompPropsAntEmits<SwitchProps, SwitchEmits> &
  FormCustomComponent &
  GetInstance<SwitchInstance>
