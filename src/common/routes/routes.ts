import { createRouter, createWebHistory, type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router'
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
			redirect:'/landing',
			children: appRoutes
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
		  // If the route has a hash, scroll to the element with that id
		  return {
			el: to.hash,
			behavior: 'smooth'
		  };
		} else if (savedPosition) {
		  return savedPosition; // Return to previous scroll position
		} else {
		  return { top: 0 }; // Default scroll to top
		}
	  }	
})
// navigation guards

export default router;
