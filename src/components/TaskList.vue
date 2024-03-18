<template>
	<div v-if="tasks.length">
		<h3>Your tasks:</h3>
		<ul>
			<li
				v-for="(task, index) in tasks"
				:key="index"
			>
				{{ task }}
				<button @click="removeTask(index)">X</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{ tasks: string[] }>()
const emits = defineEmits(['removeTask'])

const removeTask = (index: number) => {
	emits('removeTask', index)
}
</script>
