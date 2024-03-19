import { describe, expect, afterEach, test } from 'vitest'
import { render, fireEvent, cleanup, screen } from '@testing-library/vue'

import TaskForm from './TaskForm.vue'

afterEach(cleanup)

describe('TaskForm', () => {
	test('renders correctly', async () => {
		render(TaskForm)

		const input = screen.getByPlaceholderText('Add new task') as HTMLInputElement
		expect(input).toBeDefined()

		const button = screen.getByText('Add task')
		expect(button).toBeDefined()

		await fireEvent.update(input, 'New Task')
		await fireEvent.click(button)

		expect(input.value).toBe('')
	})
})
