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
import { PER_PAGE_OPTIONS, PLANS, TABLE_COLUMNS } from '@/constants/global'
import { ref } from 'vue'

const plans = PLANS

const plans1 = plans.slice(0, Math.ceil(plans.length / 2))
const plans2 = plans.slice(Math.ceil(plans.length / 2))

const onClick = () => {
  router.push({ name: 'comparePlans' })
}

const rechargeStore = useRechargeHistoryStore()
const tableData = rechargeStore.data

const columns = ref(TABLE_COLUMNS)
</script>

<style scoped></style>
