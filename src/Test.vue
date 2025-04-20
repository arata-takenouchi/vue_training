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
  <div>
    {{ store.count }}
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { store } from './store'


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

const emit = defineEmits({
  click: null,

  // emitのvalidationが可能
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.error('Invalid email or password')
      return false
    }
  }
})

function submit(email, password) {
  emit('submit', { email, password })
}

function update() {
  model.value += 1
}
</script>