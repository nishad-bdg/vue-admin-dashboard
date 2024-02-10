import { defineStore } from 'pinia'
import rechargeHistoryData from '@/jsons/rechargeHistory.json'

export const useRechargeHistoryStore = defineStore({
  id: 'rechargeHistory',
  state: () => ({
    data: rechargeHistoryData
  })
})
