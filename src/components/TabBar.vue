<template>
  <div class="tab">
    <div class="tab-header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activateTab(index)"
        :class="{ active: activeTab === index }"
        class="tab-header-item"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="tab-content"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const emit = defineEmits(['currentTab'])

const props = defineProps({
  tabs: {
    type: Array,
    default: () => [],
    required: true
  }
})

const activeTab = ref(0)

const activateTab = (index) => {
  activeTab.value = index
  emit('currentTab', index)
}

const route = useRoute()

watch(
  () => route.name,
  (newValue) => {
    activateTab(props.tabs.findIndex((x) => x.routeName === newValue))
  }
)
</script>

<style scoped>
.tab-header {
  display: flex;
  position: relative;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: var(--theme-text-gray-500);
}

.tab-header-item {
  padding: 10px 20px;
  cursor: pointer;
}

.tab-header-item.active {
  color: var(--theme-text-green);
  border-bottom: 2px solid var(--theme-text-green);
}

.tab-content {
  margin-top: -1px;
  background: #e4e6ea;
  height: 1px;
}
</style>
