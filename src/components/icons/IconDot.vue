<template>
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4.85938" cy="4.17188" r="3" :fill="fill" />
  </svg>
</template>
<script setup>
defineProps({
  fill: {
    type: String,
    default: '#12B76A'
  }
})
</script>
