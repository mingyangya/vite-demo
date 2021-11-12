<template>
  <!-- <ToDoList /> -->
  <!-- <Rate v-model="rateValue" theme="orange" /> -->
  <component :is="currentComponent" v-model="rateValue" theme="orange"/>
</template>

<script setup>
import { ref } from 'vue'
import ToDoList from '../components/TodoList.vue'
import Rate from '../components/Rate.vue'
import VuexTest from '../components/VuexTest.vue'

let rateValue = ref(0)

let currentComponent = VuexTest


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
