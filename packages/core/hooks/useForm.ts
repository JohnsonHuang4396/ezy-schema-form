import Vue3Form from 'components/Form/Form.vue'
import type { Ref } from 'vue'

// TODO: 是否需要调整instance的类型，还是使用参数传递的方式初始化instance
export function useForm(instance: Ref<InstanceType<typeof Vue3Form> | null>) {
  function getFormItems() {
    if (!instance.value) return
    return instance.value.$props.config.items
  }

  return { getFormItems }
}
