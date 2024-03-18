<template>
	<form @submit.prevent="emitAddTask">
		<input
			type="text"
			v-model="newTask"
			placeholder="Add new task"
		/>
		<button type="submit">Add task</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newTask = ref('')
const emit = defineEmits(['addTask'])

const emitAddTask = () => {
	if (newTask.value.trim()) {
		emit('addTask', newTask.value)
		newTask.value = ''
	}
}
</script>
