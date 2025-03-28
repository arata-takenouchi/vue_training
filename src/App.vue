<template>
  <div id="counter">
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, shallowReactive, isReactive } from 'vue'

const raw = {}
const proxy = reactive(raw)

console.log(proxy === raw)
console.log(reactive(raw) === proxy)
console.log(reactive(proxy) === proxy)

const proxy2 = reactive({})
proxy2.nested = raw
console.log(proxy.nested === raw)
</script>
