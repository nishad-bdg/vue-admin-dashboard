<template>
  <Card class="card-container">
    <div class="card-header">
      <h2>Recharge History</h2>
      <button class="outline-btn">
        <IconDownload />
        <span>Download All</span>
      </button>
    </div>
    <DataTable :data="tableData" :columns="columns" :perPageOptions="perPageOptions" />
  </Card>
</template>

<script setup>
import Card from './Card.vue'
import DataTable from './DataTable.vue'
import IconDownload from './icons/IconDownload.vue'

defineProps({
  tableData: {
    type: Array,
    default: () => [],
    required: true
  },
  columns: {
    type: Array,
    default: () => [],
    required: true
  },
  perPageOptions: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.card-container {
  margin-top: 40px;
  padding: 48px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.outline-btn {
  width: 140px;
  height: 42px;
  border: 2px solid var(--theme-background-menu);
  border-radius: 8px;
  background-color: transparent;
  font-size: 14px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  column-gap: 8px;
  color: var(--theme-text-gray-600);
}

.outline-btn span {
  font-weight: 600;
}

.outline-btn:hover {
  background: var(--theme-text-green);
  color: var(--theme-text-white);
}
</style>
