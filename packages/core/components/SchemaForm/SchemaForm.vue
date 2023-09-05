<template>
  <el-form
    class="vue3-form"
    ref="vue3FormRef"
    :class="className"
    :model="formModel"
    :rules="formRules"
    v-bind="formAttrs"
    @validate="handleFormValidate"
  >
    <template
      v-for="(item, index) in schema"
      :key="`${item.field}-${index}`"
    >
      <SchemaFormItem :schema="item" />
    </template>
  </el-form>
</template>

<script lang="ts" setup>
  import SchemaFormItem from './SchemaFormItem.vue'
  import { computed, provide, ref, watch } from 'vue'
  import { ElForm } from 'element-plus'
  import { createModel } from '../../utils'
  import { useContext } from '../../hooks/useContext'
  import { VUE3_FORM_DEFAULT_PROPS, VUE3_FORM_PROVIDE_KEY } from '../../constant'
  import type { Vue3FormConfig, Vue3FormProps, Vue3FormEmits, Vue3FormItem } from '../../types'
  import type { FormValidateCallback, FormItemProp, FormItemRule } from 'element-plus'
  import type { Arrayable } from 'element-plus/es/utils'

  import './style/index.scss'

  interface Props extends Vue3FormConfig {}
  const $props = withDefaults(defineProps<Props>(), {
    config: () => VUE3_FORM_DEFAULT_PROPS
  })

  const $emits = defineEmits<Vue3FormEmits>()

  const formModel = ref<Record<string, any>>($props.config.formModel ?? createModel($props.config.schema))

  const { get, set } = useContext()
  set(VUE3_FORM_PROVIDE_KEY)
  provide(get(VUE3_FORM_PROVIDE_KEY), formModel)

  const formRules = computed(() => {
    return $props.config.schema.reduce<Record<string, Arrayable<FormItemRule>>>((rule, item) => {
      if (item.rule) rule[item.field] = item.rule
      return rule
    }, {})
  })

  const formAttrs = ref<Record<string, any>>({ ...$props.config.attrs })

  function setAttrs(propAttrs: Pick<Vue3FormProps, 'attrs'>) {
    const { attrs = {} } = propAttrs
    formAttrs.value = { ...VUE3_FORM_DEFAULT_PROPS.attrs, ...attrs }
  }

  const schema = ref<Vue3FormItem[]>($props.config.schema)

  function setSchema(propSchema: Vue3FormItem[]) {
    let schemaList: Vue3FormItem[] = []
    if (propSchema && propSchema.length) schemaList = [...propSchema]
    schema.value = schemaList
  }

  watch(
    () => $props.config.attrs,
    nv => {
      setAttrs({ attrs: nv })
    },
    { deep: true, immediate: true }
  )

  watch(
    () => $props.config.schema,
    () => {
      setSchema($props.config.schema)
    },
    { deep: true, immediate: true }
  )

  const className = computed<string[]>(() => {
    if (!$props.config.classList) return []
    return Array.isArray($props.config.classList)
      ? [...$props.config.classList]
      : [...$props.config.classList.split(',')]
  })

  const vue3FormRef = ref<InstanceType<typeof ElForm>>()

  const FormError = new Error("Form hasn't init yet!")

  async function validate(cb?: FormValidateCallback): Promise<[boolean | undefined, unknown | undefined]> {
    if (!vue3FormRef.value) return [undefined, FormError]
    try {
      let result: boolean
      if (cb) result = await vue3FormRef.value.validate(cb)
      else result = await vue3FormRef.value.validate()
      return [result, undefined]
    } catch (error) {
      return [undefined, error]
    }
  }

  async function validateField(
    props?: Arrayable<FormItemProp>,
    cb?: FormValidateCallback
  ): Promise<[boolean | undefined, unknown | undefined]> {
    if (!vue3FormRef.value) return [undefined, FormError]
    try {
      let result: boolean
      if (cb) result = await vue3FormRef.value.validateField(props, cb)
      else result = await vue3FormRef.value.validateField(props)
      return [result, undefined]
    } catch (error) {
      return [undefined, error]
    }
  }

  function resetFields(props?: Arrayable<FormItemProp>) {
    if (!vue3FormRef.value) return
    vue3FormRef.value.resetFields(props)
  }

  function scrollToField(prop: FormItemProp) {
    if (!vue3FormRef.value) return
    vue3FormRef.value.scrollToField(prop)
  }

  function clearValidate(props?: Arrayable<FormItemProp>) {
    if (!vue3FormRef.value) return
    vue3FormRef.value.clearValidate(props)
  }

  function handleFormValidate(prop: FormItemProp, isValid: boolean, message: string) {
    $emits('onValidate', prop, isValid, message)
  }

  defineExpose({
    validate,
    validateField,
    clearValidate,
    scrollToField,
    resetFields,
    setAttrs,
    setSchema
  })
</script>

<style lang="scss" scoped></style>
