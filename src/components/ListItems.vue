<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
    required: true
  }
})
</script>

<style scoped>
ul li {
  list-style-image: url('@/assets/icons/tick-sign.webp');
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
}
</style>
