import {
  ElAutocomplete,
  ElCascader,
  ElCheckbox,
  ElDatePicker,
  ElInput,
  ElInputNumber,
  ElRadio,
  ElSwitch
} from 'element-plus'
import FormSelect from '../components/SchemaForm/FormSelect.vue'
import type { FormItemComponents } from 'types'
import type { Component } from 'vue'

type Comp = FormItemComponents['comp']

const componentsMap: Map<Comp | string, Component> = new Map()

componentsMap.set('auto-complete', ElAutocomplete)
componentsMap.set('cascader', ElCascader)
componentsMap.set('checkbox', ElCheckbox)
componentsMap.set('date-picker', ElDatePicker)
componentsMap.set('input', ElInput)
componentsMap.set('input-number', ElInputNumber)
componentsMap.set('radio', ElRadio)
componentsMap.set('select', FormSelect)
componentsMap.set('switch', ElSwitch)

export function useComponents() {
  function add(compName: string, component: Component) {
    if (!compName) return
    componentsMap.set(compName, component)
  }

  function del(compName: string) {
    if (!compName) return
    componentsMap.delete(compName)
  }

  function get(compName: string | string[]) {
    if (!compName) return
    if (Array.isArray(compName)) {
      return compName.map(name => componentsMap.get(name))
    }
    return componentsMap.get(compName)
  }

  function registerAllComponent() {
    const list = [...componentsMap.values()]
    return list.reduce(
      (target, component) => {
        const name = component.name
        if (name) target[name] = component
        return target
      },
      {} as Record<string, Component>
    )
  }

  return { add, del, get, registerAllComponent }
}
