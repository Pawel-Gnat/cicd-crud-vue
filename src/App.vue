<script setup lang="ts">
const appVersion = APP_VERSION
const viteCrud = import.meta.env.VITE_APP

import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'

import { useTasks } from './store/useTasks'

const { tasks, addTask, removeTask } = useTasks()
</script>

<template>
	<h1>{{ appVersion }} - {{ viteCrud }}</h1>
	<TaskForm @addTask="addTask" />
	<TaskList
		:tasks="tasks"
		@removeTask="removeTask"
	/>
</template>

<style scoped></style>
./store/useTasks
