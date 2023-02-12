import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export interface Task {
	title: string;
	contents: string;
	isDone?: boolean;
}

export const useTodoStore = defineStore('todo', () => {
	const task = reactive({
		title: '',
		contents: '',
		isDone: false,
	});

	const dummyTasks = [
		{
			title: 'one',
			contents: '111',
		},
		{
			title: 'two',
			contents: '222',
			isDone: true,
		},
	] as Task[];

	const list = ref(dummyTasks as Task[]);

	function createTodo() {
		if (!task.title) {
			return alert('할일을 입력하세요');
		}
		if (!task.contents) {
			return alert('내용을 입력하세요');
		}
		list.value.push({
			title: task.title,
			contents: task.contents,
			isDone: false,
		});

		task.title = '';
		task.contents = '';
	}

	function deleteTodo(todo: typeof task) {
		console.log('🚀 ~ file: todo.ts:49 ~ todo', todo);

		const targetIndex = list.value.findIndex(task => task === todo);
		if (targetIndex === -1) {
			return false;
		}

		list.value.splice(targetIndex, 1);
	}

	return { task: task, list, createTodo, deleteTodo };
});
