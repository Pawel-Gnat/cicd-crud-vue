<script setup lang="ts">
import EnvBanner from './components/EnvBanner.vue';

import { useStatus } from '@featurevisor/vue';

const status = useStatus();
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/fetch">Go to Fetch</RouterLink>
    <RouterLink to="/pag">Go to Pagination</RouterLink>
  </nav>
  <main>
    <RouterView />
    <EnvBanner />

    <div v-if="status.isReady">SDK is ready</div>
    <div v-else>Loading...</div>
  </main>
</template>

<style scoped></style>
