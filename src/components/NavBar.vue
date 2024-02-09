<template>
  <header class="header">
    <nav class="navmenu">
      <div class="nav-items">
        <IconQuestion />
      </div>

      <div class="nav-items" @click="showDropdown = !showDropdown">
        <div class="user-info">
          <img src="@/assets/images/avatar.webp" />
          <p><span>Hi,</span> Monir</p>
          <IconArrowDown />
          <div class="nva-items">
            <DropdownMenu v-show="showDropdown" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import DropdownMenu from '@/components/DropdownMenu.vue'
import IconQuestion from './icons/IconQuestion.vue'
import IconArrowDown from './icons/IconArrowDown.vue'
import { ref } from 'vue'

const showDropdown = ref(false)
</script>

<style scoped>
.navmenu {
  background-color: #fff;
  padding: 16px 32px 16px 16px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 40px;
}

.nav-items {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
}

.user-info {
  display: flex;
  flex: row;
  align-items: center;
  column-gap: 10px;
  font-weight: bold;
  font-family: open-sans-bold !important;
  font-size: 19.34px !important;
  line-height: 29.01px;
}

.user-info p span {
  font-family: open-sans !important;
}

.avatar {
  width: 41px;
  height: 41px;
}
</style>
