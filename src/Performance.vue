<template>
  <!-- Bad: これだとactiveIdが変わるたびに、全てのListItemが再描画される -->
  <ListItem
    v-for="item in list"
    :key="item.id"
    :id="item.id"
    :active-id="activeId"
  />
  <!-- Good: これならactiveIdが変わっても再描画はされず、activeIdと同じidのListItemのみが再描画される -->
  <ListItem
    v-for="item in list"
    :key="item.id"
    :id="item.id"
    :active="item.id === activeId"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const list = ref<{ id: number }[]>([])
const activeId = ref(null)

onMounted(() => {
  list.value = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
  }))
})
</script>
