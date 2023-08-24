<template>
  <el-form
    class="vue3-form"
    ref="vue3FormRef"
    :class="className"
    :model="formModel"
    :rules="formRules"
    v-bind="attrs"
    @validate="handleFormValidate"
  >
    <FormItem :schema="schema" />
  </el-form>
</template>

<script lang="ts" setup>
  import FormItem from './SchemaFormItem.vue'
  import { computed, ref, watch } from 'vue'
  import { ElForm, FormItemRule } from 'element-plus'
  import { VUE3_FORM_DEFAULT_PROPS } from '../../constant'
  import type { Vue3FormConfig, Vue3FormProps, Vue3FormEmits, Vue3FormItem } from '../../types'
  import type { FormValidateCallback, FormItemProp } from 'element-plus'
  import type { Arrayable } from 'element-plus/es/utils'

  import './style/index.scss'

  interface Props extends Vue3FormConfig {}
  const $props = withDefaults(defineProps<Props>(), {
    config: () => VUE3_FORM_DEFAULT_PROPS
  })

  const $emits = defineEmits<Vue3FormEmits>()

  const formModel = ref<Record<string, any>>({})

  const formRules = computed(() => {
    return $props.config.schema.reduce(
      (rule, item) => {
        rule[item.field] = item.rule ?? {}
        return rule
      },
      {} as unknown as Record<string, Arrayable<FormItemRule>>
    )
  })

  const attrs = ref<Pick<Vue3FormProps, 'props' | 'actions'>>({
    props: { ...$props.config.props },
    actions: { ...$props.config.actions }
  })

  function setAttrs(propAttrs: Pick<Vue3FormProps, 'props' | 'actions'>) {
    const { props, actions } = propAttrs
    const nProps = props ? { ...props } : {}
    const nActions = actions ? { ...actions } : {}
    attrs.value = { props: nProps, actions: nActions }
  }

  const schema = ref<Vue3FormItem[]>($props.config.schema)

  function setSchema(propSchema: Vue3FormItem[]) {
    schema.value = [...propSchema]
  }

  watch(
    () => [$props.config.props, $props.config.actions],
    () => {
      setAttrs({ props: $props.config.props, actions: $props.config.actions })
    },
    { deep: true }
  )

  watch(
    () => $props.config.schema,
    () => {
      setSchema($props.config.schema)
    },
    { deep: true }
  )

  const className = computed<string[]>(() => {
    if (!$props.config.classList) return []
    return Array.isArray($props.config.classList)
      ? [...$props.config.classList]
      : [...$props.config.classList.split(',')]
  })

  const vue3FormRef = ref<InstanceType<typeof ElForm>>()

  async function validate(cb?: FormValidateCallback) {
    if (!vue3FormRef.value) return
    if (!cb) return await vue3FormRef.value.validate()
    vue3FormRef.value.validate(cb)
  }

  async function validateField(props?: Arrayable<FormItemProp>, cb?: FormValidateCallback) {
    if (!vue3FormRef.value) return
    if (!cb) return vue3FormRef.value.validateField(props)
    vue3FormRef.value.validateField(props, cb)
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
