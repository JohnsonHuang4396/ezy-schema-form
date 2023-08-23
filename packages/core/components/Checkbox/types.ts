import type { CheckboxProps, CheckboxEmits, CheckboxInstance } from 'element-plus'
import type { FormCompPropsAntEmits, FormCustomComponent, GetInstance } from 'types'

export type CheckboxConfig = {
  comp: 'checkbox'
} & FormCompPropsAntEmits<CheckboxProps, CheckboxEmits> &
  FormCustomComponent &
  GetInstance<CheckboxInstance>
