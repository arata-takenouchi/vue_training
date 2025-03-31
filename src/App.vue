<template>
  <div
    id="counter">
    {{ alwaysSmall }}
  </div>
  <input ref="inputRef" type="text">
  <button @click="addCount">add count</button>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted, computed, ref } from 'vue'

const input = useTemplateRef('inputRef')

onMounted(() => {
  input.value!.focus()
})

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
