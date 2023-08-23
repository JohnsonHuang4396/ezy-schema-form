import type { InputNumberProps, InputNumberEmits ,InputNumberInstance} from 'element-plus'
import type{ FormCompPropsAntEmits, FormCustomComponent ,GetInstance} from 'types'

export type InputNumberConfig = {
  comp: 'input-number'
} & FormCompPropsAntEmits<InputNumberProps, InputNumberEmits> &
  FormCustomComponent &
  GetInstance<InputNumberInstance>
