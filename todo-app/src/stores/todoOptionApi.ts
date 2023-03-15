import { defineStore } from 'pinia';

interface Todo {
	title: string;
	isDone: boolean;
	id: number;
}

export const useTodoOptionApiStore = () => {
	const innerStore = defineStore('todoOptionApi', {
		state: () => ({
			localStorageName: 'todoOptionApi',
			isInit: false,
			todoList: [] as Todo[],
			todo: {} as Todo,
		}),
		getters: {},
		actions: {
			updateStorage() {
				localStorage.setItem(
					this.localStorageName,
					JSON.stringify(this.todoList),
				);
			},
			addTodo(todo: Todo['title']) {
				this.todoList.push({
					title: todo,
					isDone: false,
					id: new Date().getTime(),
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
				const todoValue = localStorage.getItem(this.localStorageName);
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
