<template>
  <div>
    <h1>StoreTest</h1>
  </div>
</template>

<script setup lang="ts">
import { CounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = CounterStore()
// NG storeの中身はreactiveオブジェクトなので、これをやるとreactiveが失われてただのプロパティになる
const { name, daubleCount } = store
// こうすればreactiveを保持してプロパティを抽出できる（メソッド使わずプロパティだけ欲しい場合は有用）
const { name, daubleCount } = storeToRefs(store)
</script>