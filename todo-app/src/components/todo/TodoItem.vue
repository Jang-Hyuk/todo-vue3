<template>
	<div class="todoItem">
		<div>
			<input type="checkbox" v-model="todo.isDone" />
			<span>{{ todo.title }}</span>
		</div>
		<input type="button" value="삭제" @click="deleteTodo(todo)" />
	</div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';

const props = defineProps({
	todo: {
		type: Object,
		default: () => {},
	},
});

const { list, deleteTodo } = useTodoStore();

const todo = list.find(todo => todo === props.todo);
</script>

<style scoped>
.todoItem {
	display: flex;
	justify-content: space-between;
}
</style>
