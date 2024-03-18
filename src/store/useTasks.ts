import { ref, watchEffect } from 'vue'

const tasks = ref<string[]>(JSON.parse(localStorage.getItem('vue-cicd-tasks') || '[]'))

function addTask(task: string) {
	tasks.value.push(task)
	updateLocalStorage()
}

function removeTask(index: number) {
	tasks.value.splice(index, 1)
}

function updateLocalStorage() {
	localStorage.setItem('vue-cicd-tasks', JSON.stringify(tasks.value))
}

watchEffect(() => {
	updateLocalStorage()
})

export function useTasks() {
	return { tasks, addTask, removeTask }
}
