import type { InputProps, InputEmits, InputInstance } from 'element-plus'
import type { FormCompPropsAntEmits, FormCustomComponent, GetInstance } from 'types'
import type { CSSProperties } from 'vue'

interface InputExtendProps extends Omit<InputProps, 'inputStyle'> {
  inputStyle: CSSProperties | CSSProperties[] | string[]
}

export type InputConfig = {
  comp: 'input'
} & FormCompPropsAntEmits<InputExtendProps, InputEmits> &
  FormCustomComponent &
  GetInstance<InputInstance>
