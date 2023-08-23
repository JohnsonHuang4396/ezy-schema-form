import type { RadioProps, RadioEmits, RadioInstance } from 'element-plus'
import type { FormCompPropsAntEmits, FormCustomComponent, GetInstance } from 'types'

export type RadioConfig = {
  comp: 'radio'
} & FormCompPropsAntEmits<RadioProps, RadioEmits> &
  FormCustomComponent &
  GetInstance<RadioInstance>
