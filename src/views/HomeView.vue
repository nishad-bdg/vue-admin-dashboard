<template>
  <div>
    <CurrentPlan :plans1="plans1" :plans2="plans2" @upgradePlanClicked="onClick" />
    <RechargeHistory />
  </div>
</template>

<script setup>
import router from '@/router'
import CurrentPlan from '@/components/CurrentPlan.vue'
import RechargeHistory from '@/components/RechargeHistory.vue';

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
</script>

<style scoped></style>
