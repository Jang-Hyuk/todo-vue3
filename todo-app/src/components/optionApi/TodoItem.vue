<template>
	<div>
		<input v-model="todo.isDone" type="checkbox" />
		{{ todo?.title }}
		<input type="button" value="삭제" @click="$emit('delete', itemId)" />
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
		// todoItem: {
		// 	type: Object,
		// 	default() {
		// 		return {};
		// 	},
		// },
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
		name() {},
	},
};
</script>

<style lang="scss" scoped></style>
