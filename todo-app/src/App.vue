<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header>
		<RouterLink to="/">VBase</RouterLink>
		<RouterLink to="/optionSetup">VBase3</RouterLink>
		<RouterLink to="/composition">VBase3Setup</RouterLink>
		<!-- <RouterLink to="/optionTs">(TS)VBase</RouterLink> -->
		<RouterLink to="/optionSetupTs">(TS)VBase3</RouterLink>
		<RouterLink to="/compositionTs">(TS)VBase3Setup</RouterLink>
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
