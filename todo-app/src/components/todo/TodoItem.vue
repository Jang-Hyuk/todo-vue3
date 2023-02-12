<template>
	<div class="todoItem">
		<div>
			<input type="checkbox" v-model="props.todo.isDone" />
			<span>{{ props.todo.title }}</span>
		</div>
		<input type="button" value="삭제" @click="deleteTodo(props.todo)" />
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useTodoStore } from '@/stores/todo';

const { deleteTodo } = useTodoStore();

// const checkboxModel = computed({
// 	get() {
// 		return props.todo.isDone;
// 	},
// 	set(value) {},
// });

const props = defineProps({
	todo: {
		type: Object,
		required: true,
		default: () => {},
	},
});

const isDone = ref(props.todo.isDone);
</script>

<style scoped>
.todoItem {
	display: flex;
	justify-content: space-between;
}
</style>
