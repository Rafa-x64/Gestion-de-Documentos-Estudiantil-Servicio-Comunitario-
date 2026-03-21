import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import('./modules/login/views/LoginView.vue')
    },
    {
        path: "/register",
        name: "register",
        component: () => import('./modules/register/views/RegisterView.vue')
    },
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import('./modules/dashboard/views/DashboardView.vue')

    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router