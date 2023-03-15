<template>
	<div>
		TodoList
		<input type="button" value="스토리지 동기화" @click="updateStorage" />
		<TodoItem
			v-for="(item, index) in todoList"
			:key="index"
			:todo-item="item"
			:item-id="item.id"
		></TodoItem>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useTodoOptionApiStore } from '@/stores/todoOptionApi';
import TodoItem from '@/components/optionApi/TodoItem.vue';

export default {
	components: { TodoItem },
	computed: {
		...mapState(useTodoOptionApiStore, ['todoList']),
	},
	methods: {
		...mapActions(useTodoOptionApiStore, ['updateStorage']),
		hi() {},
	},
};
</script>

<style lang="scss" scoped></style>
