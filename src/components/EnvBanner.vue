<script setup lang="ts">
const appVersion = __APP_VERSION__;
const projectEnvironment = import.meta.env.VITE_APP;

const visibleEnvs = ['PREVIEW', 'DEVELOPMENT', 'STAGING'];

const isVisible = visibleEnvs.includes(projectEnvironment);
</script>

<template>
  <div v-if="isVisible" class="env-banner">{{ appVersion }} - {{ projectEnvironment }}</div>
</template>

<style scoped>
.env-banner {
  font-weight: bold;
  text-align: center;
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 16px 8px;
  background-color: #f0f0f0;
  color: #1a1919;
}
</style>
