import { ElDatePicker } from 'element-plus'
import type { DatePickerProps } from 'element-plus'
import type {
  DatePickerEmits,
  FormCompPropsAntEmits,
  FormCustomComponent,
  GetInstance
} from 'types'

export type DatePickerConfig = {
  comp: 'date-picker'
} & FormCompPropsAntEmits<DatePickerProps, DatePickerEmits> &
  FormCustomComponent &
  GetInstance<InstanceType<typeof ElDatePicker>>
