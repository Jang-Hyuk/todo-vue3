<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/todo">Todo</RouterLink>
	</header>
	<RouterView />
</template>

<style scoped>
header {
	display: flex;
	justify-content: space-around;
	padding: 0 1rem;
}
</style>
