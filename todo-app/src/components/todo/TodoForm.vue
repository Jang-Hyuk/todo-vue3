<template>
	<form @submit.prevent="">
		<div>
			제목
			<input
				type="text"
				v-model="task.title"
				placeholder="Todo 제목을 입력해주세요."
			/>
		</div>
		<div>
			내용
			<textarea
				v-model="task.contents"
				placeholder="세부 내용을 입력해주세요."
			></textarea>
		</div>
		<input type="submit" value="투두 등록" @click="createTodo" />
		{{ list }}
	</form>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';

const { createTodo, list, task } = useTodoStore();
</script>

<style scoped></style>
