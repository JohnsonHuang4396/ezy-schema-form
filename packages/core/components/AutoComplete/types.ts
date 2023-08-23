import type { AutocompleteProps, AutocompleteEmits, AutocompleteInstance } from 'element-plus'
import type { FormCompPropsAntEmits, FormCustomComponent, GetInstance } from 'types'

export type AutoCompleteConfig = {
  comp: 'auto-complete'
} & FormCompPropsAntEmits<AutocompleteProps, AutocompleteEmits> &
  FormCustomComponent &
  GetInstance<AutocompleteInstance>
