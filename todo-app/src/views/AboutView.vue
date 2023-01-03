<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
	count: 20,
});

function increasement() {
	state.count += 1;
}
</script>

<template>
	<div class="about">
		<h1>This is an about page</h1>
		<div>
			<button @click="increasement">숫자 추가</button>
			{{ state.count }}
		</div>
	</div>
</template>

<!-- <script lang="ts">
export default {
	setup() {
		const state = reactive({
			count: 0,
		});

		function increasement() {
			state.count += 1;
		}

		return { state, increasement };
	},
};
</script> -->

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
