<script setup lang="ts">
  const age = ref(12)

  function handleClick() {
    age.value += 1
  }
</script>

<template>
  <Test
    :age="age"
    @click="handleClick"
  />
</template>

<style lang="scss" scoped></style>
