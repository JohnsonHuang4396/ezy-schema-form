<template>
  <div>
    <Test
      :age="age"
      @click="handleClick"
    />
  </div>
</template>

<script setup lang="ts">
  const age = ref(12)

  function handleClick() {
    age.value += 1
  }
</script>

<style lang="scss" scoped></style>
