<template>
  <Card class="card-container">
    <div class="card-header">
      <h2>Compare Plans</h2>
      <p>We’ll credit your account if you need to downgrade during the billing cycle.</p>
    </div>

    <div class="tabs">
      <PriceTab :items="itemsCurrency" :gap="3" />
      <PriceTab :items="itemsPeriod" />
    </div>

    <div class="pricing-table">
      <PricingTable
        v-for="(item, index) in pricingDataItems"
        :key="index"
        :plan="item.plan"
        :amount="item.amount"
        :title="item.title"
        :facilities="item.facilities"
        :active="index === activeTable"
        @mouseover="activeTable = index"
        @mouseleave="activeTable = 1"
      />
    </div>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/Card.vue'
import PriceTab from '@/components/PriceTab.vue'
import PricingTable from '@/components/PricingTable.vue'
import { pricingTableStore } from '@/stores/pricingTable'

const itemsCurrency = ref([{ label: 'BDT' }, { label: 'USD' }])
const itemsPeriod = ref([{ label: 'Monthly' }, { label: 'Yearly' }])

const pricingTableStoreData = pricingTableStore()
const pricingDataItems = pricingTableStoreData.data
const activeTable = ref(1)
</script>

<style scoped>
.card-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.card-header {
  text-align: center;
  color: var(--theme-text-gray-600);
}
.card-header h2 {
  font-size: 2rem;
  font-weight: bold;
}

.card-header p {
  font-size: 1rem;
  font-weight: 400;
}

.tabs {
  display: flex;
  gap: 20px;
}
.pricing-table {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
