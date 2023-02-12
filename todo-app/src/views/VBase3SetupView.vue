<template>
	<div>
		VBase3SetupView
		{{ state.count }}
		{{ state.info.num }}

		multiply: {{ multiply }} watch: {{ state.time }}
		<button @click="increase">증가</button>
	</div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue';

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
