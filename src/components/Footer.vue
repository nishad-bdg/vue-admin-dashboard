<template>
  <footer class="footer">
    <p>© {{ new Date().getFullYear() }} Copyright Testtalents</p>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 4rem;
  text-align: center;
}

.footer p {
  font-size: 18px;
  font-weight: 400;
  color: var(--theme-text-sub-heading);
}
</style>
