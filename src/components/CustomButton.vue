<template>
  <button :class="computedClasses" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'
const emit = defineEmits(['btnClick'])

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const onClick = () => {
  emit('btnClick')
}

const computedClasses = computed(() => [
  'btn',
  `btn-${props.variant}`,
  `btn-${props.size}`,
  { 'btn-disabled': props.disabled }
])
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 10px;
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--theme-text-green);
  color: #fff;
}


.btn-small {
  font-size: 0.8rem;
}

.btn-medium {
  font-size: 14px;
  font-weight: 600;
  width: 116px;
  height: 42px;
}

.btn-large {
  font-size: 1.2rem;
}

.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
