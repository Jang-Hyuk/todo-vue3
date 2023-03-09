import { defineStore } from 'pinia';

interface Todo {
	title: string;
	isDone: boolean;
}

export const useTodoOptionApiStore = () => {
	const innerStore = defineStore('todoOptionApi', {
		state: () => ({
			isInit: false,
			todoList: [] as Todo[],
			todo: {} as Todo,
		}),
		getters: {},
		actions: {
			addTodo() {},
			removeTodo() {},
			updateTodo() {},
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
