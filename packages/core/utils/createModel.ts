import type { Vue3FormItem } from 'types'

export function createModel(schema: Vue3FormItem[]) {
  if (!schema || !schema.length) return {}
  return schema.reduce(
    (model, item) => {
      const field = item.field
      const defaultValue = item.defaultValue
      model[field] = defaultValue
      return model
    },
    {} as Record<string, any>
  )
}
