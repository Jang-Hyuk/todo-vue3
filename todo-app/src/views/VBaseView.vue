<template>
	<div>
		VBaseView
		<TodoHeader></TodoHeader>
		<TodoList></TodoList>
	</div>
</template>

<script>
import TodoHeader from '@/components/optionApi/TodoHeader.vue';
import TodoList from '@/components/optionApi/TodoList.vue';

export default {
	data() {
		return {
			count: 0,
			info: {
				num: 10,
			},
			someObject: {
				a: {},
			},
			time: '',
		};
	},
	computed: {
		multiply() {
			return this.count ** 2;
		},
	},
	watch: {
		count() {
			this.time = new Date().toLocaleString();
		},
	},
	mounted() {
		const object = {
			a: {},
		};
		this.someObject = object;
		console.log(this.someObject === object);
		console.log(this.someObject.a === object.a);
		const { a } = this.someObject;
		console.log(a === object.a);
		console.log(a === this.someObject.a);
		this.$refs.input.focus();
	},
	methods: {
		increase() {
			this.count += 1;
		},
	},
	components: { TodoHeader, TodoList },
};
</script>

<style lang="scss" scoped></style>
