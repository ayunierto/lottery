import { createRouter, createWebHistory } from 'vue-router';

const HomeComponent = () => import ('../web/Home.vue');
const LoginComponent = () => import ('../web/auth/Login.vue');

const routes=[
    { path:'/', name:'home', component:HomeComponent},
    { path:'/login', name:'login', component:LoginComponent},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;