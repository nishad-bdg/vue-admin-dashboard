<template>
  <nav>
    <div class="sub-menu-wrap">
      <div class="sub-menu">
        <a href="#" class="sub-menu-link">
          <IconUser />
          <p>My Profile</p>
        </a>
        <hr />
        <a href="#" class="sub-menu-link">
          <IconDropdownLogout />
          <p>Logout</p>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import IconDropdownLogout from './icons/IconDropdownLogout.vue'
import IconUser from './icons/IconUser.vue'
</script>

<style scoped>
.sub-menu-wrap {
  position: absolute;
  top: 65px;
  right: 50px;
  width: 290px;
  max-height: 0px;
}

.sub-menu {
  background: #fff;
  padding: 10px 0;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid var(--theme-background-border);
}

.sub-menu hr {
  border: 0;
  height: 1px;
  width: 100%;
  background: var(--theme-background-border);
  margin: 15px 0 15px;
}

.sub-menu-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--theme-text-sub-heading);
  margin: 5px 0 0 10px;
  column-gap: 5px;
  font-family: 'Hind', sans-serif;
  font-size: 1rem;
  column-gap: 10px;
}

.sub-menu-link:hover{
    color: var(--theme-text-green);
}
</style>
