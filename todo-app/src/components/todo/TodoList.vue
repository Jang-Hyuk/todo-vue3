<template>
	<main>
		TodoList
		<TodoItem v-for="index in 3" :key="index"></TodoItem>
	</main>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue';
</script>

<style scoped></style>
