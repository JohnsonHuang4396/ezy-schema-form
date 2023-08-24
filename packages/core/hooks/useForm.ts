import Vue3Form from 'components/SchemaForm/SchemaForm.vue'
import { onMounted } from 'vue'
import type { Vue3FormItem } from 'types'
import type { Ref } from 'vue'

export function useForm(instance: Ref<InstanceType<typeof Vue3Form> | null> | undefined) {
  let register: Ref<InstanceType<typeof Vue3Form> | null>

  function onRegister() {
    if (instance?.value) register = instance
  }

  onMounted(() => onRegister())

  function getFormSchema() {
    if (!register.value) return
    return register.value.$props.config?.schema
  }

  function setFormSchema(schema: Vue3FormItem[]) {
    if (!register.value) return
    register.value.setSchema(schema)
  }

  return { getFormSchema, setFormSchema }
}
