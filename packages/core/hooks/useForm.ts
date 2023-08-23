import Vue3Form from 'components/Form/Form.vue'
import type { Vue3FormItem } from 'types'
import type { Ref } from 'vue'

export function useForm(instance: Ref<InstanceType<typeof Vue3Form> | null>) {
  function getFormSchema() {
    if (!instance.value) return
    return instance.value.$props.config?.schema
  }

  function setFormSchema(schema: Vue3FormItem[]) {
    if (!instance.value) return
    instance.value.setSchema(schema)
  }

  return { getFormSchema, setFormSchema }
}
