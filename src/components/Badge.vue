<template>
  <div class="badge" :class="isApproved ? 'approved' : isRejected ? 'rejected' : 'pending'">
    <IconDot :fill="isApproved ? '#12b76a' : isRejected ? '#dc3545' : '#f6b100'" />
    <p>{{ status }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import IconDot from './icons/IconDot.vue'

const props = defineProps({
  status: {
    type: String,
    required: true
  }
})

const isApproved = computed(() => props.status.toLowerCase() === 'approved')
const isRejected = computed(() => props.status.toLowerCase() === 'rejected')
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  text-align: center;
  border-radius: var(--border-radius-lg);
  column-gap: 6px;
  padding: 4px 8px;
}

.approved {
  background: var(--theme-background-approved);
  color: var(--theme-text-approved);
}

.rejected {
  background: var(--theme-background-rejected);
  color: var(--theme-text-rejected);
}

.pending {
  background: var(--theme-background-pending);
  color: var(--theme-text-pending);
}

.badge p {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 16px;
}
</style>
