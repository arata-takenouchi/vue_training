<template>
  <!-- styleを改竄して別サイトに飛ばされる可能性がある -->
  <a
    :href="sanitizedUrl"
    :style="userProvidedStyles"
  >
    click
  </a>

  <!-- このようにすると特定のプロパティしか変更できないようにすることができる -->
  <a
    :href="sanitizedUrl"
    :style="{
      color: userProvidedColor,
      background: userProvidedBackground
    }"
  >
    click
  </a>
</template>

<script setup lang="ts">
// NG
Vue.createApp({
  temolate: `<div>${ userProvidedString }</div>`
}).mount('#app')

// Example(escape)
<h1>{{ userProvidedString }}</h1>
</script>