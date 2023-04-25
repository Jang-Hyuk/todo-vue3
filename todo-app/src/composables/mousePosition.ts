import { onMounted, onUnmounted, reactive } from 'vue';

export function useMouse() {
	const data = reactive({
		x: 0,
		y: 0,
	});

	function update(event: MouseEvent) {
		data.x = event.pageX;
		data.y = event.pageY;
	}

	onMounted(() => window.addEventListener('mousemove', update));
	onUnmounted(() => window.addEventListener('mousemove', update));

	return data;
}
