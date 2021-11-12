<template>
  <div class="vuex-test">
    {{count}} - {{doubleCount}}
    <button @click="add">add</button>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core'
import { useStore } from '../store/gvuex'
let store = useStore()
let count = computed(() => store.state.count)

let doubleCount = store.getters.doubleCount

function add () {
  store.commit('add')
}

function asyncAdd () {
  store.dispatch('asyncAdd')
}
</script>

<style scoped lang="scss">

</style>
