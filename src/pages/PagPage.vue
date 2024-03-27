<script setup>
import { useFlag } from '@featurevisor/vue';

const featureKey = 'pagination';
const context = { country: new URLSearchParams(window.location.search).get('country') };

const isEnabled = useFlag(featureKey, context);
</script>

<template>
  <h1>Pagination Page</h1>

  <div v-if="isEnabled">Feature is enabled</div>
  <div v-else>Feature is disabled</div>
</template>
