<template>
  <Card class="card-container">
    <h2 class="card-title">Current Plan</h2>

    <div class="main-card">
      <div class="amount">
        <div class="amount-title">
          <h2>Basic</h2>
          <p>0 USD /Month</p>
        </div>
        <div class="plans">
          <ListItems :items="plans1" />
          <ListItems :items="plans2" />
        </div>
      </div>
      <div class="background-card2"></div>
      <div class="background-card3">
        <div class="circle">
          <span>5</span>
        </div>
        <div class="heading-xs">Current Invitations Limit</div>
        <div class="md-regular">Expired On : 6th September, 2024</div>
      </div>
    </div>

    <div class="card-footer">
      <CustomButton variant="primary" size="medium" @click="onClick">Upgrade Plan</CustomButton>
    </div>
  </Card>
</template>

<script setup>
import Card from './Card.vue'
import CustomButton from './CustomButton.vue'
import ListItems from './ListItems.vue'

const emit = defineEmits(['upgradePlanClicked'])

defineProps({
  plans1: {
    type: Array,
    default: () => [],
    required: true
  },
  plans2: {
    type: Array,
    default: () => [],
    required: true
  }
})

const onClick = () => {
  emit('upgradePlanClicked')
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}
.card-header {
  font-weight: 600;
  font-size: 24px;
}

.main-card {
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--theme-background-menu);
  border-radius: 16px;
  height: 200px;
}

.amount {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  column-gap: 20px;
}

.amount h2 {
  font-size: 32px;
  font-weight: 600;
}

.amount p {
  font-size: 20px;
  font-weight: 600;
}

.amount-title {
  padding-right: 20px;
}

.plans {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  border-left: 1px solid var(--theme-background-menu);
  padding-left: 10px;
}

.background-card3 {
  background: var(--theme-background-green);
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border: 1px solid var(--theme-background-menu);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  row-gap: 8px;
}

.circle {
  width: 59.98px;
  height: 59.98px;
  border: 2px solid var(--theme-text-green);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--theme-text-green);
}
.circle span {
  font-size: 32px;
  font-weight: 600;
}
</style>
