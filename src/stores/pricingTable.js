import { defineStore } from 'pinia'
import pricingTableData from '@/jsons/pricingTableData.json'

export const pricingTableStore = defineStore({
  id: 'pricingTable',
  state: () => ({
    data: pricingTableData
  })
})
