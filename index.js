import { saveTask } from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {})

const taskForm = document.getElementById('task-form')

taskForm.addEventListener('submit', (e) => {
	e.preventDefault()

	const title = taskForm['task-title']
	const description = taskForm['task-description']

	// console.log(title.value, description.value)

	saveTask(title.value, description.value)

	taskForm.reset()
})
