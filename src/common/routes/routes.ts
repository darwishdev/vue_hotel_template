import { createRouter, createWebHistory, } from 'vue-router'
import AppLayout from '@/common/components/AppLayout.vue'

import landingRoutes from '@/app/landing/routes';

const appRoutes = [
	...landingRoutes,
]


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: AppLayout,
			redirect: '/landing',
			children: appRoutes
		},
	],
})

export default router;
