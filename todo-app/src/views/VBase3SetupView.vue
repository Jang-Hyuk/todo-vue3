<template>
	<div>
		<TodoHeader></TodoHeader>
		<div class="justify-center flex bg-yellow-300 items-center h-screen">
			<div class="text-4xl">Hello 👋🏼</div>
		</div>
		<button @click="updateStorage">동기화</button>
		<TodoList></TodoList>
	</div>
</template>

<script setup>
import TodoHeader from '@/components/compositionApi/TodoHeader.vue';
import TodoList from '@/components/compositionApi/TodoList.vue';
import { useTodoOptionSetupStore } from '@/stores/todoComposition';
import { reactive, computed, watch } from 'vue';

const { todoList, updateStorage } = useTodoOptionSetupStore();

const state = reactive({
	count: 0,
	info: {
		num: 10,
	},
	time: '',
});

function increase() {
	// state.count += 1;
	state.info.num += 1;
}

const multiply = computed(() => state.count ** 2);

watch(
	state,
	// () => state.count,
	() => {
		state.time = new Date().toLocaleString();
	},
);
</script>

<style lang="scss" scoped></style>
