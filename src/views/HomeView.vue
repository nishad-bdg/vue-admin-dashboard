<template>
  <div>
    <CurrentPlan :plans1="plans1" :plans2="plans2" @upgradePlanClicked="onClick" />
    <RechargeHistory :tableData="tableData" :columns="columns" :perPageOptions="PER_PAGE_OPTIONS" />
  </div>
</template>

<script setup>
import router from '@/router'
import CurrentPlan from '@/components/CurrentPlan.vue'
import RechargeHistory from '@/components/RechargeHistory.vue'
import { useRechargeHistoryStore } from '@/stores/rechargeHistory'
import { PER_PAGE_OPTIONS } from '@/constants/global'
import { ref } from 'vue'

const plans = [
  '5 Assessment Invitations Per Month',
  'Custom Test Configuration',
  'Change Plan for extra Candidates',
  'Realistic Simulation Tests',
  'Standard Test Library',
  'Validated Content',
  '24/7 Live Support'
]

const plans1 = plans.slice(0, Math.ceil(plans.length / 2))
const plans2 = plans.slice(Math.ceil(plans.length / 2))

const onClick = () => {
  router.push({ name: 'comparePlans' })
}

const rechargeStore = useRechargeHistoryStore()
const tableData = rechargeStore.data

const columns = ref([
  { key: 'date', label: 'Date' },
  { key: 'amount', label: 'Amount' },
  { key: 'plan', label: 'Plan' },
  { key: 'paymentType', label: 'Payment Type' },
  { key: 'transactionId', label: 'Transaction ID' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' }
])
</script>

<style scoped></style>
