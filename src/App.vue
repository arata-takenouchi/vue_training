<template>
	<!-- <BlogPost
  	v-for="post in posts"
	  :key="post.id"
  	:title="post.title"
	></BlogPost> -->
  {{ firstName }} {{ lastName }} {{ capitalizeModel }}
  <Test
    v-model="countModel"
    v-model:first-name="firstName"
    v-model:last-name="lastName"
    v-model:capitalize-model.capitalize="capitalizeModel" />
  <div>
    <button @click="update">Increment In Parent</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, provide, readonly, onRenderTracked, onRenderTriggered } from 'vue'
import BlogPost from './BlogPost.vue'
import Test from './Test.vue'

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

provide('countModel', readonly(countModel))

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

function update() {
  countModel.value += 1
}
</script>
