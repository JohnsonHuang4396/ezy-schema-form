import type { Vue3FormItem } from '../types'

export function initDefaultValue(item: Vue3FormItem) {
  const { component } = item
  const { comp } = component

  switch (comp) {
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
      return component.attrs?.multiple ? [] : ''
    case 'switch':
      return false
    case 'checkbox':
      return []
    case 'radio':
      return ''
    default:
      return ''
  }
}

export function createModel(schema: Vue3FormItem[]) {
  if (!schema || !schema.length) return {}
  return schema.reduce<Record<string, any>>((model, item) => {
    const field = item.field
    const defaultValue = item.defaultValue
    model[field] = defaultValue || initDefaultValue(item)
    return model
  }, {})
}
