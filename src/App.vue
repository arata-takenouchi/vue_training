<template>
	<!-- <BlogPost
  	v-for="post in posts"
	  :key="post.id"
  	:title="post.title"
	></BlogPost> -->
  {{ firstName }} {{ lastName }} {{ capitalizeModel }}
  {{ count }} {{ plusOne }}
  <Test
    v-model="countModel"
    v-model:first-name="firstName"
    v-model:last-name="lastName"
    v-model:capitalize-model.capitalize="capitalizeModel" />
  <KeepAlive>
    <ActiveComponent :is="active" />
    <InactiveComponent :is="!active" />
  </KeepAlive>
  <div>
    <button @click="update">Increment In Parent</button>
  </div>
  <Teleport :is-open="open" @close="open = false" />
  <div>
    {{ store.count }}
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, provide, readonly, onRenderTracked, onRenderTriggered, watchEffect, computed } from 'vue'
import Test from './Test.vue'
import Teleport from './Teleport.vue'
import { store } from './store'

onRenderTracked((e) => {
  debugger
})
onRenderTriggered((e) => {
  debugger
})

const countModel = ref(1)
const firstName = ref('arata')
const lastName = ref('takenouchi')
// const [modelValue, modelModifires] = defineModel()
const capitalizeModel = ref('capitalizeModel')

const count = ref(1)
const active = ref(false)

const open = ref(false)

provide('countModel', readonly(countModel))

const isEven = computed(() => count.value % 2 === 0)

const computedObj = computed((oldValue) => {
  // bad
  // return {
  //   isEven: count.value % 2 === 0
  // }

  // good
  const newValue = {
    isEven: count.value % 2 === 0
  }
  if (oldValue && oldValue.isEven === newValue.isEven) {
    return oldValue
  }
  return newValue
})


const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})

console.log(plusOne.value)

count.value += 1

// watch(source, callback, {
//   onTrack(e) {
//     debugger
//   },
//   onTrigger(e) {
//     debugger
//   }
// })

// watchEffect(callback, {
//   onTrack(e) {
//     debugger
//   },
//   onTrigger(e) {
//     debugger
//   }
// })

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const shallowArray = shallowRef([])

shallowArray.value.push(newObj)
shallowArray.value = [...shallowArray.value, newObj]

shallowArray.value[0].foo = 1
shallowArray.value = [
  {
    ...shallowArray.value[0],
    foo: 1
  },
  ...shallowArray.value.slice(1)
]

function update() {
  countModel.value += 1
}
</script>
