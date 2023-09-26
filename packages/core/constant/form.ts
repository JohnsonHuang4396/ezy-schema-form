import type { Vue3FormProps } from 'types'

export const VUE3_FORM_DEFAULT_PROPS: Vue3FormProps = {
  attrs: {
    labelWidth: 'auto',
    labelPosition: 'right',
    size: 'default'
  },
  classList: [],
  schema: []
}

export const VUE3_FORM_PROVIDE_KEY = 'vue3-form-provider'
