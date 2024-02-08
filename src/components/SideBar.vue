<template>
  <section class="sidebar">
    <div class="sidebar-container">
      <img src="../assets/icons/logo.webp" class="logo" />
      <div class="sidebar-items">
        <IconHome />
        <i class="fa fa-home" aria-hidden="true"></i>
        <span>Overview</span>
      </div>
      <div class="sidebar-items">
        <IconCurrency />
        <span>Plans & Billings</span>
      </div>
    </div>

    <div class="sidebar-items">
      <IconLogout /> <span>Logout {{ isTrue }}</span>
    </div>
  </section>
</template>

<script setup>
import IconHome from '@/components/Icons/IconHome.vue'
import IconCurrency from '@/components/Icons/IconCurrency.vue'
import IconLogout from '@/components/Icons/IconLogout.vue'
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
  padding: 15px;
}

.sidebar-items span {
  margin-left: 5px;
}

.sidebar-items:hover {
  background: #e1f2ef;
  border-radius: 8px;
  color: var(--theme-font-green);
}
</style>
