<template>
	<main>
		TodoList
		<TodoItem v-for="(task, idx) in list" :key="idx" :todo="task"></TodoItem>
	</main>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue';

import { useTodoStore } from '@/stores/todo';

const { list, deleteTodo } = useTodoStore();
</script>

<style scoped></style>
