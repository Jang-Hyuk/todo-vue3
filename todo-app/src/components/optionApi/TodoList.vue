<template>
	<div>
		TodoList
		<TodoItem
			v-for="(item, index) in todoList"
			:key="index"
			:todo-item="item"
			:item-id="item.id"
		></TodoItem>
	</div>
</template>

<script>
import TodoItem from '@/components/optionApi/TodoItem.vue';
import { useTodoOptionApiStore } from '@/stores/todoOptionApi';
import { mapState } from 'pinia';

export default {
	components: { TodoItem },
	computed: {
		...mapState(useTodoOptionApiStore, ['todoList']),
	},
	methods: {
		name() {},
	},
};
</script>

<style lang="scss" scoped></style>
