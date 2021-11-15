<template>
  <a :href="origin + props.to">
    <slot />
  </a>
</template>
<script setup>

let props = defineProps({
  to: {
    type: String,
    require: true
  }
})
let origin = window.location.origin
console.log(props.to)
</script>
