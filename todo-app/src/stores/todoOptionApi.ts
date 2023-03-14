import { defineStore } from 'pinia';

interface Todo {
	title: string;
	isDone: boolean;
	id: number;
}

export const useTodoOptionApiStore = () => {
	const innerStore = defineStore('todoOptionApi', {
		state: () => ({
			isInit: false,
			todoList: [] as Todo[],
			todo: {} as Todo,
			id: 0,
		}),
		getters: {},
		actions: {
			addTodo(todo: Todo['title']) {
				this.todoList.push({
					title: todo,
					isDone: false,
					id: this.id++,
				});
			},
			deleteTodo(todoId: Todo['id']) {
				const todoIndex = this.todoList.findIndex(todo => todo.id === todoId);
				if (todoIndex !== -1) {
					this.todoList.splice(todoIndex, 1);
				}
			},
			updateTodo(todoId: Todo['id'], todo: Todo) {
				const todoIndex = this.todoList.findIndex(todo => todo.id === todoId);
				if (todoIndex !== -1) {
					this.todoList[todoIndex] = todo;
				}
			},
			getTodo(todoId: Todo['id']) {
				const todoIndex = this.todoList.findIndex(todo => todo.id === todoId);
				return this.todoList[todoIndex];
			},
			initialize() {
				if (this.isInit) {
					return false;
				}
				this.isInit = true;
				localStorage.setItem('time', new Date().getTime().toString());
				const todoValue = localStorage.getItem('todoOptionApi');
				if (todoValue === null) {
					return false;
				}
				try {
					const todoList = JSON.parse(todoValue) as Todo[];
					this.todoList = todoList;
				} catch (error) {
					console.error(error);
					return false;
				}
			},
		},
	});
	const s = innerStore();

	s.initialize();

	return s;
};

// const todoList = [
// 	{
// 		title: 'one',
// 		isDone: false,
// 	},
// 	{
// 		title: 'one',
// 		isDone: true,
// 	},
// 	{
// 		title: 'three',
// 		isDone: true,
// 	},
// ];

// // localStorage.setItem('todoOptionApi', '[{"title":"one","isDone":false},{"title":"one","isDone":true},{"title":"three","isDone":true}]')
