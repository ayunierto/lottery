import { createRouter, createWebHistory } from 'vue-router';

const HomeComponent = () => import ('../components/Home.vue');
const LoginComponent = () => import ('../components/auth/Login.vue');

const routes=[
    { path:'/', name:'home', component: HomeComponent},
    { path:'/login', name:'login', component: LoginComponent},
    { path:'/rifas', name:'rifas', component: LoginComponent},
    { path:'/winners', name:'winners', component: LoginComponent},
    { path:'/about', name:'about', component: LoginComponent},
    { path:'/contact', name:'contact', component: LoginComponent},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;