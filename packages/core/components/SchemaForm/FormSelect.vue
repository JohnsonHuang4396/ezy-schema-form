<template>
  <el-select
    v-bind="$props"
    @update:model-value="handleUpdateModelValue"
    @change="handleChange"
    @visible-change="handleVisibleChange"
    @remove-tag="handleRemoveTag"
    @clear="handleClear"
    @blur="handleBlur"
    @focus="handleFocus"
  >
    <template v-if="type === 'single'">
      <el-option
        v-for="(option, index) in options"
        :key="`${option.value}-${index}`"
        :value="option.value"
        :label="option.label"
      />
    </template>
    <template v-else>
      <el-option-group
        v-for="(group, index) in options"
        :key="`${group.label}-${index}`"
        :label="group.label"
      >
        <el-option
          v-for="(option, index) in group.options"
          :key="`${option.value}-${index}`"
          :value="option.value"
          :label="option.label"
        />
      </el-option-group>
    </template>
  </el-select>
</template>

<script lang="ts" setup>
  import { ElSelect, ElOption, ElOptionGroup } from 'element-plus'
  import type { SelectProps, SelectEmits } from '../../types/ElementExtra'
  import type { SelectOptionType } from 'types/components'

  type Props = Partial<SelectProps> & SelectOptionType
  const $props = withDefaults(defineProps<Props>(), {
    type: 'single',
    options: () => []
  })

  type FormSelectEmits = {
    change: [val: SelectProps['modelValue']]
    visibleChange: [val: boolean]
    removeTag: [val: SelectProps['modelValue']]
    clear: []
    blur: [event: FocusEvent]
    focus: [event: FocusEvent]
    'update:modelValue': [val: SelectProps['modelValue']]
  }
  const $emits = defineEmits<FormSelectEmits>()

  const handleUpdateModelValue: (...arg: any[]) => void = (val: SelectProps['modelValue']) => {
    $emits('update:modelValue', val)
  }

  const handleChange: SelectEmits['change'] = val => {
    $emits('change', val)
  }

  const handleVisibleChange: SelectEmits['visibleChange'] = val => {
    $emits('visibleChange', val)
  }

  const handleRemoveTag: SelectEmits['removeTag'] = val => {
    $emits('removeTag', val)
  }

  const handleClear: SelectEmits['clear'] = () => {
    $emits('clear')
  }

  const handleBlur: SelectEmits['blur'] = val => {
    $emits('blur', val)
  }

  const handleFocus: SelectEmits['focus'] = val => {
    $emits('focus', val)
  }
</script>
