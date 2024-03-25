<template>
  <div>
    <div v-if="loading">Ładowanie...</div>
    <div v-else></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const characters = ref([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;

  const startTime = performance.now();

  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    characters.value = data.results;
  } catch (error) {
    console.error('Błąd podczas ładowania postaci:', error);
  } finally {
    loading.value = false;

    const endTime = performance.now();
    const loadTimeMS = endTime - startTime;

    fetch(`${import.meta.env.VITE_AWS_MONITORING_API}/prod/monitoring`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ loadTimeMS }),
    });
  }
});
</script>
