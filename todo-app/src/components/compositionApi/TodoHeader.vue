<template>
	<div>
		<input
			type="text"
			v-model.trim="todoTitle"
			placeholder="입력해라 닝겐"
			@keyup.enter="onAddTodo"
		/>
		<input type="button" value="입력" @click="onAddTodo" />
	</div>
</template>

<script setup>
import { useTodoOptionSetupStore } from '@/stores/todoComposition';
import { ref } from 'vue';

const todoTitle = ref('');

const { addTodo } = useTodoOptionSetupStore();

function onAddTodo() {
	if (!todoTitle.value) {
		return false;
	}
	addTodo(todoTitle.value);
	todoTitle.value = '';
}
</script>

<style lang="scss" scoped></style>
