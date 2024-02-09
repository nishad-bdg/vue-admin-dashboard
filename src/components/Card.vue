<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  width: 100%;
  border-radius: 16px;
  padding: 24px;
  background: var(--theme-text-white);
}
</style>
