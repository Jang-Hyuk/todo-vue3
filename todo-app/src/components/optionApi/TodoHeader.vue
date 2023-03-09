<template>
	<div>
		<input type="text" placeholder="너의 할일을 적어라" />
	</div>
</template>

<script>
import _ from 'lodash';
// import { useTodoOptionApiStore } from '@/stores/todoOptionApi';
// const todoOptionApiStore = useTodoOptionApiStore();
export default {
	data() {
		return {
			cText: '',
			tText: '',
		};
	},
};
</script>

<style lang="scss" scoped></style>
