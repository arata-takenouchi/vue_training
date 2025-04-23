import { computed, ref } from "vue"
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const route = useRoute()
  const appProvided = inject('appProvided')

  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})