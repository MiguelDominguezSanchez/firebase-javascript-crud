import {
	saveTask,
	getTasks,
	onGetTasks,
	deleteTask,
	getTask,
	updateTask,
} from './firebase.js'

const taskForm = document.getElementById('task-form')
const tasksContainer = document.getElementById('task-container')

let editStatus = false
let id = ''

window.addEventListener('DOMContentLoaded', async () => {
	onGetTasks((querySnapshot) => {
		let html = ''

		querySnapshot.forEach((doc) => {
			const task = doc.data()
			// console.log(doc.id)
			html += `
				<div>
					<h3>${task.title}</h3>
					<p>${task.description}</p>
					<button class='btn-delete' data-id="${doc.id}">Delete</button>
					<button class='btn-edit' data-id="${doc.id}">Edit</button>
				</div>
			`
		})

		tasksContainer.innerHTML = html

		// console.log(tasksContainer)
		const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')

		// console.log(btnsDelete)

		btnsDelete.forEach((btn) => {
			btn.addEventListener('click', ({ target: { dataset } }) => {
				// console.log('deleting')
				// console.log(dataset.id)
				deleteTask(dataset.id)
			})
		})

		const btnEdit = tasksContainer.querySelectorAll('.btn-edit')
		btnEdit.forEach((btn) => {
			// console.log(btn)
			btn.addEventListener('click', async (e) => {
				console.log(e.target.dataset.id)
				const doc = await getTask(e.target.dataset.id)
				// console.log(doc.data())
				const task = doc.data()

				taskForm['task-title'].value = task.title
				taskForm['task-description'].value = task.description

				editStatus = true
				// id = e.target.dataset.id
				id = doc.id

				taskForm['btn-task-save'].innerText = 'update'
			})
		})
	})
})

taskForm.addEventListener('submit', (e) => {
	e.preventDefault()

	const title = taskForm['task-title']
	const description = taskForm['task-description']

	if (!editStatus) {
		// console.log('updating')
		saveTask(title.value, description.value)
	} else {
		updateTask(id, {
			title: title.value,
			description: description.value,
		})

		editStatus = false
	}

	taskForm.reset()
})
