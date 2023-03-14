<template>
	<div>
		<input
			type="text"
			placeholder="너의 할일을 적어라"
			v-model.trim="todoTitle"
			@keyup.enter="executeCreate"
		/>
		<input type="button" value="입력" @click="executeCreate" />
	</div>
</template>

<script>
import { mapActions } from 'pinia';
import { useTodoOptionApiStore } from '@/stores/todoOptionApi';
export default {
	data() {
		return {
			todoTitle: '',
		};
	},
	methods: {
		...mapActions(useTodoOptionApiStore, ['addTodo']),
		executeCreate() {
			if (!this.todoTitle) {
				return alert('입력해');
			}
			this.addTodo(this.todoTitle);
			this.todoTitle = '';
		},
	},
};
</script>

<style lang="scss" scoped></style>
