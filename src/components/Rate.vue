<template>
  <div :style="rateStyle">
    <div class="rate" @mouseout="mouseOut">
      <span v-for="item in 5" :key="item" class="item" @mouseover="mouseOver(item, 1)" @click.stop="onRate(item, 1)">☆</span>
      <span class="hollow" :style="{'width': `${width}em`}">
        <span v-for="item in 5" :key="item" class="item" @mouseover.stop="mouseOver(item, 2)" @click.stop="onRate(item, 2)">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import {defineProps, computed, ref, defineEmits} from 'vue'
const props = defineProps({
  modalValue: Number,
  theme: {
    type: String,
    default: 'black'
  }
})

const emits = defineEmits(['update:modalValue'])

let rate = computed(() => '★★★★★☆☆☆☆☆'.slice(5 - props.modalValue, 10 - props.modalValue))

let width = ref(0)

const themeObj = {
  'black': '#00', 
  'white': '#fff',
  'red': '#f5222d', 
  'orange': '#fa541c', 
  'yellow': '#fadb14', 
  'green': '#73d13d',
  'blue': '#40a9ff'
  }

const rateStyle = computed(() => {
  return {
    color: themeObj[props.theme] || themeObj['black']
  } 
})

function mouseOver(i, index) { 
  width.value = i
  updateRate()
}

function onRate (i, index) {
  width.value = i
  updateRate()
}

function updateRate (i) {
  emits('update:modalValue', i)
}

function mouseOut () {
  width.value = props.modalValue
}
</script>

<style scoped lang="scss">
.rate {
  position: relative;
  display: flex;
  font-size: 16px;
}

.item {
  cursor: pointer;
}

.hollow {
  display: flex;
  position: absolute;
  overflow: hidden;
}
</style>
