<template>
	<div>
		VBase3TsSetupView
		<section class="border border-lime-600 shadow-xl m-2 p-2">
			마우스위치: {{ x }}, {{ y }}
		</section>
		<section class="border border-lime-600 shadow-xl m-2 p-2">
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				@click="doFetch"
			>
				Fetch
			</button>

			<div>
				<div>Data : {{ userList }}</div>
				<div class="border border-red-300">fetchError: {{ fetchError }}</div>
			</div>
		</section>
		<section class="border border-lime-600 shadow-xl m-2 p-2">
			<input
				class="ml-2 p-1 border border-purple-500"
				type="text"
				v-model="pageNo"
				placeholder="입력해라 pageNo"
			/>
			<div>
				<div v-if="error" class="border border-red-300">
					앗 에러!: {{ error }}
				</div>
				<div v-else-if="data.page">Data : {{ data }}</div>
				<div v-else>로딩...</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import { useMouse } from '@/composables/mousePosition';
import { useFetch } from '@/composables/useFetch';

const { x, y } = toRefs(useMouse());

const pageNo = ref(1);
const realUrl = computed(() => `https://reqres.in/api/users?page=${pageNo.value}`);
const { data, error } = useFetch(realUrl);

const userList = ref([]);
const fetchError = ref();

async function executeFetch() {
	const hasError = Math.random() * 3 > 1;
	const page = Math.round(Math.random() * 5);
	const url = hasError ? 'https://wtf.com' : 'https://reqres.in/api/users';
	const results = await fetch(`${url}?page=` + page);
	return results.json();
}

function doFetch() {
	executeFetch()
		.then(list => (userList.value = list))
		.catch(err => {
			userList.value = [];
			fetchError.value = err.message;
		});
}
</script>

<style scoped></style>
