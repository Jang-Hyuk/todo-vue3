<template>
	<header>
		<TodoHeader />
	</header>
	<main>
		<TodoForm />
		<TodoList />
	</main>
</template>

<script setup lang="ts">
import TodoForm from '@/components/todo/TodoForm.vue';
import TodoHeader from '@/components/todo/TodoHeader.vue';
import TodoList from '@/components/todo/TodoList.vue';
</script>

<style scoped></style>
