<template>
	<div>마우스: {{ x }}, {{ y }}</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const x = ref(0);
const y = ref(0);

function update(event: MouseEvent) {
	x.value = event.pageX;
	y.value = event.pageY;
}

onMounted(() => window.addEventListener('mousemove', update));
onUnmounted(() => window.addEventListener('mousemove', update));
</script>

<style scoped></style>
