import type { FormCompPropsAntEmits, FormCustomComponent, GetInstance } from 'types'

export type CustomConfig = {
  comp: 'custom'
} & FormCompPropsAntEmits<Record<string, any>, Record<string, (...vars: any[]) => void>> &
  FormCustomComponent &
  GetInstance
