import { isRef, ref, unref, watchEffect } from 'vue';

export function useFetch(url: string) {
	const data = ref([]);
	const error = ref(null);

	async function doFetch() {
		// 가져오기 전에 상태 재설정..
		data.value = [];
		error.value = null;

		// watchEffect()에 의해 종속성으로 추적되도록
		// URL 값을 동기식으로 resolve합니다.
		const urlValue = unref(url);

		try {
			await delay(Math.random() * 1000);

			const response = await fetch(urlValue);
			data.value = await response.json();
		} catch (err) {
			error.value = err;
		}
	}

	if (isRef(url)) {
		watchEffect(doFetch);
	} else {
		doFetch();
	}

	return {
		data,
		error,
		retry: doFetch,
	};
}

function delay(ms = 300) {
	return new Promise((resolve, reject) => {
		if (ms > 500) {
			setTimeout(resolve, ms);
		} else {
			setTimeout(() => reject(new Error('에러 발생💥')), ms);
		}
	});
}
