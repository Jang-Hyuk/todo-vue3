import { ref } from 'vue';
import { defineStore } from 'pinia';

interface Todo {
	title: string;
	isDone: boolean;
	id: number;
}

export const useTodoOptionSetupStore = defineStore('todoOptionSetup', () => {
	const todo = ref({
		title: '',
		isDone: false,
		id: null,
	});

	const todoList = ref([] as Todo[]);

	function addTodo(title: Todo['title']) {
		todoList.value.push({
			id: new Date().getTime(),
			isDone: false,
			title: title,
		});
	}

	function deleteTodo(todoId: Todo['id']) {
		const todoIndex = todoList.value.findIndex(todo => todo.id === todoId);
		console.log('🚀 ~ file: todoComposition.ts:29 ~ todoIndex:', todoIndex);
		if (todoIndex === -1) {
			return false;
		}
		todoList.value.splice(todoIndex, 1);
	}

	function updateTodo(todoId: Todo['id'], todo: Todo) {
		const todoIndex = todoList.value.findIndex(todo => todo.id === todoId);
		if (todoIndex === -1) {
			return false;
		}
		todoList.value[todoIndex] = todo;
	}

	function getTodo(todoId: Todo['id']) {
		const todoIndex = todoList.value.findIndex(todo => todo.id === todoId);
		if (todoIndex === -1) {
			return false;
		}
		return todoList.value[todoIndex];
	}

	return {
		todo,
		todoList,
		addTodo,
		getTodo,
		deleteTodo,
		updateTodo,
	};
});
