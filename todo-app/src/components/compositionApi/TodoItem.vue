<template>
	<div>
		<input type="checkbox" v-model="todo.isDone" />
		<span :style="{ textDecoration: todo.isDone ? 'line-through' : '' }">
			{{ todo?.title }}
		</span>
		<button @click="deleteTodo(props.todoId)">삭제</button>
	</div>
</template>

<script setup>
import { useTodoOptionSetupStore } from '@/stores/todoComposition';
const { deleteTodo, getTodo } = useTodoOptionSetupStore();

const props = defineProps(['todoId']);

const todo = getTodo(props.todoId);
</script>

<style lang="scss" scoped></style>
