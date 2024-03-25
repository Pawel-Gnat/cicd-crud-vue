<script setup lang="ts">
import EnvBanner from './components/EnvBanner.vue';
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/fetch">Go to Fetch</RouterLink>
  </nav>
  <main>
    <RouterView />
    <EnvBanner />
  </main>
</template>

<style scoped></style>
