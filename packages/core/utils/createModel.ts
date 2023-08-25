import type { Vue3FormItem } from '../types'

function initDefaultValue(item: Vue3FormItem) {
  const {
    component: { comp }
  } = item

  switch (comp) {
    case 'input' || 'auto-complete':
      return ''
    case 'input-number':
      return 0
    case 'date-picker':
      return Intl.DateTimeFormat('zh-CN', {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(new Date())
    case 'select':
      return item.component.attrs?.multiple ? [] : ''
    case 'switch':
      return false
    case 'checkbox':
      return false
    case 'radio':
      return false
  }
}

export function createModel(schema: Vue3FormItem[]) {
  if (!schema || !schema.length) return {}
  return schema.reduce(
    (model, item) => {
      const field = item.field
      const defaultValue = item.defaultValue
      model[field] = defaultValue || initDefaultValue(item)
      return model
    },
    {} as Record<string, any>
  )
}
