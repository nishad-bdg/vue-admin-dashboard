<template>
  <section class="sidebar">
    <div class="sidebar-container">
      <img src="@/assets/icons/logo.webp" class="logo" />
      <div
        :class="`sidebar-items ${activeMenu === 'overview' && 'active'}`"
        @click="activeMenu = 'overview'"
      >
        <IconHome :fill="activeMenu === 'overview' ? activeFill : defaultFill" />
        <i class="fa fa-home" aria-hidden="true"></i>
        <span class="icon-logout"></span>
        <span>Overview</span>
      </div>
      <div
        :class="`sidebar-items ${activeMenu === 'plans' && 'active'}`"
        @click="activeMenu = 'plans'"
      >
        <IconCurrency :fill="activeMenu === 'plans' ? activeFill : defaultFill" />
        <span>Plans & Billings</span>
      </div>
    </div>

    <div class="sidebar-items"><IconLogout /> <span>Logout</span></div>
  </section>
</template>

<script setup>
import IconHome from '@/components/Icons/IconHome.vue'
import IconCurrency from '@/components/Icons/IconCurrency.vue'
import IconLogout from '@/components/Icons/IconLogout.vue'
import { ref } from 'vue'

const activeMenu = ref('plans')
const defaultFill = ref('#929FA6')
const activeFill = ref('#12A288')
</script>

<style scoped>
img {
  width: 160px;
  height: 40px;
}

.sidebar-items {
  display: flex;
  align-items: center;
  color: var(--theme-font-gray);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  padding: 10px;
  margin-top: 15px;
}

.sidebar-items span {
  margin-left: 12px;
}

.sidebar-items:hover {
  background: var(--theme-background-green);
  border-radius: 8px;
  color: var(--theme-font-green);
}

.sidebar-items.active {
  background: var(--theme-background-green);
  border-radius: 8px;
  color: var(--theme-font-green);
}
</style>
