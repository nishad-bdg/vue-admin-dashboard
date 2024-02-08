<template>
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 9.19598L12 2.19598L21 9.19598V20.196C21 20.7264 20.7893 21.2351 20.4142 21.6102C20.0391 21.9853 19.5304 22.196 19 22.196H5C4.46957 22.196 3.96086 21.9853 3.58579 21.6102C3.21071 21.2351 3 20.7264 3 20.196V9.19598Z"
      :stroke="fill"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 22.196V12.196H15V22.196"
      :stroke="fill"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup>
defineProps({
  fill: {
    type: String,
    default: '#929FA6'
  }
})
</script>
