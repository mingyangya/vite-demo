<template>
  <div :style="rateStyle">
    <div class="rate">
      <span v-for="item in 5" :key="item" class="item" @mouseover="mouseOver(item)">☆</span>
      <span class="hollow" :style="{'width': `${width}em`}">
        <span v-for="item in 5" :key="item" class="item" @mouseover="mouseOver(item)">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import {defineProps, computed, ref} from 'vue'
let props = defineProps({
  value: Number,
  theme: {
    type: String,
    default: 'black'
  }
})

let rate = computed(() => '★★★★★☆☆☆☆☆'.slice(5 - props.value, 10 - props.value))

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

function mouseOver(i) { 
  console.log(i)
  width.value = i 
}
</script>

<style scoped lang="scss">
.rate {
  position: relative;
  display: flex;
  font-size: 16px;
}

.item {

}

.hollow {
  display: flex;
  position: absolute;
  overflow: hidden;
}
</style>
