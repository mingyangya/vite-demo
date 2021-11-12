<template>
  <div class="vuex-test">
    {{count}}
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core'
import { useStore } from '../store/gvuex'
let store = useStore()
let count = computed(() => store.state.count)

function add () {
  store.commit('add')
}
</script>

<style scoped lang="scss">

</style>
