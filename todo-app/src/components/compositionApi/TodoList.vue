<template>
	<div>
		<TodoItem
			v-for="(item, index) in todoList"
			:key="index"
			:todo-id="item.id"
		></TodoItem>
	</div>
</template>

<script setup>
import { useTodoOptionSetupStore } from '@/stores/todoComposition';
import TodoItem from '@/components/compositionApi/TodoItem.vue';
const { todoList } = useTodoOptionSetupStore();
</script>

<style lang="scss" scoped></style>
