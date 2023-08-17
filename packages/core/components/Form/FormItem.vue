<template></template>

<script lang="ts" setup>
  import { Vue3FormItem } from 'types'

  interface Props {
    schema: Vue3FormItem[]
  }
  const $props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>
