<template>
  <el-radio-group
    v-bind="$props"
    @update:model-value="handleUpdateModelValue"
    @change="handleChange"
  >
    <template v-if="type === 'default'">
      <el-radio
        v-for="(option, index) in options"
        :key="`${option.name}-${index}`"
        v-bind="option"
      />
    </template>
    <template v-else-if="type === 'button'">
      <el-radio-button
        v-for="(option, index) in options"
        :key="`${option.name}-${index}`"
        v-bind="option"
      />
    </template>
  </el-radio-group>
</template>

<script lang="ts" setup>
  import { ElRadio, ElRadioButton, ElRadioGroup } from 'element-plus'
  import type { RadioGroupProps, RadioGroupEmits } from 'element-plus'
  import type { RadioOptions } from '../../types/components'

  type Props = Partial<RadioGroupProps> & RadioOptions
  const $props = withDefaults(defineProps<Props>(), {
    type: 'default',
    options: () => []
  })

  type RadioEmits = {
    'update:modelValue': [val: string | number | boolean]
    change: [val: string | number | boolean]
  }
  const $emits = defineEmits<RadioEmits>()

  const handleUpdateModelValue: RadioGroupEmits['update:modelValue'] = val => {
    $emits('update:modelValue', val)
    return true
  }

  const handleChange: RadioGroupEmits['change'] = val => {
    $emits('change', val)
    return true
  }
</script>

<style lang="scss" scoped></style>
