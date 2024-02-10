<template>
  <Card class="card-container">
    <div class="card-header">
      <h2>Compare Plans</h2>
      <p>We’ll credit your account if you need to downgrade during the billing cycle.</p>
    </div>

    <div class="tabs">
      <PriceTab :items="itemsCurrency" :gap="5" />
      <PriceTab :items="itemsPeriod" />
    </div>

    <div>Price Table</div>
  </Card>
</template>

<script setup>
import Card from '@/components/Card.vue'
import PriceTab from '@/components/PriceTab.vue'
import { ref } from 'vue'
const itemsCurrency = ref([{ label: 'BDT' }, { label: 'USD' }])
const itemsPeriod = ref([{ label: 'Monthly' }, { label: 'Yearly' }])
</script>

<style scoped>
.card-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
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
</style>
