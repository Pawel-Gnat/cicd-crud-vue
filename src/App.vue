<script setup lang="ts">
const appVersion = __APP_VERSION__;
const viteCrud = import.meta.env.VITE_APP;

import EnvBanner from './components/EnvBanner.vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

import { useTasks } from './store/useTasks';

const { tasks, addTask, removeTask } = useTasks();
</script>

<template>
  <h1>{{ appVersion }} - {{ viteCrud }}</h1>
  <TaskForm @addTask="addTask" />
  <TaskList :tasks="tasks" @removeTask="removeTask" />
  <EnvBanner />
</template>

<style scoped></style>
