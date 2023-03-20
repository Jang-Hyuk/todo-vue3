<template>
	<div>
		<TodoHeader></TodoHeader>
		<TodoList
			v-for="(item, index) in todoList"
			:key="index"
			:todo-id="item.id"
		></TodoList>
	</div>
</template>

<script setup>
import TodoHeader from '@/components/compositionApi/TodoHeader.vue';
import TodoList from '@/components/compositionApi/TodoList.vue';
import { useTodoOptionSetupStore } from '@/stores/todoComposition';
import { reactive, computed, watch } from 'vue';

const { todoList } = useTodoOptionSetupStore();

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
