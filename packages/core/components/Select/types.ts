import { ElSelect } from 'element-plus'
import type {
  FormCompPropsAntEmits,
  FormCustomComponent,
  GetInstance,
  SelectEmits,
  SelectOptionsProps,
  SelectProps
} from 'types'

export type SelectConfig = {
  comp: 'select'
  options: SelectOptionsProps[]
} & FormCompPropsAntEmits<SelectProps, SelectEmits> &
  FormCustomComponent &
  GetInstance<typeof ElSelect>
