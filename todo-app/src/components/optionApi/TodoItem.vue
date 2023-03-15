<template>
	<div>
		<input v-model="todo.isDone" type="checkbox" />
		<span :style="{ textDecoration: todo.isDone ? 'line-through' : '' }">
			{{ todo?.title }}
		</span>

		<input type="button" value="삭제" @click="deleteTodo(itemId)" />
	</div>
</template>

<script>
import { mapActions } from 'pinia';
import { useTodoOptionApiStore } from '@/stores/todoOptionApi';

export default {
	props: {
		itemId: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		todo() {
			const target = this.getTodo(this.itemId);
			return target;
		},
	},
	data() {
		return {};
	},
	methods: {
		...mapActions(useTodoOptionApiStore, ['getTodo', 'deleteTodo', 'updateTodo']),
		hi() {},
	},
};
</script>

<style lang="scss" scoped></style>
