<template>
  <div id="counter">
    {{ count }}
  </div>
  <button @click="increment">increment</button>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const count = ref(0)

async function increment() {
  count.value++
  console.log(document.getElementById('counter')!.textContent)
  await nextTick()
  console.log(document.getElementById('counter')!.textContent)
}
</script>
