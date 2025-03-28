<template>
  <div id="counter">
    {{ state.foo }}
    {{ state.nested.bar }}
  </div>
  <button @click="incrementFoo">increment</button>
  <button @click="incrementBar">increment</button>
</template>

<script setup lang="ts">
import { ref, shallowReactive, isReactive } from 'vue'

const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 1
  }
})

console.log(isReactive(state.nested))

state.nested.bar++

async function incrementFoo() {
  state.foo++
}
async function incrementBar() {
  state.nested.bar++
}
</script>
