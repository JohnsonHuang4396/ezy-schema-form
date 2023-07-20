<template>
  <button class="test-btn">test</button>
</template>

<script lang="ts" setup>
  import { useTest } from '../hooks/useTest'

  const { name } = useTest()
  console.log('name :>>', name)
</script>

<style lang="scss" scoped>
  .test-btn {
    background-color: blanchedalmond;
    color: #ffffff;
    outline: none;
  }
</style>
