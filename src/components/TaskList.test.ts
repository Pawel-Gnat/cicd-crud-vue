import { describe, expect, afterEach, test } from 'vitest'
import { render, cleanup, screen } from '@testing-library/vue'

import TaskList from './TaskList.vue'

afterEach(cleanup)

describe('TaskList', () => {
	test('renders correctly with tasks', async () => {
		const tasks = ['Task 1', 'Task 2', 'Task 3']
		render(TaskList, {
			props: {
				tasks,
			},
		})

		expect(screen.getByText('Your tasks:')).toBeDefined()

		tasks.forEach(task => {
			expect(screen.getByText(task)).toBeDefined()
		})

		const removeButtons = screen.getAllByText('X')
		expect(removeButtons).toHaveLength(3)
	})

	test('does not render when no tasks', () => {
		render(TaskList, {
			props: {
				tasks: [],
			},
		})

		expect(screen.queryByText('Your tasks:')).toBeNull()
	})
})
