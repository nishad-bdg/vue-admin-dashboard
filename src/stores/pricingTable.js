import { defineStore } from 'pinia'
import pricingTableData from '@/jsons/pricingTableData.json'
import pricingTableDataBdt from '@/jsons/pricingTableDataBdt.json'
import pricingTableFrequencyUSD from '@/jsons/pricingTableFrequencyUSD.json'
import pricingTableFrequencyBdt from '@/jsons/pricingTableFrequencyBdt.json'

export const pricingTableStore = defineStore({
  id: 'pricingTable',
  state: () => ({
    dataUsd: pricingTableData,
    dataInBdt: pricingTableDataBdt,
    dataYearlyUsd: pricingTableFrequencyUSD,
    dataYearlyBdt: pricingTableFrequencyBdt
  })
})
