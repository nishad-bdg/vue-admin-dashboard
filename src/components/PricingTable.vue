<template>
  <div class="pricing-table" :class="{'active': active}">
    <div class="table-header">
      <h2>{{ plan }}</h2>
      <p>{{ amount }}</p>
    </div>

    <div class="table-body">
      <p>{{ title }}</p>
      <ListItems :items="facilities" />
    </div>

    <slot></slot>
  </div>
</template>

<script setup>
import ListItems from './ListItems.vue'
defineProps({
  active: {
    type: Boolean,
    default: false
  },

  plan: {
    type: String
  },
  title: {
    type: String
  },

  amount: {
    type: String
  },
  facilities: {
    type: Array,
    default: () => []
  }
})
</script>
<style scoped>
.pricing-table {
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  background: var(--theme-background-price-table);
  width: 328.93px;
  height: 602.43px;
  border-radius: 28.6px;
  align-items: center;
  padding-bottom: 20px;
  cursor: pointer;
  -webkit-box-shadow: 10px 10px 33px 4px rgba(107, 114, 128, 0.56);
  -moz-box-shadow: 10px 10px 33px 4px rgba(107, 114, 128, 0.56);
  box-shadow: 10px 10px 33px 4px rgba(107, 114, 128, 0.56);
}

.pricing-table:hover {
  border: 2px solid var(--theme-text-green);
}

.active {
  width: 370px;
  height: 692px;
  border: 2px solid var(--theme-text-green);
}

.active .table-header {
  background: var(--theme-text-gray-600);
  color: var(--theme-background-price-table);
  border-radius: 26.6px 26.6px 0px 0px;
}

.table-header {
  background: var(--theme-background-table);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 28.6px 28.6px 0px 0px;
  box-sizing: border-box;
}

.active .table-header h2 {
  font-size: 44.18px;
  font-weight: 700;
}

.table-header h2 {
  font-size: 32.04px;
  font-weight: 700;
}

.table-header p {
  font-size: 26.05px;
  font-weight: 700;
}

.table-body {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.table-body p {
  padding: 10px 20px;
  text-align: center;
  font-weight: var(--font-weight-600);
  font-size: 1rem;
}
</style>
