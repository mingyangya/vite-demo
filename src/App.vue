<template>
  <!-- <ToDoList /> -->
  <Rate :value="rateValue" theme="orange" @update-rate="updateRate"/>
</template>

<script setup>
import { ref } from 'vue'
import ToDoList from './components/TodoList.vue'
import Rate from './components/Rate.vue'

let rateValue = ref(0)

function updateRate (value) {
  rateValue.value = value
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
