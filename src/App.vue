<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import Tab from '@/components/TabBar.vue'
import router from './router'
const tabs = [
  {
    id: 1,
    title: 'Manage Subscription',
    routeName: 'home'
  },
  {
    id: 2,
    title: 'Compare Plans',
    routeName: 'comparePlans'
  }
]
const onCurrentTab = (index) => {
  const routeName = tabs[index].routeName
  router.push({ name: routeName })
}
</script>

<template>
  <NavBar />
  <SideBar />
  <main class="main">
    <Tab :tabs="tabs" @current-tab="onCurrentTab" />
    <RouterView />
  </main>
</template>
