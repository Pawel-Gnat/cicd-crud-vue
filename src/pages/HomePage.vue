<script setup lang="ts">
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';

import { useTasks } from '../store/useTasks';

const { tasks, addTask, removeTask } = useTasks();
</script>

<template>
  <TaskForm @addTask="addTask" />
  <TaskList :tasks="tasks" @removeTask="removeTask" />
</template>
