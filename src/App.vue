<template>
  <div id="counter">
    {{ alwaysSmall }}
  </div>
  <button @click="addCount">add count</button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(2)

const alwaysSmall = computed((previous) => {
  if (count.value <= 3) {
    return count.value
  }
  return previous
})

const addCount = () => {
  count.value += 1
}
</script>
