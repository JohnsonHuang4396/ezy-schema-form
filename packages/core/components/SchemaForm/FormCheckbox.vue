<template>
  <el-checkbox-group
    v-bind="$props"
    @update:model-value="handleUpdateModelValue"
    @change="handleChange"
  >
    <template v-if="type === 'default'">
      <el-checkbox
        v-for="(option, index) in options"
        :key="`${option.name}-${index}`"
        v-bind="option"
      />
    </template>
    <template v-else-if="type === 'button'">
      <el-checkbox-button
        v-for="(option, index) in options"
        :key="`${option.name}-${index}`"
        v-bind="option"
      />
    </template>
  </el-checkbox-group>
</template>

<script lang="ts" setup>
  import type { CheckboxGroupProps, CheckboxGroupEmits, CheckboxValueType, CheckboxGroupValueType } from 'element-plus'
  import type { CheckboxOptions } from '../../types/components'

  type Props = Partial<CheckboxGroupProps> & CheckboxOptions
  const $props = withDefaults(defineProps<Props>(), {
    type: 'default',
    options: () => []
  })

  type CheckboxEmits = {
    'update:modelValue': [val: CheckboxGroupValueType]
    change: [val: CheckboxValueType[]]
  }
  const $emits = defineEmits<CheckboxEmits>()

  const handleUpdateModelValue: CheckboxGroupEmits['update:modelValue'] = val => {
    $emits('update:modelValue', val)
    return true
  }

  const handleChange: CheckboxGroupEmits['change'] = val => {
    $emits('change', val)
    return true
  }
</script>

<style lang="scss" scoped></style>
