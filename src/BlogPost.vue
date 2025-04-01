<template>
  <h4>{{ title }}</h4>
  <button @click="$emit('large-text')">large-text</button>
</template>

<script lang="ts" setup>
defineProps(['title'])
defineEmits(['large-text'])
</script>
