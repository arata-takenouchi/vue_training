<template>
  <Teleport to="body">
    <div v-if="props.isOpen" class="modal">
      <button @click="emit('close')">close</button>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close'])
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>