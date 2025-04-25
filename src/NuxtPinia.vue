<script setup lang="ts">
const store = useStore()
await callOnce('user', () => store.fetchUser())
</script>

