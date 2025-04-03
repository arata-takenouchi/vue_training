<template>
  <div>v-model is {{ model }}</div>
  <div>
    <button @click="update">Increment In Children</button>
  </div>
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <input type="text" v-model="capitalizeModel" />
  </div>
  <div>
    AppProvider: {{ AppProvider }}
  </div>
  <div>
    countModel: {{ countModel }}
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const model = defineModel({required: true})
const firstName = defineModel('firstName', {required: true})
const lastName = defineModel('lastName', {required: true})
const [capitalizeModel, modifiers] = defineModel('capitalizeModel', {
  set(value) {
    if (modifiers.capitalize) {
      return value.toUpperCase()
    }
    return value
  }
})
const AppProvider = inject('AppProvider')
const countModel = inject('countModel')

function update() {
  model.value += 1
}
</script>