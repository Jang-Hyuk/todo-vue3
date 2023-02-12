import { createRouter, createWebHistory } from 'vue-router';
import TodoView from '../views/TodoView.vue';

import VBaseView from '@/views/VBaseView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'optionApi',
			component: VBaseView,
		},
		{
			path: '/optionSetup',
			name: 'optionSetup',
			component: () => import('@/views/VBase3View.vue'),
		},
		{
			path: '/composition',
			name: 'compositionAPI',
			component: () => import('@/views/VBase3SetupView.vue'),
		},
		{
			path: '/optionTs',
			name: 'optionTs',
			component: () => import('@/views/VBaseTsView.vue'),
		},
		{
			path: '/optionSetupTs',
			name: 'optionSetupTs',
			component: () => import('@/views/VBase3TsView.vue'),
		},
		{
			path: '/compositionTs',
			name: 'compositionTs',
			component: () => import('@/views/VBase3TsSetupView.vue'),
		},
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (About.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: () => import('../views/AboutView.vue'),
		// },
		{
			path: '/todo',
			name: 'todo',
			component: () => import('../views/TodoView.vue'),
		},
	],
});

export default router;
