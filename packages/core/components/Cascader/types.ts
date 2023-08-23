import type { FormCompPropsAntEmits, FormCustomComponent, GetInstance } from 'types'
import type { CascaderProps, CascaderEmits, CascaderInstance } from 'element-plus'

export type CascaderConfig = {
  comp: 'cascader'
} & FormCompPropsAntEmits<CascaderProps, CascaderEmits> &
  FormCustomComponent &
  GetInstance<CascaderInstance>
