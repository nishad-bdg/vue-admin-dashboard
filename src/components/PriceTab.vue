<template>
  <div class="tabs-container" :style="{ gap: `${gap}px` }">
    <button
      v-for="(item, index) in items"
      :key="index"
      :class="{ active: activeIndex === index }"
      @click="tabClick(index)"
    >
      <span>{{ item.label }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    default: () => [],
    required: true
  },
  gap: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['tabClick'])

const activeIndex = ref(0)

const tabClick = (index) => {
  activeIndex.value = index
  emit('tabClick', index)
}
</script>

<style scoped>
.tabs-container {
  display: flex;
  justify-content: space-between;
}

.tabs-container button {
  background-color: #eee;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.tabs-container button:first-child {
  border-radius: 8px 0 0 8px;
}
.tabs-container button:last-child {
  border-radius: 0 8px 8px 0;
}

.tabs-container button.active {
  background-color: var(--theme-text-green);
  color: #fff;
}

.tabs-container span {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
}
</style>
