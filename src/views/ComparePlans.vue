<template>
  <Card class="card-container">
    <div class="card-header">
      <h2>Compare Plans</h2>
      <p>We’ll credit your account if you need to downgrade during the billing cycle.</p>
    </div>

    <div class="tabs">
      <PriceTab :items="CURRENCY_OPTIONS" :gap="3" @tab-click="tabClickCurrency" />
      <PriceTab :items="PERIOD_OPTIONS" @tab-click="tabClickPeriod" />
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
      >
        <CustomButton v-if="index === 1" variant="primary" size="xlarge" disabled
          >Current</CustomButton
        >
        <CustomButton v-if="index === 2" variant="primary" size="large">Upgrade</CustomButton>
      </PricingTable>
    </div>
  </Card>
</template>

<script setup>
import { ref, watch } from 'vue'
import Card from '@/components/Card.vue'
import PriceTab from '@/components/PriceTab.vue'
import PricingTable from '@/components/PricingTable.vue'
import { pricingTableStore } from '@/stores/pricingTable'
import { CURRENCY_OPTIONS, PERIOD_OPTIONS } from '@/constants/global'
import CustomButton from '@/components/CustomButton.vue'

const pricingTableStoreData = pricingTableStore()
const pricingDataItems = ref(pricingTableStoreData.dataInBdt)
const activeTable = ref(1)

const activeCurrencyTab = ref(0)
const activePeriodTab = ref(0)

const tabClickCurrency = (index) => {
  activeCurrencyTab.value = index
}

const tabClickPeriod = (index) => {
  activePeriodTab.value = index
}

const onChangeTabs = (currencyIndex, periodIndex) => {
  if (currencyIndex === 0 && periodIndex === 0) {
    pricingDataItems.value = pricingTableStoreData.dataInBdt
  } else if (currencyIndex === 0 && periodIndex === 1) {
    pricingDataItems.value = pricingTableStoreData.dataYearlyBdt
  } else if (currencyIndex === 1 && periodIndex === 0) {
    pricingDataItems.value = pricingTableStoreData.dataUsd
  } else {
    pricingDataItems.value = pricingTableStoreData.dataYearlyUsd
  }
}

watch(
  () => activeCurrencyTab.value,
  (newValue) => {
    onChangeTabs(newValue, activePeriodTab.value)
  }
)

watch(
  () => activePeriodTab.value,
  (newVal) => {
    onChangeTabs(activeCurrencyTab.value, newVal)
  }
)
</script>

<style scoped>
.card-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 2.5rem 0;
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
  margin-top: 2.5rem;
}
.pricing-table {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  column-gap: 20px;
  row-gap: 10px;
}
</style>
