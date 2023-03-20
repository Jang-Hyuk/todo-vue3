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
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
