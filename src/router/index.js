import {createRouter, createWebHistory} from 'vue-router'
import authMiddleware from '@/middleware/auth.js';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            redirect: {name: "login"}
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/auth/Register.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/auth/Login.vue'),
        },
        {
            path: '/check-performance',
            name: 'WebsiteForm',
            component: () => import('../views/WebsiteForm.vue'),
            beforeEnter: (to, from, next) => authMiddleware({next})
        },
    ],
})

export default router
