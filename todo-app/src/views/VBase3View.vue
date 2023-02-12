<template>
	<div>
		VBase3View
		<input type="text" ref="input" />
		{{ count }}
		multiply: {{ multiply }} watch: {{ time }}
		<button @click="increase">증가</button>
	</div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
export default {
	setup() {
		const count = ref(0);
		const time = ref('');
		const input = ref(null);

		function increase() {
			count.value += 1;
		}

		const multiply = computed(() => count.value ** 2);

		onMounted(() => {
			input.value.focus();
		});

		watch(count, () => {
			time.value = new Date().toLocaleString();
		});

		return {
			count,
			multiply,
			time,
			increase,
			input,
		};
	},
};
</script>

<style lang="scss" scoped></style>
