import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', () => {
	const task = reactive({
		title: '',
		contents: '',
	});

	const list = ref([] as any[]);

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
		});

		task.title = '';
		task.contents = '';
	}

	return { createTodo, task: task, list };
});
